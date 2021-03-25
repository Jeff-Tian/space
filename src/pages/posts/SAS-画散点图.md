---
stackbit_url_path: >-
  posts/SAS-画散点图
title: 'SAS 画散点图'
date: '2010-02-09 15:31:52'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/02/09/SAS-画散点图
template: post
---

        <div style="text-indent: 2em;">
<p>使用SAS画4个数据点的散点图程序：</p>
<pre style="text-indent: 0;" class="brush: plain">data mydata;
input x y;
cards;
99 0.02
100 -0.01
101 0.014
102 0.008
;
run;

proc gplot data=mydata;
symbol v=star;
plot y*x;
run;
</pre>
</div>
      