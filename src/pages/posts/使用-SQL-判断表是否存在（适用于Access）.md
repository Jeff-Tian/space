---
stackbit_url_path: >-
  posts/使用-SQL-判断表是否存在（适用于Access）
title: '使用 SQL 判断表是否存在（适用于Access）'
date: '2010-02-06 09:59:19'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/02/06/使用-SQL-判断表是否存在（适用于Access）
template: post
---

        <div style="text-indent: 2em;">
<p>判断一个表在数据库中是否存在，可以使用以下 SQL 语句(适用于 Access)：</p>
<pre style="text-indent: 0;" class="brush: sql">SELECT MSysObjects.Name AS TableName FROM MSysObjects WHERE MSysObjects.Name = '要判断的表名'
</pre>
</div>
      