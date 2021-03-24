---
stackbit_url_path: >-
  posts/解决JFreeChart的中文乱码问题
title: '解决JFreeChart的中文乱码问题'
date: '2010-04-04 13:01:23'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>今天在Web项目中使用JFreeChart做图表，图表中的中文字符全为方框，如下：</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><img onload="ResizeImage(this,520)" src="http://www.zizhujy.com/blog/image.axd?picture=image_202.png" alt="" title=""></p>
<p>后来想，可能是由于JFreeChart是外国人开发的，所以对中文支持不太好。于是对每个要显示中文字符的地方都显式指定中文字体，解决了乱码问题。即在页首import java.awt.Font，然后使用chart.getTitle().setFont(new Font("宋体", Font.PLAIN, 12)); chart.getLegend().setFont(new Font("宋体", Font.PLAIN, 12)); 的方式指定字体。</p>
<p>效果如下：</p>
<p>&nbsp;</p>
<p><img onload="ResizeImage(this,520)" src="http://www.zizhujy.com/blog/image.axd?picture=image_203.png" alt="" title=""></p>
<p>&nbsp;全部源码为：</p>
<pre class="brush: java">&lt;%@ page contentType="text/html;charset=GBK"%&gt;
&lt;%@ page import="org.jfree.chart.*,
				org.jfree.chart.plot.PiePlot,
				org.jfree.data.general.DefaultPieDataset,
				org.jfree.chart.servlet.ServletUtilities,
				org.jfree.chart.labels.StandardPieSectionLabelGenerator,
				java.text.NumberFormat,
				java.awt.Font" %&gt;
&lt;%
	// 设置数据集
	DefaultPieDataset dataset = new DefaultPieDataset();
	dataset.setValue("初级程序员", 10000);
	dataset.setValue("中级程序员", 23000);
	dataset.setValue("高级程序员", 10000);
	dataset.setValue("项目经理", 6000);
	dataset.setValue("系统分析师", 6000);
	dataset.setValue("软件架构师", 3000);
	dataset.setValue("其他", 10000);
	
	JFreeChart chart = ChartFactory.createPieChart("IT 行业职业分布图", dataset, true, false, false);
	PiePlot pieplot = (PiePlot) chart.getPlot();
	pieplot.setNoDataMessage("无数据显示");
	
	// 把“中级程序员”的那一块“挖”出来50%
	pieplot.setExplodePercent("中级程序员", 0.5D);
	// 显示各项所占的百分比
	pieplot.setCircular(true);
	pieplot.setLabelGenerator(new StandardPieSectionLabelGenerator("{0} = 沙滩脚印", 
			NumberFormat.getNumberInstance(),
			NumberFormat.getNumberInstance()));
	
	/* 解决项目名称中的中文乱码问题 */
	pieplot.setLabelFont(new Font("宋体", Font.PLAIN, 12));
	
	/* 解决图表标题中的中文乱码问题 */
	chart.getTitle().setFont(new Font("黑体", Font.BOLD, 16));
	
	/* 解决图例的中文乱码问题 */
	chart.getLegend().setItemFont(new Font("宋体", Font.PLAIN, 12));
	
	String filename = ServletUtilities.saveChartAsPNG(chart, 700, 400, null, session);
	String graphURL = request.getContextPath() + "/DisplayChart?filename=" + filename;
%&gt;
	<img src="&lt;%= graphURL %&gt;" width="700" height="400" border="0" usemap="#&lt;%= filename %&gt;">
</pre>
      