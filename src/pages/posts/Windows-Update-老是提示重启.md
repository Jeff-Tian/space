---
stackbit_url_path: >-
  posts/Windows-Update-老是提示重启
title: 'Windows Update 老是提示重启'
date: '2009-11-27 04:47:58'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2009/11/27/Windows-Update-老是提示重启
template: post
---
<div style="text-indent: 2em;"><p>最近，由于不小心没有进行注册表备份，而对注册表作了大量修改，后来，Windows自动更新程序便出了问题。它一直提示，需要重启电脑才能使更新生效，您要现在重启电脑吗？然后是两个选项，“现在重启”和“稍后重启”。我选择了“现在重启”，可是重启后，还是这样，于是我选择了“稍后重启”。但是它每隔一段时间就跳出来提示一次，很烦人。没有办法，我只好把自动更新给关闭掉了。</p><p>后来想想，不更新也不妥当，会有安全隐患。于是只好去网上搜索解决办法。最后找到了，解决了此问题。</p><p>打开注册表，浏览到“HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\WindowsUpdate\Auto Update”，选中子键“REBOOTREQUIRED”，手动删除它。删除后重启电脑就好了。</p><p>如果还没有好，那么将&nbsp;[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Updates\UpdateExeVolatile] 的&nbsp;"Flags"=dword:00000003 和&nbsp;[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Updates\UpdateExeVolatile_01C60B4A7471BAAB] 的&nbsp;"Flags"=dword:00000002 键值都修改成“0”，就一定可以解决这个问题了。</p><p>作了如上操作，系统能够继续成功安装更新了。<img alt="" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_397.png"></p></div>