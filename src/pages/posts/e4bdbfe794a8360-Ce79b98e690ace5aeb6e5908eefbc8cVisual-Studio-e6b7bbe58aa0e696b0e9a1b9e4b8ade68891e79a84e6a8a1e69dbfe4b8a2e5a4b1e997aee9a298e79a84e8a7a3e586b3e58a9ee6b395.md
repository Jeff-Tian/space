---
stackbit_url_path: >-
  posts/e4bdbfe794a8360-Ce79b98e690ace5aeb6e5908eefbc8cVisual-Studio-e6b7bbe58aa0e696b0e9a1b9e4b8ade68891e79a84e6a8a1e69dbfe4b8a2e5a4b1e997aee9a298e79a84e8a7a3e586b3e58a9ee6b395
title: '使用360 C盘搬家后，Visual Studio 添加新项中我的模板丢失问题的解决办法'
date: '2010-12-10 02:12:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - ASP.NET
  - C盘搬家
  - Visual Studio
  - 模板
canonical_url: https://be-net.azurewebsites.net/post/2010/12/10/e4bdbfe794a8360-Ce79b98e690ace5aeb6e5908eefbc8cVisual-Studio-e6b7bbe58aa0e696b0e9a1b9e4b8ade68891e79a84e6a8a1e69dbfe4b8a2e5a4b1e997aee9a298e79a84e8a7a3e586b3e58a9ee6b395
template: post
---
<p>我使用360 C盘搬家后，在用 Visual Studio 添加新项时，突然发现自己以前的创建的模板消失了！ </p>  <p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_93.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_92.png" width="562" height="353" /></a></p>  <p>上网没找到解决办法，后来自己分析了一下，成功解决。</p>  <h1><font color="#9b00d3"><strong>步骤如下：</strong></font></h1>  <p>1. 打开我的文档，依次进入“Visual Studio 2008\Templates\ItemTemplates”文件夹，在这个文件夹里可以看到自己制作的模板压缩包(.zip文件)，将它们复制；</p>  <p>2. 再进入“C:\Documents and Settings\&lt;你的Windows登录用户名&gt;\My Documents\Visual Studio 2008\Templates\ItemTemplates”文件夹，将刚才复制的文件粘贴到这里，如下图：</p>  <p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_94.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_93.png" width="542" height="408" /></a></p>  <p>3. 这样就好了。再次在Visual Studio中添加新项，就会在“添加新项”窗口的“我的模板”位置，看到熟悉的自己的模板了！</p>  <p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_95.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_94.png" width="543" height="340" /></a></p>