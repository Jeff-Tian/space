---
stackbit_url_path: >-
  posts/在VC++中如何解决链接错误-LNK2001-之无法解析的外部符号-__imp__WSAStartup8
title: '在VC++中如何解决链接错误 LNK2001 之无法解析的外部符号 __imp__WSAStartup@8'
date: '2009-12-02 01:43:25'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2009/12/02/在VC++中如何解决链接错误-LNK2001-之无法解析的外部符号-__imp__WSAStartup8
template: post
---

        <div style="text-indent: 2em;">
<p>今天在做VC++编程时，在组建程序时，碰到如下错误：</p>
<p>Linking...<br>
TCPScan.obj : error LNK2001: unresolved external symbol __imp__WSAStartup@8<br>
Debug/TCPScan.exe : fatal error LNK1120: 1 unresolved externals<br></p>
<p>我的工程中用到了一些winsock函数，例如：</p>
<ul>
<li>WSAStartup()</li>
<li>WSACleanup()</li>
</ul>
<p>等等，这些函数都在头文件winsock2.h中定义过了，我在引用这些函数的时候已经加入了</p>
<pre style="text-indent: 0;" class="brush: c">#include &lt;winsock2.h&gt;
</pre>
<p>为什么还是出错呢？后来上网查到，原来需要一个动态链接库文件，文件名为 ws2_32.lib。</p>
<p>把这个 ws2_32.lib 加载到项目中去，有两种方法。</p>
<ol>
<li>在菜单“工程”-&gt;“设置”-&gt;“链接”-&gt;“对象/库模块”下面输入ws2_32.lib，然后确定即可。如下图：
<img src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_388.png" alt="在菜单“工程”-&gt;“设置”-&gt;“链接”-&gt;“对象/库模块”下面输入ws2_32.lib" style="width: 100%;">
</li>
<li>在头文件中加入语句#pragma comment( lib, "ws2_32.lib" )   来显式加载。 即：
<pre class="brush: c" style="text-indent: 0;">#include &lt;winsock2.h&gt;
#pragma comment(lib, "WS2_32")
</pre>
</li>
</ol>
</div>
      