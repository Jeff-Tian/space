---
stackbit_url_path: >-
  posts/ASPNET-错误：ASP-does-not-contain-a-definition-for-
title: 'ASP.NET 错误："ASP...." does not contain a definition for ...'
date: '2010-03-11 08:39:49'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em; font-size: larger;">
<p>今天在使用 .NET 做网站时，网站突然不能通过编译了，出现了如下错误：</p>
<p>&nbsp;</p>
<p>Error<span class="Apple-tab-span" style="white-space:pre">	</span>1<span class="Apple-tab-span" style="white-space:pre">	</span>'ASP.managephotoalbum_aspx' does not contain a definition for 'ListView1_SelectedIndexChanged' and no extension method 'ListView1_SelectedIndexChanged' accepting a first argument of type 'ASP.managephotoalbum_aspx' could be found (are you missing a using directive or an assembly reference?)<span class="Apple-tab-span" style="white-space:pre">	</span>C:\Documents and Settings\&lt;YourName&gt;\My Documents\Visual Studio 2008\WebSites\PlanetWrox\ManagePhotoAlbum.aspx<span class="Apple-tab-span" style="white-space:pre">	</span>1<span class="Apple-tab-span" style="white-space:pre">	</span>1<span class="Apple-tab-span" style="white-space:pre">	</span>C:\...\PlanetWrox\</p>
<div>经过多方查找，最后找到症结所在。即我在页面的ListView1控件中，指定了事件SelectedIndexChanged的处理程序为ListView1_SelectedIndexChanged()，然而在它的CodeBehind文件中，却又没有ListView1_SelectedIndexChanged()函数的声明。</div>
<div>&nbsp;</div>
<div>原来，是我不小心在页面的ListView1的属性面板中双击了事件SelectedIndexChanged，而CodeBehind就自动添加了事件ListView1_SelectedIndexChanged()的声明，而我又不需要它，于是删除了它。但是没有页面来删除对SelectedIndexChanged的事件处理函数的指定。</div>
<div>&nbsp;</div>
<div>所以，以后再碰到这种类似的错误，就应该先看看相关的CodeBehind中是否有错误信息中提到的相关的函数的声明。若没有，就应该回到页面相关的控件上，删除相关的事件处理函数的指定。</div>
<p>&nbsp;</p>
</div>
<p>&nbsp;</p>
      