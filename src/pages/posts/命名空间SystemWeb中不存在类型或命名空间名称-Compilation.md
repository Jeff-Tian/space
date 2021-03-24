---
stackbit_url_path: >-
  posts/命名空间SystemWeb中不存在类型或命名空间名称-Compilation
title: '命名空间System.Web中不存在类型或命名空间名称 Compilation'
date: '2010-04-21 08:31:18'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>今天使用C#编写程序，在程序顶部添加如下引用：</p>
<pre class="brush: csharp">using System.Web.Compilation;
</pre>
<p>结果编译器报错：命名空间“System.Web”中不存在类型或命名空间名称“Extensions”(是否缺少程序集引用?)</p>
<p>解决方法：</p>
<p>项目菜单--&gt;添加引用，在.NET选项卡里，选择System.Web.Extensions，点击确定。OK。</p>
<p><img alt="" title="" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_195.png"></p>
<p><img alt="" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_196.png"></p>
<p>&nbsp;</p>
      