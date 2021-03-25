---
stackbit_url_path: >-
  posts/ASP-的-Execute-
title: 'ASP 的 Execute  '
date: '2010-02-09 03:48:48'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/02/09/ASP-的-Execute-
template: post
---
<p><style type="text/css"><!--.my div {  margin: 1em 0;  font-size: larger; line-height: 1.5em;}--></style></p><div style="text-indent: 2em; line-height: 1.5em;" class="my"><div>在ASP中，有一个 Server.Execute(sUrl) 方法，参数为要执行的文件地址，它能够运行使用字符串指定的页面。如</div><div>Server.Execute "Default.asp"</div><div>可以执行 Default.asp 页面。这几乎和 &lt;!--#include file="Default.asp"--&gt; 一样的效果，但是，如果当前页面与 Default.asp 页面有相同的变量或者函数，使用 &lt;!--#include file="Default.asp"--&gt; 会造成名称重定义的冲突错误，而 Server.Execute “Default.asp" 不会造成任何问题。</div><div>可以认为 &lt;!--#include file="Default.asp"--&gt; 是静态绑定方式，而 Server.Execute "Default.asp" 是动态绑定方式。Server.Execute "Default.asp" 方式可以使 Default.asp 中的变量与函数等与调用它的页面中的变量与函数独立。</div><div>Server.Execute "Default.asp"&nbsp;也可以用来动态包含或引用某个文件。而&nbsp;&lt;!--#include file="Default.asp"--&gt; 只能静态包含或引用。</div><p>&nbsp;</p><div>Execute(sSub) 方法，参数为要调用的子过程名称，它能够运行使用字符串指定的子过程。如</div><div>Execute "MySub"&nbsp;</div><div>就可以调用子过程名为 MySub 的子过程。当你不能预告明确地知道需要调用的子过程的过程名时，使用它会非常省心。</div></div>