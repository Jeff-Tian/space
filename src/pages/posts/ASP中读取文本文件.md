---
stackbit_url_path: >-
  posts/ASP中读取文本文件
title: 'ASP中读取文本文件'
date: '2009-12-25 16:46:26'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2009/12/25/ASP中读取文本文件
template: post
---

        <div style="text-indent: 2em;">
<p>在ASP中读取文本文件的方法。一种是用FileSystemObject，一种是用ADODB.Stream。</p>
<pre style="text-indent: 0;" class="brush: vb">    ' 读取文本文件
    Function ReadTextFile(sFilePath)
        Dim oFS, oFile, sFileContent
        Set oFS = Server.CreateObject("Scripting.FileSystemObject")
        ' 1 - ForReading
        ' -2 - TristateUseDefault 使用系统默认的格式打开文件
        Set oFile = oFS.OpenTextFile(sFilePath, 1, False, -2)
        
        sFileContent = oFile.ReadAll
        Set oFile = Nothing
        Set oFS = Nothing
        ReadTextFile = sFileContent
    End Function
    
    ' 读取指定编码格式的文本文件
    Function ReadEncodedTextFile(sFilePath, sCharset)
        Dim oStream, s
        
        s = ""
        Set oStream = Server.CreateObject("ADODB.Stream")
        ' 以文本模式读取
        oStream.Type = 2
        oStream.Mode = 3
        If Len(sCharset) &gt; 0 Then
            On Error Resume Next
            oStream.Charset = sCharset
            If Err.number &lt;&gt; 0 Then
                oStream.Charset = "_autodetect_all"
                's = s &amp; "指定的编码 " &amp; sCharset &amp; " 未得到 ReadEncodedTextFile() 函数的支持，已自动以 " &amp; oStream.Charset &amp; " 编码格式读取文件。" &amp; vbCrLf &amp; vbCrLf
                s = s &amp; "The specified charset (" &amp; sCharset &amp; ") is not supported by Function ReadEncodedTextFile(), the charset specified is automatically changed to (" &amp; oStream.Charset &amp; ")." &amp; vbCrLf &amp; vbCrLf
            End If
            On Error Goto 0
        End If
        oStream.Open 
        oStream.LoadFromFile sFilePath
        s = s &amp; oStream.ReadText 
        oStream.Close
        Set oStream = Nothing
        ReadEncodedTextFile = s
    End Function
</pre>
</div>
      