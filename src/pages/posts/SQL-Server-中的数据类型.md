---
stackbit_url_path: >-
  posts/SQL-Server-中的数据类型
title: 'SQL Server 中的数据类型'
date: '2010-03-09 09:03:57'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <style type="text/css"> 
<!-- 
/* 仿Google的表格样式; 涂鸦， 2010-1-21 */
table.tbLikeGoogle 
{
	border: solid 1px #CCCCCC;
	border-collapse: collapse;
	width: 99%;
	background-color: White;
        text-indent: 0;
}
 
table.tbLikeGoogle tr
{
	border: solid 1px #CCCCCC;
}
 
/* 鼠标经过的样式 */
table.tbLikeGoogle tr:hover
{
	background-color: #F1FCFF;
}    
 
table.tbLikeGoogle thead tr 
{
	border-bottom: solid 1px #a6a6a6;
}
 
/* 表头当鼠标经过时样式不变 */
table.tbLikeGoogle thead tr:hover
{
	border-bottom: solid 1px #a6a6a6;
	background-color: transparent;
}
 
table.tbLikeGoogle tr td 
{
	padding: 6px 0 6px 3px;
	/* IE 7 及以下不支持 tr 的border属性 */
	border: solid 1px #CCCCCC;
	text-align: left;
}
 
/* 链接样式 */
table.tbLikeGoogle tr td a:link 
{
	padding: 0!important;
	margin: 0!important;
	color: #2244DD!important;
	text-decoration: underline!important;
}
 
table.tbLikeGoogle tr td a:link 
{
	padding: 0!important;
	margin: 0!important;
	color: #2244DD!important;
	text-decoration: underline!important;
}
 
table.tbLikeGoogle tr td a:link 
{
	padding: 0!important;
	margin: 0!important;
	color: #2244DD!important;
	text-decoration: underline!important;
}
 
table.tbLikeGoogle tr td a:link 
{
	padding: 0!important;
	margin: 0!important;
	color: #2244DD!important;
	text-decoration: underline!important;
}
 
table.tbLikeGoogle thead tr th
{
	/* IE 7 及以下不支持 tr 的border属性 */
	border-bottom: solid 1px #a6a6a6;
        border-right: solid 1px #cccccc;
	text-align: left;
	padding: 6px 0 6px 3px;
	vertical-align: top;
}
 
table.tbLikeGoogle thead tr th .filter 
{
	font-weight: normal;
}
/* 仿Google的表格样式；结束 */
-->
</style>
<div style="text-indent: 2em; font-size: larger; line-height: 1.5em;">
<p>和 Visual Basic .NET 和 C# 这样的编程语言一样，SQL Server 数据库使用不同的数据类型存储数据。SQL Server 2005 大约支持 30 种数据类型，大部分与 .NET 中使用的类似。下表列出了最为常用的 SQL Server 数据类型和描述，以及 .NET 对应的数据类型。</p>
<p>&nbsp;</p>
<table class="tbLikeGoogle" width="100%" align="left" cellpadding="1" cellspacing="1" summary="表：SQL Server 中的数据类型">
    <caption>表：SQL Server 中的数据类型以及 .NET 对应的数据类型</caption>
    <thead>
        <tr>
            <th style="width: 13em;">SQL 2005 数据类型</th>
            <th>描 述</th>
            <th style="width: 10em;">.NET 数据类型</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>bit</td>
            <td>以0/1形式存储布尔值</td>
            <td>System.Boolean</td>
        </tr>
        <tr>
            <td>Bigint</td>
            <td>包含固定长度的文本。如果存储的文本短于定义的长度，就用空格填充。nchar 以 Unicode 格式存储数据，允许存储多种外语的数据</td>
            <td>System.String</td>
        </tr>
        <tr>
            <td>datetime</td>
            <td>存储日期和时间</td>
            <td>System.DateTime</td>
        </tr>
        <tr>
            <td>decimal</td>
            <td>允许存储较大的小数</td>
            <td>System.Decimal</td>
        </tr>
        <tr>
            <td>float</td>
            <td>允许存储较大的小数</td>
            <td>System.Double</td>
        </tr>
        <tr>
            <td>image</td>
            <td>允许存储大的二进制对象，如文件。尽管其名称暗示了只可用它存储图象，但事实并非如此。可用它存储任何类型的文档或其他二进制对象</td>
            <td>System.Byte[]</td>
        </tr>
        <tr>
            <td>tinyint</td>
            <td>用于存储0~255的整数</td>
            <td>System.Byte</td>
        </tr>
        <tr>
            <td>smallint</td>
            <td>用于存储-32 768~32 767的整数</td>
            <td>System.Int16</td>
        </tr>
        <tr>
            <td>Int</td>
            <td>用于存储-2 147 483 648~2 147 483 648的整数</td>
            <td>System.Int32</td>
        </tr>
        <tr>
            <td>bigint</td>
            <td>用于存储-9 223 372 036 854 775 808~9 223 372 036 854 775 808的较大整数</td>
            <td>System.Int64</td>
        </tr>
        <tr>
            <td>text/ntext</td>
            <td>用于存储较多的文本</td>
            <td>System.String</td>
        </tr>
        <tr>
            <td>varchar/nvarchar</td>
            <td>用于存储变长的文本。nvarchar 以 Unicode 格式存储数据，这就可以存储多种外语的数据</td>
            <td>System.String</td>
        </tr>
        <tr>
            <td>uniqueidentifier</td>
            <td>存储全局唯一标识符</td>
            <td>System.Guid</td>
        </tr>
    </tbody>
