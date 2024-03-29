---
stackbit_url_path: >-
  posts/《ASPNET-35-入门》第-1-章-练习
title: '《ASP.NET 3.5 入门》第 1 章 练习'
date: '2010-02-26 03:28:06'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/02/26/《ASPNET-35-入门》第-1-章-练习
template: post
---

        <div style="font-size: larger; text-indent: 2em;">
<p style="background-color: #FFFFCC; font-weight: bold;">（1）解释VWD中的页面标记与浏览器中的最终HTML页面之间的区别。</p>
<p style="padding-left: 40px">VWD中的页面标记是给服务器程序（如.NET框架）看的，而最终HTML页面是给客户端浏览器看的。</p>
<p style="padding-left: 40px">VWD中的页面标记混合了HTML标记与ASP.NET标签，甚至还夹杂了其他程序代码如VB或者C#。而最终HTML页面只有HTML标记，或者脚本语言、CSS等，而不会有ASP.NET标签以及程序代码。</p>
<p style="padding-left: 40px">最终HTML页面是由服务器程序对VWD中的页面标记进行了处理之后转化产生的。</p>
<div style="background-color: #6699FF; margin: 0 0 0 40px; padding: 10px; text-indent: 2em;">
<p><strong>原书答案：</strong></p>
<p>在VWD中页面标记包含页面原始和未处理的源代码，包括HTML、ASP.NET Server                      Controls和编程代码。然后Web服务器处理页面，执行页面里的代码，然后将最终的HTML发送到浏览器。</p>
</div>
<p style="background-color: #FFFFCC; font-weight: bold">（2）解释HTML与XHTML之间的区别。两者有什么关系？</p>
<p style="padding-left: 40px">简单地说，XHTML有着比HTML更加严格和规范的语法要求。具体地说，XHTML有如下要求而HTML中不要求的。</p>
<p style="padding-left: 40px; font-weight: bold;">① 总是闭合元素</p>
<p style="padding-left: 80px">在XHTML中，所有元素都必须闭合。因此如果用&lt;p&gt;开始了一个段落，就必须在页面的后面某个地方用&lt;/p&gt;闭合这个段落。对于没有结束标记的标记也是如此，比如&lt;img&gt;或&lt;br&gt;（用来输入一个行中断）。在XHTML中，这些标记被写为自结束标记，其中结束标记中的斜杠直接嵌套在标记自身中，比如在&lt;img                  src="Logo.gif" /&gt;或&lt;br /&gt;中。</p>
<p style="padding-left: 40px; font-weight: bold;">② 标记和属性名称总是使用小写</p>
<p style="padding-left: 80px">XML是区分大小写的，XHTML通过强制所有标记采用小写来应用该规则。虽然标记和属性必须都是小写，但是属性的实际值不必是这样。因此，前面显示logo图像的示例是完全有效的XHTML，尽管图像名称中用了大写的L。</p>
<p style="padding-left: 40px; font-weight: bold;">③ 总是用引号括起属性</p>
<p style="padding-left: 80px">每当在标记中写属性时，都要用引号将它的值括起来。例如，在写&lt;img&gt;标记和 src 属性时，如下这样写：</p>
<p style="padding-left: 80px; background-color: #C0C0C0;">&lt;img src="Logo.gif" /&gt;</p>
<p style="padding-left: 80px">而不是</p>
<p style="padding-left: 80px; background-color: #C0C0C0;">&lt;img src=Logo.gif /&gt;</p>
<p style="padding-left: 80px">注意，也可以用单引号括起属性值，比如下面这个示例：</p>
<p style="padding-left: 80px; background-color: #C0C0C0;">&lt;img src='Logo.gif' /&gt;</p>
<p style="padding-left: 80px">有时还有必要嵌套单引号和双引号。当有些特殊ASP.NET语法要求使用双引号时，应当用单引号括属性值：</p>
<p style="padding-left: 80px; background-color: #C0C0C0;">&lt;asp:Label                  ID="DescriptionLabel" runat="server" <b>Text='&lt;%# Eval("Description") %&gt;'</b> /&gt;</p>
<p style="padding-left: 40px; font-weight: bold;">④ 正确地嵌套标记</p>
<p style="padding-left: 80px">在写嵌套标记时，一定要先闭合上一个起始标记，然后闭合外部标记。考虑以下这个示例，即同时用粗体和斜体格式化一段文本：</p>
<p style="padding-left: 80px; background-color: #C0C0C0;">&lt;b&gt;&lt;i&gt;这是一段被格式化的文本&lt;/i&gt;&lt;/b&gt;</p>
<p style="padding-left: 80px">注意&lt;i&gt;是在&lt;b&gt;标记之前闭合的。交换结束标记的顺序会导致无效的XHTML：</p>
<p style="padding-left: 80px; background-color: #C0C0C0;">&lt;b&gt;&lt;i&gt;这是一段被格式化的文本&lt;/b&gt;&lt;/i&gt;</p>
<p style="padding-left: 40px; font-weight: bold;">⑤ 总是向页面中添加一个DOCTYPE声明</p>
<p style="padding-left: 80px">DOCTYPE指出了一个能接受的HTML类型信息。默认情况下，VWD向页面中添加的DOCTYPE是XHTML                  1.0 Transitional。</p>
<p style="padding-left: 80px; background-color: #C0C0C0;">&lt;!DOCTYPE html PUBLIC                  "-//W3C//DTD XHTML 1.0 Transitional//EN"                  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"&gt;</p>
<p style="padding-left: 80px">DOCTYPE 大大影响浏览器（比如 Internet                  Explorer）呈现页面的方式。VWD中的XHTML 1.0 Transitional默认DOCTYPE很好地保证了有效标记在页面和各主浏览器中的显示一致。</p>
<p style="padding-left: 40px">XHTML的关系：XHTML是用XML形式重新表示的HTML。</p>
<div style="background-color: #6699FF; margin: 0 0 0 40px; padding: 10px; text-indent: 2em;">
<p><strong>原书答案：</strong></p>
<p>XHTML与HTML相关，因为XHTML是使用XML规则重写的HTML。其中HTML更随意，XHTML要求编程人员所写的代码符合XML规则，例如正确的大小写、结束标记以及引号内的属性。</p>
</div>
<p style="background-color: #FFFFCC; font-weight: bold">（3）假设您有若干HTML片段，想在站点中大量使用它们。使这些片段在VWD中可用的最佳方式是什么？</p>
<p style="padding-left: 40px">在工具箱里，新增一个Tab，并选中想要大量使用的代码片段，将它拖到工具箱中的新的Tab上，并起一个有意义的名称，这样就可以在想要使用它的地方，从工具箱中直接拖动到目的地就可以了。</p>
<div style="background-color: #6699FF; margin: 0 0 0 40px; padding: 10px; text-indent: 2em;">
<p><strong>原书答案：</strong></p>
<p>保存常用HTML片段最简单的方法是在代码窗口中选择它们，然后将它们拖动到Toolbox上的空白空间。添加选项时，可以给它重命名，给它起一个更有意义的名称。现在只需双击一个选项，或者当需要它时，将它从Toolbox拖动到页面中。</p>
</div>
<p style="font-weight: bold; background-color: #FFFFCC">（4）重置部分或全部IDE自定义设置有哪3种方式？</p>
<p style="padding-left: 40px">① 重置所有设置：从Tools菜单中选择Import 和 Export Settings 命令。然后，选择                  Reset All Settings 选项并单击Next按钮。如果愿意，可以为现有的设置创建一个备份；否则，就选No，Just Reset                  Settings选项。最后，单击Finish按钮。</p>
<p style="padding-left: 40px">② 重置 Toolbox：右击Toolbox并选择Reset                  Toolbox命令将Toolbox重置为它的原始状态。</p>
<p style="padding-left: 40px">③ 重置 Windows布局：从Window菜单中选择Reset Window Layout选项。</p>
<div style="background-color: #6699FF; margin: 0 0 0 40px; padding: 10px; text-indent: 2em;">
<p><strong>原书答案：</strong></p>
<p>有许多方法可以重置所作的自定义修改的部分，包括：</p>
<ul>
    <li>通过选择Windows|Reset Window Layout来重新设置Windows布局。</li>
    <li>通过右击Toolbox并选择Reset Toolbox选项来重新设置它。</li>
    <li>使用Tools主菜单下的Import and Export Settings菜单重新设置VWD的所有设置。</li>
</ul>
</div>
<p style="font-weight: bold; background-color: #FFFFCC">（5）如果要修改页面上某个控件的属性，如按钮上的文本，可以使用哪两种方法？</p>
<p style="padding-left: 40px">① 在属性窗口中修改；</p>
<p style="padding-left: 40px">② 在代码视图中，直接输入相应的 属性名称=“属性值”对来修改。</p>
<div style="background-color: #6699FF; margin: 0 0 0 40px; padding: 10px; text-indent: 2em;">
<p><strong>原书答案：</strong></p>
<p>要修改页面上控件的属性，可以在Design View或Markup View窗口中单击控件，然后使用Properties                      Grid（按F4键打开它）来改变属性的值。</p>
<p>也可以直接在Document Window中改变属性。</p>
</div>
</div>
      