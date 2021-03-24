---
stackbit_url_path: >-
  posts/SQL-中创建索引的语法结构
title: 'SQL 中创建索引的语法结构'
date: '2010-04-12 13:39:25'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>CREATE INDEX 语句所做的事情与其听上去一样——用于在指定表或视图上基于声明的列创建索引。</p>
<p>创建索引的语法如下：</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<pre class="brush: sql">CREATE [UNIQUE] [CLUSTERED|NONCLUSTERED]
INDEX &lt;index name&gt; ON &lt;table or view name&gt;(&lt;column name&gt; [ASC|DESC] [, ...n])
INCLUDE (&lt;column name&gt; [, ...n])
[WITH
[PAD_INDEX = {ON | OFF}]
[[,] FILLFACTOR = &lt;fillfactor&gt;]
[[,] IGNORE_DUP_KEY = {ON | OFF}]
[[,] DROP_EXISTING = {ON | OFF}]
[[,] STATISTICS_NORECOMPUTE = {ON | OFF}]
[[,] SORT_IN_TEMPDB = {ON | OFF}]
[[,] ONLINE = {ON | OFF}]
[[,] ALLOW_ROW_LOCKS = {ON | OFF}
[[,] ALLOW_PAGE_LOCKS = {ON | OFF}
[[,] MAXDOP = &lt;maximum degree of parallelism&gt;
]
[ON {&lt;filegroup&gt; | &lt;partition scheme name&gt; | DEFAULT }]</pre>
      