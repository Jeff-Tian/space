---
stackbit_url_path: >-
  posts/在JavaScript中实现重载机制
title: '在JavaScript中实现重载机制'
date: '2012-06-21 07:34:53.2744313'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - javascript
  - 重载
canonical_url: >-
template: post
---
<h2><font color="#800080">一、背景：</font></h2>  <p>在面向对象的编程语言中，通过重载机制，使得同一个方法名可以具有不同的实现，这些不同的实现版本具有不同的参数（个数、类型都可以不同）。这些不同的参数形成了方法的不同的特征（或者叫签名），从而在使用中，即使方法名相同，程序也能正确地找到对应的版本。</p>  <p>在JavaScript中，没有内置的重载机制，但是它对每个方法（函数）都提供了一个arguments对象，该对象具有传递过来的参数信息，我们可以利用它来实现（或者说模拟）重载机制。</p>  <p>为什么要写多余的代码来实现这个重载机制呢？其实一般不需要，但是在某些情况下，多加一点点代码来实现重载机制后，带来的是巨大的灵活性和可重用性。否则给做同样事情的方法或函数，仅仅因为传进来的参数稍有不同就起不同的名字，会显得非常冗余、奇怪和不容易记忆。</p>  <h2><font color="#800080">二、分析：</font></h2>  <p>在内置重载机制的语言里，编译器要对函数的参数列表进行两种分析：</p>  <ol>   <li>参数个数：对相同名字的方法（或者说函数），不同的参数个数对应不同的实现版本； </li>    <li>参数的类型：参数的个数相同，但是处于同一位置的参数类型不一样，那么也能区分出它们的不同版本。 </li> </ol>  <p>在JavaScript中，没有内置这样的机制，我们可以在代码中用同样的方法自己实现，基本思路是也是如此：</p>  <ol>   <li>参数个数：通过调用arguments.length，对不同个数的参数给予不同的实现； </li>    <li>参数的类型：通过 typeof arguments[i] 测试参数的类型，对不同的类型给予不同的代码实现。 </li> </ol>  <p>具体实现时，需要先对所有可能的参数给予良好的默认值，当传进来的参数存在时，就用传进来的值去覆盖默认值。</p>  <h2><font color="#800080">三、实例：</font></h2>  <pre class="brush: javascript">/// <summary>
///     序列化一个对象（递归地）
/// </summary>
/// <param name="o" />要被序列化的对象</param>
/// <param name="level" />当前正在被序列化的对象在序列化树中的层级（根级为0）</param>
/// <param name="varName" />当前正在被序列化的对象的变量名</param>
/// <remark>
///     该方法有四个重载：
///     1. serializeObject(o);
///     2. serializeObject(o, level);
///     3. serializeObject(o, varName);
///     4. serializeObject(o, level, varName);
/// </remark>
function serializeObject (){            
    // 参数列表：
    var o = arguments[0];
    var level = 0;          
    var varName = &quot;&quot;;     

    // 重载机制:
    switch(typeof arguments[1]){
        case &quot;number&quot;:
            // 重载 2： serializeObject(o, level);
            level = arguments[1];
            if(arguments.length &gt; 2) {
                // 重载 4： serializeObject(o, level, varName);
                varName = arguments[2];
            }
            break;
        case &quot;string&quot;:
            // 重载 3： serializeObject(o, varName);
            varName = arguments[1];
            break;
        default:
            // 重载 1： serializeObject(o);
            break;
    }

    var sb = new StringBuffer();
    // 根对象信息：
    sb.appendLine(&quot;{0}{1}&lt;{2}&gt;: [{3}]&quot;.format(level &gt; 0 ? &quot; &quot;.duplicate(level*2) + &quot;|-&quot; : &quot;&quot;, varName, typeof o, o === null ? &quot;null&quot; : o === undefined ? &quot;undefined&quot; : o.toString()));
    // 子对象信息：
    switch(typeof o) {
        case &quot;object&quot;:
            for(var i in o){
                //sb.appendLine(&quot;{0}{1}&lt;{2}&gt;: [{3}]&quot;.format(&quot; &quot;.duplicate((level+1)*2), i, typeof o[i], o[i] === null ? &quot;null&quot; : o[i] === undefined ? &quot;undefined&quot; : o[i].toString()));
                sb.append(serializeObject(o[i], level + 1, i));
            } // end for
            break;
        case &quot;undefined&quot;:
            break;
        default:
            // 根对象的prototype信息：
            switch(typeof o.prototype){
                case &quot;undefined&quot;:
                    break;
                default:
                    sb.append(serializeObject(o.prototype, level + 1, &quot;prototype&quot;));
                    break;
            } // end switch (typeof o.prototype)
            break;
    } // end switch (typeof o)
    return sb.toString();
}</pre>

<h2><font color="#800080">四、测试：</font></h2>

<p>对于上述的这个函数，我们可以根据通过如下方式去调用：</p>

<pre class="brush: javascript">var o = {
	a: 2,
	b: 3,
	c: {
		prop1: &quot;abc&quot;,
		prop2: &quot;bcd&quot;,
		prop3: {
			key1: &quot;key1&quot;,
			key2: &quot;key2&quot;
		},
		prop4: &quot;cde&quot;
	},
	d: &quot;Hello&quot;
};

alert(serializeObject(o));
alert(serializeObject(o, 4));
alert(serializeObject(o, &quot;o&quot;));
alert(serializeObject(o, 4, &quot;o&quot;));</pre>

<p>这样，就避免了这样的情况：</p>

