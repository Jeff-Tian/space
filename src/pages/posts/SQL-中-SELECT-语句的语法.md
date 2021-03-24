---
stackbit_url_path: >-
  posts/SQL-中-SELECT-语句的语法
title: 'SQL 中 SELECT 语句的语法'
date: '2010-03-23 10:56:02'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="TEXT-INDENT: 2EM; FONT-SIZE: LARGER;">
<p>在T-SQL中，SELECT语句的基本语法规则如下：</p>
<div style="text-indent: 0;">
<pre class="brush: sql">SELECT [ALL|DISTINCT] [TOP (&lt;expression&gt;) [PERCENT] [WITH TIES]] &lt;column list&gt; 
[FROM ] [WHERE &lt;restrictive condition&gt;] 
[GROUP BY &lt;column name or expression using a column in the select list&gt;] 
[HAVING &lt;restrictive condition based on the group by results&gt;] 
[ORDER BY &lt;column list&gt;] 
[[FOR XML {RAW|AUTO|EXPLICIT|PATH [(&lt;element&gt;)]}[, XMLDATA][, ELEMENTS] 
[, BINARY base 64]] 
[OPTION (&lt;query hint&gt;, [, ...n])] 
</pre>
</div>
<p>其中HAVING子句是给分组设置条件的，与WHERE子句的功能一样，只是用在不同的地方。HAVING子句仅用于带有GROUP BY子句的查询语句中。WHERE子句应用于每一行（在变成一组的某一部分之前），而HAVING子句应用于分组的聚合值。如果要将查询条件放到分组之后，可以使用HAVING子句。</p>
<p>以下是两个对比例子：</p>
<div style="text-indent: 0;">
<pre class="brush: sql">SELECT ManagerID AS Manager, COUNT(*) AS Reports
FROM HumanResources.Employee
WHERE EmployeeID != 5
GROUP BY ManagerID;
</pre>
</div>
<p>返回的结果为：</p>
<p>Manager&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;Reports</p>
<p>--------------------------------</p>
<p>NULL&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;1</p>
<p>1&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;3</p>
<p>4&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;2</p>
<p>5&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;4</p>
<p>（4 行受影响）</p>
<p>&nbsp;</p>
<div style="text-indent: 0;">
<pre class="brush: sql">SELECT ManagerID AS Manager, COUNT(*) AS Reports
FROM HumanResources.Employee
WHERE EmployeeID != 5
GROUP BY ManagerID
HAVING COUNT(*) &gt; 3;
</pre>
</div>
<p>结果为：</p>
<p>Manager&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;Reports</p>
<p>-----------------------------</p>
<p>5&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;4</p>
<p>（1行受影响）</p>
</div>
      