---
stackbit_url_path: >-
  posts/一个CSS链接按钮
title: '一个CSS链接按钮'
date: '2010-05-17 10:22:54'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/05/17/一个CSS链接按钮
template: post
---

        <style type="text/css">
<!--
    
    a:link.button
    {
        padding: 5px;
        background-color: #F6F6F3;
        color: Black;
        border-left: solid 1px #FCFCFA;
        border-top: solid 1px #FCFCFA;
        border-right: solid 1px black;
        border-bottom: solid 1px black;
        text-decoration: none;
        font-size: smaller;
    }

    a:visited.button
    {
        padding: 5px;
        background-color: #F6F6F3;
        color: Black;
        border-left: solid 1px #FCFCFA;
        border-top: solid 1px #FCFCFA;
        border-right: solid 1px black;
        border-bottom: solid 1px black;
        text-decoration: none;
        font-size: smaller;
    }
    
    a:hover.button
    {
        padding: 5px;
        background-color: Yellow;
        color: Black;
        border-left: solid 1px #FCFCFA;
        border-top: solid 1px #FCFCFA;
        border-right: solid 1px black;
        border-bottom: solid 1px black;
        text-decoration: none;
        font-size: smaller;
    }
    
    a:active.button
    {
        padding: 5px;
        background-color: #A6A6A3;
        color: Black;
        border-right: solid 1px #FCFCFA;
        border-bottom: solid 1px #FCFCFA;
        border-left: solid 1px black;
        border-top: solid 1px black;
        text-decoration: none;
        font-size: smaller;
    }
-->
</style>
<p>效果演示：</p>
<p><a title="我是一个链接按钮" target="_self" class="button" href="#">我是一个链接按钮</a></p>
<p>原理：将一个链接，加上一个class属性，对此class属性，设置相关的css来模拟一个按钮的样式，使得链接看上去像一个按钮，并且具有鼠标未按下时的上浮效果以及鼠标按下时的下沉效果。并且当鼠标滑过时，可以高亮显示。源代码为：</p>
<pre class="brush: css">&lt;style type="text/css"&gt;
&lt;!--
    
    a:link.button
    {
        padding: 5px;
        background-color: #F6F6F3;
        color: Black;
        border-left: solid 1px #FCFCFA;
        border-top: solid 1px #FCFCFA;
        border-right: solid 1px black;
        border-bottom: solid 1px black;
        text-decoration: none;
        font-size: smaller;
    }

    a:visited.button
    {
        padding: 5px;
        background-color: #F6F6F3;
        color: Black;
        border-left: solid 1px #FCFCFA;
        border-top: solid 1px #FCFCFA;
        border-right: solid 1px black;
        border-bottom: solid 1px black;
        text-decoration: none;
        font-size: smaller;
    }
    
    a:hover.button
    {
        padding: 5px;
        background-color: Yellow;
        color: Black;
        border-left: solid 1px #FCFCFA;
        border-top: solid 1px #FCFCFA;
        border-right: solid 1px black;
        border-bottom: solid 1px black;
        text-decoration: none;
        font-size: smaller;
    }
    
    a:active.button
    {
        padding: 5px;
        background-color: #A6A6A3;
        color: Black;
        border-right: solid 1px #FCFCFA;
        border-bottom: solid 1px #FCFCFA;
        border-left: solid 1px black;
        border-top: solid 1px black;
        text-decoration: none;
        font-size: smaller;
    }
--&gt;
&lt;/style&gt;

&lt;p&gt;&lt;a title="我是一个链接按钮" target="_self" class="button" href="#"&gt;我是一个链接按钮&lt;/a&gt;&lt;/p&gt;
</pre>
      