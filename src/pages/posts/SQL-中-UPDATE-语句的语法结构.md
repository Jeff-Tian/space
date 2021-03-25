---
stackbit_url_path: >-
  posts/SQL-中-UPDATE-语句的语法结构
title: 'SQL 中 UPDATE 语句的语法结构'
date: '2010-03-24 04:00:21'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/24/SQL-中-UPDATE-语句的语法结构
template: post
---

        <p>UPDATE 语句表示更新，即UPDATE语句用来更新已有的数据。尽管有一定的相似性，但其语法结构与SELECT语句的语法结构有一点不同。和INSERT语句一样，它有着相当复杂的选项，但有一个能满足大多数需求的更基本的形式。</p>
<p>其完整语法也支持SELECT和INSERT中所支持的TOP及类似的谓词：</p>
<pre class="brush: sql">UPDATE [TOP [&lt;expression&gt;) [PERCENT]] &lt;tabular object&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SET &lt;column&gt; = &lt;value&gt;[.WRITE(&lt;expression&gt;, &lt;offset&gt;, &lt;length&gt;)]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [, &lt;column&gt; = &lt;value&gt;[.WRITE(&lt;expression&gt;, &lt;offset&gt;, &lt;length&gt;)]]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ OUTPUT &lt;output clause&gt; ]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[FROM &lt;source table(s)&gt;]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[WHERE &lt;restrictive condition&gt;]<br type="_moz"></pre>
<p>UPDATE 语法更基本的结构如下：</p>
<pre class="brush: sql">UPDATE &lt;table name&gt;
SET &lt;column&gt; = &lt;value&gt; [, &lt;column&gt; = &lt;value&gt;]
[FROM &lt;source table(s)&gt;]
[WHERE &lt;restrictive condition&gt;]
</pre>
      