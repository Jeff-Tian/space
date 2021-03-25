---
stackbit_url_path: >-
  posts/SQL-修改索引的语法结构
title: 'SQL 修改索引的语法结构'
date: '2010-04-12 13:51:31'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/04/12/SQL-修改索引的语法结构
template: post
---

        <p>ALTER INDEX 命令在其用来做什么方面多少有些欺骗性。截至现在，ALTER命令总是与修改对象的定义有关。例如，ALTER（修改）表以添加或禁用约束和列。ALTER INDEX是不同的——该命令与维护有关，而与结构完全不相干。如果需要修改索引的组成，那么只能DROP（删除）然后CREATE（创建）索引，或者用DROP_EXISTING = ON选项CREATE（创建）并使用索引。</p>
<p>ALTER INDEX 的语法类似于下面这样：</p>
<pre class="brush: sql">ALTER INDEX {&lt;name of="" index=""&gt; | ALL}
	ON 
	{REBUILD
	[[WITH (
		[PAD_INDEX = {ON | OFF}]
		|[[,] FILLFACTOR = &lt;fillfactor&gt;
		|[[,] SORT_IN_TEMPDB = {ON | OFF}]
		|[[,] IGNORE_DUP_KEY = {ON | OFF}]
		|[[,] STATISTICS_NORECOMPUTE = {ON | OFF}]
		|[[,] ONLINE = {ON | OFF}]
		|[[,] ALLOW_ROW_LOCKS = {ON | OFF}]
		|[[,] ALLOW_PAGE_LOCKS = {ON | OFF}]
		|[[,] MAXDOP = &lt;max degree="" of="" parallelism=""&gt;
	)]
	| [PARTITION = &lt;partition number=""&gt;
		[WITH (&lt;partition rebuild="" index="" option=""&gt;
		[, ...n])]]]
	| DISABLE
	| REORGANIZE
		[PARTITION = &lt;partition number=""&gt;]
		[WITH (LOB_COMPACTION = {ON | OFF})]
	| SET ([ ALLOW_ROW_LOCKS = {ON | OFF}]
		| [[,] ALLOW_PAGE_LOCKS = {ON | OFF}]
		| [[,] IGNORE_DUP_KEY = {ON | OFF}]
		| [[,] STATISTICS_NORECOMPUTE = {ON | OFF}]
		)
	}[;]
</pre>
<p>以下是一个示例：</p>
<pre class="brush: sql">USE AdventureWorks;

ALTER INDEX PK_SalesOrderDetail_SalesOrderID_SalesOrderDetailID
	ON Sales.SalesOrderDetail
		REBUILD WITH (FILLFACTOR = 100)
</pre>
      