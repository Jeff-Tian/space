---
stackbit_url_path: >-
  posts/一个经典SQL案例
title: '一个经典SQL案例'
date: '2010-07-09 10:37:16'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>来自：<a href="http://topic.csdn.net/u/20100701/15/fd028ff8-20b9-4902-a77a-08d6c4f55cf1.html">http://topic.csdn.net/u/20100701/15/fd028ff8-20b9-4902-a77a-08d6c4f55cf1.html</a></p>
<hr>
<p>&nbsp;问：</p>
<p>&nbsp;</p>
<p></p><dt style="background-color: rgb(245, 245, 245); height: 24px; line-height: 24px; font-weight: bold; text-indent: 6px; color: rgb(51, 51, 51); ">SQL code</dt><dd style="border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-color: rgb(221, 221, 221); border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221); border-left-color: rgb(221, 221, 221); margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; ">
<pre><div><span style="line-height: 18px; color: rgb(0, 0, 255); ">create</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">table</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> tb(姓名 </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">varchar</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">(</span><span style="line-height: 18px; color: rgb(128, 0, 0); font-weight: bold; ">10</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">) , 课程 </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">varchar</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">(</span><span style="line-height: 18px; color: rgb(128, 0, 0); font-weight: bold; ">10</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">) , 分数 </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">int</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">)  </span></div><div><span style="line-height: 18px; color: rgb(0, 0, 255); ">insert</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">into</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> tb </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">values</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">(</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">张三</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">语文</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(128, 0, 0); font-weight: bold; ">74</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">)  </span></div><div><span style="line-height: 18px; color: rgb(0, 0, 255); ">insert</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">into</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> tb </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">values</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">(</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">张三</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">数学</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(128, 0, 0); font-weight: bold; ">83</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">)  </span></div><div><span style="line-height: 18px; color: rgb(0, 0, 255); ">insert</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">into</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> tb </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">values</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">(</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">李四</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">语文</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(128, 0, 0); font-weight: bold; ">74</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">)  </span></div><div><span style="line-height: 18px; color: rgb(0, 0, 255); ">insert</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">into</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> tb </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">values</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">(</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">李四</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">数学</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(128, 0, 0); font-weight: bold; ">84</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">)  </span></div><div><span style="line-height: 18px; color: rgb(0, 0, 255); ">insert</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">into</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> tb </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">values</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">(</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">李四</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">物理</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(128, 0, 0); font-weight: bold; ">94</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">)   </span></div><div>&nbsp;</div><div><span style="line-height: 18px; color: rgb(0, 0, 0); ">结果 </span></div><div>&nbsp;</div><div><span style="line-height: 18px; color: rgb(0, 0, 0); ">姓名 选择课程 </span></div><div><span style="line-height: 18px; color: rgb(0, 0, 0); ">张三 语文,数学 </span></div><div><span style="line-height: 18px; color: rgb(0, 0, 0); ">李四 语文,数学,物理</span></div><div><span style="line-height: 18px; color: rgb(0, 0, 0); "><br></span></div></pre>
<br>
</dd><p></p>
<p>以上可以用一句SQL实现吗？？？</p>
<p>&nbsp;</p>
<p>答：</p>
<p>能！&nbsp;</p>
<p>&nbsp;</p>
<p></p><dt style="background-color: rgb(245, 245, 245); height: 24px; line-height: 24px; font-weight: bold; text-indent: 6px; color: rgb(51, 51, 51); ">SQL code</dt><dd style="border-top-style: solid; border-right-style: solid; border-bottom-style: solid; border-left-style: solid; border-top-width: 1px; border-right-width: 1px; border-bottom-width: 1px; border-left-width: 1px; border-top-color: rgb(221, 221, 221); border-right-color: rgb(221, 221, 221); border-bottom-color: rgb(221, 221, 221); border-left-color: rgb(221, 221, 221); margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; ">
<pre><div><span style="line-height: 18px; color: rgb(0, 0, 255); ">create</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">table</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> tb(姓名 </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">varchar</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">(</span><span style="line-height: 18px; color: rgb(128, 0, 0); font-weight: bold; ">10</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">) , 课程 </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">varchar</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">(</span><span style="line-height: 18px; color: rgb(128, 0, 0); font-weight: bold; ">10</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">) , 分数 </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">int</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">)  </span></div><div>&nbsp;</div><div><span style="line-height: 18px; color: rgb(0, 0, 255); ">insert</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">into</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> tb </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">values</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">(</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">张三</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">语文</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(128, 0, 0); font-weight: bold; ">74</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">)  </span></div><div><span style="line-height: 18px; color: rgb(0, 0, 255); ">insert</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">into</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> tb </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">values</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">(</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">张三</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">数学</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(128, 0, 0); font-weight: bold; ">83</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">)  </span></div><div><span style="line-height: 18px; color: rgb(0, 0, 255); ">insert</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">into</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> tb </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">values</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">(</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">李四</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">语文</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(128, 0, 0); font-weight: bold; ">74</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">)  </span></div><div><span style="line-height: 18px; color: rgb(0, 0, 255); ">insert</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">into</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> tb </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">values</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">(</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">李四</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">数学</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(128, 0, 0); font-weight: bold; ">84</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">)  </span></div><div><span style="line-height: 18px; color: rgb(0, 0, 255); ">insert</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">into</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> tb </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">values</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">(</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">李四</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">物理</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> , </span><span style="line-height: 18px; color: rgb(128, 0, 0); font-weight: bold; ">94</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">)   </span></div><div><span style="line-height: 18px; color: rgb(0, 0, 255); ">select</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">  姓名,</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> </span></div><div><span style="line-height: 18px; color: rgb(0, 0, 0); ">        选择课程</span><span style="line-height: 18px; color: rgb(128, 128, 128); ">=</span><span style="line-height: 18px; color: rgb(255, 0, 255); ">stuff</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">((</span><span style="line-height: 18px; color: rgb(0, 0, 255); ">select</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> </span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">,</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">'</span><span style="line-height: 18px; color: rgb(128, 128, 128); ">+</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">课程 </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">from</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> TB </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">where</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> 姓名</span><span style="line-height: 18px; color: rgb(128, 128, 128); ">=</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">t.姓名 </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">for</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> xml path(</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">''</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">)),</span><span style="line-height: 18px; color: rgb(128, 0, 0); font-weight: bold; ">1</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">,</span><span style="line-height: 18px; color: rgb(128, 0, 0); font-weight: bold; ">1</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">,</span><span style="line-height: 18px; color: rgb(255, 0, 0); ">''</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">) </span></div><div><span style="line-height: 18px; color: rgb(0, 0, 255); ">from</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> tb t  </span></div><div><span style="line-height: 18px; color: rgb(0, 0, 255); ">group</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">by</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> 姓名  </span></div><div><span style="line-height: 18px; color: rgb(0, 128, 128); ">/*</span><span style="line-height: 18px; color: rgb(0, 128, 128); "> </span></div><div><span style="line-height: 18px; color: rgb(0, 128, 128); ">姓名         选择课程 </span></div><div><span style="line-height: 18px; color: rgb(0, 128, 128); ">---------- ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- </span></div><div><span style="line-height: 18px; color: rgb(0, 128, 128); ">李四         语文,数学,物理 </span></div><div><span style="line-height: 18px; color: rgb(0, 128, 128); ">张三         语文,数学  </span></div><div>&nbsp;</div><div><span style="line-height: 18px; color: rgb(0, 128, 128); ">(2 行受影响)  </span></div><div>&nbsp;</div><div><span style="line-height: 18px; color: rgb(0, 128, 128); ">*/</span><span style="line-height: 18px; color: rgb(0, 0, 0); ">   </span></div><div>&nbsp;</div><div><span style="line-height: 18px; color: rgb(0, 0, 255); ">drop</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> </span><span style="line-height: 18px; color: rgb(0, 0, 255); ">table</span><span style="line-height: 18px; color: rgb(0, 0, 0); "> TB </span></div><div><span style="line-height: 18px; color: rgb(0, 0, 0); "><br></span></div></pre>
</dd><p></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;&nbsp;</p>
<p>另附：</p>
<p>&nbsp;合并列值 <br>
原著：邹建 <br>
改编：爱新觉罗.毓华(十八年风雨,守得冰山雪莲花开)  2007-12-16  广东深圳</p>
<p>表结构，数据如下： <br>
id    value <br>
----- ------ <br>
1    aa <br>
1    bb <br>
2    aaa <br>
2    bbb <br>
2    ccc</p>
<p>需要得到结果： <br>
id    values <br>
------ ----------- <br>
1      aa,bb <br>
2      aaa,bbb,ccc <br>
即：group by id, 求 value 的和（字符串相加）</p>
<p>1. 旧的解决方法(在sql server 2000中只能用函数解决。) <br>
--1. 创建处理函数 <br>
create table tb(id int, value varchar(10)) <br>
insert into tb values(1, 'aa') <br>
insert into tb values(1, 'bb') <br>
insert into tb values(2, 'aaa') <br>
insert into tb values(2, 'bbb') <br>
insert into tb values(2, 'ccc') <br>
go</p>
<p>CREATE FUNCTION dbo.f_str(@id int) <br>
RETURNS varchar(8000) <br>
AS <br>
BEGIN <br>
DECLARE @r varchar(8000) <br>
SET @r = '' <br>
SELECT @r = @r + ',' + value FROM tb WHERE id=@id <br>
RETURN STUFF(@r, 1, 1, '') <br>
END <br>
GO</p>
<p>-- 调用函数 <br>
SELECt id, value = dbo.f_str(id) FROM tb GROUP BY id</p>
<p>drop table tb <br>
drop function dbo.f_str</p>
<p>/* <br>
id          value      <br>
----------- ----------- <br>
1          aa,bb <br>
2          aaa,bbb,ccc <br>
（所影响的行数为 2 行） <br>
*/</p>
<p>--2、另外一种函数. <br>
create table tb(id int, value varchar(10)) <br>
insert into tb values(1, 'aa') <br>
insert into tb values(1, 'bb') <br>
insert into tb values(2, 'aaa') <br>
insert into tb values(2, 'bbb') <br>
insert into tb values(2, 'ccc') <br>
go</p>
<p>--创建一个合并的函数 <br>
create function f_hb(@id int) <br>
returns varchar(8000) <br>
as <br>
begin <br>
declare @str varchar(8000) <br>
set @str = '' <br>
select @str = @str + ',' + cast(value as varchar) from tb where id = @id <br>
set @str = right(@str , len(@str) - 1) <br>
return(@str) <br>
End <br>
go</p>
<p>--调用自定义函数得到结果： <br>
select distinct id ,dbo.f_hb(id) as value from tb</p>
<p>drop table tb <br>
drop function dbo.f_hb</p>
<p>/* <br>
id          value      <br>
----------- ----------- <br>
1          aa,bb <br>
2          aaa,bbb,ccc <br>
（所影响的行数为 2 行） <br>
*/</p>
<p>2. 新的解决方法(在sql server 2005中用OUTER APPLY等解决。) <br>
create table tb(id int, value varchar(10)) <br>
insert into tb values(1, 'aa') <br>
insert into tb values(1, 'bb') <br>
insert into tb values(2, 'aaa') <br>
insert into tb values(2, 'bbb') <br>
insert into tb values(2, 'ccc') <br>
go <br>
-- 查询处理 <br>
SELECT * FROM(SELECT DISTINCT id FROM tb)A OUTER APPLY( <br>
SELECT [values]= STUFF(REPLACE(REPLACE( <br>
( <br>
SELECT value FROM tb N <br>
WHERE id = A.id <br>
FOR XML AUTO <br>
), ' &lt;N value="', ','), '"/&gt;', ''), 1, 1, '') <br>
)N <br>
drop table tb</p>
<p>/* <br>
id          values <br>
----------- ----------- <br>
1          aa,bb <br>
2          aaa,bbb,ccc</p>
<p>(2 行受影响) <br>
*/</p>
<p>--SQL2005中的方法2 <br>
create table tb(id int, value varchar(10)) <br>
insert into tb values(1, 'aa') <br>
insert into tb values(1, 'bb') <br>
insert into tb values(2, 'aaa') <br>
insert into tb values(2, 'bbb') <br>
insert into tb values(2, 'ccc') <br>
go</p>
<p>select id, [values]=stuff((select ','+[value] from tb t where id=tb.id for xml path('')), 1, 1, '') <br>
from tb <br>
group by id</p>
<p>/* <br>
id          values <br>
----------- -------------------- <br>
1          aa,bb <br>
2          aaa,bbb,ccc</p>
<p>(2 row(s) affected)</p>
<p>*/</p>
<p>drop table tb</p>
<p><br>
<br>
create table [user](<br>
id int,name varchar(20)<br>
)<br>
go <br>
insert [user] select<br>
1,      '张三'<br>
union all select <br>
2,     '李四' <br>
union all select <br>
3,      '王五' <br>
go<br>
create table skill (<br>
id int,   uid int,   name varchar(20),   level varchar(20)<br>
)<br>
insert skill select<br>
1,      1,      '英语',    '6级' <br>
union all select <br>
2,      3,      '日语',    '初级' <br>
union all select <br>
3,      1,      '法语',    '入门'<br>
union all select <br>
4,      3,      '英语',    '4级' <br>
union all select <br>
5,      3,      '德语',    '精通'</p>
<p>go  <br>
<br>
create function fn_skill(<br>
@uid int,<br>
@name varchar(20)<br>
)<br>
returns varchar(500)<br>
as<br>
begin<br>
declare @r varchar(500)<br>
if @name = ''             ---空表示查所有<br>
select @r = isnull(@r + '、','') + name from skill where uid=@uid<br>
else<br>
select @r = isnull(@r + '、','') + name from skill where uid=@uid and name = @name<br>
return @r<br>
end<br>
go</p>
<p>create function fn_skilldetail(<br>
@uid int,<br>
@name varchar(20)<br>
)<br>
returns varchar(500)<br>
as<br>
begin<br>
declare @r varchar(500)<br>
if @name = ''             ---空表示查所有<br>
select @r = isnull(@r + '、','') + name + '-' + level from skill where uid=@uid<br>
else<br>
select @r = isnull(@r + '、','') + name + '-' + level from skill where uid=@uid and name = @name<br>
return @r<br>
end<br>
go</p>
<p>--1<br>
select id as uid,name,dbo.fn_skill(id,'') as skill <br>
from [user]<br>
go<br>
--2<br>
select id as uid,name,dbo.fn_skilldetail(id,'') as skill <br>
from [user]</p>
<p>--3<br>
select id as uid,name,dbo.fn_skilldetail(id,'英语') as skill <br>
from [user]</p>
<p>--4<br>
select id as uid,name,dbo.fn_skilldetail(id,'英语') as skill <br>
from [user]<br>
where dbo.fn_skilldetail(id,'英语') is not null</p>
<p>--结果<br>
uid         name                 skill<br>
----------- -------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------<br>
1           张三                   英语、法语<br>
2           李四                   NULL<br>
3           王五                   日语、英语、德语</p>
<p>(3 行受影响)</p>
<p>uid         name                 skill<br>
----------- -------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------<br>
1           张三                   英语-6级、法语-入门<br>
2           李四                   NULL<br>
3           王五                   日语-初级、英语-4级、德语-精通</p>
<p>(3 行受影响)</p>
<p>uid         name                 skill<br>
----------- -------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------<br>
1           张三                   英语-6级<br>
2           李四                   NULL<br>
3           王五                   英语-4级</p>
<p>(3 行受影响)</p>
<p>uid         name                 skill<br>
----------- -------------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------<br>
1           张三                   英语-6级<br>
3           王五                   英语-4级</p>
<p>(2 行受影响)</p>
      