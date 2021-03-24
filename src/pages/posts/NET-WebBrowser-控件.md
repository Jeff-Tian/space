---
stackbit_url_path: >-
  posts/NET-WebBrowser-控件
title: '.NET WebBrowser 控件'
date: '2010-02-24 09:59:05'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em; font-size: larger; font-family: 楷体_GB2312;">
<p>使用.NET中的WebBrowser，可以用来制作一些程序，来自动完成在网页上的操作。当然，如果有权限直接操作网站的数据库或者其他文件，就不需要使用它了，但有时候，一些应用只给特定的用户提供一个网页操作的入口。当这种操作是大量重复的时候，可以考虑使用WebBrowser来自动化这些操作。</p>
<p>使用 WebBrowser 控件来操作网页的元素，就像使用 JavaScript 来操作 DOM 一样简单便捷。</p>
<p>比如，要定位网页上一个 ID 值为 name 的文本输入框，并且给它填上“涂鸦”，那么只需要：</p>
<pre style="text-indent: 0;" class="brush: vb">Dim o As Object
o = WebBrowser.Document.GetElementByID("name")
o.setAttribute("value", "涂鸦")
</pre>
<p>就可以了。</p>
<p>我今天在使用 WebBrowser 控件的过程中，因为应用的需求，需要每次都从服务器下载最新的文件，而不要使用缓存文件。为了达到这个目的，可以在 IE 的 Internet 选项中，将“检查所存网页的较新版本”修改为“每次访问网页时”（默认为“自动”）。</p>
<p>IE 7 的详细设置步骤为：“工具”-&gt;“Internet 选项”-&gt;“常规”选项卡-&gt;“浏览历史记录”-&gt;“设置”-&gt;“Internet 临时文件和历史记录”-&gt;“Internet 临时文件”-&gt;“检查所存网页的较新版本”-&gt;“每次访问网页时”。</p>
</div>
      