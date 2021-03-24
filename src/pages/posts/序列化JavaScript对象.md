---
stackbit_url_path: >-
  posts/序列化JavaScript对象
title: '序列化JavaScript对象'
date: '2012-06-16 04:04:53.0670231'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - javascript
  - 序列化
canonical_url: >-
template: post
---
<h2><font color="#800080">一、问题：</font></h2>  <p>欲将一个JavaScript对象，按如下格式<strong>序列化</strong>（序列化成字符串）：</p>  <ul>   <li>变量名&lt;类型&gt;: [值]      <ul>       <li>变量名&lt;类型&gt;: [值] </li>        <li>变量名&lt;类型&gt;: [值] </li>        <li>变量名&lt;类型&gt;: [值]          <ul>           <li>变量名&lt;类型&gt;: [值] </li>            <li>变量名&lt;类型&gt;: [值] </li>            <li>prototype&lt;类型&gt;: [值] </li>         </ul>       </li>        <li>prototype&lt;类型&gt;: [值] </li>     </ul>   </li> </ul>  <h2><font color="#800080">二、解决方案：</font></h2>  <h3>首先，定义几个辅助方法：</h3>  <p>1. duplicate(): 该方法将给定的字符串复制指定的次数后，与原来的字符串相拼接。</p>  <pre class="brush: javascript">/// <summary>
///     复制字符串为原来的n倍
/// </summary>
String.duplicate = function (s, n) {
    var sb = new StringBuffer();
    for (var i = 0; i &lt; n; i++) {
        sb.append(s);
    }
    return sb.toString();
};</pre>

<p>2. format(): 该方法按给定的字符串模板与参数列表，合成一个最终的字符串。详细介绍见《<a href="http://zizhujy.com/blog/post/2011/08/02/add-format-method-to-string-object-in-javascript.aspx">给JavaScript的String对象添加一个format方法</a>》：</p>

<h3>然后，定义一个辅助类，StringBuffer，用来高效地拼接字符串。</h3>

<p>详细介绍见：《<a href="http://zizhujy.com/blog/post/2011/08/03/StringBuffer-class-in-JavaScript.aspx">JavaScript 版 StringBuffer 类</a>》</p>

<h3>最后，递归地序列化指定的对象，源码如下：</h3>

<pre class="brush: javascript">/// <summary>
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
function serializeObject(){            
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
    sb.appendLine(&quot;{0}{1}&lt;{2}&gt;: [{3}]&quot;.format(&quot; &quot;.duplicate(level*2), varName, typeof o, o === null ? &quot;null&quot; : o === undefined ? &quot;undefined&quot; : o.toString()));
    // 子对象信息：
    switch(typeof o) {
        case &quot;object&quot;:
            for(var i in o){
                //sb.appendLine(&quot;{0}{1}&lt;{2}&gt;: [{3}]&quot;.format(&quot; &quot;.duplicate((level+1)*2), i, typeof o[i], o[i] === null ? &quot;null&quot; : o[i] === undefined ? &quot;undefined&quot; : o[i].toString()));
                sb.appendLine(this.serializeObject(o[i], level + 1, i));
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
                    sb.appendLine(this.serializeObject(o.prototype, level + 1, &quot;prototype&quot;));
                    break;
            } // end switch (typeof o.prototype)
            break;
    } // end switch (typeof o)
    return sb.toString();
}</pre>

<h3>完整的代码如下：</h3>

<pre class="brush: javascript">; (function () {
    if (typeof zizhujy == &quot;undefined&quot;) {
        zizhujy = {};

        window.zizhujy = zizhujy;
    }

    if (typeof zizhujy.com == &quot;undefined&quot;) {
        zizhujy.com = {
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
            serializeObject: function(){            
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
                sb.appendLine(&quot;{0}{1}&lt;{2}&gt;: [{3}]&quot;.format(&quot; &quot;.duplicate(level*2), varName, typeof o, o === null ? &quot;null&quot; : o === undefined ? &quot;undefined&quot; : o.toString()));
                // 子对象信息：
                switch(typeof o) {
                    case &quot;object&quot;:
                        for(var i in o){
                            //sb.appendLine(&quot;{0}{1}&lt;{2}&gt;: [{3}]&quot;.format(&quot; &quot;.duplicate((level+1)*2), i, typeof o[i], o[i] === null ? &quot;null&quot; : o[i] === undefined ? &quot;undefined&quot; : o[i].toString()));
                            sb.appendLine(this.serializeObject(o[i], level + 1, i));
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
                                sb.appendLine(this.serializeObject(o.prototype, level + 1, &quot;prototype&quot;));
                                break;
                        } // end switch (typeof o.prototype)
                        break;
                } // end switch (typeof o)
                return sb.toString();
            }
        };

        //
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
        window.StringBuffer = StringBuffer;

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
    }
})();</pre>

