---
stackbit_url_path: >-
  posts/SQL-Server中触发器的创建语法与使用示例
title: 'SQL Server中触发器的创建语法与使用示例'
date: '2010-04-27 08:17:45'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>创建触发器的语法看上去和所有其他CREATE语法示例十分相似，只是它必须附加在一个表上——因为触发器不能独立存在。它有一个CREATE &lt;object type&gt; &lt;object name&gt;以及在其他许多对象中可以看到的执行语句——只是添加了ON子句来指出触发器将要附加的表，以及在何时和何种情况下激活这个触发器。</p>
<p>看一下创建触发器的语法：</p>
<pre class="brush: sql">CREATE TRIGGER &lt;trigger name&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ON [&lt;schema name&gt;.]&lt;table or view name&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[WITH ENCRYPTION | EXECUTE AS &lt;CALLER | SELF | &lt;user&gt; &gt;]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{{FOR|AFTER} &lt;[DELETE] [,] [INSERT] [,] [UPDATE]&gt;} | INSTEAD OF}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[WITH APPEND]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[NOT FOR REPLICATION]
AS
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt; &lt;sql statements&gt; | EXTERNAL NAME &lt;assembly method specifier&gt; &gt;
</pre>
<p>一例：</p>
<pre class="brush: sql">CREATE TRIGGER Sales.SalesOrderDetailNotDiscontinued
	ON Sales.SalesOrderDetail
	FOR INSERT, UPDATE
AS
	IF EXISTS (
		SELECT 'True'
		FROM Inserted i
		JOIN Production.Product p
			ON i.ProductID = p.ProductID
		WHERE p.DiscontinuedDate IS NOT NULL
	)
	BEGIN
		RAISERROR('Order Item is discontinued. Transaction Failed.', 16, 1);
		ROLLBACK TRAN
	END
</pre>
<p>检验此触发器：</p>
<p>先准备一些数据：</p>
<pre class="brush: sql">USE AdventureWorks;

UPDATE Production.Product 
SET DiscontinuedDate = '01-01-2008'
WHERE ProductID = 680
</pre>
<p>以下语句将引发我们预料到的错误，插入操作被触发器拦截：</p>
<pre class="brush: sql">INSERT INTO Sales.SalesOrderDetail
VALUES 
(43659, '4911-403C-98', 1, 680, 1, 1431.50, 0.00, NEWID(), GETDATE())
</pre>
      