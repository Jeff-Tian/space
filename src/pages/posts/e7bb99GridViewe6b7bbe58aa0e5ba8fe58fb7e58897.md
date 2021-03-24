---
stackbit_url_path: >-
  posts/e7bb99GridViewe6b7bbe58aa0e5ba8fe58fb7e58897
title: '给GridView添加序号列'
date: '2010-11-15 05:46:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - ASP.NET
  - C#
  - GridView
  - 序号
canonical_url: >-
template: post
---
<p>在使用GridView显示数据时，在最左边显示一个序号列，可以增加可读性。基本上可以给所有的GridView都添加一个这样的序号列。</p>  <p>如图： </p>  <p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_63.png"><img style="background-image: none; border-bottom: 0px; border-left: 0px; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top: 0px; border-right: 0px; padding-top: 0px" title="image" border="0" alt="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_63.png" width="680" height="153" /></a></p>  <p><strong>添加方法一：</strong></p>  <p>1. 在&lt;Columns&gt;&lt;/Columns&gt;中添加一个模板列，代码如下：</p>  <pre class="brush: html">                    &lt;asp:TemplateField HeaderText=&quot;序号&quot;&gt;
                        &lt;ItemTemplate&gt;
                            &lt;%# (((GridViewRow)Container).DataItemIndex + 1) %&gt;
                        &lt;/ItemTemplate&gt;
                    &lt;/asp:TemplateField&gt;</pre>

<p>2. 完成。</p>

<p><strong>添加方法二：</strong></p>

<p>1. 在&lt;Columns&gt;&lt;/Columns&gt;中添加一个数据绑定列，代码如下：</p>

<pre class="brush: html">                &lt;asp:BoundField HeaderText=&quot;序号&quot; /&gt;</pre>

<p>2. 然后给该GridView添加一个Row_DataBound事件处理代码，如下：</p>

<pre class="brush: csharp">    protected void gvPackages_RowDataBound(object sender, GridViewRowEventArgs e)
    {
        GridViewRow gvr = e.Row;
        if (gvr.RowType == DataControlRowType.DataRow)
        {
            gvr.Cells[0].Text = (gvr.RowIndex + 1).ToString();
        }
    }</pre>

<p>3. 完成。</p>