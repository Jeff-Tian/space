---
stackbit_url_path: >-
  posts/用DIV-+-CSS-打造垂直V形列表
title: '用DIV + CSS 打造垂直V形列表'
date: '2010-04-03 09:26:29'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <style type="text/css">
<!--  
        .workflow 
        {
            position: relative;
            width: 640px;
            height: 640px;
        }
        
        .workflow .item 
        {
            height: 7em;
            float: none;
            clear: both;
            position: absolute;
            width: 600px;
        }
        
        .workflow .item .left 
        {
            width: 10%;
            height: 100%;
            float: left;
            position: relative;
        }
        
        .workflow .item .left .top 
        {
            width: 100%;
            height: 30%;
            background-color: Transparent;
        }
        
        .workflow .item .left .top .left 
        {
            height: 100%;
            width: 50%;
            float: left;
            background: url('../../images/WhiteTriangle_Left.gif') no-repeat center center;
        }
        
        .workflow .item .left .top .right
        {
            height: 100%;
            width: 50%;
            float: right;
            background: url('../../images/WhiteTriangle.gif') no-repeat center center;
        }
        
        .workflow .item .left .middle 
        {
            width: 100%;
            color: White;
            text-align: center;
            vertical-align: middle;
            line-height: 3em;            
            background-color: #4F81BD;
        }
        
        .workflow .item .left .bottom 
        {
            width: 100%;
            height: 30%;
            bottom: 0;
            position: absolute;
            background-color: #4F81BD;
        }
        
        .workflow .item .left .bottom .left 
        {
            height: 100%;
            width: 50%;
            float: left;
            background: url('../../images/WhiteTriangle_LeftBottom.gif') no-repeat center center;
        }
        
        .workflow .item .left .bottom .right 
        {
            height: 100%;
            width: 50%;
            float: right;
            background: url('../../images/WhiteTriangle_RightBottom.gif') no-repeat center center;
        }
        
        .workflow .item .rightDetail
        {
            height: 100%;
            float: left;
            width: 80%;
        }
        
        .workflow .item .rightDetail .top 
        {
            width: 100%;
            height: 66%;
            border: solid 2px #4F81BD;
        }
        
        .workflow .item .rightDetail .top ul 
        {
            margin-top: 0;
            margin-left: 0;
            padding-left: 1em;
            list-style-position: inside;
        }
        
        .workflow .item .rightDetail .top ul li 
        {
            color: Black;
        }
        
        .workflow .item .rightDetail .bottom 
        { 
            width: 100%;
            height: 30%;
        }
        
        .workflow .item .clear 
        {
            clear: both;
            float: none;
            width: 0;
            height: 0;
        }
-->
</style>
<p>用DIV+CSS打造垂直V形列表一列，效果如下：</p>
<div class="workflow">
<div class="item">
<div class="left">
<div class="top">
<div class="left">&nbsp;</div>
<div class="right">&nbsp;</div>
</div>
<div class="middle">打托</div>
<div class="bottom">
<div class="left">&nbsp;</div>
<div class="right">&nbsp;</div>
</div>
</div>
<div class="rightDetail">
<div class="top">
<ul>
    <li>将车上的货物放在托盘上</li>
    <li>1分37秒</li>
</ul>
</div>
<div class="bottom">&nbsp;</div>
</div>
<div class="clear">&nbsp;</div>
</div>
<div class="item" style="margin-top: 5.4em;   ">
<div class="left">
<div class="top">
<div class="left">&nbsp;</div>
<div class="right">&nbsp;</div>
</div>
<div class="middle">卸货</div>
<div class="bottom">
<div class="left">&nbsp;</div>
<div class="right">&nbsp;</div>
</div>
</div>
<div class="rightDetail">
<div class="top">
<ul>
    <li>将托盘拉到分拣区</li>
    <li>40秒</li>
</ul>
</div>
<div class="bottom">&nbsp;</div>
</div>
<div class="clear">&nbsp;</div>
</div>
<div class="item" style="margin-top: 10.8em;   ">
<div class="left">
<div class="top">
<div class="left">&nbsp;</div>
<div class="right">&nbsp;</div>
</div>
<div class="middle">分拣</div>
<div class="bottom">
<div class="left">&nbsp;</div>
<div class="right">&nbsp;</div>
</div>
</div>
<div class="rightDetail">
<div class="top">
<ul>
    <li>对拉下来的货物进行130扫描，分目的地放在不同的托盘上</li>
    <li>1分03秒</li>
