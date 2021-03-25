---
stackbit_url_path: >-
  posts/SQL-Server-2008-编程入门经典-第11章练习
title: 'SQL Server 2008 编程入门经典 第11章练习'
date: '2010-04-20 11:36:18'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/04/20/SQL-Server-2008-编程入门经典-第11章练习
template: post
---

        <p>11.7 练习</p>
<p>1. 编写一个简单脚本，创建两个整形变量（一个名为Var1，另一个名为Var2），将它们的值分别设置为2和4，然后输出这两个变量的和。</p>
<pre class="brush: sql">DECLARE @Var1 int;
DECLARE @Var2 int;

SELECT @Var1 = 2;
SELECT @Var2 = 4;

SELECT @Var1 + @Var2;
</pre>
<p>2. 创建一个名为MinOrder的变量并且用AdventureWorks2008中CustomerID 1的打折后的最小行项总额填充该变量（注意：这里在处理货币，所以不要想当然地使用int类型）。输出MinOrder的最终值。</p>
<pre class="brush: sql">USE AdventureWorks;

DECLARE @MinOrder money;

SELECT @MinOrder = MIN(soh.TotalDue)
FROM
	Sales.SalesOrderHeader soh
WHERE
	soh.CustomerID = 1;
	
SELECT @MinOrder AS MinOrder ;
</pre>
<p>3. 使用sqlcmd将查询 SELECT COUNT(*) FROM Customers 的结果输出到控制台窗口。</p>
<pre style="background-color: black; color: white;">C:\Documents and Settings&gt;sqlcmd -Q "SELECT COUNT(*) FROM AdventureWorks.Sales.C
ustomer"

-----------
      19185

(1 行受影响)
</pre>
      