---
stackbit_url_path: >-
  posts/为DetailsView添加删除警告确认对话框
title: '为DetailsView添加删除警告确认对话框'
date: '2010-05-18 09:45:43'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>原文来自：&nbsp;<a href="http://www.cnblogs.com/jimmylin/articles/111353.html">http://www.cnblogs.com/jimmylin/articles/111353.html</a>。</p>
<p>涂鸦作了一点优化和改进。</p>
<hr>
<p>思路：&nbsp;</p>
<p>&nbsp;</p>
<p>为删除按钮添加客户端onclick事件</p>
<p>步骤：</p>
<p>1.在DetailsView的DataBound事件中，先判断DetailsView当前状态（分三种，Edit,Insert,ReadOnly）&nbsp;</p>
<p>2.当DetailsView状态为ReadOnly时，根据删除按钮的类型所在的Rows定位控件，例如删除按钮是link类型，处在最后一行，则代码如下：&nbsp;</p>
<pre class="brush: csharp">    protected void DetailsView_StockIn_DataBound(object sender, EventArgs e)
    {
        if (this.DetailsView_StockIn.CurrentMode == DetailsViewMode.ReadOnly)
        {
            // 给删除按钮加一个确认框
            LinkButton btn = (LinkButton)this.DetailsView_StockIn.Rows[this.DetailsView_StockIn.Rows.Count - 1].Cells[0].Controls[2];
            btn.Attributes.Add("onclick", "javascript:return confirm('删除操作不可恢复，您确定要删除吗？')");
        }
    }
</pre>
<p>特别提示：Controls[2]的index,如果CommandField中按钮排列顺序是 Edit Delete New，则Controls的index为2，因为在Edit和Delete两个Button间还有一个Literal控件，笔者最初将index设为1（原以为Edit的index是0，则Delete的index为1），结果出错，后来用GetType()跟踪控件类型，发现index=1的控件类型为literal.&nbsp;</p>
<p>3.为定位到的Delete按钮添加客户端事件（文中红色背景部分）。&nbsp;</p>
<p>遗留问题：&nbsp;</p>
<p>1.为什么多了一个Literal控件&nbsp;</p>
<p>2.还有什么方法可以为Delete Button添加确认对话框</p>
      