</ul>
</div>
<div class="bottom">&nbsp;</div>
</div>
<div class="clear">&nbsp;</div>
</div>
<div class="item" style="margin-top: 16.2em;   ">
<div class="left">
<div class="top">
<div class="left">&nbsp;</div>
<div class="right">&nbsp;</div>
</div>
<div class="middle">归位</div>
<div class="bottom">
<div class="left">&nbsp;</div>
<div class="right">&nbsp;</div>
</div>
</div>
<div class="rightDetail">
<div class="top">
<ul>
    <li>将分拣好的托盘依目的地拉到各自的区位</li>
    <li>51秒</li>
</ul>
</div>
<div class="bottom">&nbsp;</div>
</div>
<div class="clear">&nbsp;</div>
</div>
<div class="item" style="margin-top: 21.6em;   ">
<div class="left">
<div class="top">
<div class="left">&nbsp;</div>
<div class="right">&nbsp;</div>
</div>
<div class="middle">装配</div>
<div class="bottom">
<div class="left">&nbsp;</div>
<div class="right">&nbsp;</div>
</div>
</div>
<div class="rightDetail">
<div class="top">
<ul>
    <li>在区位对货物进行121扫描，作好装车的准备</li>
    <li>3分44秒</li>
</ul>
</div>
<div class="bottom">&nbsp;</div>
</div>
<div class="clear">&nbsp;</div>
</div>
<div class="item" style="margin-top: 27.0em;   ">
<div class="left">
<div class="top">
<div class="left">&nbsp;</div>
<div class="right">&nbsp;</div>
</div>
<div class="middle">装车</div>
<div class="bottom">
<div class="left">&nbsp;</div>
<div class="right">&nbsp;</div>
</div>
</div>
<div class="rightDetail">
<div class="top">
<ul>
    <li>将货物按托盘拉到车位</li>
    <li>1分01秒</li>
</ul>
</div>
<div class="bottom">&nbsp;</div>
</div>
<div class="clear">&nbsp;</div>
</div>
<div class="item" style="margin-top: 32.4em;   ">
<div class="left">
<div class="top">
<div class="left">&nbsp;</div>
<div class="right">&nbsp;</div>
</div>
<div class="middle">卸托</div>
<div class="bottom">
<div class="left">&nbsp;</div>
<div class="right">&nbsp;</div>
</div>
</div>
<div class="rightDetail">
<div class="top">
<ul>
    <li>将托盘上的货卸下，有序地码进车厢</li>
    <li>1分14秒</li>
</ul>
</div>
<div class="bottom">&nbsp;</div>
</div>
<div class="clear">&nbsp;</div>
</div>
<div class="item" style="margin-top: 37.8em;   ">
<div class="left">
<div class="top">
<div class="left">&nbsp;</div>
<div class="right">&nbsp;</div>
</div>
<div class="middle">完毕</div>
<div class="bottom">
<div class="left">&nbsp;</div>
<div class="right">&nbsp;</div>
</div>
</div>
<div class="rightDetail">
<div class="top">
<ul>
    <li>完毕</li>
</ul>
</div>
<div class="bottom">&nbsp;</div>
</div>
<div class="clear">&nbsp;</div>
</div>
</div>
<p>以上效果的源码为：</p>
<pre class="brush: html">&lt;style type="text/css"&gt;
&lt;!--   
        .workflow 
        {
            position: relative;
            width: 800px;
            height: 600px;
        }
        
        .workflow .item 
        {
            height: 7em;
            float: none;
            clear: both;
            position: absolute;
            width: 700px;
        }
        
        .workflow .item .left 
        {
            width: 10%;
            height: 100%;
            float: left;
            position: relative;
        }
        
        .workflow .item .left .top 
        {
            width: 100%;
            height: 30%;
            background-color: Transparent;
        }
        
        .workflow .item .left .top .left 
        {
            height: 100%;
            width: 50%;
            float: left;
            background: url('images/WhiteTriangle_Left.gif') no-repeat center center;
        }
        
        .workflow .item .left .top .right
        {
            height: 100%;
            width: 50%;
            float: right;
            background: url('images/WhiteTriangle.gif') no-repeat center center;
        }
        
        .workflow .item .left .middle 
        {
            width: 100%;
            color: White;
            text-align: center;
            vertical-align: middle;
            line-height: 3em;            
            background-color: #4F81BD;
        }
        
        .workflow .item .left .bottom 
        {
            width: 100%;
            height: 30%;
            bottom: 0;
            position: absolute;
            background-color: #4F81BD;
        }
        
        .workflow .item .left .bottom .left 
        {
            height: 100%;
            width: 50%;
            float: left;
            background: url('images/WhiteTriangle_LeftBottom.gif') no-repeat center center;
        }
        
        .workflow .item .left .bottom .right 
        {
            height: 100%;
            width: 50%;
            float: right;
            background: url('images/WhiteTriangle_RightBottom.gif') no-repeat center center;
        }
        
        .workflow .item .rightDetail
        {
            height: 100%;
            float: left;
            width: 80%;
        }
        
        .workflow .item .rightDetail .top 
        {
            width: 100%;
            height: 66%;
            border: solid 2px #4F81BD;
        }
        
        .workflow .item .rightDetail .top ul 
        {
            margin-top: 0;
            margin-left: 0;
            padding-left: 1em;
            list-style-position: inside;
        }
        
        .workflow .item .rightDetail .top ul li 
        {
            color: Black;
        }
        
        .workflow .item .rightDetail .bottom 
        { 
            width: 100%;
            height: 30%;
        }
        
        .workflow .item .clear 
        {
            clear: both;
            float: none;
            width: 0;
            height: 0;
        }
