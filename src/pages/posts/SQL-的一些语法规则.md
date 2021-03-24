---
stackbit_url_path: >-
  posts/SQL-的一些语法规则
title: 'SQL 的一些语法规则'
date: '2010-04-13 06:29:47'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>在使用SELECT语句时，要指明数据库，可以使用USE并加分号结束，如：</p>
<pre class="brush: sql">USE AdventureWorks ;

SELECT * FROM PortlandAreaAddresses_vw;
</pre>
<p>但在使用CREATE语句时，如果要指明数据库，使用USE语句，就不能加分号结果，而要使用GO（2010-4-15：今天才知道，GO 语句不是T-SQL命令，而是由各种SQL Server命令实用程序（sqlcmd和Management Studio中的“查询”窗口）识别的命令<img alt="" src="http://www.zizhujy.com/blog/image.axd?picture=image_198.png">），如：</p>
<pre class="brush: sql">USE AdventureWorks
GO

CREATE VIEW PortlandAreaAddresses_vw
AS 
	SELECT AddressID,
			AddressLine1,
			City,
			StateProvinceID,
			PostalCode,
			ModifiedDate
	FROM
			Person.Address 
	WHERE
			PostalCode LIKE '970%'
			OR PostalCode LIKE '971%'
			OR PostalCode LIKE '972%'
			OR PostalCode LIKE '986[6-9]%'
	WITH CHECK OPTION;
</pre>
<p>在LIKE语句中，如果要指定一个范围，可以使用[起始-结束]的形式，如上例所示。</p>
<p>&nbsp;</p>
<p>上面提到了GO语句，它不是T-SQL命令。服务器并不知道什么是GO。原来它只是让sqlcmd等知道该给一段批处理打包了。关于批处理，可以使用它建立优先权。（如果你读到这里有点不知道我在说什么的话，不用担心自己的智商，事实上我也是初学，我也不知道自己在说什么<img alt="" src="http://www.zizhujy.com/blog/image.axd?picture=image_199.png">） 以下有个例子，看了会感觉SQL的惊异之处，并且会更理解前面说的意思。</p>
<p>添加一列到Test数据库里的TestTable表（如果没有，需先创建它们）中，然后尝试在第一个批处理没有结束时引用添加的列：</p>
<pre class="brush: sql">USE Test;

ALTER TABLE TestTable
	ADD col3 int;


INSERT INTO TestTable
(col1, col2, col3)
VALUES
(1, 1, 1);
</pre>
<p>得到了一个错误的消息——SQL Server 不能解析新的列名称，于是产生错误：</p>
<pre>消息 207，级别 16，状态 1，第 7 行
列名 'col3' 无效。
</pre>
<p>不过只需要在ADD col3 int之后添加一个简单的GO语句，一切就会正常运行。即：</p>
<pre class="brush: sql">USE Test;

ALTER TABLE TestTable
	ADD col3 int;

GO

INSERT INTO TestTable
(col1, col2, col3)
VALUES
(1, 1, 1);
</pre>
      