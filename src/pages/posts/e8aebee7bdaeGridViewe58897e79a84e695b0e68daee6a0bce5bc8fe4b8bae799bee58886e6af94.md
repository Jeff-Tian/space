---
stackbit_url_path: >-
  posts/e8aebee7bdaeGridViewe58897e79a84e695b0e68daee6a0bce5bc8fe4b8bae799bee58886e6af94
title: '设置GridView列的数据格式为百分比'
date: '2010-11-18 05:49:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - ASP.NET
  - GridView
  - 数据格式
canonical_url: https://be-net.azurewebsites.net/post/2010/11/18/e8aebee7bdaeGridViewe58897e79a84e695b0e68daee6a0bce5bc8fe4b8bae799bee58886e6af94
template: post
---
<p>GridView列的数据格式，可以在列的DataFormatString属性中进行设置。我上网查询了一下相关的资料，全部都是讲如何设置为日期格式、货币格式、小数格式，而我想设置成百分比的格式，却怎么也找不到相关资料，只能自己尝试，没想到轻松搞定。即将 DataFormatString 设置为 {0: 0.#%} 即可。如下图：</p>  <p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_64.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_64.png" width="636" height="445" /></a></p>  <p>如果要略掉首位的0，还可以设置为{0: #.#%}。小数后面的#，估计可以设置小数位数，比如要显示到小数点后4位，可以设置为{0: #.####%}。</p>  <hr />  <p>附：其他的 DataFormatString 设置项</p>  <p>DataFormatString=&quot;{0:格式字符串}&quot;</p>  <p>在DataFormatString 中的 {0} 表示数据本身，而在冒号后面的格式字符串代表所们希望数据显示的格式；    <br />数字、货币格式：     <br />在指定的格式符号后可以指定小数所要显示的位数。例如原来的数据为「1.56」，若格式设定为 {0:N1}，则输出为「1.5」。其常用的数值格式如下表所示：     <br />格式字符串 输入 结果     <br />&quot;{0:C}&quot; 12345.6789 $12,345.68     <br />&quot;{0:C}&quot; -12345.6789 ($12,345.68)     <br />&quot;{0:D}&quot; 12345 12345     <br />&quot;{0:D8}&quot; 12345 00012345     <br />&quot;{0:E}&quot; 12345.6789 1234568E+004     <br />&quot;{0:E10}&quot; 12345.6789 1.2345678900E+004     <br />&quot;{0:F}&quot; 12345.6789 12345.68     <br />&quot;{0:F0}&quot; 12345.6789 12346     <br />&quot;{0:G}&quot; 12345.6789 12345.6789     <br />&quot;{0:G7}&quot; 123456789 1.234568E8     <br />&quot;{0:N}&quot; 12345.6789 12,345.68     <br />&quot;{0:N4}&quot; 123456789 123,456,789.0000     <br />&quot;Total: {0:C}&quot; 12345.6789 Total: $12345.68     <br />常用的日期时间格式：     <br />格式 说明 输出格式     <br />d 精简日期格式 MM/dd/yyyy     <br />D 详细日期格式 dddd, MMMM dd, yyyy     <br />f 完整格式 (long date + short time) dddd, MMMM dd, yyyy HH:mm     <br />F     <br />完整日期时间格式     <br />(long date + long time)     <br />dddd, MMMM dd, yyyy HH:mm:ss     <br />g 一般格式 (short date + short time) MM/dd/yyyy HH:mm     <br />G 一般格式 (short date + long time) MM/dd/yyyy HH:mm:ss     <br />m,M 月日格式 MMMM dd     <br />s 适中日期时间格式 yyyy-MM-dd HH:mm:ss     <br />t 精简时间格式 HH:mm     <br />T 详细时间格式 HH:mm:ss</p>  <p>最后写一下中国常用的格式</p>  <p>{0:yyyy-MM-dd}</p>  <p>如果需要使用日期类型的格式化字符串，必须数据实体中对应的字段也应该日起类型的。</p>  <p>格式化字符串C代表货币单位，需要绑定的数据类型应该是数字类型的。如果是字符串类型的不起作用，需要手动添加格式化字符串为DataFormatString=&quot;￥{0:C}&quot;。</p>