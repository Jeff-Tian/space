---
stackbit_url_path: >-
  posts/在-Windows-7-(64-位)-的-IIS-7-上运行-32-位应用程序
title: '在 Windows 7 (64 位) 的 IIS 7 上运行 32 位应用程序'
date: '2014-05-24 05:21:21.8458402'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 32 位
  - 64 位
  - IIS
  - SQLite
canonical_url: https://be-net.azurewebsites.net/post/2014/05/24/在-Windows-7-(64-位)-的-IIS-7-上运行-32-位应用程序
template: post
---
<h2><font color="#9b00d3">问题：</font></h2>  <p>你发布了一个网站应用到 Windows 7 （64 位）的 IIS 7 服务器上，当你从网页上打开时，显示“试图加载格式不正确的程序”的错误。如：</p>  <h3><font color="#ff0000">Server Error in ‘xxx’ Application.</font></h3>  <hr />  <p><font color="#ff0000">Could not load file or assembly ‘System.Data.SQLite’ or one of its dpendencies.</font></p>  <h2><font color="#9b00d3">解决方案：</font></h2>  <ul>   <li>在“运行”框里输入 “inetmgr” 打开 IIS 管理器</li>    <li>在“应用程序池”列表中找到你的网站应用所使用的“应用程序池”，如 DefaultAppPool</li>    <li>在“高级设置”中，将“启用 32 位应用程序” 设置为 True</li>    <li>成功！</li> </ul>  <p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/Enable32Bit.png"><img title="在 Windows 7 (64 位) 的 IIS 7 上运行 32 位应用程序" style="border-top: 0px; border-right: 0px; background-image: none; border-bottom: 0px; padding-top: 0px; padding-left: 0px; border-left: 0px; display: inline; max-width: 100%; padding-right: 0px" border="0" alt="在 Windows 7 (64 位) 的 IIS 7 上运行 32 位应用程序" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/Enable32Bit_thumb.png" /></a></p>