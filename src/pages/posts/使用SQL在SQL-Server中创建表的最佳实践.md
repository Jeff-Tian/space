---
stackbit_url_path: >-
  posts/使用SQL在SQL-Server中创建表的最佳实践
title: '使用SQL在SQL Server中创建表的最佳实践'
date: '2010-04-22 13:29:50'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>使用SQL创建表时，如果直接运行，可能会因为表已经存在而产生错误。</p>
<p>如果要重新创建所有的表，并且放弃以前的版本，那么最好在执行创建表的语句之前，检测旧版本是否存在，若存在就删除它。比如在测试阶段，可能需要很多测试数据。而当在测试结束后，真正部署时，就要清空所有的这些数据。但是与其去做清空工作，不如将所有的表重新创建一遍。而且这样做的话，连自动编号字段都会恢复到最初状态（已有数据删除后，自动编号还会从上次使用的最大的编号开始递增）。</p>
<p>以下是创建表的最佳实践代码示例：</p>
<pre class="brush: sql">IF Exists (
	SELECT * 
	FROM sys.objects 
	WHERE OBJECT_NAME(object_id) = 'T_Bin'
		AND SCHEMA_NAME(schema_id) = 'dbo'
		AND OBJECTPROPERTY(object_id, 'IsUserTable') = 1)
BEGIN
	DROP TABLE dbo.T_Bin
	PRINT 'Table T_Bin has been dropped.';
END
GO

CREATE TABLE T_Bin (
	IdBin	varchar(50) PRIMARY KEY,	-- 货位ID
	FWhCode	varchar(50),				-- 库房Code
	FBin	varchar(12),				-- 货位
	FBinLevel	int,					-- 货位级别
	FBinStatus	int,					-- 货位状态
	FOpt		varchar(8),				-- 操作员
	FOptDate	date					-- 操作日期
);
</pre>
      