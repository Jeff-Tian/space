---
stackbit_url_path: >-
  posts/用涂鸦Excel加载宏工具-拆分Excel数据报告
title: '用涂鸦Excel加载宏工具 拆分Excel数据报告'
date: '2010-03-10 02:20:29'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/10/用涂鸦Excel加载宏工具-拆分Excel数据报告
template: post
---

        <div style="text-indent: 2em; font-size: larger;">
<p>下载链接：<a href="http://code.google.com/p/mf-utility/downloads/list">http://code.google.com/p/mf-utility/downloads/list</a></p>
<p>在需要使用Microsoft Excel制作大量的报告过程中，可能会碰到这样的需求：</p>
<p>一个报告包含了大量数据，而这些报告中的数据是按照阅读报告的用户分了类的，超级用户（可以是级别最高的领导，也可以是需要对报告做整体分析的分析人员）可以阅读所有数据，而一般用户只能阅读其中属于他/她级别内的数据，这时候就需要将原始报告进行拆分，确保下发到一般用户的报告中不含有其他用户的数据。</p>
<p>如果用户很多，做这样的拆分需要花费大量时间和精力。这款“脚印Excel加载宏工具”便是针对此需求而开发，以简化拆分Excel数据报表的工作。</p>
<!--<p>其使用界面如下，非常简单实用，欢迎从附件下载(<a href="http://www.myfootprints.cn/attachments/month_0901/7200915223912.zip"><img border="0" style="margin: 0px 2px -4px 0px;" alt="" src="../../images/download.gif" />点击下载此文件</a>)试用，若碰到问题或者程序Bug，敬请留言告知，在此感谢！</p>
<p><img alt="" src="http://www.myfootprints.cn/attachments/month_0901/e200913232044.JPG" /></p>-->
<p><strong>简单使用说明：</strong></p>
<p>要使用此工具，先需要将Excel的宏安全性修改为中或者低。</p>
<p>打开此工具后，菜单栏上会出现一个菜单项“mf-Utility"(Excel 2007版会出现在加载项中)，此菜单下的第一个菜单即为"拆分表格"（"Split Table"），点击它，便会出现如上图片所示的对话框。</p>
<p>对话框中的参数说明在下面。推荐的使用方法是(使用推荐的方法可以不需要设置任何参数)，先打开待拆分的数据报告，选中用户分类信息(即此报告要根据哪一列的数据来拆分)，然后依次点击"mf-Utility"&gt;"Split Table"，出现对话框后，点击"Next", 然后点击"Finish"，这时工具开始拆分报告，会出现一个进度条，等进度条消失后，报告就已经拆分好了，这时去原始报告所在文件夹，就会看到拆分好的子报告。如果原始报告文件名为"甲乙丙丁的工资信息"，那么拆分好的子报告文件名分别为"甲乙丙丁的工资信息_甲"、"甲乙丙丁的工资信息_乙"、"甲乙丙丁的工资信息_丙"、"甲乙丙丁的工资信息_丁"。</p>
<p><strong>参数说明：</strong></p>
<ul style="text-indent: 0;">
    <li><strong>Datasource</strong>: 即要拆分的报告数据源。</li>
    <li><strong>Separator</strong>: 即告诉工具根据哪一列来拆分数据源。</li>
    <li><strong>M</strong><strong>y Data has header / no header</strong>: 告诉工具此报告是否含有标题行。</li>
    <li><strong>S</strong><strong>ave copies</strong>: 选中后，拆分好的子报告将自动保存在原始报告所有的文件夹内。如果不选中，则拆分后子报告保持打开状态。</li>
    <li><strong>Close copies after save</strong>: 选中后，拆分好的子报告将保存在如上所述的文件夹内，然后关闭。如果不选中，则拆分后子报告将保持打开状态。</li>
    <li><strong>Max No. of Copies</strong>: 默认为100，可以修改。这个参数的是对工具最多可以拆分多少份子报告的一个限制，一般应该不需要修改。如果用户数超过了100，就要修改。比如要拆分成1000个报告，那么需要将此参数修改为1000，否则工具拆分到100个后自动停止。</li>
</ul>
<p>下载链接：<a href="http://code.google.com/p/mf-utility/downloads/list">http://code.google.com/p/mf-utility/downloads/list</a></p>
</div>
      