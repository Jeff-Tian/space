---
stackbit_url_path: >-
  posts/涂鸦网页代理文件的改进版-version-10
title: '涂鸦网页代理文件的改进版 version 1.0'
date: '2010-03-12 06:48:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/12/涂鸦网页代理文件的改进版-version-10
template: post
---

        <div style="text-indent: 2em; font-size: larger;">
<p>在前面的文章《<a target="_blank" href="http://www.myfootprints.cn/blog/post/206.html">涂鸦代理：强行引用反盗链图片</a>》中，给出了网页代理的代码。</p>
<p>今天做了一些改进，对于返回的图片，给出它原来的实际文件名，而不是统一的 "OpenItWithYourPhotoViewer.jpg"。</p>
<p>如下：</p>
<div style="text-indent: 0;">
<pre class="brush: vb">&lt;%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%&gt;
&lt;% Option Explicit %&gt;
&lt;%Session.CodePage=65001%&gt;
&lt;%
    Response.CharSet = "utf-8"
%&gt;
&lt;%    
    Dim url, oHTTP, charset, contentType
    url = Request.QueryString("url")
    charset = Request.QueryString("charset")
    contentType = Request.QueryString("contentType")
    
    If Len(contentType) &lt;= 0 Then
        contentType = "text/html"
    End If
    Response.ContentType = contentType
    
    If Len(charset) &lt;= 0 Then
        charset = "utf-8"
    End If
    
    If Len(url) &gt; 0 Then
    
        Set oHTTP = Server.CreateObject("Microsoft.XMLHTTP")
        oHTTP.Open "GET", url, False
        On Error Resume Next
        oHTTP.Send
        If Err.Number &lt;&gt; 0 Then
            Session("ssnErrorNumber") = Err.Number
            Session("ssnErrorDescription") = Err.Description
            Session("ssnErrorSource") = Err.Source
        End If
        On Error Goto 0
        
        if contentType = "text/html" Then        
            If charset = "utf-8" Then
                Response.Write oHTTP.ResponseText
            Else
                Response.Write Cbns2TextStream(oHTTP.ResponseBody, charset)
            End If
        Else
            Dim fileName
            fileName = Right(url, Len(url) - InStrRev(url, "/"))
            'Response.AddHeader "Content-Disposition", "attachment; filename=" &amp; "OpenItWithYourPhotoViewer.jpg"
            Response.AddHeader "Content-Disposition", "attachment; filename=" &amp; fileName
            Response.BinaryWrite oHTTP.ResponseBody
        End If
        Set oHTTP = Nothing
        
        If Session("ssnErrorNumber") &lt;&gt; 0 Then
            Server.Transfer "error/Default.asp"
        End If
    Else
        Response.Write ""
    End If
%&gt;
&lt;%
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
%&gt;
</pre>
</div>
</div>
      