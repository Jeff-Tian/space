---
stackbit_url_path: >-
  posts/SQL-Server-2008-编程入门经典-第10章练习
title: 'SQL Server 2008 编程入门经典 第10章练习'
date: '2010-04-13 07:01:50'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/04/13/SQL-Server-2008-编程入门经典-第10章练习
template: post
---

        <p>10.12 练习</p>
<ol>
    <li>在AdventureWorks2008数据库中添加一个名为HumanResources.Managers的视图，只显示管理其他雇员的雇员。
    <pre class="brush: sql">USE AdventureWorks
GO

CREATE VIEW HumanResources.Managers 
AS
	SELECT he.*
	FROM 
		HumanResources.Employee he
	WHERE
		he.EmployeeID IN (
			SELECT DISTINCT ManagerID 
			FROM HumanResources.Employee he2
		)</pre>
    </li>
    <li>将刚创建的视图进行加密。
    <pre class="brush: sql">USE AdventureWorks
GO

ALTER VIEW HumanResources.Managers 
WITH ENCRYPTION
AS
	SELECT he.*
	FROM 
		HumanResources.Employee he
	WHERE
		he.EmployeeID IN (
			SELECT DISTINCT ManagerID 
			FROM HumanResources.Employee he2
		)</pre>
    </li>
    <li>根据ManagerID和EmployeeID列，对新视图创建索引。
    <pre class="brush: sql">USE AdventureWorks
GO

CREATE UNIQUE CLUSTERED INDEX ivManagers
ON HumanResources.Managers(ManagerID, EmployeeID)
GO</pre>
    <p>在执行上面的语句时，发生错误，原因是视图未使用模式绑定。于是使用ALTER VIEW将它修改成模式绑定的。但是仍然不能成功创建索引，因为不能使用子查询。可是，即使用改用连接表的方式，又出现使用了自连接不能创建索引的错误。可是如果既不使用子查询，又不使用自连接，第一题的视图又能怎样创建呢？</p>
    </li>
</ol>
      