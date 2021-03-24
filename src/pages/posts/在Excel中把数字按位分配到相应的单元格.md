---
stackbit_url_path: >-
  posts/在Excel中把数字按位分配到相应的单元格
title: '在Excel中把数字按位分配到相应的单元格'
date: '2010-03-31 11:33:56'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>有人问到这个问题，如何把金额数字按位分配到相应的单元格？比如输入￥123.45，就将5分配到分，4分配到角，3分配到元，2分配到十元，1分配到百元，依次类推。</p>
<p>即：</p>
<table border="1">
    <tbody>
        <tr height="19" style="height:14.25pt">
            <td height="19" class="xl64" width="44" style="height:14.25pt;width:33pt">亿</td>
            <td class="xl64" width="44" style="border-left:none;width:33pt">千万</td>
            <td class="xl64" width="44" style="border-left:none;width:33pt">百万</td>
            <td class="xl64" width="44" style="border-left:none;width:33pt">十万</td>
            <td class="xl64" width="44" style="border-left:none;width:33pt">万</td>
            <td class="xl64" width="44" style="border-left:none;width:33pt">千</td>
            <td class="xl64" width="44" style="border-left:none;width:33pt">百</td>
            <td class="xl64" width="44" style="border-left:none;width:33pt">十</td>
            <td class="xl64" width="44" style="border-left:none;width:33pt">元</td>
            <td class="xl64" width="44" style="border-left:none;width:33pt">角</td>
            <td class="xl64" width="44" style="border-left:none;width:33pt">分</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" class="xl64" style="height:14.25pt;border-top:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">1</td>
            <td class="xl64" style="border-top:none;border-left:none">1</td>
            <td class="xl64" style="border-top:none;border-left:none">7</td>
            <td class="xl64" style="border-top:none;border-left:none">7</td>
            <td class="xl64" style="border-top:none;border-left:none">2</td>
            <td class="xl64" style="border-top:none;border-left:none">3</td>
            <td class="xl64" style="border-top:none;border-left:none">5</td>
            <td class="xl64" style="border-top:none;border-left:none">4</td>
            <td class="xl64" style="border-top:none;border-left:none">3</td>
            <td class="xl64" style="border-top:none;border-left:none">2</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" class="xl64" style="height:14.25pt;border-top:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" class="xl64" style="height:14.25pt;border-top:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" class="xl64" style="height:14.25pt;border-top:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" class="xl64" style="height:14.25pt;border-top:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" class="xl64" style="height:14.25pt;border-top:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
            <td class="xl64" style="border-top:none;border-left:none">　</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td colspan="11" height="19" class="xl65" style="height:14.25pt">11772354.32</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" class="xl63" style="height:14.25pt">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" class="xl63" style="height:14.25pt">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" class="xl63" style="height:14.25pt">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
            <td class="xl63">&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" colspan="10" style="height:14.25pt;mso-ignore:colspan">在A8中输入任一个数（如上面的11772354.32），让它们自动分配到第二行相应的位置</td>
            <td class="xl63">&nbsp;</td>
        </tr>
    </tbody>
