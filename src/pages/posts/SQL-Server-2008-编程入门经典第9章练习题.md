---
stackbit_url_path: >-
  posts/SQL-Server-2008-编程入门经典第9章练习题
title: 'SQL Server 2008 编程入门经典第9章练习题'
date: '2010-04-13 05:07:26'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>9.7 练习</p>
<ol>
    <li>请说出至少两种确定在 AdventureWorks2008 数据库的 HumanResources.Employee 表中有何种索引的方法。
    <ol>
        <li>如下：
        <pre class="brush: sql">USE AdventureWorks2008 ;

EXEC sp_helpindex 'HumanResources.Employee'</pre>
        </li>
        <li>&nbsp;如下：
        <pre class="brush: sql">USE AdventureWorks2008 ;

SELECT *
FROM 
	sys.dm_db_index_physical_stats(DB_ID(N'AdventureWorks'), OBJECT_ID(N'AdventureWorks.HumanResources.Employee'), NULL, NULL, NULL);</pre>
        </li>
    </ol>
    </li>
    <li>在AdventureWorks2008数据库的Production.ProductModel表的ModifiedDate列上创建一个非群集索引。
    <pre class="brush: sql">USE AdventureWorks2008;

CREATE NONCLUSTERED INDEX MyIndexOnProductModel ON Production.ProductModel(NAME)</pre>
    </li>
    <li>删除在练习2中创建的索引。
    <pre class="brush: sql">USE AdventureWorks2008;

DROP INDEX Production.ProductModel.MyIndexOnProductModel;</pre>
    </li>
</ol>
      