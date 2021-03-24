---
stackbit_url_path: >-
  posts/在ASP中使用ADODBStream对象以指定编码格式保存文本文件
title: '在ASP中使用ADODB.Stream对象以指定编码格式保存文本文件'
date: '2009-12-30 03:21:17'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em;">
<p>有时候使用 ASP 的 Scripting.FileSystemObject 对象来保存文件，会受到服务器的安全限制，在保存.asp文件时没有权限而失败。这时可以尝试使用ADODB.Stream对象来保存文件。</p>
<pre style="text-indent: 0;" class="brush: vb">&lt;%    
    ' 保存文本文件
    Function SaveEncodedTextFile(sFilePath, sCharset, s)
        Dim oStream
        Set oStream = Server.CreateObject("ADODB.Stream")
        ' 以文本模式
        oStream.Type = 2
        oStream.Mode = 3
        If Len(sCharset) &gt; 0 Then
            On Error Resume Next
            oStream.Charset = sCharset
            If Err.number &lt;&gt; 0 Then
                oStream.Charset = "_autodetect_all"
            End If
            On Error Goto 0
        End If
        oStream.Open
        oStream.WriteText s
        ' 2 - adSaveCreateOverwrite
        On Error Resume Next
        oStream.SaveToFile sFilePath, 2
        If Err.number &lt;&gt; 0 Then
            SaveEncodedTextFile = False
        Else
            SaveEncodedTextFile = True
        End If
        On Error Goto 0
        Set oStream = Nothing
    End Function
%&gt;
</pre>
</div>
      