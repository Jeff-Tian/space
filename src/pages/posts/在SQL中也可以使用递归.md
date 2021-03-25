---
stackbit_url_path: >-
  posts/在SQL中也可以使用递归
title: '在SQL中也可以使用递归'
date: '2010-04-21 06:19:22'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/04/21/在SQL中也可以使用递归
template: post
---

        <p>今天在学习存储过程时，了解到在存储过程中，也可以使用递归编程。</p>
<p>以下是一个使用递归方法计算阶乘的存储过程的实现。</p>
<pre class="brush: sql">CREATE PROC spFactorial
	@ValueIn int,
	@ValueOut int OUTPUT
AS
	DECLARE @InWorking int;
	DECLARE @OutWorking int;
	IF @ValueIn != 1
	BEGIN
		SELECT @InWorking = @ValueIn - 1;
		EXEC spFactorial @InWorking, @OutWorking OUTPUT;
		SELECT @ValueOut = @ValueIn * @OutWorking;
	END
	ELSE
	BEGIN
		SELECT @ValueOut = 1;
	END
	RETURN;
	GO
</pre>
<p>以下是调用它的SQL语句：</p>
<pre class="brush: sql">DECLARE @WorkingOut int;
DECLARE @WorkingIn int;
SELECT @WorkingIn = 7;
EXEC spFactorial @WorkingIn, @WorkingOut OUTPUT;

PRINT CAST(@WorkingIn AS varchar) + ' factorial is ' + CAST(@WorkingOut AS varchar);
</pre>
      