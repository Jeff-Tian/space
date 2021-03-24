---
stackbit_url_path: >-
  posts/e4bb8ee5ba93e5ad98e8a1a8e4b8ade69fa5e8afa2e68980e69c89e68bbce7aeb1e4bfa1e681af(e69fa5e8afa2e69f90e5ad97e6aeb5e9878de5a48de79a84e8aeb0e5bd95)
title: '从库存表中查询所有拼箱信息(查询某字段重复的记录)'
date: '2011-01-08 02:55:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - SQL Server
  - 查询
  - 重复记录
canonical_url: >-
template: post
---
<h1><font color="#9b00d3"><font style="font-weight: bold">问题</font></font></h1>  <p>有一张库存表，有如下字段：</p>  <table class="tbDoodles" border="1" cellspacing="0" cellpadding="2" width="400"><tbody>     <tr>       <td valign="top" width="133">箱号</td>        <td valign="top" width="133">物料号</td>        <td valign="top" width="133">物料数量</td>     </tr>      <tr>       <td valign="top" width="133">20101227NS001</td>        <td valign="top" width="133">8009819</td>        <td valign="top" width="133">200</td>     </tr>      <tr>       <td valign="top" width="133">……</td>        <td valign="top" width="133">……</td>        <td valign="top" width="133">……</td>     </tr>   </tbody></table>  <p>如果有一个箱号，对应着多个物料号，即有多个物料放在这同一个箱子内，这叫做拼箱。这种情况比较少，多数是一个箱子内放置一种物料。</p>  <p>现在要从这张表中，将所有的拼箱信息查询出来。</p>  <h1><font color="#9b00d3"><font style="font-weight: bold">解决方案</font></font></h1>  <p>可以用以下 SQL 语句：</p>  <pre class="brush: sql">SELECT
	箱号, COUNT(箱号) AS 物料种数
FROM
	库存表
GROUP BY
	箱号
HAVING
	COUNT(箱号) &gt; 1</pre>