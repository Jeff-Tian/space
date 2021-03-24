---
stackbit_url_path: >-
  posts/使用Excel画F分布的概率密度函数图形
title: '使用Excel画F分布的概率密度函数图形'
date: '2010-03-19 10:41:59'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <style type="text/css">
<!--
table.tbMy, table.tbMy td {
border: solid 1px grey!important;
border-collapse: collapse!important;
}
-->
</style>
<div style="text-indent: 2em; font-size: larger;">
<p>作函数图形的一般方法，就是计算自变量与因变量的多个值对，然后画出两个变量的散点图形。</p>
<p>所以要画F分布的概率密度函数图形，就需要先对一些给定的F值，计算其概率密度函数值。</p>
<p>在 Excel 中，虽然有 FDist() 函数，可以用来计算给定的F值，两个自由度的参数后的概率分布值，但却没有提供用来计算给定F值以及两个自由度后的概率密度函数值的系统函数。</p>
<p>不过，如果了解了F分布的概率密度函数表达式，那么仍然可以使用Excel中的系统函数的组合来完成对F分布的概率密度函数值的计算。</p>
<p>首先，来看一下F分布的概率密度函数的表达式：</p>
<p><img alt="" title="" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_229.png"><img alt="" title="" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_230.png"></p>
<p>其中，x值是F值，而<img alt="" title="" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_231.png">与<img alt="" title="" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_232.png">分别为第一个自由度参数与第二个自由度参数，<img alt="" title="" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_233.png">是伽马函数。</p>
<p>在开始在Excel中构造以上表达式前，还要先了解，在Excel中没有直接的伽马函数，而有对数伽马函数，故伽马函数Gamma(x)要这样写：</p>
<p>=Exp(GammaLn(x))</p>
<p>最终的F分布的概率密度函数在Excel中的表达式为：</p>
<p>=Exp(GammaLn((&lt;自由度1&gt;+&lt;自由度2&gt;)/2))*(&lt;自由度1&gt;^(&lt;自由度1&gt;/2))*(&lt;自由度2&gt;^(&lt;自由度2&gt;/2))*(x^(&lt;自由度1&gt;/2-1))/Exp(GammaLn(&lt;自由度1&gt;/2))/Exp(GammaLn(&lt;自由度2&gt;/2))/((&lt;自由度2&gt;+&lt;自由度1&gt;*x)^((&lt;自由度1&gt;+&lt;自由度2&gt;)/2))</p>
<p>写起来很长，看起来也不方便，如果需要经常使用，那么可以通过在后台（宏）写一个自定义函数来解决。</p>
<p>不过如果不是经常使用的话，就可以将以上伪公式拷贝到文本文件，然后将参数&lt;自由度1&gt;、&lt;自由度2&gt;以及 x 查找替换成实际的值，然后再拷贝至Excel单元格中，就可以满足一次性的需求了。</p>
<p>以下是我使用以上公式，在Excel中计算了3个系列的自变量-因变量对，并根据这些数据画出了3个F分布的概率密度函数图形的例子：</p>
<hr>
<table class="tbMy" cellspacing="0">
    <colgroup><col width="72" style="width:54pt">  <col width="102" span="2" style="mso-width-source:userset;mso-width-alt:3264;
    width:77pt">  <col width="72" span="7" style="width:54pt">
    </colgroup><tbody>
        <tr height="19" style="height:14.25pt">
            <td height="19" width="72" style="height:14.25pt;width:54pt">&nbsp;</td>
            <td colspan="2" width="204" style="mso-ignore:colspan;width:154pt">自由度1 = 1, 自由度2   = 4</td>
            <td width="72" style="width:54pt">&nbsp;</td>
            <td colspan="3" width="216" style="mso-ignore:colspan;width:162pt">自由度1 = 4, 自由度2   = 4</td>
            <td colspan="3" width="216" style="mso-ignore:colspan;width:162pt">自由度1 = 10,   自由度2 = 10</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" style="height:14.25pt">F值 x</td>
            <td>概率密度值</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td colspan="2" style="mso-ignore:colspan">概率密度值</td>
            <td>&nbsp;</td>
            <td colspan="2" style="mso-ignore:colspan">概率密度值</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">0.1</td>
            <td align="right" x:num="1.114863261455846">1.114863261</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.4098080732295265">0.409808</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="2.4289227237010647E-2">0.024289</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">0.2</td>
            <td align="right" x:num="0.74223772182934744">0.742237722</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.57870370371850888">0.578704</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.16279762757273775">0.162798</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">0.3</td>
            <td align="right" x:num="0.57141216198096467">0.571412162</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.6302300339785194">0.63023</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.37016218095648767">0.370162</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">0.4</td>
            <td align="right" x:num="0.46721799259194141">0.467217993</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.62473969181106837">0.62474</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.5575709750737482">0.557571</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">0.5</td>
            <td align="right" x:num="0.39506172836217723">0.395061728</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.59259259260775299">0.592593</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.68282274051884373">0.682823</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">0.6</td>
            <td align="right" x:num="0.34135875163255719">0.341358752</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.54931640626405287">0.549316</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.74258423419375352">0.742584</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">0.7</td>
            <td align="right" x:num="0.29949362410543073">0.299493624</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.50286754230761721">0.502868</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.75031477022169057">0.750315</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">0.8</td>
            <td align="right" x:num="0.26578664741528707">0.265786647</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.45724737083931549">0.457247</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.72272894176747726">0.722729</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">0.9</td>
            <td align="right" x:num="0.23799607304498396">0.237996073</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.41436146132535423">0.414361</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.67417800211223922">0.674178</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">1</td>
            <td align="right" x:num="0.21466252582211168">0.214662526</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.37500000000959366">0.375</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.61523437507472545">0.615234</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">1.1</td>
            <td align="right" x:num="0.19478677318828405">0.194786773</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.33936477086033334">0.339365</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.55299135606392957">0.552991</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">1.2</td>
            <td align="right" x:num="0.17765697536067857">0.177656975</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.30735605492214479">0.307356</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.49185685154946523">0.491857</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">1.3</td>
            <td align="right" x:num="0.16274958726152447">0.162749587</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.27872970723373458">0.27873</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.43434577218892312">0.434346</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">1.4</td>
            <td align="right" x:num="0.1496693348544775">0.149669335</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.25318287037684756">0.253183</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.3817159216817802">0.381716</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">1.5</td>
            <td align="right" x:num="0.13811119810211536">0.138111198</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.23040000000589433">0.2304</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.3344302080406194">0.33443</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">1.6</td>
            <td align="right" x:num="0.1278354154449193">0.127835415</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.21007667799283983">0.210077</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.29247382199031147">0.292474</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">1.7</td>
            <td align="right" x:num="0.11865052006459002">0.11865052</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.19193099516712006">0.191931</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.25556336239970795">0.255563</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">1.8</td>
            <td align="right" x:num="0.1104015090140279">0.110401509</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.17570803832186296">0.175708</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.22328022262322145">0.22328</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">1.9</td>
            <td align="right" x:num="0.10296139460610913">0.102961395</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.1611806340095612">0.161181</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.19515288426568816">0.195153</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" align="right" style="height:14.25pt" x:num="">2</td>
            <td align="right" x:num="9.6225044856928038E-2">0.096225045</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.14814814815193825">0.148148</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td align="right" x:num="0.17070568512971093">0.170706</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
</table>
<hr>
<p>图形：</p>
<p><a target="_blank" href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_234.png"><img alt="" src="http://www.myfootprints.cn/OldWeb/blog/upload/201003191836385430.gif" width="550"></a></p>
</div>
<p>&nbsp;</p>
<p>&nbsp;</p>
      