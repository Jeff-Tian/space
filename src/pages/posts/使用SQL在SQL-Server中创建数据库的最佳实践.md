---
stackbit_url_path: >-
  posts/使用SQL在SQL-Server中创建数据库的最佳实践
title: '使用SQL在SQL Server中创建数据库的最佳实践'
date: '2010-04-22 13:36:36'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>在使用SQL在SQL Server中创建数据库时，也最好在创建之前进行检测，如果有老版本的存在，则先删除，再创建。</p>
<p>以下是代码示例：</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<pre class="brush: sql">USE master;
GO

-- 创建 Nokia 数据库
IF NOT Exists (
	SELECT 'True'
	FROM sys.databases 
	WHERE name = 'Nokia')
BEGIN
	CREATE DATABASE Nokia;
END
ELSE
BEGIN
	PRINT 'Databse Nokia already exists. Skipping CREATE DATABASE statement';
END
GO
</pre>
      