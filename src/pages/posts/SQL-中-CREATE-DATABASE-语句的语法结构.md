---
stackbit_url_path: >-
  posts/SQL-中-CREATE-DATABASE-语句的语法结构
title: 'SQL 中 CREATE DATABASE 语句的语法结构'
date: '2010-03-24 07:33:47'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>在创建一个新的对象时，除了创建者、系统管理员、数据库所有者（如果创建的对象是数据库，那么数据库所有者就是创建者）以外，其他人都无法访问。这允许您在创建对象后，进行所需要的任何修改，之后才明确允许其他人访问您创建的对象。</p>
<p>还需要注意的是：只能使用CREATE语句在本地服务器上创建对象（添加特定的服务器名称是不起作用的）。</p>
<p>完整的语法列表：</p>
<pre class="brush: sql">CREATE DATABASE &lt;database name&gt;
[ON [PRIMARY]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;([NAME = &lt;'logical file name'&gt;, ]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FILENAME = &lt;'file name'&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[, SIZE = &lt;size in  kilobytes, megabytes, gigabytes, or terabytes&gt;]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[, MAXSIZE = size in kilobytes, megabytes, gigabytes, or terabytes&gt;]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[, FILEGROWTH = &lt;kilobytes, megabytes, gigabytes, or terabytes|percentage&gt;])]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[LOG ON
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;([NAME = &lt;'logical file name'&gt;,]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; FILENAME = &lt;'file name'&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[, SIZE = &lt;size in kilobytes, megabytes, gigabytes, or terabytes&gt;]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[, MAXSIZE = size in kilobytes, megabytes, gigabytes, or terabytes&gt;]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[, FILEGROWTH = &lt;kilobytes, megabytes, gigabytes, or terabytes|percentage&gt;])]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ COLLATE &lt;collation name&gt; ]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ FOR ATTACH [WITH &lt;service broker&gt;]| FOR ATTACH_REBUILD_LOG| WITH DB_CHAINING ON|OFF | TRUSTWORTHY ON|OFF]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[AS SNAPSHOT OF &lt;source database name&gt;]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[;]
</pre>
<p>以下是一个示例：</p>
<pre class="brush: sql">CREATE DATABASE Accounting
ON
	(NAME = 'Accounting', 
	FILENAME = 'C:\Program Files\Microsoft SQL Server\MSSQL10.MSSQLSERVER\MSSQL\DATA\AccountingData.mdf',
	SIZE = 10, 
	MAXSIZE = 50,
	FILEGROWTH = 5)
LOG ON
	(NAME = 'AccountingLog', 
	FILENAME = 'C:\Program Files\Microsoft SQL Server\MSSQL10.MSSQLSERVER\MSSQL\DATA\AccountingLog.ldf',
	SIZE = 5MB,
	MAXSIZE = 25MB,
	FILEGROWTH = 5MB);
GO
</pre>
      