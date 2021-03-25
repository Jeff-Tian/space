---
stackbit_url_path: >-
  posts/如何查询SQLite数据库中的索引信息
title: '如何查询SQLite数据库中的索引信息'
date: '2012-02-13 05:14:33.5864916'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - BlogEngine.NET
  - SQL
  - SQLite
  - 索引
canonical_url: https://be-net.azurewebsites.net/post/2012/02/13/如何查询SQLite数据库中的索引信息
template: post
---
<h1><font color="#800080">一、问题：</font></h1>  <p>在SQLite数据库中，已知索引名称（为idx_be_Posts_BlogID_PostID），查询其详细信息。</p>  <h1><font color="#800080">二、问题分析：</font></h1>  <p>在SQLite数据库中，索引信息储存在sqlite_mater表中。</p>  <h1><font color="#800080">三、解决方案：</font></h1>  <pre class="brush: sql">SELECT *
FROM sqlite_master
WHERE (name = 'idx_be_Posts_BlogID_PostID')</pre>

<p>执行上述SQL命令即可（需要安装SQLite引擎）。</p>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_462.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="如何查询SQLite数据库中的索引信息" border="0" alt="如何查询SQLite数据库中的索引信息" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_192.png" width="661" height="144" /></a></p>