<pre class="brush: javascript">alert(serializeObject(o));
alert(serializeObjectWithInitialLevel(o, 4));
alert(serializeObjectWithVarName(o, &quot;o&quot;));
alert(serializeObjectWithInitialLevelAndVarName(o, 4, &quot;o&quot;));</pre>

<p>可见，重载方案要优雅得多！</p>

<p>注意：在这个示例重载函数serializeObject()中，使用了StringBuffer对象，String对象的format()和duplicate()方法，它们不是JavaScript内置的，它们的介绍分别见：</p>

<ul>
  <li>《<a href="http://zizhujy.com/blog/post/2011/08/03/StringBuffer-class-in-JavaScript.aspx">JavaScript 版 StringBuffer 类</a>》</li>

  <li>《<a href="http://zizhujy.com/blog/post/2011/08/02/add-format-method-to-string-object-in-javascript.aspx">给JavaScript的String对象添加一个format方法</a>》</li>

  <li>《<a href="http://zizhujy.com/blog/post/2012/06/16/%E5%BA%8F%E5%88%97%E5%8C%96JavaScript%E5%AF%B9%E8%B1%A1.aspx">序列化JavaScript对象</a>》中对duplicate()的介绍</li>
</ul>

<p>以上测试代码的运行的第一个结果截图如下：</p>

<p><a href="http://www.myfootprints.cn/oldweb/javascript/" target="_blank"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="JavaScript重载机制测试结果" border="0" alt="JavaScript重载机制测试结果" src="http://www.zizhujy.com/blog/image.axd?picture=image_587.png" width="531" height="531" /></a> </p>

<p>完整的可运行的测试代码为：</p>

<pre class="brush: javascript">//
// String Buffer Class
//
function StringBuffer() {
    this.__strings__ = new Array();

    if (typeof StringBuffer._initialized == &quot;undefined&quot;) {
        StringBuffer.prototype.append = function (s) {
            this.__strings__.push(s);
        };

        StringBuffer.prototype.appendLine = function (s) {
            this.__strings__.push(s + &quot;\n&quot;);
        };

        StringBuffer.prototype.toString = function () {
            return this.__strings__.join(&quot;&quot;);
        };

        StringBuffer._initialized = true;
    }
}

String.prototype.format = function () {
    //        return String.format.apply(arguments);
    var string = this;
    for (var i = 0; i &lt; arguments.length; i++) {
        string = string.replace(&quot;{&quot; + i + &quot;}&quot;, arguments[i]);
    }

    return string;
};

/// <summary>
///     复制字符串为原来的n倍
/// </summary>
String.prototype.duplicate = function (n) {
    var sb = new StringBuffer();
    for (var i = 0; i &lt; n; i++) {
        sb.append(this);
    }

    return sb.toString();
};

/// <summary>
///     序列化一个对象（递归地）
/// </summary>
/// <param name="o" />要被序列化的对象</param>
/// <param name="level" />当前正在被序列化的对象在序列化树中的层级（根级为0）</param>
/// <param name="varName" />当前正在被序列化的对象的变量名</param>
/// <remark>
///     该方法有四个重载：
///     1. serializeObject(o);
///     2. serializeObject(o, level);
///     3. serializeObject(o, varName);
///     4. serializeObject(o, level, varName);
/// </remark>
function serializeObject() {
    // 参数列表：
    var o = arguments[0];
    var level = 0;
    var varName = &quot;&quot;;

    // 重载机制:
    switch (typeof arguments[1]) {
        case &quot;number&quot;:
            // 重载 2： serializeObject(o, level);
            level = arguments[1];
            if (arguments.length &gt; 2) {
                // 重载 4： serializeObject(o, level, varName);
                varName = arguments[2];
            }
            break;
        case &quot;string&quot;:
            // 重载 3： serializeObject(o, varName);
            varName = arguments[1];
            break;
        default:
            // 重载 1： serializeObject(o);
            break;
    }

    var sb = new StringBuffer();
    // 根对象信息：
    sb.appendLine(&quot;{0}{1}&lt;{2}&gt;: [{3}]&quot;.format(level &gt; 0 ? &quot; &quot;.duplicate(level * 2) + &quot;|-&quot; : &quot;&quot;, varName, typeof o, o === null ? &quot;null&quot; : o === undefined ? &quot;undefined&quot; : o.toString()));
    // 子对象信息：
    switch (typeof o) {
        case &quot;object&quot;:
            for (var i in o) {
                //sb.appendLine(&quot;{0}{1}&lt;{2}&gt;: [{3}]&quot;.format(&quot; &quot;.duplicate((level+1)*2), i, typeof o[i], o[i] === null ? &quot;null&quot; : o[i] === undefined ? &quot;undefined&quot; : o[i].toString()));
                sb.append(serializeObject(o[i], level + 1, i));
            } // end for
            break;
        case &quot;undefined&quot;:
            break;
        default:
            // 根对象的prototype信息：
            switch (typeof o.prototype) {
                case &quot;undefined&quot;:
                    break;
                default:
                    sb.append(serializeObject(o.prototype, level + 1, &quot;prototype&quot;));
                    break;
            } // end switch (typeof o.prototype)
            break;
    } // end switch (typeof o)
    return sb.toString();
};

var o = {
    a: 2,
    b: 3,
    c: {
        prop1: &quot;abc&quot;,
        prop2: &quot;bcd&quot;,
        prop3: {
            key1: &quot;key1&quot;,
            key2: &quot;key2&quot;
        },
        prop4: &quot;cde&quot;
    },
    d: &quot;Hello&quot;
};

alert(serializeObject(o));
alert(serializeObject(o, 4));
alert(serializeObject(o, &quot;o&quot;));
alert(serializeObject(o, 4, &quot;o&quot;));</pre>