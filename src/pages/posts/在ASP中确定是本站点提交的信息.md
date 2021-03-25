---
stackbit_url_path: >-
  posts/在ASP中确定是本站点提交的信息
title: '在ASP中确定是本站点提交的信息'
date: '2010-03-16 07:53:47'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/16/在ASP中确定是本站点提交的信息
template: post
---

        <div style="text-indent: 2em; font-size: larger;">
<p>如果要确保信息是从本站点提交而来，而不是从其他站点提交过来的信息，可以对来源网址进行如下验证。</p>
<div style="text-indent: 0;">
<pre class="brush: vb">    ' 确定是本站点提交的信息
    Public Function IsValidSource(ByRef sReferer)
        Dim s
        s = Trim(sReferer)
        If Len(s) &lt;= 0 Then
            IsValidSource = False
        Else
            If Left(s, 7) &lt;&gt; "http://" Then
                s = "http://" &amp; s
            End If
            IsValidSource = InStr(1, s, GetBaseUrl()) &gt; 0
        End If
    End Function

' 确定基准URL
Public Function GetBaseUrl()
    Dim sServerName, sAPPL_MD_Path
    sServerName = Trim(LCase(Request.ServerVariables("SERVER_NAME")))
    sAPPL_MD_Path = Trim(LCase(Request.ServerVariables("APPL_MD_PATH")))
    
    If Right(sAPPL_MD_Path, 1) &lt;&gt; "/" Then
        sAPPL_MD_Path = sAPPL_MD_Path &amp; "/"
    End If
    
    ' 后面带有"/"
    GetBaseUrl = "http://" &amp; sServerName &amp; "/" &amp; Right(sAPPL_MD_Path, Len(sAPPL_MD_Path) - InStrRev(sAPPL_MD_Path, "root") - Len("root"))
End Function
</pre>
</div>
</div>
      