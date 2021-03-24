---
stackbit_url_path: >-
  posts/ASP中常见错误-不能打开注册表关键字的一种解决办法
title: 'ASP中常见错误 不能打开注册表关键字的一种解决办法'
date: '2010-03-28 03:37:56'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>今天下载了asp_access这个论坛系统，在浏览器中运行该论坛系统的install.asp，却出现了“<span class="Apple-style-span" style="font-family: 宋体; line-height: 14px; -webkit-border-horizontal-spacing: 5px; -webkit-border-vertical-spacing: 5px; ">常见错误 不能打开注册表关键字……”的错误。</span></p>
<p>对于这个错误，我知道经常是由于通过Internet访问Access数据库，而其权限不够引起的。我对于此问题的解决方案一般是，为了简单省事儿，就在相应的Access数据库所在的文件夹，添加一个everyone用户，然后给这个用户以完全控制的权限。</p>
<p>今天，我又准备如法炮制，结果发现，在asp_access论坛系统里，根本没有access数据库文件！也难怪，我还没有开始安装呢。这个access数据库文件正是在安装时才会出现的呀。于是，我猜，系统在创建access数据库时，会先通过Windows系统的临时文件夹下，而由于没有对这个临时文件夹有相应的权限，于是出现了上述错误。</p>
<p>我来到Windows系统的临时文件夹（C:\Windows\Temp\），给它添加everyone用户，再给予完全控制的权限。咦，就好了！<img alt="" src="http://www.zizhujy.com/blog/image.axd?picture=image_214.png"></p>
<p>&nbsp;</p>
      