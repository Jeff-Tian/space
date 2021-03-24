---
stackbit_url_path: >-
  posts/ZBlog-学习笔记
title: 'ZBlog 学习笔记'
date: '2010-02-09 05:33:52'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em;"><p>今天在升级 Blog 之后，以前自己对后台程序作的修改丢失了。由于是很早以前修改的，现在却找不到应该在哪里修改了。这样造成的后果就是，发布代码时，存入数据库中的代码是我自己的写的，然后在页面上显示出来的代码却变得一团糟，因为后台程序在手写的代码上加入了其他的HTML代码标签。</p><p>我一般使用自己的代码显示标签（即 dp.SyntaxHighlighter 所提供的方式），而没有使用 ZBlog 自带的[code]标签。以前引用 dp.SyntaxHighlighter 时，对Blog后台程序进行了修改，从而在Blog中顺利地融入了 dp.SyntaxHighlighter。而现在要重新做这们的修改，却发现怎么也找不到当时的那个修改入口了。于是想偷懒，就去ZBlog程序开发交流区发问，如果让后台程序在发布文章后不要修改我写的代码内容。回答是：不可能（原文是“没有你想像的功能。”）。回答者是 haphic，我用过他开发的插件，很佩服他。但是他的回答给我泼了冷水，我决心透彻地研究一下ZBlog程序，使用比上次更好的方法来实现我自己的需求。</p><p>ASP 是弱类型语言，对于变量，若要保证变量是自己想要的类型，需要使用一些类型转换函数。ZBlog 将这一需求找包成一个统一的函数，很好。</p><pre class="brush: vb" style="text-indent: 0;">'*********************************************************
' 目的：    检查参数，将弱类型 source 变量转换成指定的期望
'           类型的变量
'
' 位置：    /FUNCTION/c_function.asp
'
' 参数：    source  要检查的变量，是按引用传递的
'           strType 期望的参数类型
'           default 默认值
'
' 返回：    无错则返回True；
'           出错则转到ShowError(3)
'
' 日期      开发者      行为
' --------------------------------------------------------
' -         -           创建
' 2010-2-9  涂鸦        添加注释
'*********************************************************
Function CheckParameter(byRef source,strType,default)

	On Error Resume Next

	If strType="int" Then

		'数值
		If IsNull(source) Then
			source=default
		ElseIf IsEmpty(source) Then
			source=default
		ElseIf IsNumeric(source) Then
			source=CLng(source)
		ElseIf source="" Then
			source=default
		Else
			Call ShowError(3)
		End if
		If Err.Number&lt;&gt;0 Then Call ShowError(3)

		CheckParameter=True

	ElseIf  strType="dtm" Then

		'日期
		If IsNull(source) Then
			source=default
		ElseIf IsEmpty(source) Then
			source=default
		ElseIf IsDate(source) Then
			source=source
			Call FormatDateTime(source,vbLongDate)
			Call FormatDateTime(source,vbShortDate)
		ElseIf source="" Then
			source=default
		Else
			Call ShowError(3)
		End if
		If Err.Number&lt;&gt;0 Then Call ShowError(3)

		CheckParameter=True

	ElseIf strType="sql" Then

		'SQL
		If IsNull(source) Or Trim(source)="" Or IsEmpty(source) Then
			source=default
		Else
		    ' 将单引号'替换成连续的两个单引号'' - 涂鸦，2010-2-9
			source=CStr(Replace(source,Chr(39),Chr(39)&amp;Chr(39)))
		End If

	ElseIf strType="bool" Then

		'Boolean
		source=CBool(source)

		If Err.Number&lt;&gt;0 Then
			Err.Clear
			If IsEmpty(source)=True Then
				source=True
			Else
				source=False
			End If
		End If

	Else
		Call ShowError(0)
	End If

End Function
'*********************************************************
</pre></div>
      