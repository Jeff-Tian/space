---
stackbit_url_path: >-
  posts/SQL-查询指定日期的记录
title: 'SQL 查询指定日期的记录'
date: '2010-04-22 04:18:48'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/04/22/SQL-查询指定日期的记录
template: post
---

        <p>经常会遇到查询指定日期的记录，而仅仅输入日期，与表中的时间进行匹配时，颇有些麻烦。仅摘抄一段，说明针对此问题的两种解决方案。</p>
<hr>
<p>假设想要了解今天所有订单的情况。使用以下查询试试看：</p>
<pre class="brush: sql">SELECT *
FROM Orders
WHERE OrderDate = GetDate();
</pre>
<p>遗憾的是，这个查询并不能返回任何数据。这是因为GETDATE()函数获得的是精确到毫秒的时间，而不只是日期。这意味着任何基于GETDATE()的查询都不能返回任何数据，即使是发生在同一天也不行（对于smalldatetime字段来说，可能发生在同一分钟，对于datetime字段来说可能发生在同一毫秒，对于datetime2字段来说，可能接近100毫秒）。</p>
<p>常见的解决方案是把日期转换为字符串并转换回来以截断时间，然后作比较。</p>
<p>代码如下所示：</p>
<pre class="brush: sql">SELECT * 
FROM Orders
WHERE CONVERT(varchar(12), OrderDate, 101) = CONVERT(varchar(12), GETDATE(), 101)
</pre>
<p>注意：</p>
<p>也可以只是将@Date的值强制转换为date数据类型。这里选择使用CONVERT，只是为了选择使用一种向后兼容的截断日期的方法（SQL Server 2005 及更早的版本不支持date数据类型）。</p>
<p>这次，无论订单的时间如何，都将得到OrderDate列中今天的日期的所有数据行。可惜的是，这些代码的可读性并不是最好的。想象一下，如果有一大串的日期需要作这类比较——其结果肯定是可读性不好。</p>
<p>现在使用一个简单的用户自定义函数来实现这个功能。首先，需要创建实际的函数。这通过CREATE FUNCTION命令完成，它的格式和存储过程很像。例如，创建这个函数的代码如下：</p>
<pre class="brush: sql">CREATE FUNCTION dbo.DayOnly(@Date date)
RETURNS date
AS
BEGIN
	RETURN @Date;
END
</pre>
<p>其中，从GETDATE()返回的日期将作为参数传入，而且函数体内将包含转换日期的工作，最后将返回截取的日期值。</p>
<p>注意，上述的版本是一个SQL Server 2008兼容版本，这依赖于强制转换为参数的date数据类型来截断时间。如果想在SQL Server 2005进行这样的截断（就像基于查询的示例中所做的那样），需要像前面一样使用CONVERT函数。例如：</p>
<pre class="brush: sql">CREATE FUNCTION dbo.DayOnly(@Date datetime)
RETURNS varchar(12)
AS
BEGIN
	RETURN CONVERT(varchar(12), @Date, 101);
END
</pre>
<p>为了看一下这个函数的效果，这里稍微修改一下查询：</p>
<pre class="brush: sql">SELECT * 
FROM Orders
WHERE dbo.DayOnly(OrderDate) = dbo.DayOnly(GETDATE());
</pre>
<p>得到的结果和前面的独立查询一样。</p>
      