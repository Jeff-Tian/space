---
stackbit_url_path: >-
  posts/ASPNET-页面的事件
title: 'ASP.NET 页面的事件'
date: '2010-03-25 03:27:35'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>ASP.NET 1.0/1.1 中可用的所有页面事件：</p>
<ul>
    <li>AbortTransaction</li>
    <li>CommitTransaction</li>
    <li>DataBinding</li>
    <li>Disposed</li>
    <li>Error</li>
    <li>Init</li>
    <li>Load</li>
    <li>PreRender</li>
    <li>Unload&nbsp;</li>
</ul>
<p>ASP.NET 3.5 在以上基础上添加了下述的新事件：</p>
<ul>
    <li>InitComplete：表示页面完成了初始化</li>
    <li>LoadComplete：表示页面完全加载到内存中</li>
    <li>PreInit：表示页面初始化前的那一刻</li>
    <li>PreLoad：表示页面加载到内存前的那一刻</li>
    <li>PreRenderComplete：表示页面显示在浏览器中之前的那一刻</li>
</ul>
<p>主页面事件的引发顺序为：</p>
<ol>
    <li>PreInit</li>
    <li>Init</li>
    <li>InitComplete</li>
    <li>PreLoad</li>
    <li>Load</li>
    <li>LoadComplete</li>
    <li>PreRender</li>
    <li>PreRenderComplete</li>
    <li>Unload</li>
</ol>
      