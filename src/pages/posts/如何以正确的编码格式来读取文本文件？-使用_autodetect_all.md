---
stackbit_url_path: >-
  posts/如何以正确的编码格式来读取文本文件？-使用_autodetect_all
title: '如何以正确的编码格式来读取文本文件？ 使用_autodetect_all'
date: '2009-12-26 16:08:34'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2009/12/26/如何以正确的编码格式来读取文本文件？-使用_autodetect_all
template: post
---

        <div style="text-indent: 2em;">
<p>如何以正确的编码格式来读取文件呢？很简单，使用ADODB.Stream对象来读取文件，并给它的Charset属性赋值为_autodetect_all。</p>
<p>如下面的函数将以指定的编码格式来读取文本文件，并将文本内容作为字符串返回。</p>
<pre style="text-indent: 0;" class="brush: vb">    ' 读取指定编码格式的文本文件
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
<p>要以正确的编码格式来读取文本文件，只需要这样调用。</p>
<pre class="brush: vb" style="text-indent: 0;">Dim s 
s = ReadEncodedTextFile("file.txt", "_autodetect_all")
</pre>
</div>
      