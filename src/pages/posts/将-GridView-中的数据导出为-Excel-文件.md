---
stackbit_url_path: >-
  posts/将-GridView-中的数据导出为-Excel-文件
title: '将 GridView 中的数据导出为 Excel 文件'
date: '2010-05-13 06:25:17'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>假设在 .aspx 文件中，已有一个名为 GridView_Warehousing 的GridView控件，现在要加入将它导出为Excel文件的功能。</p>
<p>一、首先设置aspx页面EnableEventValidation="false"，如下：</p>
<p>C# 代码：</p>
<pre class="brush: csharp">&lt;%@ Page Title="入库 - 嘉里大通诺基亚仓库管理系统" Language="C#" MasterPageFile="~/MasterPage/Operator.master" AutoEventWireup="true" CodeFile="Warehousing.aspx.cs" Inherits="Operator_Warehousing" EnableEventValidation="false" %&gt;
</pre>
<p>二、在页面中加入一个按钮，如下：</p>
<p>C# 代码：</p>
<pre class="brush: csharp">&lt;asp:Button id="btnExport" runat="server" Text="以Excel文件格式导出" onclick="btnExport_Click" /&gt;
</pre>
<p>三、后台关键代码：</p>
<p>C# 代码：</p>
<pre class="brush: csharp">    /// &lt;summary&gt;
    /// 以 Excel 文件格式导出 按钮按下事件
    /// &lt;/summary&gt;
    /// &lt;param name="sender"&gt;&lt;/param&gt;
    /// &lt;param name="e"&gt;&lt;/param&gt;
    protected void btnExport_Click(object sender, EventArgs e)
    {
        Export("application/ms-excel", "入仓储确认单.xls");
    }

    /// &lt;summary&gt;
    /// 以 Excel 文件格式导出
    /// &lt;/summary&gt;
    /// &lt;param name="fileType"&gt;&lt;/param&gt;
    /// &lt;param name="fileName"&gt;&lt;/param&gt;
    private void Export(string fileType, string fileName)
    {
        // 以下三行可选，如果没有的话导出的只是当前页数据，没有其他页数据
        //this.GridView_Warehousing.AllowPaging = false;
        //this.GridView_Warehousing.AllowSorting = false;
        // 绑定 GridView

        // 导出时隐藏操作列
        this.GridView_Warehousing.Columns[0].Visible = false;
        // 隐藏分页行
        this.GridView_Warehousing.BottomPagerRow.Visible = false;
        Response.Clear();
        Response.Buffer = true;
        Response.ContentEncoding = System.Text.Encoding.GetEncoding("GB2312");
        Response.AppendHeader("Content-Disposition", "attachment;filename=" + HttpUtility.UrlEncode(fileName, System.Text.Encoding.UTF8).ToString());
        // 设置输出文件类型为excel文件
        Response.ContentType = "application/ms-excel";
        System.IO.StringWriter stringWriter = new System.IO.StringWriter();
        System.Web.UI.HtmlTextWriter htmlTextWriter = new System.Web.UI.HtmlTextWriter(stringWriter);
        this.GridView_Warehousing.RenderControl(htmlTextWriter);
        Response.Output.Write(stringWriter.ToString());
        Response.Flush();
        Response.End();
    }

    /// &lt;summary&gt;
    /// 这个方法是配合导出 Excel 功能的，内容不用写
    /// &lt;/summary&gt;
    /// &lt;param name="control"&gt;&lt;/param&gt;
    public override void VerifyRenderingInServerForm(Control control)
    {
    }
</pre>
<p>四、如果发现点击按钮出现 JavaScript 错误，则可能是由于页面中加入了 UpdatePanel 所致，如果是这个原因，就需要给 UpdatePanel 添加 Triggers 节点，如下：</p>
<p>C# 代码：</p>
<pre class="brush: csharp">        &lt;Triggers&gt;
            &lt;asp:PostBackTrigger ControlID="btnExport" /&gt;
        &lt;/Triggers&gt;
</pre>
<p>&nbsp;</p>
      