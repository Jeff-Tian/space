---
stackbit_url_path: >-
  posts/SQL-中-DELETE-语句的语法
title: 'SQL 中 DELETE 语句的语法'
date: '2010-03-24 04:18:38'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>DELETE语句是相对比较简单的语句。它的完整结构如下：&nbsp;</p>
<pre class="brush: sql">DELETE [TOP (&lt;expression&gt;) [PERCENT]] [FROM] &lt;tabular object&gt;
 [OUTPUT &lt;output clause&gt;]
[FROM &lt;table or join condition&gt;]
[WHERE &lt;search condition&gt; | CURRENT OF [GLOBAL] &lt;cursor name&gt;]
</pre>
<p>其基本语法非常简单。</p>
<pre class="brush: sql">DELETE &lt;table name&gt;
[WHERE &lt;condition&gt;]
</pre>
      