---
stackbit_url_path: >-
  posts/对JavaScript的Mathpow()函数的一个修正
title: '对JavaScript的Math.pow()函数的一个修正'
date: '2012-02-21 07:06:17.9360811'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - Math
  - javascript
  - pow
  - 立方根
canonical_url: >-
template: post
---
<h2><font color="#800080">一、问题：</font></h2>  <p>JavaScript的Math对象中有一个方法Math.pow(x, y)，用来求x的y次方。它有一个问题，即当x&lt;0且y&lt;1的时候，它总是返回NaN。对于x&lt;0且1/y为偶数时，它返回NaN是有道理的，因为负数不能够被开偶数次方根。但是对于x&lt;0且1/y为奇数时，返回NaN就没有道理了，因为负数也可以被开奇数次方根。</p>  <p>即JavaScript的Math.pow(x, y)方法，不支持对负数求奇次方根。</p>  <p>举例来说明：</p>  <table style="border-bottom: black 1px solid; border-left: black 1px solid; border-top: black 1px solid; border-right: black 1px solid" border="0" cellspacing="0" cellpadding="2" width="540" class="tbLikeGoogle tbGridView"><tbody>     <tr>       <td width="173" align="center">         <p align="center"><strong>测试用例</strong></p>       </td>        <td width="138" align="center">         <p align="center"><strong>说明</strong></p>       </td>        <td width="77" align="center">         <p align="center"><strong>JavaScript 返回结果</strong></p>       </td>        <td width="76" align="center">         <p align="center"><strong>实际应返回结果</strong></p>       </td>        <td width="74" align="center">         <p align="center"><strong>是否通过测试？</strong></p>       </td>     </tr>      <tr>       <td valign="top" width="173"><a title="点击这里运行！" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=alert(Math.pow(16%2C%201%2F2))%3B" target="_blank">Math.pow(16, 1/2)</a></td>        <td valign="top" width="138">16^(1/2)，即对16开平方</td>        <td valign="top" width="77">4</td>        <td valign="top" width="76">4</td>        <td valign="top" width="74">通过</td>     </tr>      <tr>       <td valign="top" width="173"><a title="点击这里运行！" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=alert(Math.pow(-16%2C%201%2F2))%3B" target="_blank">Math.pow(-16, 1/2)</a></td>        <td valign="top" width="138">(-16)^(1/2)，即对-16开平方</td>        <td valign="top" width="77">NaN</td>        <td valign="top" width="76">NaN</td>        <td valign="top" width="74">通过</td>     </tr>      <tr>       <td valign="top" width="173"><a title="点击这里运行！" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=alert(Math.pow(27%2C%201%2F3))%3B" target="_blank">Math.pow(27, 1/3)</a></td>        <td valign="top" width="138">27^(1/3)，即对27开立方</td>        <td valign="top" width="77">3</td>        <td valign="top" width="76">3</td>        <td valign="top" width="74">通过</td>     </tr>      <tr>       <td valign="top" width="173"><a title="点击这里运行！" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=alert(Math.pow(-27%2C%201%2F3))%3B" target="_blank">Math.pow(-27, 1/3)</a></td>        <td valign="top" width="138">(-27)^(1/3)，即对-27开立方</td>        <td valign="top" width="77">NaN</td>        <td valign="top" width="76">-3</td>        <td valign="top" width="74">失败！</td>     </tr>   </tbody></table>  <p><em>注：以上均在实数范围内讨论。</em></p>  <h2><font color="#800080">二、问题原因：</font></h2>  <p>估计JavaScript的Math.pow(x, y)方法，是使用对数逼近的途径来对x的奇次方根求解的，而对数函数的定义域不包括负数，于是产生了这个问题。</p>  <h2><font color="#800080">三、解决方案：</font></h2>  <pre class="brush: javascript">    Math.power = Math.pow;
    //
    // 让Math.pow(x, y)支持对x求奇次方根
    //
    Math.pow = function (x, y) {
        if (y &lt; 1 &amp;&amp; 1 / y % 2 == 1 &amp;&amp; x &lt; 0) {
            return -Math.power(-x, y);
        } else {
            return Math.power(x, y);
        }
    };</pre>

<h2><font color="#800080">四、检验：</font></h2>

<p>在进行修正后，再运行以上的测试用例，则全部通过。</p>

