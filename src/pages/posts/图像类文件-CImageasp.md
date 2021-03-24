---
stackbit_url_path: >-
  posts/图像类文件-CImageasp
title: '图像类文件 CImage.asp'
date: '2010-04-04 18:42:11'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>图像类文件，它是文件类（<a href="http://www.myfootprints.cn/blog/post/329.html">http://www.myfootprints.cn/blog/post/329.html</a>）的子类，用来封装服务器端的保存等操作。</p>
<p>代码如下：</p>
<pre class="brush: vb">&lt;% 
'**************************************************** 
'文件名: CImage.asp
'描  述：文件类
'	
'
'**************************************************** 

'# *Using CFormDataGetter.asp*
'# *Using CFile.asp"

Class CImage
    ' 完整的路径名＋文件名＋后缀名
    Private sFullName
    Private sDescription
    Private sMIME
    Private sImageType
    Private sImageVersion
    Private lImageWidth
    Private lImageHeight
    Private bnsContent
    
    Public Sub CFile2Image(ByRef oFile)
        sFullName = oFile.FullName
        sDescription = oFile.Description
        sMIME = oFile.MIME
        Me.BinaryStream = oFile.BinaryStream
    End Sub
    
    Public Property Get ImageType()
        ImageType = sImageType
    End Property
    
    Public Property Get ImageVersion()
        ImageVersion = sImageVersion
    End Property
    
    Public Property Get ImageWidth()
        ImageWidth = lImageWidth
    End Property
    
    Public Property Get ImageHeight()
        ImageHeight = lImageHeight
    End Property
    
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
        '获取图片的类型
        Dim sType, bnsFlag, lWidth, lHeight, sVersion
        bnsFlag = MidB(bnsContent, 1, 3)
        Select Case Hex(Cbns2Lng(bnsFlag))
            Case "4E5089"
                sType = "PNG"
                lWidth = Cbns2Lng(MidB(bnsContent, 4, 2))
                lHeight = Cbns2Lng(MidB(bnsContent, 8, 2))
            Case "464947"
                sType = "GIF"
                sVersion = Cbns2Lng(MidB(bnsContent, 4, 3))
                lWidth = Cbns2Lng(MidB(bnsContent, 4, 2))
                lHeight = CBns2Lng(MidB(bnsContent, 6, 2))
            Case "535746"
                sType = "SWF"
                
            Case "FFD8FF"
                sType = "JPG"
                
            Case Else
                If LeftB(bnsFlag, 2) = ChrB(Asc("B")) &amp; ChrB(Asc("M")) Then
                    sType = "BMP"
                Else
                    sType = Hex(Cbns2Lng(bnsFlag))
                End If
        End Select
        sImageType = sType
        sImageVersion = "0x" &amp; Hex(sVersion)
        lImageWidth = lWidth
        lImageHeight = lHeight
    End Property
    
    Public Function Cbns2Lng(ByVal bns) 
        Dim l, i
        l = 0
        For i = LenB(bns) To 1 Step -1
            l = l * 256 + AscB(MidB(bns, i, 1))
        Next
        Cbns2Lng = l
    End Function
    
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
    
    Private Sub CImage_Initialize()
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
        Dim stm, sError, bns
        
        Save = False
        If Trim(sFullName) = "" Or Right(sFullName, 1) = "\" Then Exit Function
        Set stm = Server.CreateObject("ADODB.Stream")
        stm.Type = 2
        stm.Mode = 3
        stm.Open
        stm.WriteText bnsContent
        stm.Position = 0
        stm.type = 1
        bns = stm.Read
        stm.SetEOS
        stm.Write bns
        stm.SaveToFile sFullName, iWriteMode
        stm.Close
        Set stm = Nothing
        Save = True
    End Function
End Class
%&gt;
</pre>
<p>&nbsp;</p>
      