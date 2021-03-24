---
stackbit_url_path: >-
  posts/SQL-中-DROP-语句的语法结构
title: 'SQL 中 DROP 语句的语法结构'
date: '2010-03-24 09:23:04'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>执行DROP语句与删除在DROP语句中引用的任何对象一样。这一操作快而简单，其语法对于所有主要的SQL Server对象（表、视图、存储过程及触发器等）来说是相同的，如下所示：</p>
<pre class="brush: sql">DROP &lt;object type&gt; &lt;object name&gt; [, ...n]
</pre>
<p>实际上，这和SQL语句一样简单。如果需要，可以同时删除两个表：</p>
<pre class="brush: sql">USE Accounting

DROP TABLE Customers, Employees
</pre>
<p>这样就将两个表都删除了。</p>
<p>删除整个数据库的语法与此很类似。下面删除 Accounting 数据库：</p>
<pre class="brush: sql">USE master

DROP DATABASE Accounting
</pre>
      