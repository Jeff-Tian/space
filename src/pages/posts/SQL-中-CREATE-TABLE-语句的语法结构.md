---
stackbit_url_path: >-
  posts/SQL-中-CREATE-TABLE-语句的语法结构
title: 'SQL 中 CREATE TABLE 语句的语法结构'
date: '2010-03-24 08:12:34'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>在创建数据库时，使用下面的3个关键词，就可以根据建立模型数据库的指导原则创建一个数据库。</p>
<pre class="brush: sql">CREATE DATABASE yourDatabaseName</pre>
<p>但是在创建表时，没有模型，因此需要提供一些更具体的形式，如列、数据类型以及特殊的运算符。</p>
<p>以下是语法结构：</p>
<pre class="brush: sql">CREATE TABLE [database_name.[owner].]table_name
(&lt;column name&gt; &lt;data type&gt;
[[DEFAULT &lt;constant expression&gt;]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|[IDENTITY [(seed, increment) [NOT FOR REPLICATION]]]]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ROWGUIDCOL]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[COLLATE &lt;collation name&gt;]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[NULL|NOT NULL]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[&lt;column constraints&gt;]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|[column_name AS computed_column_expression]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|[&lt;table_constraint&gt;]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[, ...n]
)
[ON {&lt;filegroup&gt;|DEFAULT}]
[TEXTIMAGE_ON {&lt;filegroup&gt;|DEFAULT}]
</pre>
<p>以下是一个示例：</p>
<pre class="brush: sql">USE Accounting 

CREATE TABLE Customers (
	CustomerNo		int			IDENTITY NOT NULL,
	CustomerName	varchar(30)	NOT NULL,
	Address1		varchar(30)	NOT NULL,
	Address2		varchar(30)	NOT NULL,
	City			varchar(20)	NOT NULL,
	State			char(2)		NOT NULL,
	Zip				varchar(10)	NOT NULL,
	Contact			varchar(25)	NOT NULL,
	Phone			char(15)	NOT NULL,
	FedIDNo			varchar(9)	NOT NULL,
	DateInSystem	smallDatetime	NOT NULL
)
</pre>
<p>以下示例在创建表时添加主键约束：</p>
<pre class="brush: sql">USE Accounting
CREATE TABLE Customers
(
	CustomerNo		int				IDENTITY	NOT NULL
		PRIMARY KEY,
	CustomerName	varchar(30)					NOT NULL,
	Address1		varchar(30)					NOT NULL,
	Address2		varchar(30)					NOT NULL,
	City			varchar(20)					NOT NULL,
	State			varchar(2)					NOT NULL,
	Zip				varchar(10)					NOT NULL,
	Contact			varchar(25)					NOT NULL,
	Phone			varchar(15)					NOT NULL,
	FedIDNo			varchar(9)					NOT NULL,
	DateInSystem	smalldatetime				NOT NULL
)
</pre>
<p>以下示例在创建表时添加外键约束：</p>
<pre class="brush: sql">USE Accounting

CREATE TABLE Orders
(
	OrderID			int			IDENTITY	NOT NULL
		PRIMARY KEY,
	CustomerNo		int						NOT NULL
		FOREIGN KEY REFERENCES Customers(CustomerNo),
	OrderDate		date					NOT NULL,
	EmployeeID		int						NOT NULL
)
</pre>
<p>默认情况下，创建表时，创建主键的同时，就创建了群集索引。这通常是个不错的选择，但并不总是如此（实际上，在有些情况下，这会带来严重的危害），并且如果这样做，那么将不能在其他任何地方使用群集索引。在定义主键时要考虑一下——确实想要它作为群集索引吗？</p>
<p>如果确实要作改变——也就是说，不想声明为群集索引，那么在创建表时，只需要添加NONCLUSTERED关键字。例如：</p>
<pre class="brush: sql">CREATE TABLE MyTableKeyExample 
(
	Column1 int IDENTITY
		PRIMARY KEY NONCLUSTERED,
	Column2 int
)
</pre>
<p>一旦创建了索引，改变它的唯一方法是删除和重建它，所以需要一开始就做对。</p>
      