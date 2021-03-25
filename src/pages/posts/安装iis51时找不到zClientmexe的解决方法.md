---
stackbit_url_path: >-
  posts/安装iis51时找不到zClientmexe的解决方法
title: '安装iis5.1时找不到zClientm.exe的解决方法'
date: '2010-03-28 02:47:57'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/28/安装iis51时找不到zClientmexe的解决方法
template: post
---

        <p>这几天一直在下载IIS，安装IIS，一直没有成功。</p>
<p>没有成功，我便认为是我下载的安装文件被破坏了，于是不断重新去下载。可是一直未能成功。于是今天决定冷静下来，找找失败的原因。</p>
<p>原来老是卡在这个错误之处，说，找不到 zClientm.exe 文件，请插入光盘什么的。我就纳闷儿了，以前在好多不同的机器上安装成功过IIS，也跳过对话框说找不到什么什么文件，但是从来没有听过居然有什么 zClient.exe 文件！一般都是说要找什么 .dll，.dl_ 或者 .cab 文件之类。IIS 要这个什么 zClientm.exe 文件干什么！</p>
<p>后来才想通，在使用添加Windows组件时，不只选择了Internet 信息服务（IIS），还有其他的组件呢。于是推断这个什么 zClient.exe 是别的组件需要的。而我不需要这个组件，于是要找到这个组件，并且将它从我选择的组件中去除。</p>
<p>后来找到它是“附件和工具”中的“游戏”中的“Z Internet 游戏”，将它前面的勾勾去掉，再安装IIS，大功告成！</p>
<p><img width="600" height="398" alt="" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_215.png"></p>
<p>不容易啊！</p>
<p><img alt="" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_216.png"></p>
<p>&nbsp;</p>
<p>附：IIS 5.1 下载地址：&nbsp;<a href="https://docs.google.com/leaf?id=0B3Cz_IFTgv8wMzM3NGI4YmYtMTA1NC00ODRlLWJjMWEtMjc4NzdlN2Y5MWI0&amp;hl=zh_CN">https://docs.google.com/leaf?id=0B3Cz_IFTgv8wMzM3NGI4YmYtMTA1NC00ODRlLWJjMWEtMjc4NzdlN2Y5MWI0&amp;hl=zh_CN</a></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
      