</table>
<p>我立即将这个问题解决了，思路是将输入的数字做为字符串，去找小数点的位置（如无小数点，则认为是在最后一个字符的后面），然后，截取小数点后两位的字符，将它分配到分，再截取小数点后一位的字符，将它分配到角，然后再截取小数点前一位的字符，将它分配到元，然后截取小数点前两位的字符，分配到十元处，依次类推。</p>
<p>以上是基本思路，写公式时，加上了错误处理，最终公式为（仅列出分配“分”的公式）：</p>
<p>&nbsp;=IF(ISERROR(MID($A$8,IF(ISERROR(FIND(".",$A$8)),LEN($A$8)+1,FIND(".",$A$8))+2,1)),"",MID($A$8,IF(ISERROR(FIND(".",$A$8)),LEN($A$8)+1,FIND(".",$A$8))+2,1))</p>
<p>它工作得很好。</p>
<p>我又将以上解决方案稍作修改，使更加方便用户：</p>
<table border="1">
    <tbody>
        <tr height="19" style="height:14.25pt">
            <td height="19" class="xl67" width="138" style="height:14.25pt;width:104pt">输入</td>
            <td class="xl66" width="44" style="border-left:none;width:33pt">亿</td>
            <td class="xl66" width="44" style="border-left:none;width:33pt">千万</td>
            <td class="xl66" width="44" style="border-left:none;width:33pt">百万</td>
            <td class="xl66" width="44" style="border-left:none;width:33pt">十万</td>
            <td class="xl66" width="44" style="border-left:none;width:33pt">万</td>
            <td class="xl66" width="44" style="border-left:none;width:33pt">千</td>
            <td class="xl66" width="44" style="border-left:none;width:33pt">百</td>
            <td class="xl66" width="44" style="border-left:none;width:33pt">十</td>
            <td class="xl66" width="44" style="border-left:none;width:33pt">元</td>
            <td class="xl66" width="44" style="border-left:none;width:33pt">角</td>
            <td class="xl66" width="44" style="border-left:none;width:33pt">分</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" class="xl68" align="right" style="height:14.25pt;border-top:none">134.34</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">1</td>
            <td class="xl66" style="border-top:none;border-left:none">3</td>
            <td class="xl66" style="border-top:none;border-left:none">4</td>
            <td class="xl66" style="border-top:none;border-left:none">3</td>
            <td class="xl66" style="border-top:none;border-left:none">4</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" class="xl68" align="right" style="height:14.25pt;border-top:none">31,485,345.34</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">3</td>
            <td class="xl66" style="border-top:none;border-left:none">1</td>
            <td class="xl66" style="border-top:none;border-left:none">4</td>
            <td class="xl66" style="border-top:none;border-left:none">8</td>
            <td class="xl66" style="border-top:none;border-left:none">5</td>
            <td class="xl66" style="border-top:none;border-left:none">3</td>
            <td class="xl66" style="border-top:none;border-left:none">4</td>
            <td class="xl66" style="border-top:none;border-left:none">5</td>
            <td class="xl66" style="border-top:none;border-left:none">3</td>
            <td class="xl66" style="border-top:none;border-left:none">4</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" class="xl68" align="right" style="height:14.25pt;border-top:none">32.00</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">3</td>
            <td class="xl66" style="border-top:none;border-left:none">2</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" class="xl68" align="right" style="height:14.25pt;border-top:none">275,423,442.33</td>
            <td class="xl66" style="border-top:none;border-left:none">2</td>
            <td class="xl66" style="border-top:none;border-left:none">7</td>
            <td class="xl66" style="border-top:none;border-left:none">5</td>
            <td class="xl66" style="border-top:none;border-left:none">4</td>
            <td class="xl66" style="border-top:none;border-left:none">2</td>
            <td class="xl66" style="border-top:none;border-left:none">3</td>
            <td class="xl66" style="border-top:none;border-left:none">4</td>
            <td class="xl66" style="border-top:none;border-left:none">4</td>
            <td class="xl66" style="border-top:none;border-left:none">2</td>
            <td class="xl66" style="border-top:none;border-left:none">3</td>
            <td class="xl66" style="border-top:none;border-left:none">3</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" class="xl68" align="right" style="height:14.25pt;border-top:none">3,454,366.54</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">3</td>
            <td class="xl66" style="border-top:none;border-left:none">4</td>
            <td class="xl66" style="border-top:none;border-left:none">5</td>
            <td class="xl66" style="border-top:none;border-left:none">4</td>
            <td class="xl66" style="border-top:none;border-left:none">3</td>
            <td class="xl66" style="border-top:none;border-left:none">6</td>
            <td class="xl66" style="border-top:none;border-left:none">6</td>
            <td class="xl66" style="border-top:none;border-left:none">5</td>
            <td class="xl66" style="border-top:none;border-left:none">4</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" class="xl68" align="right" style="height:14.25pt;border-top:none">11.00</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">1</td>
            <td class="xl66" style="border-top:none;border-left:none">1</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
            <td class="xl66" style="border-top:none;border-left:none">　</td>
        </tr>
    </tbody>
</table>
<p>&nbsp;</p>
<p>以上所说的表格，可以通过此链接下载：</p>
<p>&nbsp;</p>
<p><a target="_blank" href="http://www.myfootprints.cn/OldWeb/blog/upload/201003311848525826.xls">201003311848525826.xls</a></p>
<p>我的同学也给了一个解决方案，她的思路和我的完全不同，她是将数字仍然看成数字（我是看成字符串处理的！），通过取整来达到目的。</p>
<p>即对一个金额￥123.45，要求出十元位置的2，那么，先将123.45除以10并取整得12，再将123.45除以100取整得1，再将结果乘以10得10，最后用12减去10得到正确的结果2。要求出百元位置的1，那么按同样的算法，将123.45除以100并取整得1，再将123.45除以1000取整得0，再将结果乘以10仍得0，最后1减去0得到结果1。其它位置依次类推。</p>
<p>她的解决方案我很喜欢，公式非常简洁，如：</p>
<table border="1">
    <tbody>
        <tr height="19" style="height:14.25pt">
            <td height="19" width="72" style="height:14.25pt;width:54pt">千万</td>
            <td width="72" style="width:54pt">百万</td>
            <td width="105" style="width:79pt">十万</td>
            <td width="72" style="width:54pt">万</td>
            <td width="72" style="width:54pt">千</td>
            <td width="76" style="width:57pt">百</td>
            <td width="72" style="width:54pt">十</td>
            <td width="72" style="width:54pt">元</td>
            <td width="84" style="width:63pt">角</td>
            <td width="72" style="width:54pt">分</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" class="xl63" align="right" style="height:14.25pt">0</td>
            <td class="xl63" align="right">0</td>
            <td class="xl63" align="right">0</td>
            <td class="xl63" align="right">0</td>
            <td class="xl63" align="right">1</td>
            <td class="xl63" align="right">1</td>
            <td class="xl63" align="right">1</td>
            <td class="xl63" align="right">3</td>
            <td class="xl63" align="right">1</td>
            <td class="xl63" align="right">2</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" style="height:14.25pt">&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
        <tr height="19" style="height:14.25pt">
            <td height="19" style="height:14.25pt">&nbsp;</td>
            <td>输入--&gt;</td>
            <td align="right">1113.12</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
        </tr>
    </tbody>
</table>
<p>&nbsp;</p>
<p>其中求分的公式为：=INT(C4*100)-INT(C4*10)*10，C4即为1113.12所处于的单元格。</p>
<p>这个Excel表格可以通过以下链接下载：</p>
<p>&nbsp;</p>
<p><a target="_blank" href="http://www.myfootprints.cn/OldWeb/blog/upload/201003311857160477.xls">201003311857160477.xls</a></p>
<p>总结：</p>
<p>可能是由于一直学习编程，经常对字符串进行处理，我的思维方式已经是计算机的思维方式了。我的同学是数学系的（当然我也是），仍然保留着数学人的思维方式，很好，至简。</p>
      