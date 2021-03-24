---
stackbit_url_path: >-
  posts/Array-对象的最大最小值方法之修订版
title: 'Array 对象的最大最小值方法之修订版'
date: '2011-12-18 03:12:35.3981614'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - javascript
  - max
  - min
  - 最大值
  - 最小值
canonical_url: >-
template: post
---
<h1><font color="#9b00d3"><font style="font-weight: bold">一、背景：</font></font></h1>  <p>十月27号，我写过《<a href="http://www.zizhujy.com/blog/post/2011/10/27/%E7%BB%99JavaScript%E7%9A%84Array%E5%AF%B9%E8%B1%A1%E6%B7%BB%E5%8A%A0%E4%B8%A4%E4%B8%AA%E6%9C%80%E5%A4%A7%E6%9C%80%E5%B0%8F%E5%80%BC%E6%96%B9%E6%B3%95.aspx">给JavaScript的Array对象添加两个最大最小值方法</a>》，非常简洁。今天我发现，这个简洁的实现给我惹了点麻烦。如果有一个数组，里面并不全为数字，那么，简洁版实现的最大最小值方法，将返回NaN对象，即Not a Number。</p>  <h1><font color="#9b00d3"><font style="font-weight: bold">二、目标：</font></font></h1>  <p>我希望达到的效果是，如果数组里面不全为<strong>有限</strong>数字，最大最小值方法仍然能够返回其中的<strong>有限</strong>数字部分的最大最小值。如果全不为数字，则最大值方法返回-Infinity，最小值方法返回Infinity，让调用者知道程序返回了无意义的结果。</p>  <h1><font color="#9b00d3"><font style="font-weight: bold">三、解决方案：</font></font></h1>  <p>显然，需要对Array对象再添加一个筛选有限数字的方法。怎样筛选呢？又需要添加一个判断一个对象是否为有限数字的方法，我把这个判断一个对象是否是有限数字的方法添加到了Math对象中。如下：</p>  <pre class="brush: javascript">    //
    // 判断一个对象是否是有限数字
    //
    Math.isFiniteNumber = function (o) {
        if(typeof o === &quot;number&quot;) {
            return !isNaN(o) &amp;&amp; isFinite(o);
        } else {
            return false;
        }
    };</pre>

<p>&#160;</p>

<blockquote style="border-bottom: black 1px solid; border-left: black 1px solid; background-color: #eeeeee; border-top: black 1px solid; border-right: black 1px solid">
  <p>上面的测试条件中使用了===。用VB多年后，学C的时候，看到==，我崩溃了。后来再学JavaScript，居然看到有===，于是再次崩溃。其实，===与==意思一样，就是判断是否相等，只不过===是更严格的相等。JavaScript中有undefined对象，你可以<a href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=alert(undefined%20%3D%3D%20null)%3B%0Aalert(undefined%20%3D%3D%3D%20null)%3B" target="_blank">测试一下</a>，undefined == null 返回 true，而 undefined === null 则返回 false。</p>
</blockquote>

<p>有了这个，就可以给Array对象添加筛选有限数字的方法了。</p>

<pre class="brush: javascript">    //
    // 筛选有限数字
    //
    Array.prototype.screenFiniteNumber = function () {
        var data = [];
        for(var i = 0; i &lt; this.length; i++) {
            if(Math.isFiniteNumber(this[i])) {
                data.push(this[i]);
            }
        }
        return data;
    };</pre>

<p>最后，是最大最小值方法。可以发现仅仅是将简洁版实现的this替换成了this.screenFiniteNumber()：</p>

<pre class="brush: javascript">    //
    // 给数组对象添加一个 min() 方法
    //
    Array.prototype.min = function () {
        return Math.min.apply(null, this.screenFiniteNumber());
    };

    //
    // 给数组添加一个 max() 方法
    //
    Array.prototype.max = function () {
        return Math.max.apply(null, this.screenFiniteNumber());
    };</pre>

<h1><font color="#9b00d3"><font style="font-weight: bold">四、效果：</font></font></h1>

<p><a title="点击这里运行" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=%0A%20%20%20%20Math.isFiniteNumber%20%3D%20function%20(o)%20%7B%0A%20%20%20%20%20%20%20%20if(typeof%20o%20%3D%3D%3D%20%22number%22)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20!isNaN(o)%20%26%26%20isFinite(o)%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20false%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20Array.prototype.screenFiniteNumber%20%3D%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20var%20data%20%3D%20%5B%5D%3B%0A%20%20%20%20%20%20%20%20for(var%20i%20%3D%200%3B%20i%20%3C%20this.length%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if(Math.isFiniteNumber(this%5Bi%5D))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20data.push(this%5Bi%5D)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20return%20data%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20%2F%2F%0A%20%20%20%20%2F%2F%20%E7%BB%99%E6%95%B0%E7%BB%84%E5%AF%B9%E8%B1%A1%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%B8%AA%20min()%20%E6%96%B9%E6%B3%95%0A%20%20%20%20%2F%2F%0A%20%20%20%20Array.prototype.min%20%3D%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20return%20Math.min.apply(null%2C%20this.screenFiniteNumber())%3B%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20Array.prototype.max%20%3D%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20return%20Math.max.apply(null%2C%20this.screenFiniteNumber())%3B%0A%20%20%20%20%7D%3B%0A%0Avar%20a%20%3D%20%5B1%2C%202%2C%204%2C%205%2C%20%22ab%22%5D%3B%0Aalert(%22%E6%9C%80%E5%A4%A7%E5%80%BC%EF%BC%9A%22%20%2B%20a.max())%3B%0Aalert(%22%E6%9C%80%E5%B0%8F%E5%80%BC%EF%BC%9A%22%20%2B%20a.min())%3B" target="_blank">点击这里运行</a></p>

<p>测试代码：</p>

<pre class="brush: javascript">var a = [1, 2, 4, 5, &quot;ab&quot;];
alert(&quot;最大值：&quot; + a.max());
alert(&quot;最小值：&quot; + a.min());</pre>

<p>&#160;</p>

<p>输出：</p>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_428.png"><img style="background-image: none; border-right-width: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_163.png" width="244" height="90" /></a><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_429.png"><img style="background-image: none; border-right-width: 0px; margin: 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_164.png" width="244" height="113" /></a></p>