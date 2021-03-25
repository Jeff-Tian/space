---
stackbit_url_path: >-
  posts/如何使用SQL查询表中的ID字段中，第三大的记录？
title: '如何使用SQL查询表中的ID字段中，第三大的记录？'
date: '2010-01-17 14:26:30'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/01/17/如何使用SQL查询表中的ID字段中，第三大的记录？
template: post
---

        <div style="text-indent: 2em;"><p>如何使用SQL查询表中的ID字段中，第三大的记录？</p><p>示例：</p>
<pre class="brush: sql" style="text-indent: 0;">SELECT * FROM [TableName] AS A WHERE (SELECT COUNT(*) FROM [TableName] AS B WHERE B.ID &gt;= A.ID) = 3
</pre>
</div>
      