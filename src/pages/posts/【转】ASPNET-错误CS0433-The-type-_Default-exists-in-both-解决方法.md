---
stackbit_url_path: >-
  posts/【转】ASPNET-错误CS0433-The-type-_Default-exists-in-both-解决方法
title: '【转】ASP.NET 错误CS0433: The type "_Default" exists in both ...解决方法'
date: '2010-07-23 09:34:14'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/07/23/【转】ASPNET-错误CS0433-The-type-_Default-exists-in-both-解决方法
template: post
---

        <p>&nbsp;原文地址：<a href="http://ziping99.blog.163.com/blog/static/909244212010117104631258/">http://ziping99.blog.163.com/blog/static/909244212010117104631258/</a></p>
<hr>
<p>&nbsp;</p>
<p style="line-height: 22px; margin-top: 0px; margin-right: 0px; margin-bottom: 10px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: rgb(110, 110, 110); ">本地测试没问题，传到公司专用的测试服务器（虚拟目录）部分文件打开没问题，但Default.aspx及Products.aspx出错了！</p>
<p style="line-height: 22px; margin-top: 0px; margin-right: 0px; margin-bottom: 10px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: rgb(110, 110, 110); ">错误提示如下：</p>
<p style="line-height: 22px; margin-top: 0px; margin-right: 0px; margin-bottom: 10px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: rgb(110, 110, 110); ">Compilation Error&nbsp;<br style="line-height: 22px; ">
Description: An error occurred during the compilation of a resource required to service this request. Please review the following specific error details and modify your source co<wbr style="line-height: 22px; ">de appropriately.</p>
<p style="line-height: 22px; margin-top: 0px; margin-right: 0px; margin-bottom: 10px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: rgb(110, 110, 110); ">Compiler Error Message: CS0433: The type '_Default' exists in both&nbsp;<br style="line-height: 22px; ">
'c:\windows\Microsoft.NET\Framework\v2.0.50727\Temporary ASP.NET Files\root\9c906d6a\92fb2bc2\App_Co<wbr style="line-height: 22px; ">de.0s7vittk.dll' and 'c:\windows\Microsoft.NET\Framework\v2.0.50727\Temporary ASP.NET Files\root\9c906d6a\92fb2bc2\assembly\dl3\58ec9ab0\719b2b05_233bc901\App_Web_60f3aiaz.DLL'</p>
<p style="line-height: 22px; margin-top: 0px; margin-right: 0px; margin-bottom: 10px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: rgb(110, 110, 110); ">解决：</p>
<p style="line-height: 22px; margin-top: 0px; margin-right: 0px; margin-bottom: 10px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: rgb(110, 110, 110); ">把&lt;%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %&gt;</p>
<p style="line-height: 22px; margin-top: 0px; margin-right: 0px; margin-bottom: 10px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: rgb(110, 110, 110); ">改成：&lt;%@ Page Language="C#" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_DefaultIndex" %&gt;</p>
<p style="line-height: 22px; margin-top: 0px; margin-right: 0px; margin-bottom: 10px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: rgb(110, 110, 110); ">上传，测试，成功！</p>
<p style="line-height: 22px; margin-top: 0px; margin-right: 0px; margin-bottom: 10px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: rgb(110, 110, 110); ">分析：</p>
<p style="line-height: 22px; margin-top: 0px; margin-right: 0px; margin-bottom: 10px; margin-left: 0px; padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; color: rgb(110, 110, 110); ">同一站点的类名出现重复</p>
<p>&nbsp;</p>
      