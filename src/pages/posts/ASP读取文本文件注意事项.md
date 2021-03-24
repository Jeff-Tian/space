---
stackbit_url_path: >-
  posts/ASP读取文本文件注意事项
title: 'ASP读取文本文件注意事项'
date: '2010-01-26 01:20:02'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em;">
<p>在使用ASP读取文本文件时，经常将文件内容显示在&lt;textarea /&gt;中，然而，如果该文本文件内容中含有HTML代码标签，则可能会破坏网页页面。比如在显示文件内容时，突然碰到一个&lt;/textarea&gt;，则会闭合显示文件内容的&lt;textarea&gt;标签，在&lt;/textarea&gt;之后的文件内容全部显示在&lt;textarea /&gt;文本区域的外面去了。这样就导致了整个网页的布局和显示乱掉。</p>
<p>也就是说，对于文本文件中出现的字符串，如果可能是HTML代码，则必须将它们过滤，不要让网页对它们也进行解析，而只当成是一般的字符串就行了。在ASP中，使用Server.HTMLEncode()方法可以将指定的字符串中的HTML代码标签替换成编码后的字符串，从而避免上面所说的问题。</p>
<p>即在使用&lt;textarea /&gt;中显示文件内容时，应该用如下的代码（假设文件内容已经读到了变量 s 中）。</p>
<pre style="text-indent: 0;" class="brush: html">&lt;textarea cols="80" rows="40"&gt;&lt;%= Server.HTMLEncode(s) %&gt;&lt;/textarea&gt;
</pre>
<p>而不能用如下的代码（比较危险）</p>
<pre style="text-indent: 0;" class="brush: html">&lt;textarea cols="80" rows="40"&gt;&lt;%= s %&gt;&lt;/textarea&gt;
</pre>
</div>
      