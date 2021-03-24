---
stackbit_url_path: >-
  posts/SQL-Server-2008-编程入门经典-第13章练习
title: 'SQL Server 2008 编程入门经典 第13章练习'
date: '2010-04-22 05:31:01'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>13.7 练习</p>
<p>1. 将第12章中的spTriangular存储过程重新实现为函数。</p>
<p>先看看第12章中的spTriangular存储过程的定义与用法示例。</p>
<p>定义：</p>
<pre class="brush: sql">CREATE PROC spTriangular
	@ValueIn int,
	@ValueOut int OUTPUT
AS
	DECLARE @InWorking int;
	DECLARE @OutWorking int;
	
	IF @ValueIn != 1
	BEGIN
		SELECT @InWorking = @ValueIn - 1;
		EXEC spTriangular @InWorking, @OutWorking OUTPUT;
		SELECT @ValueOut = @ValueIn + @OutWorking;
	END
	ELSE
	BEGIN
		SELECT @ValueOut = 1;
	END
	RETURN;
GO
</pre>
<p>调用示例：</p>
<pre class="brush: sql">DECLARE @WorkingOut int;
DECLARE @WorkingIn int;
SELECT @WorkingIn = 5;
EXEC spTriangular @WorkingIn, @WorkingOut OUTPUT;

PRINT CAST(@WorkingIn AS varchar) + ' Triangular is ' + CAST(@WorkingOut AS varchar);
</pre>
<p>现在将存储过程spTriangular实现为函数如下：</p>
<pre class="brush: sql">CREATE FUNCTION dbo.fnTriangular(@ValueIn int)
RETURNS int
AS
BEGIN
	DECLARE @ReturnValue int;
	
	IF @ValueIn &gt; 1 
	BEGIN
		SELECT @ReturnValue = @ValueIn + dbo.fnTriangular(@ValueIn - 1);
	END
	ELSE
	BEGIN
		SET @ReturnValue = 1
	END
	RETURN @ReturnValue
END
</pre>
<p>调用示例：</p>
<pre class="brush: sql">SELECT dbo.fnTriangular(5)
</pre>
      