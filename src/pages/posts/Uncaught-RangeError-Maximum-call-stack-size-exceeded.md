---
stackbit_url_path: >-
  posts/Uncaught-RangeError-Maximum-call-stack-size-exceeded
title: 'Uncaught RangeError: Maximum call stack size exceeded'
date: '2012-03-17 20:38:52.9595073'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - javascript
  - memory leak
  - pow
  - 循环引用
canonical_url: https://be-net.azurewebsites.net/post/2012/03/17/Uncaught-RangeError-Maximum-call-stack-size-exceeded
template: post
---
<h2><font color="#800080">一、问题：</font></h2>  <p>今天在做网页时突然碰到这样的JavaScript错误：</p>  <p>Uncaught RangeError: Maximum call stack size exceeded </p>  <p>百思不得其解，千次调试找不到原因。</p>  <p>表面上看，是因为递归次数太多导致内存被耗费太多，但是我的程序中，并没有一处使用递归算法啊。</p>  <h2><font color="#800080">二、原因：</font></h2>  <p>最终冷静地思考了良久，终于发现，问题的根源在于网页中引用了两个不同的JavaScript库，而这两个库都对JavaScript原始对象的某些方法做了修改，从而导致出现了循环引用。具体说来，就是这么回事儿：</p>  <p>网页H引用了js库A和B，而A与B中对Math.pow方法都作了修改，如下图所示：</p>  <p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/%E6%9C%AA%E6%A0%87%E9%A2%98-1.jpg"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="Maximum call stack size exceeded" border="0" alt="Maximum call stack size exceeded" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/%E6%9C%AA%E6%A0%87%E9%A2%98-1_thumb.jpg" width="553" height="504" /></a> </p>  <p></p>  <p>如果对Math.pow()方法的修改只进行一次，那么是不会有问题的：先用Math.power存储了Math.pow的原始版本，然后再用新的代码替换Math.pow。然而，在第二个库中，又执行到 Math.power = Math.pow时，那么Math.power就不再是保存Math.pow的原始版本了，因为Math.pow已经被第一个库改成了新代码，所以在Math.pow的新代码中调用Math.power()时，本意是调用原始版本，而实际上，却是调用自己了。于是造成了循环！</p>  <p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_491.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="Uncaught RangeError: Maximum call stack size exceeded" border="0" alt="Uncaught RangeError: Maximum call stack size exceeded" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_214.png" width="353" height="344" /></a> </p>  <h2><font color="#800080">三、解决方案：</font></h2>  <p>在进行替换前加一行判断代码，避免重复使用相同的方法名。</p>  <p>即</p>  <pre class="brush: javascript">if (Math.power == null) {
        // 此判断非常重要，如果Math.power 已经在别的地方定义过了，再次这样重新定义，会导致循环引用，从而引发
        // Uncaught RangeError: Maximum call stack size exceeded 错误
	Math.power = Math.pow;

	Math.pow = function(x, y) {
		if(x != 0) {
			return Math.pow(x, y);
		} else {
			return 0;
		}
	}
} // end if</pre>

<h2><font color="#800080">四、备注：</font></h2>

<p>看到这里，也许会有人感到奇怪，为什么要对原始的Math.pow()方法进行替换呢？这里的替换代码似乎除了降低它的效率外，什么也没做。实际上，这里只是说明问题原因的一个示例，所以用了蠢代码，但是简单。为什么要对Math.pow()进行替换，因为原始的Math.pow()有一个Bug，就是对负数求比如 1/3 次方，就会返回不正确的结果NaN。详细讨论见：</p>

<h3><a href="http://zizhujy.com/blog/post/2012/02/21/%E5%AF%B9JavaScript%E7%9A%84Mathpow()%E5%87%BD%E6%95%B0%E7%9A%84%E4%B8%80%E4%B8%AA%E4%BF%AE%E6%AD%A3.aspx">对JavaScript的Math.pow()函数的一个修正</a></h3>