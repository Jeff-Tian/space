---
stackbit_url_path: >-
  posts/给JavaScript的Array类添加几个统计方法
title: '给JavaScript的Array类添加几个统计方法'
date: '2011-11-02 07:16:11.2476625'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - javascript
  - 数学
  - 统计
canonical_url: https://be-net.azurewebsites.net/post/2011/11/02/给JavaScript的Array类添加几个统计方法
template: post
---
<h1><font color="#9b00d3"><font style="font-weight: bold">一、问题</font></font></h1>  <p>在编程对数据进行统计时，经常使用数组来存储数列。然后JavaScript的Array类，几乎没有相关的方法（除了.length得到数列的容量外）。</p>  <p>前面<a title="给JavaScript的Array对象添加两个最大最小值方法" href="http://www.zizhujy.com/blog/post/2011/10/27/%E7%BB%99JavaScript%E7%9A%84Array%E5%AF%B9%E8%B1%A1%E6%B7%BB%E5%8A%A0%E4%B8%A4%E4%B8%AA%E6%9C%80%E5%A4%A7%E6%9C%80%E5%B0%8F%E5%80%BC%E6%96%B9%E6%B3%95.aspx" target="_blank">给JavaScript的Array对象添加了两个最大最小值方法</a>，今天再给扩充一下，添加求和、平方和、平均值、偏差平方和、样本标准差、总体标准差这几个方法。</p>  <h1><font color="#9b00d3"><font style="font-weight: bold">二、源码</font></font></h1>  <pre class="brush: javascript">    Array.prototype.sum = function() {
        var s = 0;
        for(var i = 0; i &lt; this.length; i++) {
            s += this[i];
        }

        return s;
    };

    Array.prototype.squareSum = function() {
        var s = 0;
        for(var i = 0; i &lt; this.length; i++) {
            s += Math.pow(this[i], 2);
        }

        return s;
    };

    Array.prototype.average = function() {
        return this.sum() / this.length;
    };

    //
    // 偏差平方和
    //
    Array.prototype.squareSumOfErrors = function() {
        var s = 0;
        var avg = this.average();
        for(var i = 0; i &lt; this.length; i++) {
            s += Math.pow(this[i] - avg, 2);
        }
        return s;
    };

    //
    // 样本标准差
    //
    Array.prototype.sampleStandardDeviation = function() {
        return Math.sqrt(this.squareSumOfErrors() / (this.length - 1));
    };

    //
    // 总体标准差
    //
    Array.prototype.populationStandardDeviation = function () {
        return Math.sqrt(this.squareSumOfErrors() / this.length);
    };</pre>

<h1><font style="font-weight: bold" color="#9b00d3">三、应用</font></h1>

<p>在线应用描点器，就使用了上述方法，对给出的数据点求出了相关的统计量。</p>

<p><a href="http://www.zizhujy.com/zh-cn/Ploter" target="_blank"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="描点器" border="0" alt="描点器" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_166.png" width="470" height="667" /></a></p>