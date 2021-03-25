---
stackbit_url_path: >-
  posts/SQL-中声明变量的语法结构
title: 'SQL 中声明变量的语法结构'
date: '2010-04-15 09:28:27'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/04/15/SQL-中声明变量的语法结构
template: post
---

        <p>在SQL中使用DECLARE语句来声明变量，它的语法结构相当简单：</p>
<pre class="brush: sql">DECLARE @&lt;variable name&gt; &lt;variable type&gt;[= &lt;value&gt;][,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@&lt;variable name&gt; &lt;variable type&gt;[= &lt;value&gt;][,
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@&lt;variable name&gt; &lt;variable type&gt;[= &lt;value&gt;]]]
</pre>
<p>示例：</p>
<pre class="brush: sql">DECLARE @Test money;
</pre>
      