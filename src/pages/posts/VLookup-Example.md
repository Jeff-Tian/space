---
stackbit_url_path: >-
  posts/VLookup-Example
title: 'VLookup 函数的妙用'
date: '2011-08-30 09:16:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - Excel
  - VLookUp
  - 模糊匹配
canonical_url: https://be-net.azurewebsites.net/post/2011/08/30/VLookup-Example
template: post
---
<h1><span style="color: #9b00d3;"><span style="font-weight: bold;">一、问题</span></span></h1>
<p>有个朋友接了三星电脑的仓储外包服务，三星电脑每天从仓库里进进出出，他雇了一帮人，每天从卡车上卸货、装货。又雇了人专门统计每天操作的电脑台数，他就按照每天操作的电脑台数来向三星收钱。比如某天装卸了100台电脑，每操作一台电脑5块钱（我们叫它单位价格吧），那这一天就应该向三星收500块钱（营业额），如此类推，按月向三星结账。</p>
<p>当然每天装卸的数量是不一样的，而且不一样的装卸数量，其单位价格是不一样的。操作的台数越多，单位价格越高。</p>
<p>他问我，如何在Excel中快速计算每天的营业额。如下表：</p>
<table style="width: 340px; border-collapse: collapse;" border="0" cellspacing="0" cellpadding="0"><colgroup> <col style="width: 85pt; mso-width-source: userset; mso-width-alt: 3616;" span="span" width="113" /></colgroup>
<tbody>
<tr style="height: 14.25pt;">
<td class="xl66" style="padding-left: 1px; padding-right: 1px; background: #4f81bd; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #4f81bd none; border: windowtext 0.5pt solid;" width="113" height="19"><span style="font-family: 宋体; color: #ffffff;"><strong>日期</strong></span></td>
<td class="xl67" style="padding-left: 1px; padding-right: 1px; background: #4f81bd; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #4f81bd none; border: windowtext 0.5pt solid;" width="113"><span style="font-family: 宋体; color: #ffffff;"><strong>台数</strong></span></td>
<td class="xl68" style="padding-left: 1px; padding-right: 1px; background: #4f81bd; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #4f81bd none; border: windowtext 0.5pt solid;" width="113"><span style="font-family: 宋体; color: #ffffff;"><strong>营业额</strong></span></td>
</tr>
<tr style="height: 19.5pt; mso-height-source: userset;">
<td class="xl69" style="padding-left: 1px; padding-right: 1px; background: #dce6f1; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #dce6f1 none; border: windowtext 0.5pt solid;" align="right" height="26"><span style="font-family: 宋体; color: #000000;">2011/8/1</span></td>
<td class="xl65" style="padding-left: 1px; padding-right: 1px; background: #dce6f1; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #dce6f1 none; border: windowtext 0.5pt solid;" align="right"><span style="font-family: 宋体; color: #000000;">90000</span></td>
<td class="xl70" style="padding-left: 1px; padding-right: 1px; background: #dce6f1; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #dce6f1 none; border: windowtext 0.5pt solid;">&nbsp;</td>
</tr>
<tr style="height: 19.5pt; mso-height-source: userset;">
<td class="xl69" style="padding-left: 1px; padding-right: 1px; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; border: windowtext 0.5pt solid;" align="right" height="26"><span style="font-family: 宋体; color: #000000;">2011/8/2</span></td>
<td class="xl65" style="padding-left: 1px; padding-right: 1px; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; border: windowtext 0.5pt solid;" align="right"><span style="font-family: 宋体; color: #000000;">120000</span></td>
<td class="xl70" style="padding-left: 1px; padding-right: 1px; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; border: windowtext 0.5pt solid;">&nbsp;</td>
</tr>
<tr style="height: 19.5pt; mso-height-source: userset;">
<td class="xl69" style="padding-left: 1px; padding-right: 1px; background: #dce6f1; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #dce6f1 none; border: windowtext 0.5pt solid;" align="right" height="26"><span style="font-family: 宋体; color: #000000;">2011/8/3</span></td>
<td class="xl65" style="padding-left: 1px; padding-right: 1px; background: #dce6f1; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #dce6f1 none; border: windowtext 0.5pt solid;" align="right"><span style="font-family: 宋体; color: #000000;">97959</span></td>
<td class="xl70" style="padding-left: 1px; padding-right: 1px; background: #dce6f1; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #dce6f1 none; border: windowtext 0.5pt solid;">&nbsp;</td>
</tr>
<tr style="height: 19.5pt; mso-height-source: userset;">
<td class="xl69" style="padding-left: 1px; padding-right: 1px; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; border: windowtext 0.5pt solid;" align="right" height="26"><span style="font-family: 宋体; color: #000000;">2011/8/4</span></td>
<td class="xl65" style="padding-left: 1px; padding-right: 1px; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; border: windowtext 0.5pt solid;" align="right"><span style="font-family: 宋体; color: #000000;">166231</span></td>
<td class="xl70" style="padding-left: 1px; padding-right: 1px; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; border: windowtext 0.5pt solid;">&nbsp;</td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_50.png"><img style="background-image: none; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="VlookUp()函数的妙用" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_50.png" alt="VlookUp()函数的妙用" width="346" height="209" border="0" /></a></p>
<p style="text-align: right;">点击下载文件：<a href="/blog/file.axd?file=2011%2f8%2fReport.xls">Report.xls (25.50 kb)</a></p>
<p>他是这样问的，这个IF()函数该如何写？</p>
<p>我听完他的不同台数对应的不同单位价格，了解到他是想写这样的IF()函数：</p>
<p>=IF(B2&gt;=100000,0.85, IF(B2&gt;=10000,0.84,0.83))*B2</p>
<p>然而，这样的公式非常危险，因为以后一旦单位价格有变化（单位价格变动，或者数量区间变动、增加、减少等），该公式就需要重新写一遍，非常麻烦，而且IF()函数只能嵌套七层，如果数量区间多于7个，就难以用此公式了。</p>
<h1><strong><span style="color: #9b00d3;">二、解决方案</span></strong></h1>
<p><strong>1. 先新建一张工作表（WorkSheet），命名为单价。按照他的数量分段对应的单位价格，整理出如下的单价表。</strong>一目了然：</p>
<table style="width: 216px; border-collapse: collapse;" border="0" cellspacing="0" cellpadding="0"><colgroup> <col style="width: 54pt;" span="span" width="72" /></colgroup>
<tbody>
<tr style="height: 27pt; mso-height-source: userset;">
<td class="xl73" style="border-bottom: windowtext 0.5pt solid; border-left: windowtext 1pt solid; background-color: #bfbfbf; padding-left: 1px; padding-right: 1px; vertical-align: middle; border-top: windowtext 1pt solid; border-right: black 0.5pt solid; padding-top: 1px;" colspan="2" align="middle" width="144" height="36"><span style="font-family: 宋体; color: #000000;"><strong>台数</strong></span></td>
<td class="xl75" style="border-bottom: black 0.5pt solid; border-left: windowtext 0.5pt solid; background-color: #bfbfbf; padding-left: 1px; padding-right: 1px; vertical-align: middle; border-top: windowtext 1pt solid; border-right: windowtext 1pt solid; padding-top: 1px;" rowspan="2" align="middle" width="72"><span style="font-family: 宋体; color: #000000;"><strong>单价</strong></span></td>
</tr>
<tr style="height: 27pt; mso-height-source: userset;">
<td class="xl71" style="border-bottom: windowtext 0.5pt solid; border-left: windowtext 1pt solid; background-color: #bfbfbf; padding-left: 1px; padding-right: 1px; vertical-align: middle; border-top: medium none; border-right: windowtext 0.5pt solid; padding-top: 1px;" align="middle" height="36"><span style="font-family: 宋体; color: #000000;"><strong>从</strong></span></td>
<td class="xl72" style="border-bottom: windowtext 0.5pt solid; border-left: medium none; background-color: #bfbfbf; padding-left: 1px; padding-right: 1px; vertical-align: middle; border-top: medium none; border-right: windowtext 0.5pt solid; padding-top: 1px;" align="middle"><span style="font-family: 宋体; color: #000000;"><strong>到</strong></span></td>
</tr>
<tr style="height: 27pt; mso-height-source: userset;">
<td class="xl66" style="border-bottom: windowtext 0.5pt solid; border-left: windowtext 1pt solid; padding-left: 1px; padding-right: 1px; vertical-align: bottom; border-top: medium none; border-right: windowtext 0.5pt solid; padding-top: 1px;" align="right" height="36"><span style="font-family: 宋体; color: #000000;">1</span></td>
<td class="xl65" style="border-bottom: windowtext 0.5pt solid; border-left: medium none; padding-left: 1px; padding-right: 1px; vertical-align: bottom; border-top: medium none; border-right: windowtext 0.5pt solid; padding-top: 1px;" align="right"><span style="font-family: 宋体; color: #000000;">9999</span></td>
<td class="xl67" style="border-bottom: windowtext 0.5pt solid; border-left: medium none; padding-left: 1px; padding-right: 1px; vertical-align: bottom; border-top: medium none; border-right: windowtext 1pt solid; padding-top: 1px;" align="right"><span style="font-family: 宋体; color: #000000;">0.83</span></td>
</tr>
<tr style="height: 27pt; mso-height-source: userset;">
<td class="xl66" style="border-bottom: windowtext 0.5pt solid; border-left: windowtext 1pt solid; padding-left: 1px; padding-right: 1px; vertical-align: bottom; border-top: medium none; border-right: windowtext 0.5pt solid; padding-top: 1px;" align="right" height="36"><span style="font-family: 宋体; color: #000000;">10000</span></td>
<td class="xl65" style="border-bottom: windowtext 0.5pt solid; border-left: medium none; padding-left: 1px; padding-right: 1px; vertical-align: bottom; border-top: medium none; border-right: windowtext 0.5pt solid; padding-top: 1px;" align="right"><span style="font-family: 宋体; color: #000000;">99999</span></td>
<td class="xl67" style="border-bottom: windowtext 0.5pt solid; border-left: medium none; padding-left: 1px; padding-right: 1px; vertical-align: bottom; border-top: medium none; border-right: windowtext 1pt solid; padding-top: 1px;" align="right"><span style="font-family: 宋体; color: #000000;">0.84</span></td>
</tr>
<tr style="height: 27pt; mso-height-source: userset;">
<td class="xl68" style="border-bottom: windowtext 1pt solid; border-left: windowtext 1pt solid; padding-left: 1px; padding-right: 1px; vertical-align: bottom; border-top: medium none; border-right: windowtext 0.5pt solid; padding-top: 1px;" align="right" height="36"><span style="font-family: 宋体; color: #000000;">100000</span></td>
<td class="xl69" style="border-bottom: windowtext 1pt solid; border-left: medium none; padding-left: 1px; padding-right: 1px; vertical-align: bottom; border-top: medium none; border-right: windowtext 0.5pt solid; padding-top: 1px;"><span style="font-family: 宋体; color: #000000;">--</span></td>
<td class="xl70" style="border-bottom: windowtext 1pt solid; border-left: medium none; padding-left: 1px; padding-right: 1px; vertical-align: bottom; border-top: medium none; border-right: windowtext 1pt solid; padding-top: 1px;" align="right"><span style="font-family: 宋体; color: #000000;">0.85</span></td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_51.png"><img style="background-image: none; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="VLookUp()函数的妙用" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_51.png" alt="VLookUp()函数的妙用" width="244" height="213" border="0" /></a></p>
<p style="text-align: right;">点击下载文件：<a href="/blog/file.axd?file=2011%2f8%2fReport.xls">Report.xls (25.50 kb)</a></p>
<p><strong>2. 在第一张表（报表）的营业额里输入如下公式：</strong></p>
<p>=B2*VLOOKUP(B2,单价!$A:$C,3,TRUE)</p>
<p>再将公式复制下来，即可</p>
<table style="width: 340px; border-collapse: collapse;" border="0" cellspacing="0" cellpadding="0"><colgroup> <col style="width: 85pt; mso-width-source: userset; mso-width-alt: 3616;" span="span" width="113" /></colgroup>
<tbody>
<tr style="height: 14.25pt;">
<td class="xl66" style="padding-left: 1px; padding-right: 1px; background: #4f81bd; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #4f81bd none; border: windowtext 0.5pt solid;" width="113" height="19"><span style="font-family: 宋体; color: #ffffff;"><strong>日期</strong></span></td>
<td class="xl67" style="padding-left: 1px; padding-right: 1px; background: #4f81bd; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #4f81bd none; border: windowtext 0.5pt solid;" width="113"><span style="font-family: 宋体; color: #ffffff;"><strong>台数</strong></span></td>
<td class="xl68" style="padding-left: 1px; padding-right: 1px; background: #4f81bd; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #4f81bd none; border: windowtext 0.5pt solid;" width="113"><span style="font-family: 宋体; color: #ffffff;"><strong>营业额</strong></span></td>
</tr>
<tr style="height: 19.5pt; mso-height-source: userset;">
<td class="xl69" style="padding-left: 1px; padding-right: 1px; background: #dce6f1; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #dce6f1 none; border: windowtext 0.5pt solid;" align="right" height="26"><span style="font-family: 宋体; color: #000000;">2011/8/1</span></td>
<td class="xl65" style="padding-left: 1px; padding-right: 1px; background: #dce6f1; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #dce6f1 none; border: windowtext 0.5pt solid;" align="right"><span style="font-family: 宋体; color: #000000;">90000</span></td>
<td class="xl70" style="padding-left: 1px; padding-right: 1px; background: #dce6f1; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #dce6f1 none; border: windowtext 0.5pt solid;" align="right"><span style="font-family: 宋体; color: #000000;">&yen;75,600</span></td>
</tr>
<tr style="height: 19.5pt; mso-height-source: userset;">
<td class="xl69" style="padding-left: 1px; padding-right: 1px; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; border: windowtext 0.5pt solid;" align="right" height="26"><span style="font-family: 宋体; color: #000000;">2011/8/2</span></td>
<td class="xl65" style="padding-left: 1px; padding-right: 1px; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; border: windowtext 0.5pt solid;" align="right"><span style="font-family: 宋体; color: #000000;">120000</span></td>
<td class="xl70" style="padding-left: 1px; padding-right: 1px; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; border: windowtext 0.5pt solid;" align="right"><span style="font-family: 宋体; color: #000000;">&yen;102,000</span></td>
</tr>
<tr style="height: 19.5pt; mso-height-source: userset;">
<td class="xl69" style="padding-left: 1px; padding-right: 1px; background: #dce6f1; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #dce6f1 none; border: windowtext 0.5pt solid;" align="right" height="26"><span style="font-family: 宋体; color: #000000;">2011/8/3</span></td>
<td class="xl65" style="padding-left: 1px; padding-right: 1px; background: #dce6f1; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #dce6f1 none; border: windowtext 0.5pt solid;" align="right"><span style="font-family: 宋体; color: #000000;">97959</span></td>
<td class="xl70" style="padding-left: 1px; padding-right: 1px; background: #dce6f1; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #dce6f1 none; border: windowtext 0.5pt solid;" align="right"><span style="font-family: 宋体; color: #000000;">&yen;82,286</span></td>
</tr>
<tr style="height: 19.5pt; mso-height-source: userset;">
<td class="xl69" style="padding-left: 1px; padding-right: 1px; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; border: windowtext 0.5pt solid;" align="right" height="26"><span style="font-family: 宋体; color: #000000;">2011/8/4</span></td>
<td class="xl65" style="padding-left: 1px; padding-right: 1px; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; border: windowtext 0.5pt solid;" align="right"><span style="font-family: 宋体; color: #000000;">166231</span></td>
<td class="xl70" style="padding-left: 1px; padding-right: 1px; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; border: windowtext 0.5pt solid;" align="right"><span style="font-family: 宋体; color: #000000;">&yen;141,296</span></td>
</tr>
<tr style="height: 19.5pt; mso-height-source: userset;">
<td class="xl69" style="padding-left: 1px; padding-right: 1px; background: #dce6f1; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #dce6f1 none; border: windowtext 0.5pt solid;" align="right" height="26"><span style="font-family: 宋体; color: #000000;">2011/8/5</span></td>
<td class="xl65" style="padding-left: 1px; padding-right: 1px; background: #dce6f1; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #dce6f1 none; border: windowtext 0.5pt solid;" align="right"><span style="font-family: 宋体; color: #000000;">120071</span></td>
<td class="xl70" style="padding-left: 1px; padding-right: 1px; background: #dce6f1; vertical-align: bottom; padding-top: 1px; text-underline-style: none; text-line-through: none; mso-pattern: #dce6f1 none; border: windowtext 0.5pt solid;" align="right"><span style="font-family: 宋体; color: #000000;">&yen;102,060</span></td>
</tr>
</tbody>
</table>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_52.png"><img style="background-image: none; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; padding-top: 0px; border: 0px;" title="VLookUp()函数的妙用" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_52.png" alt="VLookUp()函数的妙用" width="324" height="441" border="0" /></a></p>
<p style="text-align: right;">点击下载文件：<a href="/blog/file.axd?file=2011%2f8%2fReport.xls">Report.xls (25.50 kb)</a></p>
<h1><strong><span style="color: #9b00d3;">三、新解决方案的优点</span></strong></h1>
<p>怎么样？这种方案是不是更具有扩展性呢？</p>
<ol>
<li>不用嵌套，因此即使数量分段再多，公式也不用变；</li>
<li>数量分段改变、增多、减少了，或者同一数量分段的价格变化了，都不用修改公式，只需在单价表里作相应的修改即可；</li>
<li>低藕合度：公式与数据源分离了！</li>
</ol>
<h1><span style="color: #9b00d3;"><span style="font-weight: bold;">四、VLookUp()函数解析</span></span></h1>
<p>请Google、百度搜寻吧！这里需要提及的只是，公式（=B2*VLOOKUP(B2,单价!$A:$C,3,TRUE)）的最后一个参数使用了TRUE，即为<strong>模糊</strong>匹配，所以可以用来查找数量区间的单位价格。因为这里的操作台数每天变化，而只要在一个区间内的数量，单价都一样，所以在这里使用模糊匹配方式很重要！</p>
<p>如果不了解VLookUp()函数的精确匹配与模糊匹配方式，则还是先Google、百度一下吧！</p>
<h1><strong><span style="color: #9b00d3;">五、相关文件下载</span></strong>&nbsp;</h1>
<p>示例Excel表格：<a href="/blog/file.axd?file=2011%2f8%2fReport.xls">Report.xls (25.50 kb)</a></p>
<p>[donate: <a href="http://www.zizhujy.com">www.zizhujy.com</a>]</p>
<p>&nbsp;</p>