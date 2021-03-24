---
stackbit_url_path: >-
  posts/best-practice-of-adding-meta-data-to-page-in-ASPNET-MVC-3-Razor-Engine
title: 'ASP.NET MVC 3 Razor Engine 给页面添加头元素的最佳实践'
date: '2011-07-27 06:45:00'
excerpt: >-
  在实际应用中，会有给页面元素添加头元素的需要。比如要在页面文档中添加SEO数据如description、keywords等，或者在文档头部添加CSS样式、javascript 脚本等。而这些不在ASP.NET MVC 3 Razor Engine的默认特性中。本文给出了增加此特性的最佳决方案。
  
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - ASP.NET
  - MVC
  - Razor
  - SEO
canonical_url: >-
template: post
---
<h1><span style="color: #800080;">一、摘要：</span></h1>
<p>在实际应用中，会有给页面元素添加头元素的需要。比如要在页面文档中添加SEO数据如description、keywords等，或者在文档头部添加CSS样式、javascript 脚本等。而这些不在ASP.NET MVC 3 Razor Engine的默认特性中。本文给出了增加此特性的最佳决方案。</p>
<h1><span style="color: #800080;">二、遇到的问题：</span></h1>
<p>在使用 ASP.NET MVC 3 Razor Engine 来开发网站时，有时需要对每个页面单独设置相应的SEO数据如description、keywords等，或者页面有其独特的样式或者脚本等，这些内容需要添加至HTML文档的&lt;head&gt;&lt;/head&gt;之间（当然，CSS样式与javascript可以放在&lt;body&gt;&lt;/body&gt;之间，但是，description、keywords等metadata无法放入）。而这时发现，默认的Razor View无法做到这点。</p>
<h1><span style="color: #800080;">三、解决方案：</span></h1>
<p>1. 找到布局文件，即~\Views\Shared\_Layout.cshtml，在&lt;head&gt;&lt;/head&gt;之间添加一行代码，如下：</p>
<pre class="brush: html">&lt;head&gt;
    ...

    &lt;title&gt;@ViewBag.Title&lt;/title&gt;
    &lt;link href="@Url.Content("~/Content/Site.css")" rel="stylesheet" type="text/css" /&gt;
    &lt;script src="@Url.Content("~/Scripts/jquery-1.4.4.min.js")" type="text/javascript"&gt;&lt;/script&gt;
    ...
    @RenderSection("metas", false)
    ...
&lt;/head&gt;</pre>
<p>2. 在需要单独设置这些头元素数据的页面文件内，以下面的方式添加相应的数据即可。</p>
<pre class="brush: csharp">...
@section metas {
	&lt;meta name="description" content="your description here" /&gt;
	&lt;meta name="keywords" content="keyword1, keyword2, keyword3" /&gt;
	&lt;style type="text/css"&gt;
		body {font-size: small;}
	&lt;/style&gt;
	&lt;script type="text/javascript" src="http://www.zizhujy.com/jTester.js"&gt;&lt;/script&gt;
	...
}
...</pre>
<p>[donate:www.zizhujy.com]</p>