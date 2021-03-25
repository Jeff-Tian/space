---
stackbit_url_path: >-
  posts/《ASPNET-35-入门》第-2-章-练习
title: '《ASP.NET 3.5 入门》第 2 章 练习'
date: '2010-02-26 06:44:26'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/02/26/《ASPNET-35-入门》第-2-章-练习
template: post
---

        <div style="font-size: larger; text-indent: 2em;">
<p style="background-color: #FFFFCC; font-weight: bold;">（1）指出Web Files类别中3个可以添加到站点中的重要文件。描述各文件的用途。</p>
<div style="margin-left: 80px;">
<table class="style1" style="border: thin solid #808000; border-collapse: collapse; width: 100%; " border="1">
    <tbody>
        <tr>
            <td class="style2"><strong>文件类型</strong></td>
            <td><strong>用途</strong></td>
        </tr>
        <tr>
            <td class="style2">Web Form 与 AJAX Web Form</td>
            <td>这些文件是所有ASP.NET Web站点都要用到的文件。Web Form 是用户在他们的浏览器中浏览的页面。AJAX Web Form 类似于常规Web                              Form，但是它已完全可以用于Ajax控件。</td>
        </tr>
        <tr>
            <td class="style2">Master Page 与 AJAX Master Page</td>
            <td>这些文件允许定义Web站点的全局结构和外观。正如AJAX Web Form一样，AJAX Master Page含有使用AJAX所必需的代码。</td>
        </tr>
        <tr>
            <td class="style2">Web User Control</td>
            <td>含有可重复用在站点的多个页面中的页面片段。</td>
        </tr>
    </tbody>
</table>
</div>
<p>&nbsp;</p>
<div style="background-color: #6699FF; margin: 0 0 0 40px; padding: 10px; text-indent: 2em;">
<p><strong>原书答案：</strong></p>
<p>许多文件都属于Web文件类别，包括.aspx文件（在Web浏览器中最终作为页面的Web                      Forms）、.html文件（包含站点静态的HTML）、.css文件（包含级联样式表信息）和.config文件（包含Web站点的配置信息）。</p>
</div>
<p style="background-color: #FFFFCC; font-weight: bold">（2）如何使Web页面中的一块文本既加粗又倾斜？最终的HTML是怎样的？</p>
<p style="padding-left: 40px">选中相应的文本，分别点击一次格式工具栏里的加粗（B）和倾斜（I）按钮。</p>
<p style="padding-left: 40px">最终的HTML是</p>
<p style="padding-left: 40px">&lt;b&gt;&lt;i&gt;这是一段既加粗又倾斜的文本&lt;/i&gt;&lt;/b&gt;</p>
<p style="padding-left: 40px">当然也可以在代码视图中直接写如上的HTML代码，或者</p>
<p style="padding-left: 40px">&lt;strong&gt;&lt;i&gt;这是一段既加粗又倾斜的文本&lt;/i&gt;&lt;/strong&gt;</p>
<p style="padding-left: 40px">或者</p>
<p style="padding-left: 40px">&lt;span style="font-weight: bold; font-style: italic;"&gt;这是一段既加粗又倾斜的文本&lt;/span&gt;</p>
<div style="background-color: #6699FF; margin: 0 0 0 40px; padding: 10px; text-indent: 2em;">
<p><strong>原书答案：</strong></p>
<p>当要让一块文本变成粗斜体时，可以选择文本，然后单击Formatting工具栏中的Bold按钮，接着单击Italic按钮。页面中最终的HTML代码如下所示：</p>
<p>&lt;b&gt;&lt;i&gt;Welcome to Planet wrox&lt;/i&gt;&lt;/b&gt;</p>
</div>
<p style="background-color: #FFFFCC; font-weight: bold">（3）指出在VWD中向ASP.NET Web站点添加现有文件的3种不同方式。</p>
<ol>
    <li>
    <p style="padding-left: 40px">在Solution Explorer中右键|Add Existing Item。</p>
    </li>
    <li>
    <p style="padding-left: 40px">直接将文件拖动到Solution Explorer。</p>
    </li>
    <li>
    <p style="padding-left: 40px">直接在网站目录中添加文件，然后在Solution Explorer中右键|刷新文件夹。</p>
    </li>
</ol>
<div style="background-color: #6699FF; margin: 0 0 0 40px; padding: 10px; text-indent: 2em;">
<p><strong>原书答案：</strong></p>
<p>第1种方法，使用Solution Explorer。右击项目，选择Add Existing Item选项，然后浏览要添加的选项。</p>
<p>第2种方法，可以从Windows资源管理器或直接从桌面将文件拖放到VWD项目中。</p>
<p>第3种方法，可以使用Windows资源管理器直接将文件放入项目的文件夹中。例如，添加到文件夹C:\BegASPNET\Site的文件会自动变成Web站点的一部分。如果在VWD中没有直接看到这些新文件，请单击Solution                      Explorer工具栏上的 Refresh 图标。</p>
</div>
<p style="font-weight: bold; background-color: #FFFFCC">（4）VWD为ASPX页面提供了哪些视图？VWD有没有提供别的视图？</p>
<p style="padding-left: 40px">① Design View</p>
<p style="padding-left: 40px">② Split View</p>
<p style="padding-left: 40px">③ Source View</p>
<p style="padding-left: 40px">对于其他文件，一般是代码视图的形式。</p>
<div style="background-color: #6699FF; margin: 0 0 0 40px; padding: 10px; text-indent: 2em;">
<p><strong>原书答案：</strong></p>
<p>在VWD中，代码有3种不同的视图：Design View、Markup View（也称为Source View或Code View）和Split                      View。第1个视图提供Web页面在浏览器中的整体印象，而第2个视力显示原始标记，Split View视图可以用来同时看到这两个视图。</p>
<p>对于其他文件而言，VWD也有不同的视图。例如，ASPX页面的编程代码通常表示为Code Behind视图或者Code Behind。</p>
</div>
</div>
      