<h2><font color="#800080">三、使用示例：</font></h2>

<p><a title="点击这里运行" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=%3B%20(function%20()%20%7B%0A%20%20%20%20if%20(typeof%20zizhujy%20%3D%3D%20%22undefined%22)%20%7B%0A%20%20%20%20%20%20%20%20zizhujy%20%3D%20%7B%7D%3B%0A%0A%20%20%20%20%20%20%20%20window.zizhujy%20%3D%20zizhujy%3B%0A%20%20%20%20%7D%0A%0A%20%20%20%20if%20(typeof%20zizhujy.com%20%3D%3D%20%22undefined%22)%20%7B%0A%20%20%20%20%20%20%20%20zizhujy.com%20%3D%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%20%20%20%20%E5%BA%8F%E5%88%97%E5%8C%96%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%EF%BC%88%E9%80%92%E5%BD%92%E5%9C%B0%EF%BC%89%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%E8%A6%81%E8%A2%AB%E5%BA%8F%E5%88%97%E5%8C%96%E7%9A%84%E5%AF%B9%E8%B1%A1%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%E5%BD%93%E5%89%8D%E6%AD%A3%E5%9C%A8%E8%A2%AB%E5%BA%8F%E5%88%97%E5%8C%96%E7%9A%84%E5%AF%B9%E8%B1%A1%E5%9C%A8%E5%BA%8F%E5%88%97%E5%8C%96%E6%A0%91%E4%B8%AD%E7%9A%84%E5%B1%82%E7%BA%A7%EF%BC%88%E6%A0%B9%E7%BA%A7%E4%B8%BA0%EF%BC%89%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%E5%BD%93%E5%89%8D%E6%AD%A3%E5%9C%A8%E8%A2%AB%E5%BA%8F%E5%88%97%E5%8C%96%E7%9A%84%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%8F%98%E9%87%8F%E5%90%8D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%20%20%20%20%E8%AF%A5%E6%96%B9%E6%B3%95%E6%9C%89%E5%9B%9B%E4%B8%AA%E9%87%8D%E8%BD%BD%EF%BC%9A%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%20%20%20%201.%20serializeObject(o)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%20%20%20%202.%20serializeObject(o%2C%20level)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%20%20%20%203.%20serializeObject(o%2C%20varName)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%20%20%20%204.%20serializeObject(o%2C%20level%2C%20varName)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%0A%20%20%20%20%20%20%20%20%20%20%20%20serializeObject%3A%20function()%7B%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E5%8F%82%E6%95%B0%E5%88%97%E8%A1%A8%EF%BC%9A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20o%20%3D%20arguments%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20level%20%3D%200%3B%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20varName%20%3D%20%22%22%3B%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E9%87%8D%E8%BD%BD%E6%9C%BA%E5%88%B6%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20switch(typeof%20arguments%5B1%5D)%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22number%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E9%87%8D%E8%BD%BD%202%EF%BC%9A%20serializeObject(o%2C%20level)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20level%20%3D%20arguments%5B1%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(arguments.length%20%3E%202)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E9%87%8D%E8%BD%BD%204%EF%BC%9A%20serializeObject(o%2C%20level%2C%20varName)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20varName%20%3D%20arguments%5B2%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22string%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E9%87%8D%E8%BD%BD%203%EF%BC%9A%20serializeObject(o%2C%20varName)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20varName%20%3D%20arguments%5B1%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20default%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%" target="_blank">点击这里运行</a></p>

<pre class="brush: javascript">var o = {
    a: 2,
    b: 3,
    c: {
        a: 2,
        b: 3,
        c: {
            a: 1,
            b: 2,
            c: null,
            d: undefined
        },
        d: function () {
            alert(&quot;hello&quot;);
        }
    }
};
alert(zizhujy.com.serializeObject(o));</pre>

<p>运行结果截图：</p>

<p><a title="点击运行看效果" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=%3B%20(function%20()%20{%0A%20%20%20%20if%20(typeof%20zizhujy%20%3D%3D%20%22undefined%22)%20{%0A%20%20%20%20%20%20%20%20zizhujy%20%3D%20{}%3B%0A%0A%20%20%20%20%20%20%20%20window.zizhujy%20%3D%20zizhujy%3B%0A%20%20%20%20}%0A%0A%20%20%20%20if%20(typeof%20zizhujy.com%20%3D%3D%20%22undefined%22)%20{%0A%20%20%20%20%20%20%20%20zizhujy.com%20%3D%20{%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%20%20%20%20%E5%BA%8F%E5%88%97%E5%8C%96%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%EF%BC%88%E9%80%92%E5%BD%92%E5%9C%B0%EF%BC%89%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%E8%A6%81%E8%A2%AB%E5%BA%8F%E5%88%97%E5%8C%96%E7%9A%84%E5%AF%B9%E8%B1%A1%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%E5%BD%93%E5%89%8D%E6%AD%A3%E5%9C%A8%E8%A2%AB%E5%BA%8F%E5%88%97%E5%8C%96%E7%9A%84%E5%AF%B9%E8%B1%A1%E5%9C%A8%E5%BA%8F%E5%88%97%E5%8C%96%E6%A0%91%E4%B8%AD%E7%9A%84%E5%B1%82%E7%BA%A7%EF%BC%88%E6%A0%B9%E7%BA%A7%E4%B8%BA0%EF%BC%89%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%E5%BD%93%E5%89%8D%E6%AD%A3%E5%9C%A8%E8%A2%AB%E5%BA%8F%E5%88%97%E5%8C%96%E7%9A%84%E5%AF%B9%E8%B1%A1%E7%9A%84%E5%8F%98%E9%87%8F%E5%90%8D%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%20%20%20%20%E8%AF%A5%E6%96%B9%E6%B3%95%E6%9C%89%E5%9B%9B%E4%B8%AA%E9%87%8D%E8%BD%BD%EF%BC%9A%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%20%20%20%201.%20serializeObject(o)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%20%20%20%202.%20serializeObject(o%2C%20level)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%20%20%20%203.%20serializeObject(o%2C%20varName)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%20%20%20%204.%20serializeObject(o%2C%20level%2C%20varName)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%2F%20%0A%20%20%20%20%20%20%20%20%20%20%20%20serializeObject%3A%20function(){%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E5%8F%82%E6%95%B0%E5%88%97%E8%A1%A8%EF%BC%9A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20o%20%3D%20arguments%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20level%20%3D%200%3B%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20varName%20%3D%20%22%22%3B%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E9%87%8D%E8%BD%BD%E6%9C%BA%E5%88%B6%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20switch(typeof%20arguments%5B1%5D){%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22number%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E9%87%8D%E8%BD%BD%202%EF%BC%9A%20serializeObject(o%2C%20level)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20level%20%3D%20arguments%5B1%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if(arguments.length%20%3E%202)%20{%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E9%87%8D%E8%BD%BD%204%EF%BC%9A%20serializeObject(o%2C%20level%2C%20varName)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20varName%20%3D%20arguments%5B2%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20}%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20case%20%22string%22%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E9%87%8D%E8%BD%BD%203%EF%BC%9A%20serializeObject(o%2C%20varName)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20varName%20%3D%20arguments%5B1%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20break%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20default%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20%E" target="_blank"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="在JavaScript练兵场上查看序列化JavaScript对象的效果" border="0" alt="在JavaScript练兵场上查看序列化JavaScript对象的效果" src="http://www.zizhujy.com/blog/image.axd?picture=image_586.png" width="622" height="377" /></a></p>