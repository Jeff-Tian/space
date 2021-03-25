---
stackbit_url_path: >-
  posts/使用ASP取得当前网站的顶级网址与当前网站的根目录虚拟路径
title: '使用ASP取得当前网站的顶级网址与当前网站的根目录虚拟路径'
date: '2010-03-16 07:31:05'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/16/使用ASP取得当前网站的顶级网址与当前网站的根目录虚拟路径
template: post
---

        <div style="text-indent: 2em; font-size: larger;">
<p>在这里，顶级网址或者说基准网址是什么意思呢？</p>
<p>比如对于网址 http://www.myfootprints.cn/blog/post/1.html 来说，http://www.myfootprints.cn/ 就是该网站的顶级网址。</p>
<p>要在程序中取得这个顶级网址，可以这样实现：</p>
<div style="text-indent: 0;">
<pre class="brush: vb">    ' 确定基准URL
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
<p>要获取网站的根目录虚拟路径（比如在http://localhost/上运行了多个网站，那么其中某个网站的虚拟根目录可能是 /myfootprints.cn），可以这样实现：</p>
<div style="text-indent: 0;">
<pre class="brush: vb">    ' 确定网站根目录虚拟路径
    Public Function GetRootVirtualPath()
        Dim sAPPL_MD_Path
        sAPPL_MD_Path = Trim(LCase(Request.ServerVariables("APPL_MD_PATH")))
        
        If Right(sAPPL_MD_Path, 1) &lt;&gt; "/" Then
            sAPPL_MD_Path = sAPPL_MD_Path &amp; "/"
        End If
        
        ' 后面带有"/"
        GetRootVirtualPath = "/" &amp; Right(sAPPL_MD_Path, Len(sAPPL_MD_Path) - InStrRev(sAPPL_MD_Path, "root") - Len("root"))        
    End Function
</pre>
</div>
</div>
      