--&gt;
&lt;/style&gt;
&lt;div class="workflow"&gt;
                            &lt;div class="item"&gt;
                                &lt;div class="left"&gt;
                                    &lt;div class="top"&gt;
                                        &lt;div class="left"&gt;&lt;/div&gt;
                                        &lt;div class="right"&gt;&lt;/div&gt;
                                    &lt;/div&gt;
                                    &lt;div class="middle"&gt;打托&lt;/div&gt;
                                    &lt;div class="bottom"&gt;                                    
                                        &lt;div class="left"&gt;&lt;/div&gt;
                                        &lt;div class="right"&gt;&lt;/div&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="rightDetail"&gt;
                                    &lt;div class="top"&gt;
                                        &lt;ul&gt;
                                            &lt;li&gt;将车上的货物放在托盘上&lt;/li&gt;
                                            &lt;li&gt;1分37秒&lt;/li&gt;
                                        &lt;/ul&gt;
                                    &lt;/div&gt;
                                    &lt;div class="bottom"&gt;&lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="clear"&gt;&lt;/div&gt;
                            &lt;/div&gt;    
                            
                            &lt;div class="item" style="margin-top: 5.4em;   "&gt;
                                &lt;div class="left"&gt;
                                    &lt;div class="top"&gt;
                                        &lt;div class="left"&gt;&lt;/div&gt;
                                        &lt;div class="right"&gt;&lt;/div&gt;
                                    &lt;/div&gt;
                                    &lt;div class="middle"&gt;卸货&lt;/div&gt;
                                    &lt;div class="bottom"&gt;                                    
                                        &lt;div class="left"&gt;&lt;/div&gt;
                                        &lt;div class="right"&gt;&lt;/div&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="rightDetail"&gt;
                                    &lt;div class="top"&gt;
                                        &lt;ul&gt;
                                            &lt;li&gt;将托盘拉到分拣区&lt;/li&gt;
                                            &lt;li&gt;40秒&lt;/li&gt;
                                        &lt;/ul&gt;
                                    &lt;/div&gt;
                                    &lt;div class="bottom"&gt;&lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="clear"&gt;&lt;/div&gt;
                            &lt;/div&gt;
                            
                            &lt;div class="item" style="margin-top: 10.8em;   "&gt;
                                &lt;div class="left"&gt;
                                    &lt;div class="top"&gt;
                                        &lt;div class="left"&gt;&lt;/div&gt;
                                        &lt;div class="right"&gt;&lt;/div&gt;
                                    &lt;/div&gt;
                                    &lt;div class="middle"&gt;分拣&lt;/div&gt;
                                    &lt;div class="bottom"&gt;                                    
                                        &lt;div class="left"&gt;&lt;/div&gt;
                                        &lt;div class="right"&gt;&lt;/div&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="rightDetail"&gt;
                                    &lt;div class="top"&gt;
                                        &lt;ul&gt;
                                            &lt;li&gt;对拉下来的货物进行130扫描，分目的地放在不同的托盘上&lt;/li&gt;
                                            &lt;li&gt;1分03秒&lt;/li&gt;
                                        &lt;/ul&gt;
                                    &lt;/div&gt;
                                    &lt;div class="bottom"&gt;&lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="clear"&gt;&lt;/div&gt;
                            &lt;/div&gt;
                            
                            &lt;div class="item" style="margin-top: 16.2em;   "&gt;
                                &lt;div class="left"&gt;
                                    &lt;div class="top"&gt;
                                        &lt;div class="left"&gt;&lt;/div&gt;
                                        &lt;div class="right"&gt;&lt;/div&gt;
                                    &lt;/div&gt;
                                    &lt;div class="middle"&gt;归位&lt;/div&gt;
                                    &lt;div class="bottom"&gt;                                    
                                        &lt;div class="left"&gt;&lt;/div&gt;
                                        &lt;div class="right"&gt;&lt;/div&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="rightDetail"&gt;
                                    &lt;div class="top"&gt;
                                        &lt;ul&gt;
                                            &lt;li&gt;将分拣好的托盘依目的地拉到各自的区位&lt;/li&gt;
                                            &lt;li&gt;51秒&lt;/li&gt;
                                        &lt;/ul&gt;
                                    &lt;/div&gt;
                                    &lt;div class="bottom"&gt;&lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="clear"&gt;&lt;/div&gt;
                            &lt;/div&gt;
                            
                            &lt;div class="item" style="margin-top: 21.6em;   "&gt;
                                &lt;div class="left"&gt;
                                    &lt;div class="top"&gt;
                                        &lt;div class="left"&gt;&lt;/div&gt;
                                        &lt;div class="right"&gt;&lt;/div&gt;
                                    &lt;/div&gt;
                                    &lt;div class="middle"&gt;装配&lt;/div&gt;
                                    &lt;div class="bottom"&gt;                                    
                                        &lt;div class="left"&gt;&lt;/div&gt;
                                        &lt;div class="right"&gt;&lt;/div&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="rightDetail"&gt;
                                    &lt;div class="top"&gt;
                                        &lt;ul&gt;
                                            &lt;li&gt;在区位对货物进行121扫描，作好装车的准备&lt;/li&gt;
                                            &lt;li&gt;3分44秒&lt;/li&gt;
                                        &lt;/ul&gt;
                                    &lt;/div&gt;
                                    &lt;div class="bottom"&gt;&lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="clear"&gt;&lt;/div&gt;
                            &lt;/div&gt;
                            
                            &lt;div class="item" style="margin-top: 27.0em;   "&gt;
                                &lt;div class="left"&gt;
                                    &lt;div class="top"&gt;
                                        &lt;div class="left"&gt;&lt;/div&gt;
                                        &lt;div class="right"&gt;&lt;/div&gt;
                                    &lt;/div&gt;
                                    &lt;div class="middle"&gt;装车&lt;/div&gt;
                                    &lt;div class="bottom"&gt;                                    
                                        &lt;div class="left"&gt;&lt;/div&gt;
                                        &lt;div class="right"&gt;&lt;/div&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="rightDetail"&gt;
                                    &lt;div class="top"&gt;
                                        &lt;ul&gt;
                                            &lt;li&gt;将货物按托盘拉到车位&lt;/li&gt;
                                            &lt;li&gt;1分01秒&lt;/li&gt;
                                        &lt;/ul&gt;
                                    &lt;/div&gt;
                                    &lt;div class="bottom"&gt;&lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="clear"&gt;&lt;/div&gt;
                            &lt;/div&gt;
                            
                            &lt;div class="item" style="margin-top: 32.4em;   "&gt;
                                &lt;div class="left"&gt;
                                    &lt;div class="top"&gt;
                                        &lt;div class="left"&gt;&lt;/div&gt;
                                        &lt;div class="right"&gt;&lt;/div&gt;
                                    &lt;/div&gt;
                                    &lt;div class="middle"&gt;卸托&lt;/div&gt;
                                    &lt;div class="bottom"&gt;                                    
                                        &lt;div class="left"&gt;&lt;/div&gt;
                                        &lt;div class="right"&gt;&lt;/div&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="rightDetail"&gt;
                                    &lt;div class="top"&gt;
                                        &lt;ul&gt;
                                            &lt;li&gt;将托盘上的货卸下，有序地码进车厢&lt;/li&gt;
                                            &lt;li&gt;1分14秒&lt;/li&gt;
                                        &lt;/ul&gt;
                                    &lt;/div&gt;
                                    &lt;div class="bottom"&gt;&lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="clear"&gt;&lt;/div&gt;
                            &lt;/div&gt;
                            
                            &lt;div class="item" style="margin-top: 32.4em;   "&gt;
                                &lt;div class="left"&gt;
                                    &lt;div class="top"&gt;
                                        &lt;div class="left"&gt;&lt;/div&gt;
                                        &lt;div class="right"&gt;&lt;/div&gt;
                                    &lt;/div&gt;
                                    &lt;div class="middle"&gt;完毕&lt;/div&gt;
                                    &lt;div class="bottom"&gt;                                    
                                        &lt;div class="left"&gt;&lt;/div&gt;
                                        &lt;div class="right"&gt;&lt;/div&gt;
                                    &lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="rightDetail"&gt;
                                    &lt;div class="top"&gt;
                                        &lt;ul&gt;
                                            &lt;li&gt;完毕&lt;/li&gt;
                                        &lt;/ul&gt;
                                    &lt;/div&gt;
                                    &lt;div class="bottom"&gt;&lt;/div&gt;
                                &lt;/div&gt;
                                &lt;div class="clear"&gt;&lt;/div&gt;
                            &lt;/div&gt;
                        &lt;/div&gt;
</pre>
      