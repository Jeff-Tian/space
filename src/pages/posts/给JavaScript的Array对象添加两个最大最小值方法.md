---
stackbit_url_path: >-
  posts/给JavaScript的Array对象添加两个最大最小值方法
title: '给JavaScript的Array对象添加两个最大最小值方法'
date: '2011-10-27 08:28:10.5746636'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - javascript
  - max
  - min
  - 最大值
  - 最小值
canonical_url: https://be-net.azurewebsites.net/post/2011/10/27/给JavaScript的Array对象添加两个最大最小值方法
template: post
---
<h1><font color="#9b00d3"><font style="font-weight: bold">一、问题</font></font></h1>  <p>有时候，对于一个装满数字的数组，希望快速地得到其最大值、最小值分别是多少。真希望通过如下方式来取得：</p>  <pre class="brush: javascript">var a = [1, 2, 3, 4];
alert(&quot;最大值：&quot; + a.max());
alert(&quot;最小值：&quot; + a.min());</pre>

<p>只可惜JavaScript的数组对象没有自带此两种方法，有必要增强一下。</p>

<h1><font color="#9b00d3"><font style="font-weight: bold">二、解决方案</font></font></h1>

<p>利用JavaScript的Array对象的prototype对象进行添加：</p>

<pre class="brush: javascript">    //
    // 给数组对象添加一个 min() 方法
    //
    Array.prototype.min = function () {
        return Math.min.apply(null, this);
    };

    //
    // 给数组对象添加一个 max() 方法
    //
    Array.prototype.max = function () {
        return Math.max.apply(null, this);
    };</pre>

<h1><font color="#9b00d3"><font style="font-weight: bold">三、立即试用！</font></font></h1>

<p align="center"><a title="点击这里运行" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=Array.prototype.min%20%3D%20function%20()%20%7B%0A%09return%20Math.min.apply(null%2C%20this)%3B%0A%7D%3B%0AArray.prototype.max%20%3D%20function%20()%20%7B%0A%09return%20Math.max.apply(null%2C%20this)%3B%0A%7D%3B%0A%0Avar%20a%20%3D%20%5B1%2C%202%2C%203%2C%204%5D%3B%0Aalert(%22%E6%9C%80%E5%A4%A7%E5%80%BC%EF%BC%9A%22%20%2B%20a.max())%3B%0Aalert(%22%E6%9C%80%E5%B0%8F%E5%80%BC%EF%BC%9A%22%20%2B%20a.min())%3B" target="_blank">点击这里运行</a></p>