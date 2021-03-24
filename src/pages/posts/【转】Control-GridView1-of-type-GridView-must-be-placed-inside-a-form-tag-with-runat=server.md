---
stackbit_url_path: >-
  posts/【转】Control-GridView1-of-type-GridView-must-be-placed-inside-a-form-tag-with-runat=server
title: '【转】Control "GridView1" of type "GridView" must be placed inside a form tag with runat=server.'
date: '2010-06-08 04:26:12'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>我在做将GridView导出为Excel的功能时，碰到这个错误：<span class="Apple-style-span" style="font-family: Simsun; line-height: 18px; ">
</span></p><h2><em>Control 'GridView1' of type 'GridView' must be placed inside a form tag with runat=server.</em></h2>
<p>我百思不得其解，因为我的GridView是放在一个有runat="server"的form标签中的呀！</p>
<p>后来找到解决办法，汗！<img alt="" src="http://www.zizhujy.com/blog/image.axd?picture=image_176.png">看来微软做的软件，也会有一些不可思议的小Bug。</p>
<p>原文地址：<span class="Apple-style-span" style="line-height: 19px; font-family: Arial, Verdana, sans-serif; "><a href="http://m.cnblogs.com/28987/1320155.html">http://m.cnblogs.com/28987/1320155.html</a></span></p>
<hr>
<p>Vs2003中我們常用DataGrid導出到Excel的方法如下:
</p><div class="cnblogs_code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.Clear();<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.Buffer&nbsp;=&nbsp;true;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.Charset&nbsp;=&nbsp;"BIG5";<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;fileName&nbsp;=&nbsp;"Overview";<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.AppendHeader("Content-Disposition",&nbsp;"attachment;filename="&nbsp;+&nbsp;fileName&nbsp;+&nbsp;".xls");<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.ContentEncoding&nbsp;=&nbsp;System.Text.Encoding.GetEncoding("BIG5");<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.ContentType&nbsp;=&nbsp;"application/ms-excel";//<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.Globalization.CultureInfo&nbsp;myCItrad&nbsp;=&nbsp;new&nbsp;System.Globalization.CultureInfo("ZH-TW",&nbsp;true);<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.IO.StringWriter&nbsp;oStringWriter&nbsp;=&nbsp;new&nbsp;System.IO.StringWriter(myCItrad);<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.Web.UI.HtmlTextWriter&nbsp;oHtmlTextWriter&nbsp;=&nbsp;new&nbsp;System.Web.UI.HtmlTextWriter(oStringWriter);<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GridView1.RenderControl(oHtmlTextWriter);<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.Write(oStringWriter.ToString());<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.End();</div>
<p>用以上方法在VS2005的项目时却报如下错误:</p>
<p>&nbsp;</p>
<h1>Server Error in '/DataMeasure' Application.<hr width="100%" color="silver" size="1">
</h1>
<h2><em>Control 'GridView1' of type 'GridView' must be placed inside a form tag with runat=server.</em></h2>
<p>Description: An unhandled exception occurred during the execution of the current web request. Please review the stack trace for more information about the error and where it originated in the code.&nbsp;<br>
<br>
Exception Details: System.Web.HttpException: Control 'GridView1' of type 'GridView' must be placed inside a form tag with runat=server.<br>
<br>
Source Error:&nbsp;<br>
<br>
</p><table width="100%" bgcolor="#ffffcc">
    <tbody>
        <tr>
            <td><code>Line 244: System.IO.StringWriter oStringWriter = new System.IO.StringWriter(myCItrad); Line 245: System.Web.UI.HtmlTextWriter oHtmlTextWriter = new System.Web.UI.HtmlTextWriter(oStringWriter); Line 246: GridView1.RenderControl(oHtmlTextWriter); Line 247: Response.Write(oStringWriter.ToString()); Line 248: Response.End();</code></td>
        </tr>
    </tbody>
</table>
<br>
Source File: d:"SourceCode"DataMeasure"Overview"DataOverview.aspx.cs &nbsp;&nbsp; Line: 246&nbsp;&nbsp;<p></p>
<p>&nbsp;</p>
<p>有两种解决方法:</p>
<p>一、在原来代码的基础上更改</p>
<p>导出代码不变</p>
<div class="cnblogs_code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.Clear();<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.Buffer&nbsp;=&nbsp;true;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.Charset&nbsp;=&nbsp;"BIG5";<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;string&nbsp;fileName&nbsp;=&nbsp;"Overview";<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.AppendHeader("Content-Disposition",&nbsp;"attachment;filename="&nbsp;+&nbsp;fileName&nbsp;+&nbsp;".xls");<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.ContentEncoding&nbsp;=&nbsp;System.Text.Encoding.GetEncoding("BIG5");<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.ContentType&nbsp;=&nbsp;"application/ms-excel";//<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.Globalization.CultureInfo&nbsp;myCItrad&nbsp;=&nbsp;new&nbsp;System.Globalization.CultureInfo("ZH-TW",&nbsp;true);<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.IO.StringWriter&nbsp;oStringWriter&nbsp;=&nbsp;new&nbsp;System.IO.StringWriter(myCItrad);<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.Web.UI.HtmlTextWriter&nbsp;oHtmlTextWriter&nbsp;=&nbsp;new&nbsp;System.Web.UI.HtmlTextWriter(oStringWriter);<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GridView1.RenderControl(oHtmlTextWriter);<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.Write(oStringWriter.ToString());<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.End();</div>
<p>但是要添加如下代码：</p>
<div class="cnblogs_code">&nbsp;public&nbsp;override&nbsp;void&nbsp;VerifyRenderingInServerForm(Control&nbsp;control)<br>
&nbsp;&nbsp;&nbsp;&nbsp;{<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//base.VerifyRenderingInServerForm(control);<br>
&nbsp;&nbsp;&nbsp;&nbsp;}</div>
<p>要注意的是中间的代码行要注释掉，这就是忽略检查在RENDER的时候判断是否在RUNAT=SERVER中</p>
<p>二、另一种方法</p>
<p>这种方法是新建一个FORM，将GRIDVIEW放入这个FORM中。</p>
<p>&nbsp;</p>
<div class="cnblogs_code">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.Text.StringBuilder&nbsp;sb&nbsp;=&nbsp;new&nbsp;System.Text.StringBuilder();<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.IO.StringWriter&nbsp;sw&nbsp;=&nbsp;new&nbsp;System.IO.StringWriter(sb);<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HtmlTextWriter&nbsp;htw&nbsp;=&nbsp;new&nbsp;HtmlTextWriter(sw);<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Page&nbsp;page&nbsp;=&nbsp;new&nbsp;Page();<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;HtmlForm&nbsp;form&nbsp;=&nbsp;new&nbsp;HtmlForm();<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;GridView1.EnableViewState&nbsp;=&nbsp;false;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;page.DesignerInitialize();<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;form.Controls.Add(GridView1);<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;page.Controls.Add(form);<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;page.RenderControl(htw);<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.Clear();<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.Buffer&nbsp;=&nbsp;true;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.ContentType&nbsp;=&nbsp;"application/vnd.ms-excel";<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.AddHeader("Content-Disposition",&nbsp;"attachment;filename=Overview.xls");<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.Charset&nbsp;=&nbsp;"UTF-8";<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.ContentEncoding&nbsp;=&nbsp;System.Text.Encoding.Default;<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.Write(sb.ToString());<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Response.End();</div>
<p>&nbsp;</p>
<p>以上两种方法都可以在VS2005中实现GridView导出到Office(Excel+Word)中.</p>
<p></p>
<p></p>
<p>&nbsp;</p>
      