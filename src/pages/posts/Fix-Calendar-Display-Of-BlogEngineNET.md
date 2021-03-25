---
stackbit_url_path: >-
  posts/Fix-Calendar-Display-Of-BlogEngineNET
title: '更正BlogEngine.NET的日历显示'
date: '2011-07-26 08:22:00'
excerpt: >-
  本文解释了在BlogEngine.NET中，日历部件显示问题的出现原因，以及解决办法。
comments_count: 0
positive_reactions_count: 0
tags: 
  - BlogEngine.NET
  - Calendar
  - 日历
canonical_url: https://be-net.azurewebsites.net/post/2011/07/26/Fix-Calendar-Display-Of-BlogEngineNET
template: post
---
<h1><span style="color: #800080;">一、症状：</span></h1>
<p>BlogEngine.NET 的日历部件，在中文状态下，星期部分显示不全，如下图所示：</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_39.png"><img style="display: inline; border-width: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_39.png" border="0" alt="image" width="240" height="222" /></a></p>
<h1><span style="color: #800080;">二、原因：</span></h1>
<p>在此部件的源代码中，对其显示格式作了 DayNameFormat="FirstTwoLetters" 设置，这个设置没有考虑到中文的显示效果。</p>
<p>当在英文文化环境下时，取前两位字母，显示效果如下：</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_40.png"><img style="display: inline; border-width: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_40.png" border="0" alt="image" width="240" height="214" /></a></p>
<p>源代码路径：~\BlogEngine.NET\widgets\Calendar\widget.ascx</p>
<pre class="brush: html">...
&lt;blog:PostCalendar ID="PostCalendar1" runat="Server" NextMonthText="&gt;&gt;" DayNameFormat="FirstTwoLetters"
        FirstDayOfWeek="monday" PrevMonthText="&lt;&lt;" CssClass="calendar" BorderWidth="0"
        WeekendDayStyle-CssClass="weekend" OtherMonthDayStyle-CssClass="other" UseAccessibleHeader="true"
        EnableViewState="false" /&gt;
...</pre>
<p>&nbsp;</p>
<h1><span style="color: #800080;">三、解决方案：</span></h1>
<p>将上述源代码修改为如下代码后（DayNameFormat="Short" ），即可。</p>
<p>源代码路径：~\BlogEngine.NET\widgets\Calendar\widget.ascx</p>
<pre class="brush: html">...
&lt;blog:PostCalendar ID="PostCalendar1" runat="Server" NextMonthText="&gt;&gt;" DayNameFormat="Short"
        FirstDayOfWeek="monday" PrevMonthText="&lt;&lt;" CssClass="calendar" BorderWidth="0"
        WeekendDayStyle-CssClass="weekend" OtherMonthDayStyle-CssClass="other" UseAccessibleHeader="true"
        EnableViewState="false" /&gt;
...</pre>
<h1><span style="color: #800080;">四、解决后的图示如下：</span></h1>
<table border="0" cellspacing="0" cellpadding="2" width="400">
<tbody>
<tr>
<td width="200" valign="top">中文环境</td>
<td width="200" valign="top">英文环境</td>
</tr>
<tr>
<td width="200" valign="top"><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_41.png"><img style="display: inline; border: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_41.png" border="0" alt="image" width="240" height="231" /></a></td>
<td width="200" valign="top"><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_42.png"><img style="display: inline; border: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_42.png" border="0" alt="image" width="240" height="215" /></a></td>
</tr>
</tbody>
</table>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>[donate:www.zizhujy.com]</p>