---
stackbit_url_path: >-
  posts/如何使用SMTP将一个报文从发送邮件服务器传送到接收邮件服务器
title: '如何使用SMTP将一个报文从发送邮件服务器传送到接收邮件服务器'
date: '2009-11-30 15:32:52'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2009/11/30/如何使用SMTP将一个报文从发送邮件服务器传送到接收邮件服务器
template: post
---
<div style="text-indent: 2em;"><p>假设SMTP客户机（运行在发送邮件服务器上，我们简称C）的主机名为myfootprints.cn，服务器（运行在接收邮件服务器上，我们简称S）的主机名为gmail.com。以下是在cmd命令行下，从本地服务器创建与GMail的TCP连接与发送邮件报文的命令行输入。</p><p>首先，在本机上运行IIS服务器，然后在cmd命令行下使用IPConfig /all命令查看到本机IP地址为 192.168.1.101，于是在cmd命令行下输入</p><p>telnet 192.168.1.101 25</p><p>这样，就建立了到发送邮件服务器的TCP连接，cmd出现欢迎界面，以下是从admin@myfootprints.cn发送了一个邮件内容为"This is a test mail."的了邮件给myfootprints.cn@gmail.com的命令与回答：</p><p><span class="Apple-style-span" style="background-color: rgb(255, 255, 255); "><img onload="ResizeImage(this,520)" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_391.png" alt="" title=""></span></p><p>其中以大写字母开头的以及那个句点是我的输入，而以数字开头的是发送了邮件服务器的响应。</p><p>下面作一些解释。</p><p>我输入的命令有5条，分别是HELO（是Hello的缩写）、MAIL FROM、RCPT TO、DATA以及QUIT。这些命令都是自解释的。我通过输入一个只包含一个句点的行，告诉服务器该报文结束了。</p><p>SMTP用的是持久TCP连接：如果发送了邮件服务器有几个报文发往同一个接收邮件服务器，它可以通过同一个TCP连接发送所有这些报文。对每个报文，我都要用一个新的 MAIL FROM: 开始，用一个独立的句点指示该邮件的结束，并且仅当所有邮件发送完后才输入QUIT退出。</p><p>如果你有IIS服务器，那么，你可以通过此方法发送一些邮件给你的朋友，而将发送人的邮件地址修改成另外一个人的，这样当你的朋友收到邮件时，会以为是另外一个人发送给他/她的！因为使用此方法发送邮件，并不需要验证你真的是那个发送方邮件地址的所有者。可以利用它作一些小的恶作剧<img alt="" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_392.png">，但是不要利用它来骗人或者干些其他违法犯罪的事情哦，因为还是有技术找到真正的了邮件发送者的。</p></div>