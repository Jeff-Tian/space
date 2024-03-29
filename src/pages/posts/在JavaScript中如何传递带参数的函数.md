---
stackbit_url_path: >-
  posts/在JavaScript中如何传递带参数的函数
title: '在JavaScript中如何传递带参数的函数'
date: '2012-06-30 02:34:58.8536582'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 传递函数
  - 动态调用
canonical_url: https://be-net.azurewebsites.net/post/2012/06/30/在JavaScript中如何传递带参数的函数
template: post
---
<h2><font color="#800080">一、背景：</font></h2>  <p>在JavaScript中，将一个函数作为参数传递给另外一个函数，然后在那个函数中调用传递过来的函数，是非常简单和直接的。如：</p>  <pre class="brush: javascript">function sayHello() {
    alert(&quot;Hello&quot;);
}

function invoker(functionName) {
    functionName();
}

invoker(sayHello);</pre>

<p><a title="点击这里运行" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=function%20sayHello()%20%7B%0A%20%20%20%20alert(%22Hello%22)%3B%0A%7D%0A%0Afunction%20invoker(functionName)%20%7B%0A%20%20%20%20functionName()%3B%0A%7D%0A%0Ainvoker(sayHello)%3B" target="_blank">点击这里运行</a></p>

<p>在上例中，通过将函数名sayHello传递给invoker()函数，然后在invoker()函数体中直接调用传进去的函数。执行结果如下：</p>

<p><a title="JavaScript 练兵场" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=function%20sayHello()%20%7B%0A%20%20%20%20alert(%22Hello%22)%3B%0A%7D%0A%0Afunction%20invoker(functionName)%20%7B%0A%20%20%20%20functionName()%3B%0A%7D%0A%0Ainvoker(sayHello)%3B" target="_blank"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" border="0" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_588.png" width="491" height="384" /></a></p>

<h2><font color="#800080">二、问题：</font></h2>

<p>上例中，sayHello() 函数是不带参数的，所以比较简单。但是，如果我们改写sayHello()函数，让它变得更灵活些，接收两个参数，那么新的invoker()函数应该怎样写才能适应这种情况呢？即，如何才能够动态地调用任何函数呢？不管被调用的函数带不带参数，也不管它究竟需要多少个参数，我们希望都能够以统一的接口来调用。</p>

<h2><font color="#800080">三、解决方案：</font></h2>

<p>利用JavaScript中Function类的apply()函数，以及结合使用arguments对象，来解决这个问题：</p>

<pre class="brush: javascript">function say(msgTitle, msgBody) {
    alert(msgTitle + &quot;\r\n&quot; + msgBody);
}

function invoker(func) {
    var args = Array.prototype.slice.call(arguments);
    args.splice(0, 1);
    func.apply(window, args);
}

invoker(say, &quot;hello&quot;, &quot;world&quot;);</pre>

<p><a title="点击这里运行" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=function%20say(msgTitle%2C%20msgBody)%20%7B%0A%20%20%20%20alert(msgTitle%20%2B%20%22%5Cr%5Cn%22%20%2B%20msgBody)%3B%0A%7D%0A%0Afunction%20invoker(func)%20%7B%0A%20%20%20%20var%20args%20%3D%20Array.prototype.slice.call(arguments)%3B%0A%20%20%20%20args.splice(0%2C%201)%3B%0A%20%20%20%20func.apply(window%2C%20args)%3B%0A%7D%0A%0Ainvoker(say%2C%20%22hello%22%2C%20%22world%22)%3B" target="_blank">点击这里运行</a></p>

<p>以上代码执行结果如下：</p>

<p><a title="JavaScript 练兵场" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=function%20say(msgTitle%2C%20msgBody)%20%7B%0A%20%20%20%20alert(msgTitle%20%2B%20%22%5Cr%5Cn%22%20%2B%20msgBody)%3B%0A%7D%0A%0Afunction%20invoker(func)%20%7B%0A%20%20%20%20var%20args%20%3D%20Array.prototype.slice.call(arguments)%3B%0A%20%20%20%20args.splice(0%2C%201)%3B%0A%20%20%20%20func.apply(window%2C%20args)%3B%0A%7D%0A%0Ainvoker(say%2C%20%22hello%22%2C%20%22world%22)%3B" target="_blank"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="image" border="0" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_589.png" width="600" height="427" /></a> </p>

<p>注意，上述代码中，有 var args = Array.prototype.slice.call(arguments) 语句，是为了将 arguments 对象转换成一个真正的 Array 对象的实例。</p>

<h2><font color="#800080">四、更多说明：</font></h2>

<p>以上的invoker()函数，真正实现了灵活的动态调用。它接受的参数是，要被调用的函数名，然后是要被调用的函数的参数列表，这个参数列表有没有，个数是多少，都没有做限制，完全根据要被调用的函数的需求来。</p>

<p>更多例子：</p>

<pre class="brush: javascript">function compute(a, b, c) {
    alert(a + b + c);
}

invoker(compute, 1, 2, 3);

invoker(function (s) { alert(s.split(&quot;\r\n&quot;).length); }, &quot;FirstLine\r\nSecondLine\r\nThirdLine&quot;);</pre>

<p><a title="点击这里运行" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=function%20say(msgTitle%2C%20msgBody)%20%7B%0A%20%20%20%20alert(msgTitle%20%2B%20%22%5Cr%5Cn%22%20%2B%20msgBody)%3B%0A%7D%0A%0Afunction%20invoker(func)%20%7B%0A%20%20%20%20var%20args%20%3D%20Array.prototype.slice.call(arguments)%3B%0A%20%20%20%20args.splice(0%2C%201)%3B%0A%20%20%20%20func.apply(window%2C%20args)%3B%0A%7D%0A%0Afunction%20compute(a%2C%20b%2C%20c)%20%7B%0A%20%20%20%20alert(a%20%2B%20b%20%2B%20c)%3B%0A%7D%0A%0Ainvoker(compute%2C%201%2C%202%2C%203)%3B%0A%0Ainvoker(function%20(s)%20%7B%20alert(s.split(%22%5Cr%5Cn%22).length)%3B%20%7D%2C%20%22FirstLine%5Cr%5CnSecondLine%5Cr%5CnThirdLine%22)%3B" target="_blank">点击这里运行</a></p>

<p>最后一个例子，演示了可以直接传递匿名函数参数。</p>