---
stackbit_url_path: >-
  posts/localhost80-服务器要求提供用户名和密码
title: 'localhost:80 服务器要求提供用户名和密码'
date: '2010-03-28 02:36:19'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/28/localhost80-服务器要求提供用户名和密码
template: post
---

        <p>在成功安装IIS后，即可以通过在浏览器中输入http://localhost 来测试IIS，查看默认网站。在有的系统中，可能会跳出对话框来，说：“localhost:80 服务器要求提供用户名和密码”。我去查了一下，好像说在Windows Xp 中，如果放置默认网站的目录（默认是在C:\Inetpub\wwwroot\）所在的盘是NTFS格式的，就会出现这种情况，即使在Internet 信息服务中设置了允许匿名访问。</p>
<p>不知道如何让它不跳出这个对话框，但是，我们的目的是测试，那么就输入用户名和密码登录进去好了，只要登录成功，后面的一切就都没有影响了。</p>
<p>用户名是“计算机名\Windows系统用户名”的格式，如果只输入Windows系统用户名，是不能登录成功的。密码就是Windows系统用户名对应的密码。</p>
<p>如我的计算机名是&nbsp;PC2010030215wso，又我当前登录进入Windows系统是用的“涂鸦”这个用户名，于是我在用户名中输入：PC2010030215wso\涂鸦，然后输入我登录Windows系统的密码，就成功进入了“欢迎使用Windows XP Server Internet服务”的页面。</p>
<p><img onload="ResizeImage(this,520)" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_217.png" alt="" title=""></p>
      