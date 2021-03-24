---
stackbit_url_path: >-
  posts/使用-Google-电子表格画正态分布概率密度函数
title: '使用 Google 电子表格画正态分布概率密度函数'
date: '2010-02-04 20:51:28'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---
<div style="text-indent: 2em;"><p>同样的做法可以应用到 Excel 中，其中用到了函数 normdist(x, mean, stdev, cummulative)。</p><p>建立一列数据，命名为 index，它是序号，也就是时间序列变量的取值范围，如从-10到10，间隔设置为0.1。</p><p>建立一列数据，命名为 value，它是变量=某一特定值时概率密度。</p><p>对于标准正态分布的概率密度函数，此两列数据的关系是：</p><p>value = normdist(index, 0, 1, 0)</p><p>如取 index = -10 : 0.1 : 10，则作出的图形如下：</p><p><img width="500" height="375" alt="" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_359.png"></p></div>