---
stackbit_url_path: >-
  posts/SQL-Server-2008-编程入门经典-第七章练习
title: 'SQL Server 2008 编程入门经典 第七章练习'
date: '2010-04-06 13:49:54'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>7.9 练习</p>
<p>1. 编写一个查询，以MM/DD/YY的格式返回AdventureWorks2008中所有雇员的就职日期。</p>
<pre class="brush: sql">USE AdventureWorks;

SELECT EmployeeID, CONVERT(varchar(8), HireDate, 3)
FROM HumanResources.Employee;
</pre>
<p>2. 分别使用JOIN、子查询和EXISTS编写查询，列出AdventureWorks2008中没有下任何订单的所有客户。</p>
<p>JOIN 方式：</p>
<pre class="brush: sql">USE AdventureWorks ;

SELECT sc.CustomerID, sc.AccountNumber 
FROM 
	Sales.Customer sc
LEFT JOIN 
	Sales.SalesOrderHeader soh
	ON
		sc.CustomerID = soh.CustomerID 
WHERE
	soh.CustomerID IS NULL;
</pre>
<p>子查询方式：</p>
<pre class="brush: sql">USE AdventureWorks ;

SELECT sc.CustomerID, sc.AccountNumber 
FROM 
	Sales.Customer sc
WHERE sc.CustomerID NOT IN (
	SELECT DISTINCT soh.CustomerID
	FROM Sales.SalesOrderHeader soh
);
</pre>
<p>EXISTS 方式：</p>
<pre class="brush: sql">USE AdventureWorks ;

SELECT sc.CustomerID, sc.AccountNumber 
FROM 
	Sales.Customer sc
WHERE NOT EXISTS (
	SELECT DISTINCT soh.CustomerID
	FROM Sales.SalesOrderHeader soh
	WHERE soh.CustomerID = sc.CustomerID 
);
</pre>
<p>3. 编写查询显示 AdventureWorks2008中花费超过70 000美元的账号所对应的最近5个订单。</p>
<pre class="brush: sql">USE AdventureWorks ;

SELECT TOP 5 tt.SalesOrderID, tt.Rev, soh.OrderDate FROM
(SELECT t.SalesOrderID, t.Rev
FROM 
(SELECT sod.SalesOrderID, SUM(sod.UnitPrice*(1-UnitPriceDiscount) * OrderQty) AS Rev
FROM Sales.SalesOrderDetail sod
GROUP BY
	sod.SalesOrderID) t
WHERE 
	t.Rev &gt; 70000) tt
JOIN Sales.SalesOrderHeader soh
	ON tt.SalesOrderID = soh.SalesOrderID 
ORDER BY soh.OrderDate DESC
</pre>
<p>显示结果为：</p>
<p>
</p><p>SalesOrderID Rev &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; OrderDate</p>
<p>------------ --------------------- -----------------------</p>
<p>71784 &nbsp; &nbsp; &nbsp; &nbsp;89869.2768 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2004-06-01 00:00:00.000</p>
<p>71824 &nbsp; &nbsp; &nbsp; &nbsp;85393.7415 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2004-06-01 00:00:00.000</p>
<p>71841 &nbsp; &nbsp; &nbsp; &nbsp;83076.5707 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2004-06-01 00:00:00.000</p>
<p>71847 &nbsp; &nbsp; &nbsp; &nbsp;89981.79 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2004-06-01 00:00:00.000</p>
<p>71894 &nbsp; &nbsp; &nbsp; &nbsp;70205.79 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;2004-06-01 00:00:00.000</p>
<p>&nbsp;</p>
<p>(5 行受影响)</p>
<p></p>
      