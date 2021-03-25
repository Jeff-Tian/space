---
stackbit_url_path: >-
  posts/SQL-Server-2008-e5ae9ae69c9fe887aae58aa8e5a487e4bbbde695b0e68daee5ba93
title: 'SQL Server 2008 定期自动备份数据库'
date: '2011-01-09 21:41:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - SQL Server
  - 备份
  - 定期
  - 自动
canonical_url: https://be-net.azurewebsites.net/post/2011/01/09/SQL-Server-2008-e5ae9ae69c9fe887aae58aa8e5a487e4bbbde695b0e68daee5ba93
template: post
---
<p>让SQL Server 2008自动备份数据库，需要建立一个SQL Server作业，并启动SQL Server代理，使该作业定期运行。</p>  <p>具体来说，可以按以下步骤进行：</p>  <p>一、打开SQL Server Management Studio，在对象资源管理器中，确认SQL Server代理已启动，若没有，右击SQL Server代理节点，点击“启动”。</p>  <p>二、展开SQL Server 代理节点，在其下的作业文件夹上右击，选择“新建作业”。</p>  <p>三、在弹出的“新建作业”对话框中，在常规选卡上为该作业命名，如“每日备份NokiaWarehouseSystem”。</p>  <p>四、选择“步骤”选项卡，点击“新建”按钮，在弹出的对话框中，为该步骤起一个名字，如“直接备份”，然后在命令栏中，<strong>输入如下命令</strong>(这里就是自动备份的核心了!)：</p>  <pre class="brush: sql">DECLARE @fileName nvarchar(100) 
SET @fileName='D:\Backup\NokiaWarehouseSystem\Backup' + CONVERT(char(10),getdate(),112) + '.bak'
PRINT 'Backup to ' + @fileName + '...'
BACKUP DATABASE [NokiaWarehouseSystem] TO DISK = @fileName WITH NOINIT , NOUNLOAD , NAME = N'NokiaWarehouseSystem 备份', NOSKIP , STATS = 10, NOFORMAT</pre>

<p>五、点击“确定”保存步骤。</p>

<p>六、选择“新建作业”的计划选项卡（这里就是定期执行的核心了！），点击“新建”按钮，为该计划命名，如“每日执行”，然后进行其他设置，如每天执行，时间为23:59:00等。最后点击“确定”保存计划。</p>

<p>七、在“新建作业”对话框中，点击“确定”，保存作业，OK！</p>