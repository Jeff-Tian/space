---
stackbit_url_path: >-
  posts/给GridView添加多列排序功能
title: '给GridView添加多列排序功能'
date: '2010-06-12 16:42:55'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/06/12/给GridView添加多列排序功能
template: post
---

        <p>如果重复单击GridView 的列标题，排序顺序就会在升序和降序之间来回切换。GridView的Sort方法还可以接受多个SortExpression，进行多列排序。这需要在后台的代码文件中添加如下代码：</p>
<pre class="brush: csharp">
    protected void GridView1_Sorting(object sender, GridViewSortEventArgs e)
    {
        string oldExpression = GridView1.SortExpression;
        string newExpression = e.SortExpression;
        if (oldExpression.IndexOf(newExpression) &lt; 0)
        {
            if (oldExpression.Length &gt; 0)
                e.SortExpression = newExpression + "," + oldExpression;
            else
                e.SortExpression = newExpression;
        }
        else
        {
            e.SortExpression = oldExpression;
        }
    }
</pre>
      