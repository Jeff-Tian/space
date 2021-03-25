---
stackbit_url_path: >-
  posts/SQL-中-ALTER-DATABAES-语句的语法结构
title: 'SQL 中 ALTER DATABAES 语句的语法结构'
date: '2010-03-24 08:26:35'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/24/SQL-中-ALTER-DATABAES-语句的语法结构
template: post
---

        <p>ALTER DATABASE 的语法结构如下所示：</p>
<pre class="brush: sql">ALTER DATBASE &lt;database name&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADD FILE
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;([NAME = &lt;'logical file name'&gt;, ]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FILENAME = &lt;'file name'&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[, SIZE = &lt;size in KB, MB, GB or TB&gt;]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[, MAXSIZE = &lt;size in KB, MB, GB or TB&gt;]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[, FILEGROWTH = &lt;No of KB, MB, GB or TB |percentage&gt;]) [, ...n]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[TO FILEGROUP filegroup_name]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[, OFFLINE]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ADD LOG FILE
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;([NAME = &lt;'logical file name'&gt;, ]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FILENAME = &lt;'file name'&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[, SIZE = &lt;size in KB, MB, GB or TB&gt;]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[, MAXSIZE = &lt;size in KB, MB, GB or TB&gt;]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[, FILEGROWTH = &lt;No of KB, MB, GB or TB |percentage&gt;])
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|REMOVE FILE &lt;logical file name&gt; [WITH DELETE]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|ADD FILEGROUP &lt;filegroup name&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|REMOVE FILEGROUP &lt;filegroup name&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|MODIFY FILE &lt;filespec&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|MODIFY NAME = &lt;new dbname&gt;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|MODIFY FILEGROUP &lt;filegroup name&gt; {&lt;filegroup property&gt;|NAME = &lt;new filegroup name&gt;}
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|SET &lt;optionspec&gt; [, ...n][WITH &lt;termination&gt;]
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|COLLATE &lt;collation name&gt;
</pre>
<p>以下是一个示例，将指定的数据库扩充至100MB：</p>
<pre class="brush: sql">ALTER DATABASE Accounting
	MODIFY FILE
	(NAME = Accounting, 
	SIZE = 100MB)
</pre>
      