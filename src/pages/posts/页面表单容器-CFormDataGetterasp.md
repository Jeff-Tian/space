---
stackbit_url_path: >-
  posts/页面表单容器-CFormDataGetterasp
title: '页面表单容器 CFormDataGetter.asp'
date: '2010-04-04 18:33:10'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>页面表单容器类，用来封装对表单数据的二进制读取等操作，是无组件上传的核心程序。其中有用到一个文件类，文件类的代码见：<a href="http://www.myfootprints.cn/blog/post/329.html">http://www.myfootprints.cn/blog/post/329.html</a></p>
<pre class="brush: vb">&lt;!--#include file="CFile.asp"--&gt;
&lt;% 
'**************************************************** 
'文件名: CFormDataGetter.asp
'描  述：这是一个页面表单容器，可以分析每个表单元素的内容，也可用作无组件上传类。
'	
'
'**************************************************** 
'# *Using CFile.asp*

Class CFormDataGetter
    ' 表单字节大小
    Private lFormSize
    ' 表单数据
    Private bnsFormData
    ' 表单数据中字段间的分隔符
    private bnsDivider
    Private bnsVbCrLf
    Private lChunkBytes
    Private lReadedBytes
    
    ' 字段分隔符
    Public Property Get FieldDivider()
        FieldDivider = bnsDivider
    End Property
    
    Public Property Get FormSize() 
        FormSize = lFormSize
    End Property
    
    Public Property Get FormBinaryData()
        FormBinaryData = bnsFormData
    End Property
    
    Public Property Get Chunk()
        Chunk = lChunkBytes
    End Property
    
    Public Property Let Chunk(ByVal l)
        lChunkBytes = l
    End Property
    
    Public Property Get ReadedBytes()
        ReadedBytes = lReadedBytes
    End Property
    
    Public Property Let ReadedBytes(ByVal l)
        lReadedBytes = l
    End Property
    
    Public Property Get LogPath()
        On Error Resume Next
        LogPath = Session("ssnLogPath")
        If Err.number &lt;&gt; 0 Then
            LogPath = sMF_WebSiteRootFolder
        End If
        On Error Goto 0
    End Property
    
    Public Property Let LogPath(ByVal s)
        Session("ssnLogPath") = s
    End Property 
    
    Public Property Get LogFileName()
        On Error Resume Next
        LogFileName = Session("ssnLogFileName")
        If Err.number &lt;&gt; 0 Then
            LogFileName = "DataReadLog.xml"
        End If
        On Error Goto 0
    End Property
    
    Public Property Let LogFileName(ByRef s)
        Session("ssnLogFileName") = s
    End Property
        
    Private Sub Class_Initialize
        ' 分块数
        Dim lChunks, i, lBytesToRead, oStream
        bnsVbCrLf = ChrB(13) &amp; ChrB(10)
        
        ' 获取表单的总字节数
        lFormSize = Request.TotalBytes
        
        Me.Chunk = 100 * 1024
        Me.ReadedBytes = 0
        
        If lFormSize &gt; 0 And Me.Chunk &gt; 0 Then
            If lFormSize Mod Me.Chunk = 0 Then
                lChunks = lFormSize \ Me.Chunk
            Else
                lChunks = lFormSize \ Me.Chunk + 1
            End If
            
            Set oStream = Server.CreateObject("ADODB.Stream")
            oStream.Type = 1
            oStream.Mode = 3
            oStream.Open 
            
            ' 分块读取数据
            For i = 1 To lChunks
                ' 如果剩余的数据多于分块，则读进一个分块，否则读进剩余数据
                If lFormSize - Me.ReadedBytes &gt; Me.Chunk Then
                    lBytesToRead = Me.Chunk
                Else
                    lBytesToRead = lFormSize - Me.ReadedBytes
                End If
                
                oStream.Write Request.BinaryRead(lBytesToRead)                
                Me.ReadedBytes = Me.ReadedBytes + lBytesToRead
                
                ' 记录读进了多少数据
                On Error Resume Next
                'LogDataReaded i, Now(), Me.ReadedBytes, lFormSize
                'LogDataReadInSession Me.ReadedBytes / lFormSize
                On Error Goto 0
            Next
            oStream.Position = 0
            bnsFormData = oStream.Read
            
            Set oStream = Nothing
            
            ' 下面开始查找表单数据中字段间的分隔符
            Dim lIndex
            
            lIndex = CLng(InstrB(bnsFormData,bnsVbCrLf))
            If lIndex &gt;= 1 Then
                ' 成功获取到字段间的分隔符
                bnsDivider = LeftB(bnsFormData, lIndex - 1)
            Else
                '
                bnsDivider = ""
            End If
        Else
            bnsFormData = ""
            bnsDivider = ""
        End If
    End Sub
    
    '
    ' 记录上传了多少？
    '
    Public Function LogDataReaded(ByVal lSerialNumber, ByVal sTimeStamp, ByVal lBytesReaded, ByVal lTotalBytes)
        Dim sFileFullVirtualName, sFileContent, oFS, oFile
        
        sFileFullVirtualName = Me.LogPath &amp; Me.LogFileName
        sFileContent = "&lt;?xml version=""1.0"" encoding=""utf-8""?&gt;"
        sFileContent = sFileContent &amp; "&lt;datareaded&gt;"
        sFileContent = sFileContent &amp; "&lt;serialnumber&gt;" &amp; lSerialNumber &amp; "&lt;/serialnumber&gt;"
        sFileContent = sFileContent &amp; "&lt;timestamp&gt;" &amp; sTimeStamp &amp; "&lt;/timestamp&gt;"
        sFileContent = sFileContent &amp; "&lt;bytesreaded&gt;" &amp; lBytesReaded &amp; "&lt;/bytesreaded&gt;"
        sFileContent = sFileContent &amp; "&lt;totalbytes&gt;" &amp; lTotalBytes &amp; "&lt;/totalbytes&gt;"
        sFileContent = sFileContent &amp; "&lt;/datareaded&gt;"
        
        Set oFS = Server.CreateObject("Scripting.FileSystemObject")
        Set oFile = oFS.CreateTextFile(Server.MapPath(sFileFullVirtualName), True)
        
        oFile.Write sFileContent
        oFile.Close
        Set oFile = Nothing
        Set oFS = Nothing
        
    End Function
    
    '
    ' 记录上传了多少？
    '
    Public Sub LogDataReadInTxtFile(ByVal dPercent)
        Dim sFileFullVirtualName, sFileContent, oFS, oFile
        
        sFileFullVirtualName = Me.LogPath &amp; Me.LogFileName
        sFileContent = dPercent
        
        Set oFS = Server.CreateObject("Scripting.FileSystemObject")
        Set oFile = oFS.CreateTextFile(Server.MapPath(sFileFullVirtualName), True)
        
        oFile.Write sFileContent
        oFile.Close
        Set oFile = Nothing
        Set oFS = Nothing        
    End Sub
    
    ' 
    ' 将上传了多少的信息记录到 Session 变量中
    '
    Public Sub LogDataReadInSession(ByVal dPercent)
        Session("ssnProgress") = dPercent
    End Sub
        
    '
    ' 获取指字字段名的二进制串
    '
    Public Function GetFieldBinaryData(ByRef sFieldName)
        Dim bnsBorder, lIndex, lFieldStart, lFieldEnd, lFieldSize
        
        If Me.FormSize &lt;= 0 Then
            GetFieldBinaryData = ""
            Exit Function
        End If
        
        ' 字段开始边界
        bnsBorder = bnsDivider &amp; bnsVBCrLf &amp; ConvertStringToBinary("Content-Disposition: form-data; name=""" &amp; sFieldName &amp; """") &amp; bnsVbCrLf &amp; bnsVbCrLf
        lIndex = InStrB(1, Me.FormBinaryData, bnsBorder)
        If lIndex &gt; 0 Then
            ' 定位到字段内容的开始位置
            lFieldStart = lIndex + LenB(bnsBorder)
            ' 定位到字段内容的结束位置
            lFieldEnd = InStrB(lFieldStart, Me.FormBinaryData, bnsDivider) - 3
            ' 计算字段内容的字节长度
            lFieldSize = lFieldEnd - lFieldStart + 1
            GetFieldBinaryData = MidB(Me.FormBinaryData, lFieldStart, lFieldSize)
        Else
            GetFieldBinaryData = bnsBorder
        End If
    End Function
    
    '
    ' 获取指定字段名的文本串
    '
    Public Function GetFieldTextData(ByRef sFieldName)
        GetFieldTextData = ConvertBinaryToString(GetFieldBinaryData(sFieldName))
    End Function
    
    '
    ' 将一个文本字符串转换成二进制字符串
    '
    Public Function ConvertStringToBinary(ByRef s)
        Dim bns, i
        
        For i = Len(s) To 1 Step -1
            bns = ChrB(Asc(Mid(s, i, 1))) &amp; bns
        Next
        
        ConvertStringToBinary = bns
    End Function
    
    '
    ' 将一个二进制字符串转换成文本字符串
    ' ------------------------------------
    ' 此方法在localhost上能正确使用，得到理想的效果。但是将网站上传到服务器上时，有时会失灵。
    ' 在别的地方看到另一种程序来将二进制字符转换成文本字符串，和我的差不多，但是对于Ascii码大于等于128的，进行跳过，然后使用AscW()对连接两个字符同时进行转换。如下 
    ' Public Function ConvertBinaryToString(ByVal bns)
    '   Dim i, s, sClow
    '   For i = 1 To LenB(bns)
    '       sClow = MidB(bns, i, 1)
    '       If AscB(sClow) &lt; 128 Then
    '           s = s &amp; Chr(AscB(sClow))
    '       Else
    '           i = i + 1
    '           If i &lt;= LenB(bns) Then s = s &amp; Chr(AscW(MidB(bns, i, 1) &amp; sClow))
    '       End If
    '   Next
    '   ConvertBinaryToString = s
    ' End Function
    '
    Public Function ConvertBinaryToString(ByVal bns)
        Dim s, i
        
        s = ""
        For i = LenB(bns) To 1 Step -1
            s = Chr(AscB(MidB(bns, i, 1))) &amp; s
        Next
        
        ConvertBinaryToString = s
    End Function
    
    '
    ' 获取文件
    '
    Public Function GetFile(ByRef sFieldName) 
        Dim bnsBorder, lIndex, lFieldStart, lFieldEnd, lFieldSize, oFile
        
        If Me.FormSize &lt;= 0 Then
            Set GetFile = Nothing
            'AddInfo "表单大小为0字节"
            Exit Function
        Else
            'AddInfo "表单大小为 " &amp; Me.FormSize &amp; " 字节"
        End If
        
        ' 文件二进制流开始边界
        bnsBorder = bnsDivider &amp; bnsVbCrLf &amp; ConvertStringToBinary("Content-Disposition: form-data; name=""" &amp; sFieldName &amp; """; filename=""")
        
        lIndex = InStrB(1, Me.FormBinaryData, bnsBorder)
        
        If lIndex &gt; 0 Then
            Set oFile = New CFile
            ' 以下获取文件完整路径名
            '   定位到第1个字符
            lFieldStart = lIndex + LenB(bnsBorder)
            '   定位到最后1个字符
            lFieldEnd = InStrB(lFieldStart, Me.FormBinaryData, bnsVbCrLf) - 2
            '   计算路径字段内容大小
            lFieldSize = lFieldEnd - lFieldStart + 1
            If lFieldSize &gt; 0 Then
                ' 文件名
                oFile.FullName = Cbns2TextStream(MidB(Me.FormBinaryData, lFieldStart, lFieldSize), "utf-8")
                
                ' 以下获取文件的MIME类型
                Dim lPos
                lPos = InStrB(lFieldEnd, Me.FormBinaryData, ConvertStringToBinary("Content-Type: "))
                If lPos &gt; 0 Then
                    lFieldStart = lPos + LenB(ConvertStringToBinary("Content-Type: "))
                    lFieldEnd = InStrB(lFieldStart, Me.FormBinaryData, bnsVbCrLf &amp; bnsVbCrLf) - 1
                    lFieldSize = lFieldEnd - lFieldStart + 1
                    If lFieldSize &gt; 0 Then
                        oFile.MIME = ConvertBinaryToString(MidB(Me.FormBinaryData, lFieldStart, lFieldSize))
                    Else 
                        oFile.MIME = ""
                    End If
                Else
                    oFile.MIME = ""
                End If
                
                ' 以下获取文件内容
                lPos = lFieldEnd
                lFieldStart = InStrB(lPos, Me.FormBinaryData, bnsVbCrLf &amp; bnsVbCrLf) + 4
                lFieldEnd = InStrB(lFieldStart, Me.FormBinaryData, bnsDivider) - 3
                lFieldSize = lFieldEnd - lFieldStart + 1
                If lFieldSize &lt;= 0 Or lFieldStart &lt;= 0 Then
                    oFile.BinaryStream = ""
                Else
                    Dim stmFormBinaryData, stmFileBinaryData
                    Set stmFormBinaryData = Server.CreateObject("ADODB.Stream")
                    Set stmFileBinaryData = Server.CreateObject("ADODB.Stream")
                    stmFormBinaryData.Type = 1
                    stmFormBinaryData.Open
                    stmFormBinaryData.Write Me.FormBinaryData
                    
                    stmFileBinaryData.Type = 1
                    stmFileBinaryData.Open 
                    ' 在ADODB.Stream对象里，索引从0开始，而不是VB的其他地方，索引从1开始
                    'stmFormBinaryData.Position = lFieldStart - 1
                    stmFormBinaryData.Position = 0
                    'stmFormBinaryData.CopyTo stmFileBinaryData, lFieldSize
                    stmFormBinaryData.CopyTo stmFileBinaryData
                    ' 使用MidB()或者LeftB()返回的字符串会自动添加一些别的信息，导致结果二进制串与原来的不太一样
                    'oFile.BinaryStream = MidB(Me.FormBinaryData, lFieldStart, lFieldSize)
                    stmFileBinaryData.Position = lFieldStart - 1
                    oFile.BinaryStream = stmFileBinaryData.Read(lFieldSize)
                    stmFormBinaryData.Close
                    stmFileBinaryData.Close
                    Set stmFormBinaryData = Nothing
                    Set stmFileBinaryData = Nothing
                End If
                Set GetFile = oFile
            Else
                oFile.BinaryStream = ""
                Set GetFile = oFile
            End If
        Else
            ' 未找到文件二进制流开始边界
            'AddInfo "未找到文件二进制流开始边界"
            'AddInfo "表单数据：" &amp; Cbns2TextStream(Me.FormBinaryData, "utf-8")
            Set GetFile = Nothing
            Exit Function
        End If
    End Function
    
    '
    ' 保存文件
    '
    Public Function SaveFile(ByRef sFieldName, ByRef sFullName, ByVal iWriteMode) 
        Dim bnsBorder, lIndex, lFieldStart, lFieldEnd, lFieldSize, oFile
        
        If Me.FormSize &lt;= 0 Then
            Set GetFile = Nothing
            Exit Function
        End If
        
        ' 文件二进制流开始边界
        bnsBorder = bnsDivider &amp; bnsVbCrLf &amp; ConvertStringToBinary("Content-Disposition: form-data; name=""" &amp; sFieldName &amp; """; filename=""")
        
        lIndex = InStrB(1, Me.FormBinaryData, bnsBorder)
        
        If lIndex &gt; 0 Then
            Set oFile = New CFile
            ' 以下获取文件完整路径名
            '   定位到第1个字符
            lFieldStart = lIndex + LenB(bnsBorder)
            '   定位到最后1个字符
            lFieldEnd = InStrB(lFieldStart, Me.FormBinaryData, bnsVbCrLf) - 2
            '   计算路径字段内容大小
            lFieldSize = lFieldEnd - lFieldStart + 1
            ' 文件名
            oFile.FullName = ConvertBinaryToString(MidB(Me.FormBinaryData, lFieldStart, lFieldSize))
            
            ' 以下获取文件的MIME类型
            Dim lPos
            lPos = lFieldEnd
            lFieldStart = lPos + 18
            lFieldEnd = InStrB(lFieldStart, Me.FormBinaryData, bnsVbCrLf &amp; bnsVbCrLf) - 1
            lFieldSize = lFieldEnd - lFieldStart + 1
            oFile.MIME = ConvertBinaryToString(MidB(Me.FormBinaryData, lFieldStart, lFieldSize))
            
            ' 以下获取文件内容
            lPos = lFieldEnd
            lFieldStart = lPos + 5
            lFieldEnd = InStrB(lFieldStart, Me.FormBinaryData, bnsDivider) - 3
            lFieldSize = lFieldEnd - lFieldStart + 1
            oFile.BinaryStream = MidB(Me.FormBinaryData, lFieldStart, lFieldSize)
            
            ' 开始保存文件
            Dim stm, stmFile
            
            If Trim(sFullName) = "" Or Right(sFullName, 1) = "\" Then Exit Function
            Set stm = Server.CreateObject("ADODB.Stream")
            Set stmFile = Server.CreateObject("ADODB.Stream")
            stm.Type = 1
            stm.Mode = 3
            stm.Open
            'stm.Write MidB(Me.FormBinaryData, lFieldStart, lFieldSize)
            stm.Write Me.FormBinaryData
            stmFile.Type = 1
            stmFile.Open 
            stm.Position = lFieldStart - 1
            stm.CopyTo stmFile, lFieldSize
            stmFile.SaveToFile sFullName, iWriteMode
            stm.Close
            stmFile.Close
            Set stm = Nothing
            Set stmFile = Nothing
            
            Set SaveFile = oFile
        Else
            Set SaveFile = Nothing
            Exit Function
        End If
    End Function
    
    '
    ' 将指定的二进制串转换成特定编码的文本
    '
    Public Function Cbns2TextStream(ByRef bns, ByRef sCharset)
        Dim stm
        
        Set stm = Server.CreateObject("ADODB.Stream")
        stm.Type = 2
        stm.Open
        stm.WriteText bns
        stm.Position = 0
        If Len(sCharset) &gt; 0 Then stm.Charset = sCharset
        Cbns2TextStream = stm.ReadText
        stm.Close
        Set stm = Nothing
    End Function 
End Class
%&gt;
</pre>
      