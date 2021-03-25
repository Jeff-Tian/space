---
stackbit_url_path: >-
  posts/ZBlog-插件开发笔记
title: 'ZBlog 插件开发笔记'
date: '2010-02-08 09:42:45'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/02/08/ZBlog-插件开发笔记
template: post
---

        <div style="text-indent: 2em;">
<pre style="text-indent: 0;" class="brush: vb">'*********************************************************
' 目的： 注册插件函数 
'
' 注释： 将插件信息保存到数组中。即在原有数组最后增加一个元素
'保存传递过来的插件名称和激活函数/过程的信息。
' 
' 位置： /FUNCTION/c_system_base.asp
'*********************************************************
Function RegisterPlugin(strPluginName,strPluginActiveFunction)

	'On Error Resume Next

	Dim i
	i=UBound(PluginName)

	ReDim Preserve PluginName(i+1)
	ReDim Preserve PluginActiveFunction(i+1)

	PluginName(i)=strPluginName
	PluginActiveFunction(i)=strPluginActiveFunction

	'Err.Clear

End Function
'*********************************************************
</pre>
</div>
      