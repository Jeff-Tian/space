---
stackbit_url_path: >-
  posts/在ASP中组装QueryString的函数
title: '在ASP中组装QueryString的函数'
date: '2009-12-25 16:20:24'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em;">
<p>在网址中，可以设置一些查询参数（网址带个问号?，问号?后面的内容即为查询参数），如 http://www.myfootprints.cn/?functions=sin(x%2B1/x)，就设置了functions为sin(x+1/x)。利用这些查询参数，可以预先对网页进行一些个性化定制（当然，这需要在网页里头设置好个性化定制的功能），上面的那个网址，即是说，打开 http://www.myfootprints.cn 这个网页，并在打开时呈现 y = sin(x+1/x) 函数的图像。</p>
<p>在 ASP 开发中，有时需要根据当前页面的网址，给它指定一些查询参数（QueryString），并且不影响已经指定的其他参数。即，假如当前页面的网址为 http://www.myfootprints.cn，给它指定一个参数 functions=sin(x%2B1/x)。这种情况下，直接在网址后面添加一个问号?，然后再添加字符串“functions=sin(x%2B1/x)即可；然而如果传递过来的网址是 http://www.myfootprints.cn/?functions=x，那么，指定新参数 functions=sin(x%2B1/x) 的过程，就是直接将 functions=x 替换成 functions=sin(x%2B1/x) 就行了。</p>
<p>为了能够方便并且统一地处理这种指定查询参数的过程（有时是在最后添加，有时是对某些参数进行替换，有时两者都要进行），我设计了如下的函数来做这件事情。有了此函数GetQueryString()，在ASP开发中，对某个网址进行查询参数的设定，只需要这样调用就行了：</p>
<pre class="brush: vb" style="text-indent: 0;">Dim sUrl
sUrl = Request.ServerVariables("PATH_INFO") &amp; GetQueryString("functions=sin(x%2B1/x)")
</pre>
<p>如果要指定多个参数，则将这些参数用数组的形式传递给GetQueryString()就行了。如：</p>
<pre class="brush: vb" style="text-indent: 0;">Dim sUrl
sUrl = Request.ServerVariables("PATH_INFO") &amp; GetQueryString(Array("functions=sin(x%2B1/x)", "minOfx=-10", "maxOfx=10"))
</pre>
<p>以下是GetQueryString()的源代码：</p>
<pre class="brush: vb" style="text-indent: 0;">Public Function GetQueryString(saSpecQueryStrings)
    Dim sCurQueryString, sSpecField, vSpecValue, i, lIndex, lIndex2
    
    ' 获取当前的查询字符串
    sCurQueryString = Request.ServerVariables("QUERY_STRING")
    If Len(sCurQueryString) &gt; 0 Then
        If IsArray(saSpecQueryStrings) Then
            For i = LBound(saSpecQueryStrings) To UBound(saSpecQueryStrings)
                sSpecField = Split(saSpecQueryStrings(i), "=")(0)
                vSpecValue = Split(saSpecQueryStrings(i), "=")(1)
                ' 找到形如 sField=vValue&amp; 的开始和结束位置
                lIndex = InStr(1, sCurQueryString, sSpecField &amp; "=")                                            
                If lIndex &gt; 0 Then
                    lIndex2 = InStr(lIndex, sCurQueryString, "&amp;")
                    ' 如果指定的查询字符串(i)在当前查询字符串中已经存在，则用指定的查询字符串(i)替换
                    GetQueryString = Left(sCurQueryString, lIndex-1) &amp; sSpecField &amp; "=" &amp; vSpecValue 
                    If lIndex2 &gt; 0 Then
                        GetQueryString = GetQueryString &amp; Right(sCurQueryString, Len(sCurQueryString) - lIndex2 + 1)
                    End If
                    sCurQueryString = GetQueryString
                Else
                    ' 否则，将指定的查询字符串接在最后
                    sCurQueryString = sCurQueryString &amp; "&amp;" &amp; saSpecQueryStrings(i)
                End If
            Next
        Else
            sSpecField = Split(saSpecQueryStrings, "=")(0)
            vSpecValue = Split(saSpecQueryStrings, "=")(1)
            ' 找到形如 sField=vValue&amp; 的开始和结束位置
            
            lIndex = InStr(1, sCurQueryString, sSpecField &amp; "=")
            
            If lIndex &gt; 0 Then
                lIndex2 = InStr(lIndex, sCurQueryString, "&amp;")
                ' 如果指定的查询字符串(i)在当前查询字符串中已经存在，则用指定的查询字符串(i)替换
                GetQueryString = Left(sCurQueryString, lIndex-1) &amp; sSpecField &amp; "=" &amp; vSpecValue 
                If lIndex2 &gt; 0 Then
                    GetQueryString = GetQueryString &amp; Right(sCurQueryString, Len(sCurQueryString) - lIndex2)
                End If
                sCurQueryString = GetQueryString
            Else
                ' 否则，将指定的查询字符串接在最后
                sCurQueryString = sCurQueryString &amp; "&amp;" &amp; saSpecQueryStrings
            End If
        End If
    Else
        sCurQueryString = Join(saSpecQueryStrings, "&amp;")
    End If
    GetQueryString = sCurQueryString
End Function
</pre>
</div>
      