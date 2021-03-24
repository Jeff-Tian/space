---
stackbit_url_path: >-
  posts/文件类-CFileasp
title: '文件类 CFile.asp'
date: '2010-04-04 18:19:30'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>CFile.asp，封装了在服务器端保存文件等操作。</p>
<pre class="brush: vb">&lt;% 
'**************************************************** 
'文件名: CFile.asp
'描  述：文件类
'	
'
'**************************************************** 

'# *Using CFormDataGetter.asp*

Class CFile
    ' 完整的路径名＋文件名＋后缀名
    Private sFullName
    Private sDescription
    Private sMIME
    Private bnsContent
    Private csClass
    
    Private Sub Class_Initialize()
        csClass = "CFile"
    End Sub
    
    Public Property Get FullName()
        FullName = sFullName
    End Property
    
    Public Property Let FullName(ByRef sNewFullName) 
        sFullName = sNewFullName
    End Property
    
    ' 获取文件的路径，不含文件名
    Public Property Get Path()
        Path = Left(sFullName, InStrRev(sFullName, "\"))
    End Property
    
    ' 去掉路径的文件名＋后缀名
    Public Property Get Name()
        Name = Right(sFullName, Len(sFullName) - InStrRev(sFullName, "\"))
    End Property
    
    ' 去掉路径后的文件名 (不要后缀名)
    Public Property Get ShortName()
        Dim i
        
        i = InStrRev(Me.Name, ".")
        If i &gt; 0 Then
            ShortName = Left(Me.Name, InStrRev(Me.Name, ".") - 1)
        Else
            ShortName = Me.Name
        End If
    End Property
    
    Public Property Let Description(ByRef sNewDesc)
        sDescription = sNewDesc
    End Property
    
    Public Property Get Description()
        Description = sDescription
    End Property
    
    Public Property Let MIME(ByRef sNewMIME)
        sMIME = sNewMIME
    End Property
    
    Public Property Get MIME()
        MIME = sMIME
    End Property
    
    Public Property Get Size()
        Size = LenB(Me.BinaryStream)
    End Property
    
    '
    ' 设置文件的二进制流
    '
    Public Property Let BinaryStream(ByRef bnsNewBinaryStream)
        bnsContent = bnsNewBinaryStream
    End Property
    
    '
    ' 获取文件的文本
    '
    Public Property Get TextStream(ByRef sCharset)
        Dim stm
        
        Set stm = Server.CreateObject("ADODB.Stream")
        stm.Type = 2
        stm.Open
        stm.WriteText bnsContent
        stm.Position = 0
        If Len(sCharset) &gt; 0 Then stm.Charset = sCharset
        TextStream = stm.ReadText
        stm.Close
        Set stm = Nothing
    End Property 
    
    '
    ' 获取文件的二进制流
    '
    Public Property Get BinaryStream()
        BinaryStream = bnsContent
    End Property
    
    ' 后缀名
    Public Property Get Ext()
        Ext = Right(Me.Name, Len(Me.Name) - InStrRev(Me.Name, "."))
    End Property
    
    Private Sub CFile_Initialize()
        sFullName = ""
        sDescription = ""
        sMIME = ""
        bnsContent = ChrB(0)
    End Sub
    
    '
    ' 打开文件
    '
    Public Function Open(ByRef sFullName)
        Dim stm
        
        Me.FullName = sFullName
        Set stm = Server.CreateObject("ADODB.Stream")
        stm.Type = 2
        stm.Mode = 3
        stm.Open
        stm.LoadFromFile sFullName
        stm.Type = 1
        bnsContent = stm.Read
        stm.Close
        Set stm = Nothing
    End Function
    
    Public Function Save(ByRef sFullName, ByVal iWriteMode)
        Dim stm, bns
        Const sSOURCE = "Save(sFullName, iWriteMode)"
        
        'On Error Resume Next
        If Trim(sFullName) = "" Or Right(sFullName, 1) = "\" Then Exit Function
        Set stm = Server.CreateObject("ADODB.Stream")
        stm.Type = 1
        stm.Open
        stm.Write bnsContent
        stm.SaveToFile sFullName, iWriteMode
        stm.Close
        Set stm = Nothing
        If err.number &lt;&gt; 0 Then 
            Save = "时间戳：" &amp; Now() &amp; " [" &amp; csClass &amp; "." &amp; sSOURCE &amp; "] 发生错误(sFullName = '" &amp; sFullName &amp; ", iWriteMode = '" &amp; iWriteMode &amp; ")。错误号：" &amp; Err.number &amp; "；错误描述：" &amp; Err.Description &amp; "；错误源：" &amp; Err.Source &amp; "；"
        Else
            Save = "OK"
        End If
        On Error Goto 0
    End Function
End Class
%&gt;
</pre>
      