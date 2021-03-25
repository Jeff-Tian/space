---
stackbit_url_path: >-
  posts/使用SQL创建视图的语法结构
title: '使用SQL创建视图的语法结构'
date: '2010-04-13 06:00:58'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/04/13/使用SQL创建视图的语法结构
template: post
---

        <p>最简洁语法结构：</p>
<pre class="brush: sql">CREATE VIEW &lt;view name&gt;
AS
&lt;SELECT statement&gt;
</pre>
<p>扩展的语法结构如下所示：</p>
<pre class="brush: sql">CREATE VIEW [schema_name].&lt;view name&gt; [(&lt;column name list&gt;)]
[WITH [ENCRYPTION] [, SCHEMABINDING] [, VIEW_METADATA]]
AS
&lt;SELECT statement&gt;
WITH CHECK OPTION
</pre>
<p>示例：</p>
<pre class="brush: sql">USE Accounting 
GO

CREATE VIEW CustomerPhoneList_vw
AS
	SELECT CustomerName, Contact, Phone
	FROM Customers 
</pre>
      