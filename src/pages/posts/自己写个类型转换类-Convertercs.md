---
stackbit_url_path: >-
  posts/自己写个类型转换类-Convertercs
title: '自己写个类型转换类 Converter.cs'
date: '2010-07-14 03:44:33'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>在C#中，似乎没有一种方便的类型转换类，使得当转换失败时，默认返回一个预先设定好的值。</p>
<p>如从数据库中读到一个日期字段reader["time"]，将它放到一个DateTime类型变量 myTime 中时，就要做一个类型转换。然而，reader["time"]很有可能为空，所以即使你用</p>
<p>myTime = Convert.ToDateTime(reader["time"].ToString()) ;</p>
<p>也不安全，很可能因为reader["time"]为Null或者不是正确的日期格式而导致程序崩溃。</p>
<p>我希望要一种方便的方式，使得当reader["time"]不是正确的日期格式时，就往myTime中填入一个最小的日期值，告诉程序日期无效，并且不会让程序崩溃。于是自己写了个类型转换类Converter.cs，有了它就可以方便地实现上述的要求。</p>
<p>myTime = Converter.ToDateTime(reader["time"].ToString());</p>
<p>或者你希望用日期最大值来代表无效的日期：</p>
<p>myTime = Converter.ToDateTime(reader["time"].ToString(), DateTime.MaxValue);</p>
<p>&nbsp;</p>
<p>Converter.cs 源码如下：</p>
<pre class="brush: csharp">

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// &lt;summary&gt;
/// 类型转换类
/// &lt;/summary&gt;
/// &lt;remarks&gt;
/// 作者：涂鸦 admin@myfootprints.cn
/// &lt;/remarks&gt;
public class Converter
{
	public Converter()
	{
		//
		// TODO: Add constructor logic here
		//
	}

    public static int ToInt(string value, int errorValue)
    {
        int returnValue;

        if (!int.TryParse(value, out returnValue))
        {
            returnValue = errorValue;
        }

        return returnValue;
    }

    public static int ToInt(string value) {
        return ToInt(value, 0);
    }

    public static double ToDouble(string value, double errorValue)
    {
        double returnValue;

        if (!double.TryParse(value, out returnValue))
        {
            returnValue = errorValue;
        }

        return returnValue;
    }

    public static double ToDouble(string value)
    {
        return ToDouble(value, 0.0);
    }

    public static DateTime ToDateTime(string value, DateTime errorValue)
    {
        DateTime returnValue;

        if (!DateTime.TryParse(value, out returnValue))
        {
            returnValue = errorValue;
        }

        return returnValue;
    }

    public static DateTime ToDateTime(string value)
    {
        return ToDateTime(value, DateTime.MinValue);
    }

    public static bool ToBoolean(string value, bool errorValue)
    {
        bool returnValue;

        if (!bool.TryParse(value, out returnValue))
        {
            returnValue = errorValue;
        }

        return returnValue;
    }

    public static bool ToBoolean(string value)
    {
        return ToBoolean(value, false);
    }
}
</pre>
<div>&nbsp;</div>
<div>&nbsp;</div>
      