---
stackbit_url_path: >-
  posts/SQL-中-INSERT-语句的语法
title: 'SQL 中 INSERT 语句的语法'
date: '2010-03-24 02:45:04'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/24/SQL-中-INSERT-语句的语法
template: post
---

        <p>INSERT 语句的整体语法结构如下所示：</p>
<pre class="brush: sql">INSERT [TOP (&lt;expression&gt;) [PERCENT]] [INTO] &lt;tabular object&gt; [(&lt;column list&gt;]
[OUTPUT &lt;output clause&gt;]
{VALUES (&lt;data values&gt; [,(&lt;data values&gt;] [, ...n]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| &lt;table source&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| EXEC &lt;procedure&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| DEFAULT VALUES
</pre>
<p>这个结构看起来有些繁杂，它的更基本的语法结构如下：</p>
<pre class="brush: sql">INSERT [INTO] &lt;table&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[(&lt;column list&gt;)]
VALUES (&lt;data values&gt;) [, (&lt;data values&gt;)] [, ...n]</pre>
<p>INTO 关键字，是可选的。它纯粹只是为了增加可读性而存在的。</p>
<p>在 SQL Server 2008 中，可以一次插入多行。要实现这点，只需要添加额外的用逗号分隔的插入值，如下所示：</p>
<pre class="brush: sql">INSERT INTO Sales 
        (StoreCode, OrderNumber, OrderDate, Quantity, Terms, TitleID) 
VALUES 
        ('TST2', 'TESTORDER2', '01/01/1999', 10, 'NET 30', 1234567), 
        ('TST2', 'TESTORDER3', '02/01/1999', 10, 'NET 30', 1234567);
</pre>
<p>在SQL Server 2008之前，要想多行插入，客户端应用程序必须为要插入的每条数据行单独发出插入命令。不过也有其他需要开发人员思考和努力后才能想到的方法，比如可以使用下面这个变通的方法来实现一次多行插入：</p>
<pre class="brush: sql">INSERT INTO Sales 
        (StoreCode, OrderNumber, OrderDate, Quantity, Terms, TitleID) 
SELECT 'TST2', 'TESTORDER4', '01/01/1999', 10, 'NET 30', 1234567 
UNION 
SELECT 'TST2', 'TESTORDER5', '02/01/1999', 10, 'NET 30', 1234567 
</pre>
<p>将别的表中的已有数据插入到指定的表中的示例：</p>
<pre class="brush: sql">/* This next statement is going to use code to change the "current" database 
** to AdventureWorks2008. This makes certain, right in the code that we are 
** going to the correct database. 
*/ 

USE AdventureWorksLT2008; 

/* This next statement declares our working table. 
** This particular table is actually a variable we are declaring on the fly. 
*/ 

DECLARE @MyTable Table ( 
        SalesOrderID        int, 
        CustomerID                char(5) 
); 

/* Now that we have our table variable, we're ready to populate it with data 
** from our SELECT statement. Note that we could just as easily insert the 
** data into a permanent table (instead of a table variable). 
*/ 
INSERT INTO @MyTable 
        SELECT SAlesOrderID, CustomerID 
        FROM AdventureWorksLT2008.SalesLT.SalesOrderHeader ; 
        
-- Finally, let's make sure that the data was inserted like we think 
SELECT * 
FROM @MyTable; 
</pre>
      