---
stackbit_url_path: >-
  posts/在ASP中将以字节为单位的数字转化成合适的单位
title: '在ASP中将以字节为单位的数字转化成合适的单位'
date: '2010-03-16 08:01:09'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/16/在ASP中将以字节为单位的数字转化成合适的单位
template: post
---

        <p>以下是一个将以字节为单位的数字，转换成一个合适的大小单位的值的ASP程序。输入参数为一个数字，返回一个字符串，该字符串是一个带两位小数的数字加一个空格再加一个单位名称。</p>
<pre class="brush: vb">    '
    ' 将以字节为单位的数字转换成合适单位的值
    '
    Public Function SuitableUnit(ByVal lB)
        Dim i, lVal, aUnit
        
        aUnit = Array("B", "KB", "MB", "GB", "TB")
        If IsNull(lB) Or Not IsNumeric(lB) Then lB = 0
        lVal = Abs(lB)
        i = 0
        While lVal &gt;= 1024 And i &lt; UBound(aUnit)
            i = i + 1
            lVal = lVal / 1024
        Wend
        
        SuitableUnit = Sgn(lB) * Round(lVal, 2) &amp; " " &amp; aUnit(i)
    End Function

</pre>
<p>在C#中的代码为：</p>
<pre class="brush: csharp">    private string convertToSuitableUnit(long bytes) {
        string[] unitArray = {"B", "KB", "MB", "GB", "TB"};
        double value = Math.Abs(bytes);
        int i = 0;
        for (i = 0; value &gt;= 1024 &amp;&amp; i &lt; unitArray.Length; i++) {
            value = value / 1024;
        }

        return Math.Sign(bytes) * Math.Round(value, 2) + " " + unitArray[i];
    }

    private string convertToSuitableUnit(long bytes, string[] unitArray)
    {
        double value = Math.Abs(bytes);
        int i = 0;
        for (i = 0; value &gt;= 1024 &amp;&amp; i &lt; unitArray.Length; i++)
        {
            value = value / 1024;
        }

        return Math.Sign(bytes) * Math.Round(value, 2) + " " + unitArray[i];
    }
</pre>
      