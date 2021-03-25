---
stackbit_url_path: >-
  posts/EXISTS-用法两例
title: 'EXISTS 用法两例'
date: '2010-04-06 11:17:19'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/04/06/EXISTS-用法两例
template: post
---

        <p>EXISTS 的一个通常用法是在运行CREATE语句之前检验表是否存在。有时可能希望删除一个已存在的表，如果表已经存在的话，可能使用ALTER语句或者其他语句修改已存在的表。一种最常用的使用方法如下所示：</p>
<pre class="brush: sql">IF EXISTS 
	(SELECT *
	FROM sys.objects 
	WHERE OBJECT_NAME(object_id) = 'foo'
		AND SCHEMA_NAME(schema_id) = 'dbo'
		AND OBJECTPROPERTY(object_id, 'IsUserTable') = 1)
BEGIN
	DROP TABLE dbo.foo
	PRINT 'Table foo has been dropped';
END 
GO
	
CREATE TABLE dbo.foo
(
	Column1 int IDENTITY(1, 1) NOT NULL,
	Column2 varchar(50) NULL
);
</pre>
<p>创建数据库的小脚本一例：</p>
<pre class="brush: sql">USE master;
GO

IF NOT Exists	
	(SELECT 'True' 
	FROM sys.databases 
	WHERE name = 'AdventureWorksCreate')
BEGIN
	CREATE DATABASE AdventureWorksCreate;
END
ELSE
BEGIN
	PRINT 'Database already exists. Skipping CREATE DATABASE Statement';
END
GO
</pre>
      