<table style="border-bottom: black 1px solid; border-left: black 1px solid; border-top: black 1px solid; border-right: black 1px solid" border="0" cellspacing="0" cellpadding="2" width="552" class="tbLikeGoogle tbGridView"><tbody>
    <tr>
      <td width="173" align="center">
        <p align="center"><strong>测试用例</strong></p>
      </td>

      <td width="138" align="center">
        <p align="center"><strong>说明</strong></p>
      </td>

      <td width="89" align="center">
        <p align="center"><strong>修正后JavaScript 返回结果</strong></p>
      </td>

      <td width="73" align="center">
        <p align="center"><strong>实际应返回结果</strong></p>
      </td>

      <td width="77" align="center">
        <p align="center"><strong>是否通过测试？</strong></p>
      </td>
    </tr>

    <tr>
      <td valign="top" width="173"><a title="点击这里运行！" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=%20%20%20%20Math.power%20%3D%20Math.pow%3B%0A%20%20%20%20%2F%2F%0A%20%20%20%20%2F%2F%20%E8%AE%A9Math.pow(x%2C%20y)%E6%94%AF%E6%8C%81%E5%AF%B9x%E6%B1%82%E5%A5%87%E6%AC%A1%E6%96%B9%E6%A0%B9%0A%20%20%20%20%2F%2F%0A%20%20%20%20Math.pow%20%3D%20function%20(x%2C%20y)%20%7B%0A%20%20%20%20%20%20%20%20if%20(y%20%3C%201%20%26%26%201%20%2F%20y%20%25%202%20%3D%3D%201%20%26%26%20x%20%3C%200)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20-Math.power(-x%2C%20y)%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20Math.power(x%2C%20y)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20alert(Math.pow(16%2C%201%2F2))%3B" target="_blank">Math.pow(16, 1/2)</a></td>

      <td valign="top" width="138">16^(1/2)，即对16开平方</td>

      <td valign="top" width="89">4</td>

      <td valign="top" width="73">4</td>

      <td valign="top" width="77">通过</td>
    </tr>

    <tr>
      <td valign="top" width="173"><a title="点击这里运行！" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=%20%20%20%20Math.power%20%3D%20Math.pow%3B%0A%20%20%20%20%2F%2F%20%E8%AE%A9Math.pow(x%2C%20y)%E6%94%AF%E6%8C%81%E5%AF%B9x%E6%B1%82%E5%A5%87%E6%AC%A1%E6%96%B9%E6%A0%B9%0A%20%20%20%20Math.pow%20%3D%20function%20(x%2C%20y)%20%7B%0A%20%20%20%20%20%20%20%20if%20(y%20%3C%201%20%26%26%201%20%2F%20y%20%25%202%20%3D%3D%201%20%26%26%20x%20%3C%200)%20%7B%20return%20-Math.power(-x%2C%20y)%3B%7D%20else%20%7B%20return%20Math.power(x%2C%20y)%3B%7D%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20alert(Math.pow(-16%2C%201%2F2))%3B" target="_blank">Math.pow(-16, 1/2)</a></td>

      <td valign="top" width="138">(-16)^(1/2)，即对-16开平方</td>

      <td valign="top" width="89">NaN</td>

      <td valign="top" width="73">NaN</td>

      <td valign="top" width="77">通过</td>
    </tr>

    <tr>
      <td valign="top" width="173"><a title="点击这里运行！" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=%20%20%20%20Math.power%20%3D%20Math.pow%3B%0A%20%20%20%20%2F%2F%20%E8%AE%A9Math.pow(x%2C%20y)%E6%94%AF%E6%8C%81%E5%AF%B9x%E6%B1%82%E5%A5%87%E6%AC%A1%E6%96%B9%E6%A0%B9%0A%20%20%20%20Math.pow%20%3D%20function%20(x%2C%20y)%20%7B%0A%20%20%20%20%20%20%20%20if%20(y%20%3C%201%20%26%26%201%20%2F%20y%20%25%202%20%3D%3D%201%20%26%26%20x%20%3C%200)%20%7B%20return%20-Math.power(-x%2C%20y)%3B%7D%20else%20%7B%20return%20Math.power(x%2C%20y)%3B%7D%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20alert(Math.pow(27%2C%201%2F3))%3B" target="_blank">Math.pow(27, 1/3)</a></td>

      <td valign="top" width="138">27^(1/3)，即对27开立方</td>

      <td valign="top" width="89">3</td>

      <td valign="top" width="73">3</td>

      <td valign="top" width="77">通过</td>
    </tr>

    <tr>
      <td valign="top" width="173"><a title="点击这里运行！" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=%20%20%20%20Math.power%20%3D%20Math.pow%3B%0A%20%20%20%20%2F%2F%20%E8%AE%A9Math.pow(x%2C%20y)%E6%94%AF%E6%8C%81%E5%AF%B9x%E6%B1%82%E5%A5%87%E6%AC%A1%E6%96%B9%E6%A0%B9%0A%20%20%20%20Math.pow%20%3D%20function%20(x%2C%20y)%20%7B%0A%20%20%20%20%20%20%20%20if%20(y%20%3C%201%20%26%26%201%20%2F%20y%20%25%202%20%3D%3D%201%20%26%26%20x%20%3C%200)%20%7B%20return%20-Math.power(-x%2C%20y)%3B%7D%20else%20%7B%20return%20Math.power(x%2C%20y)%3B%7D%0A%20%20%20%20%7D%3B%0A%0A%20%20%20%20alert(Math.pow(-27%2C%201%2F3))%3B" target="_blank">Math.pow(-27, 1/3)</a></td>

      <td valign="top" width="138">(-27)^(1/3)，即对-27开立方</td>

      <td valign="top" width="89">-3</td>

      <td valign="top" width="73">-3</td>

      <td valign="top" width="77">通过</td>
    </tr>
  </tbody></table>