</table>
<p>&nbsp;</p>
<p>其中的一些数据类型允许指定最大长度。在定义 char、nchar、varchar 或 nvarchar 类型的列时，需要指定字符长度。例如，nvarchar(10) 最多可存储10个字符。从 SQL Server 2005 开始，这些数据类型都允许指定 MAX 为最大尺寸。通过 MAX 说明符，可以在单个列中最多存储 2GB 的数据。对于大段的文本，像评论主体部分，应该考虑用 nvarchar(max) 数据类型。如果清楚某列（像邮政区码或手机号）的最大长度或想显式限制其长度，可以指定这一长度。例如，评论的标题应存储于 nvarchar(200) 的列中，限制最大字符数为 200。</p>
<table class="tbLikeGoogle" width="100%" align="left" cellpadding="1" cellspacing="1" summary="表：SQL Server 中的数据类型">
    <caption>表：SQL Server 中的所有数据类型</caption>
    <thead>
        <tr>
            <th style="width: 13em;">数据类型名称</th>
            <th>类 别</th>
            <th style="width: 10em;">长度（以字节为单位）</th>
            <th style="width: 10em;">数据特点</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Bit</td>
            <td>整型</td>
            <td>1</td>
            <td>表中的第1个Bit数据类型占1个字节；其余7个位也用作Bit数据类型。允许空格使其占用一个额外字节</td>
        </tr>
        <tr>
            <td>Bigint</td>
            <td>整型</td>
            <td>8</td>
            <td>可处理日常用到的越来越大的数，其取值范围为 -2^63 ~ 2^63 - 1</td>
        </tr>
        <tr>
            <td>Int</td>
            <td>整型</td>
            <td>4</td>
            <td>取值范围为 -2 147 483 648 ~ 2 147 483 647</td>
        </tr>
        <tr>
            <td>SmallInt</td>
            <td>整型</td>
            <td>2</td>
            <td>取值范围为 - 32 768 ~ 32 767</td>
        </tr>
        <tr>
            <td>TynyInt</td>
            <td>整型</td>
            <td>1</td>
            <td>取值范围为 0 ~ 255</td>
        </tr>
        <tr>
            <td>Decimal/Numeric</td>
            <td>数字型</td>
            <td>可变</td>
            <td>固定精度，取值范围为 -10^38 - 1 ~ 10^38 - 1。两者含义相同</td>
        </tr>
        <tr>
            <td>Money</td>
            <td>货币</td>
            <td>8</td>
            <td>货币单位，取值范围为 - 2^63 ~ 2^63，精确到4个小数位。注意货币单位可以是任意货币，不限于美元</td>
        </tr>
        <tr>
            <td>SmallMoney</td>
            <td>货币</td>
            <td>4</td>
            <td>货币单位，取值范围为 - 214 748.3648 ~ + 214 748.3647</td>
        </tr>
        <tr>
            <td>Float（Real）</td>
            <td>近似小数</td>
            <td>可变</td>
            <td>由一参数（如 Float(20)）决定其长度与精度。注意参数值表示位数，不是字节数。取值范围为 -1.79E + 308 ~ 1.79E + 308</td>
        </tr>
        <tr>
            <td>DateTime</td>
            <td>日期/时间</td>
            <td>8</td>
            <td>日期与时间，取值范围为1753年1月1日 ~ 9999 年12月31日，精确到0.03秒</td>
        </tr>
        <tr>
            <td>DateTime2</td>
            <td>日期/时间</td>
            <td>可变（6~8）</td>
            <td>新扩展的DateTime典型数据类型。支持更大的日期范围和更高的时间部分精度（精确到 100 纳秒）。和 DateTime 一样，它不包含时区信息，但与.NET 
                DateTime数据类型相对应</td>
        </tr>
        <tr>
            <td>SmallDateTime</td>
            <td>日期/时间</td>
            <td>4</td>
            <td>日期与时间，取值范围为 1900年1月1日 ~ 2079年6月6日，精确到分钟</td>
        </tr>
        <tr>
            <td>DateTimeOffset</td>
            <td>日期/时间</td>
            <td>可变（8~10）</td>
            <td>类似于DateTime数据类型，但有一个相对于UTC时间的 -14:00 ~ + 14:00 
                的偏移量。时间在内部存储为UTC时间，任何比较、排序或索引将基于该统一的时区</td>
        </tr>
        <tr>
            <td>Date</td>
            <td>日期/时间</td>
            <td>3</td>
            <td>只存储Gregorian日历定义的0001年1月1日 ~ 
                9999年12月31日的日期数据。采取ANSI标准日期格式（YYYY-MM-DD），但会从其他一些格式隐式转换</td>
        </tr>
        <tr>
            <td>Time</td>
            <td>日期/时间</td>
            <td>可变（3~5）</td>
            <td>只存储用户可选的精度为纳秒（默认）的时间数据</td>
        </tr>
        <tr>
            <td>Cursor</td>
            <td>特殊小数</td>
            <td>1</td>
            <td>指向游标的指针，只占用一个字节，记住组成实际游标的结果集也占用内存，占用内存的大小取决于结果集</td>
        </tr>
        <tr>
            <td>Timestamp/rowVersion</td>
            <td>特殊小数（二进制）</td>
            <td>8</td>
            <td>给定数据库的唯一特定值。即使UPDATE语句没有timestamp列（时间标记），但其值在插入或更新记录的时间自动由数据库设定（不允许直接更新timestamp字段）</td>
        </tr>
        <tr>
            <td>UniqueIdentifier</td>
            <td>特殊小数（二进制）</td>
            <td>16</td>
            <td>特殊的全局唯一标识符（GUID），必须保证在内存空间和时间内的唯一</td>
        </tr>
        <tr>
            <td>Char</td>
            <td>字符</td>
            <td>可变</td>
            <td>定长字符数据。比设定长度短时使用空格填充，为非Unicode数据，最大长度为8 000字符</td>
        </tr>
        <tr>
            <td>VarChar</td>
            <td>字符</td>
            <td>可变</td>
            <td>长度可变的字符数据。比设定长度短时不使用空格填充，为非Unicode数据。允许最大长度为8 
                000字符，使用max关键字表示其长度可足够大（数据长度可达2^31字节）</td>
        </tr>
        <tr>
            <td>Text</td>
            <td>字符</td>
            <td>可变</td>
            <td>从SQL Server 2005开始支持向后兼容。可使用varchar(max)代替</td>
        </tr>
        <tr>
            <td>NChar</td>
            <td>Unicode</td>
            <td>可变</td>
            <td>定长Unicode字符数据。比设定长度短时使用空格填充。最大长度为4 000字符</td>
        </tr>
        <tr>
            <td>NVarChar</td>
            <td>Unicode</td>
            <td>可变</td>
            <td>可变长度的Unicode字符数据。比设定长度短时不使用空格填充。允许最大长度为4 000字符，使用max关键字表示其长度可足够大（数据长度可达2^31字节）</td>
        </tr>
        <tr>
            <td>Ntext</td>
            <td>Unicode</td>
            <td>可变</td>
            <td>可变长度的Unicode字符数据。类似Text数据类型，仅用作向后兼容。可使用nvarchar(max)代替</td>
        </tr>
        <tr>
            <td>Binary</td>
            <td>二进制</td>
            <td>可变</td>
            <td>定长二进制数，最大长度为8 000字节</td>
        </tr>
        <tr>
            <td>VarBinary</td>
            <td>二进制</td>
            <td>可变</td>
            <td>可变二进制数，最大特定长度为8 000字节，可使用max关键字使其作为LOB（大对象）字段（数据长可达2^31字节）</td>
        </tr>
        <tr>
            <td>Image</td>
            <td>二进制</td>
            <td>可变</td>
            <td>从SQL Server 2005开始支持向后兼容。可使用varbinary(max)代替</td>
        </tr>
        <tr>
            <td>Table</td>
            <td>其他</td>
            <td>特殊</td>
            <td>主要用于结果集，通常作为用户自定义函数（UDF）的结果输出或作为存储过程的参数。在表的定义中不作为可用的数据类型</td>
        </tr>
        <tr>
            <td>HierachyID</td>
            <td>其他</td>
            <td>特殊</td>
            <td>维护层次结构位置信息的特殊数据类型。提供特定于层次结构需要的特殊功能。允许作深度、父/子关系和索引比较。实际尺寸随层次结构中的节点数和平均深度而变</td>
        </tr>
        <tr>
            <td>Sql_variant</td>
            <td>其他</td>
            <td>特殊</td>
            <td>与VB和C++中的变量基本无关。其实质是用于保存大多数其他SQL 
                Server数据类型的容器。当列或函数需要处理多种数据类型时可使用这种数据类型。与VB不同的是，使用这种数据类型要将其显式转换为更具体的数据类型</td>
        </tr>
        <tr>
            <td>XML</td>
            <td>字符</td>
            <td>可变</td>
            <td>定义一个字符字段用作XML数据。用于针对XML模式的数据验证和使用特殊的面向XML的函数</td>
        </tr>
        <tr>
            <td>CLR</td>
            <td>其他</td>
            <td>可变</td>
            <td>随CLR对象的特性而变，CLR对象支持基于自定义数据类型的CLR</td>
        </tr>
    </tbody>
</table>
</div>
      