---
stackbit_url_path: >-
  posts/如何在-SQL-Server-2005-中为安装程序增加计数器注册表项值
title: '如何在 SQL Server 2005 中为安装程序增加计数器注册表项值'
date: '2010-03-17 10:31:49'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/17/如何在-SQL-Server-2005-中为安装程序增加计数器注册表项值
template: post
---

        <div style="text-indent: 2em; font-size: larger;">
<p>今天在安装SQL Server 2005时，碰到这个问题而导致不能安装：如何在SQL Server 2005中为安装程序增加计数器注册表项值。</p>
<p>我上网搜索了一下，下面的方法解决了我的问题：</p>
<hr>
<p>今天安装SQL Server 2005。开始系统里面已经安装了SQL Server 2000，安装后怎么看数据库版本还是8.0版本的？只好重新安装，先卸载了SQL Server 2000然后再安装SQL Server 2005却发现了一个错误“如何在SQL Server 2005中为安装程序增加计数器注册表项值”，可能是注册变里面因为保留了以前的东西使得SQL Server 2005的注册表不对了。</p>

<p>那么俺只好手动修改了，google了一下发现了好多基本相同的文档，但是根据俺自身的实际操作经验再来叙述一下：</p>

<p>在 SQL Server 安装开始前，Microsoft SQL Server 安装程序中的安装配置检查器 (SCC) 会验证计数器注册表项的值。如果 SCC 无法验证现有的注册表项，或 SCC 无法运行 lodctr.exe 系统程序，则 SCC 检查会失败，致使安装受阻。</p>

<p>错误编辑注册表会严重损坏您的系统。更改注册表项之前，建议您备份计算机中的所有重要数据。</p>

<p>1、在 Microsoft Windows 2003 或 Windows XP 桌面上，依次单击“开始”、“运行”，然后在“打开”中键入 regedit.exe，再单击“确定”。在 Windows 2000 中，使用 regedt32.exe 启动注册表编辑器。</p>

<p>2、定位到以下注册表项：</p>

<p>[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Perflib]</p>

<p>找到里面的Last Counter和LastHelp，注意Last Counter和Last Help值是由 Windows 动态分配的；这两个值会因计算机的不同而不同。我的分别是6760和6761。</p>

<p>3、上一步的“Last Counter”值 (6760) 必须与以下注册表项中“Perflib\004”的“Counter”项的最大值匹配，并且上一步的“Last Help”值 (6761) 必须与以下注册表项中“Perflib\004”的“Help”项的最大值匹配。</p>

<p>[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Perflib\004]</p>

<p>注意 004 是简体中文中的一个示例，如果你安装的是英文版，对应的应该是：</p>

<p>[HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Perflib\009]</p>

<p>这里应该说明一下。因为当时我就不知道如何对应起来。</p>

<p>比如说：HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Perflib\004中的Help，双击后打开编辑框，里面是：</p>

<p>3</p>
<p>System performance object 包含应用于计算机上不止一个组件处理器范例的计数器。</p>
<p>5</p>
<p>Memory performance object </p>

<p>...</p>
<p>中间的都省略掉了</p>
<p>...</p>

<p>6785</p>
<p>写入所有数据源中的 BLOB 字节总数。</p>
<p>6787</p>
<p>在整个管道中使用的 BLOB 假脱机文件数。</p>

<p>这个最后一个数值6787就应该对应Perflib中Last Help的十进制数值。当然修改的时候别忘了选择十进制。</p>

<p>6、关闭注册表编辑器</p>

<p>7、再次运行 SQL Server 安装程序就应该没问题了。</p>

</div>
      