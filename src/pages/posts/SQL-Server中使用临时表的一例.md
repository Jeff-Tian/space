---
stackbit_url_path: >-
  posts/SQL-Server中使用临时表的一例
title: 'SQL Server中使用临时表的一例'
date: '2010-04-06 08:52:55'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/04/06/SQL-Server中使用临时表的一例
template: post
---

        <p>使用SQL Server的示例数据库AdventureWorks，如果需要知道系统中每位客户第一个订单的Sales OrderID和Order Date。即需要知道客户第一天下订单的日期和这些订单的ID。下面来逐条分析。</p>
<p>首先，希望知道每个结果的OrderDate、SalesOrderID和CustomerID。所有这些信息都可以在SalesOrderHeader表中找到，因此查询将基于该表，至少是部分基于该表。</p>
<p>然后，需要知道系统中每个客户第一天下订单的日期。如果使用两个单独的查询来完成，那也没有太多困难——只需要创建一个临时表，然后与之连接。</p>
<p>使用临时表的解决方案有点类似如下所示：</p>
<pre class="brush: sql">USE AdventureWorks ;

-- Get a list of customers and the date of their first order
SELECT soh.CustomerID, MIN(soh.OrderDate) AS OrderDate
INTO #MinOrderDates
FROM Sales.SalesOrderHeader soh
GROUP BY soh.CustomerID;

-- Do something additional with that information
SELECT soh.CustomerID, soh.SalesOrderID, soh.OrderDate
FROM Sales.SalesOrderHeader soh
	JOIN #MinOrderDates t
		ON soh.CustomerID = t.CustomerID
		AND soh.OrderDate = t.OrderDate
	ORDER BY soh.CustomerID;
	
DROP TABLE #MinOrderDates;
</pre>
<p>使用关联子查询的方法可以这样实现：</p>
<pre class="brush: sql">SELECT soh1.CustomerID, soh1.SalesOrderID, soh1.OrderDate
FROM Sales.SalesOrderHeader soh1
WHERE soh1.OrderDate = (SELECT MIN(soh2.OrderDate)
						FROM Sales.SalesOrderHeader soh2
						WHERE soh2.CustomerID = soh1.CustomerID )
ORDER BY CustomerID ;
</pre>
      