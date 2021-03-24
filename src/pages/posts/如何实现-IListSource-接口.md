---
stackbit_url_path: >-
  posts/如何实现-IListSource-接口
title: '如何实现 IListSource 接口'
date: '2010-07-21 06:52:09'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>在MSDN上有英文的说明：<a href="http://msdn.microsoft.com/en-ca/library/ms404297(zh-cn).aspx">http://msdn.microsoft.com/en-ca/library/ms404297(zh-cn).aspx</a>，代码示例非常多。让自己的类实现IListSource接口之后，有一个好处，就是可以作为数据源方便地让GridView等数据控件直接绑定，如你的类的一个实例变量名为myClassInstance，ID为GridView1的GridView就可以这样绑定：</p>
<pre class="brush: csharp">this.GridView1.DataSource = myClassInstance;
this.GridView1.DataBind();</pre>
<p>要点归纳如下：</p>
<p>首先要引入&nbsp;System.ComponentModel 命名空间，即在类文件的顶部加上</p>
<pre class="brush: csharp">using System.ComponentModel;
</pre>
<p>然后在类的声明后面添加继承自 Component 和 IListSource 的声明。例如：</p>
<pre class="brush: csharp">public class ClockInDataCollection  : Component, IListSource</pre>
<p>最后，在这个类里，用自己的逻辑实现接口的两个成员，例如：</p>
<pre class="brush: csharp">
    #region IListSource Members

    bool IListSource.ContainsListCollection
    {
        get
        {
            return false;
        }
    }

    System.Collections.IList IListSource.GetList()
    {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 以下替换成自己的逻辑
        BindingList&lt;ClockInData&gt; blcid = new BindingList&lt;ClockInData&gt;();

        if (!this.DesignMode)
        {
            for (int i = 0; i &lt; this.ClockInDatas.Count; i++)
            {
                blcid.Add(this.ClockInDatas[i]);
            }
        }

        return blcid;
    }
    #endregion
</pre>
<p>&nbsp;</p>
      