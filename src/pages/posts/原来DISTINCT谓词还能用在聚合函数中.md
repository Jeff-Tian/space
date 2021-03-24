---
stackbit_url_path: >-
  posts/原来DISTINCT谓词还能用在聚合函数中
title: '原来DISTINCT谓词还能用在聚合函数中'
date: '2010-03-23 11:20:41'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em; font-size: larger;">
<p>原来，DISTINCT 谓词还能用在聚合函数中，如以下这个例子，计算出不重复的订单号的个数：</p>
<div style="text-indent: 0;">
<pre class="brush: sql">SELECT COUNT(DISTINCT SalesOrderID)
FROM Sales.SalesOrderDetail;
</pre>
</div>
</div>
      