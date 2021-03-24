---
stackbit_url_path: >-
  posts/什么是RSS？
title: '什么是RSS？'
date: '2009-11-20 14:07:58'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em;"><p>什么是RSS？关于此缩写的解释有很多种，但最新而且可能也是最精确的应该是Really Simple Syndication（真正简单的聚合，RSS）。RSS新闻源实际上就是将新闻信息进行编码后的XML文档。通过RSS技术你可以聚合Web中的内容，这意味着你可以订阅某个网站，并且不必登录网站就能轻松地发现网站中新发布的内容。</p><p>使用一种名叫新闻聚合器的特殊软件，你可以监控来自多个网站的RSS新闻源，并且不用浏览不同的网站就能监控各种类型的信息。很多软件所实现的功能，越来越多地被在线化Web化，比如连迅雷下载都提供Web版本。RSS阅读器也不例外。比如Google就有一项<a target="_blank" title="Google阅读器" href="http://www.google.com/reader/view/?hl=zh-CN&amp;tab=ey#overview-page">阅读器</a>，它实现上就是在线的新闻聚合器。如果你对如何构建像这们的在线RSS阅读器感兴趣，可以参考<a href="http://www.myfootprints.cn/blog/post/ajaxRssReader.html" title="利用Ajax技术读取RSS新闻源，并构建一个在线的阅读器" target="_blank">这篇文章</a>。</p><p>RSS的文档格式如下：</p>
<pre class="brush: xml" style="text-indent: 0;">&lt;?xml version="1.0" encoding="utf-8"?&gt;
&lt;rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/"&gt;
&lt;channel&gt;
&lt;title&gt;源的名称&lt;/title&gt;
&lt;link&gt;http://www.myfootprints.cn&lt;/link&gt;
&lt;image&gt;
&lt;url&gt;http://www.myfootprints.cn/images/logo.gif&lt;/url&gt;
&lt;title&gt;源的名称&lt;/title&gt;
&lt;link&gt;http://www.myfootprints.cn&lt;/link&gt;
&lt;width&gt;100&lt;/width&gt;
&lt;height&gt;50&lt;/height&gt;
&lt;/image&gt;
&lt;description&gt;源的描述&lt;/description&gt;
&lt;language&gt;zh-cn&lt;/language&gt;
&lt;managingEditor&gt;admin@myfootprints.cn&lt;/managingEditor&gt;
&lt;dc:publisher&gt;我的涂鸦&lt;/dc:publisher&gt;
&lt;copyright&gt;Copyright 2009 我的涂鸦&lt;/copyright&gt;
&lt;item&gt;
&lt;title&gt;项目名称（通常是文章的标题）&lt;/title&gt;
&lt;link&gt;http://www.myfootprints.cn&lt;/link&gt;
&lt;guid&gt;http://www.myfootprints.cn/newsfeeder.asp&lt;/guid&gt;
&lt;author&gt;Jeff Tian &lt;admin@myfootprints.cn&gt;&lt;/author&gt;
&lt;dc:date&gt;2009-11-15T21:07:00-21:20&lt;/dc:date&gt;
&lt;/item&gt;
&lt;/channel&gt;
&lt;/rss&gt;
</pre>
<p>其中需要注意的&lt;dc:date&gt;标签，大多数RSS源都不是使用这个标签而是使用&lt;pubDate&gt;标签来保存发布日期。</p>
</div>
      