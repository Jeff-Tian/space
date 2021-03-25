---
stackbit_url_path: >-
  posts/Java-打印编程一例
title: 'Java 打印编程一例'
date: '2010-03-16 09:19:24'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/16/Java-打印编程一例
template: post
---

        <div style="text-indent: 2em; font-size: larger;">
<p>在 Eclispe 环境中，新建一个Java项目，命名为Print，再添加两个类，分别为 MyFrame.java 和 Example.java，代码如下：</p>
<p>MyFrame.java：</p>
<div style="text-indent: 0;">
<pre class="brush: java">import java.awt.*;
import java.awt.event.*;

public class MyFrame extends Frame implements ActionListener {
	// 声明一个 PrintJob 对象。
	PrintJob p = null;
	Graphics g = null;
	TextArea text = new TextArea(10, 10);
	Button 打印文本框 = new Button("打印文本框"), 
			打印窗口 = new Button("打印窗口"),
			打印按钮 = new Button("打印按钮");
	
	MyFrame() {
		super("在应用程序中打印");
		打印文本框.addActionListener(this);
		打印窗口.addActionListener(this);
		打印按钮.addActionListener(this);
		add(text, "Center");
		Panel panel = new Panel();
		panel.add(打印文本框);
		panel.add(打印窗口);
		panel.add(打印按钮);
		add(panel, "South");
		addWindowListener(new WindowAdapter() {
			public void windowClosing(WindowEvent e) {
				System.exit(0);
			}
		});
	}
	
	public void actionPerformed(ActionEvent e) {
		if (e.getSource() == 打印文本框) {
			// 创建一个 PrintJob 对象 p
			p = getToolkit().getPrintJob(this, "ok", null);
			// p 获取一个用于打印用于打印的 Graphics 对象。
			g = p.getGraphics();
			g.translate(120, 120);
			text.printAll(g);
			// 释放对象 g
			g.dispose();
			p.end();
		} else if (e.getSource() == 打印窗口) {
			p = getToolkit().getPrintJob(this, "ok", null);
			
			// p 获取一个用于打印的 Graphics 对象
			g = p.getGraphics();
			g.translate(120, 120);
			// 打印当前窗口及其子组件
			this.printAll(g);
			// 释放对象 g
			g.dispose();
			p.end();
		} else if (e.getSource() == 打印按钮) {
			p = getToolkit().getPrintJob(this, "ok", null);
			g = p.getGraphics();
			g.translate(120, 120);
			打印文本框.printAll(g);
			g.translate(78, 0);
			打印窗口.printAll(g);
			g.translate(66, 0);
			打印按钮.printAll(g);
			g.dispose();
			p.end();
		}
	}
}
</pre>
</div>
<p>Example.java：</p>
<div style="text-indent: 0;">
<pre class="brush: java">import java.awt.*;
import java.awt.event.*;

public class Example {
	public static void main(String args[]) {
		MyFrame f = new MyFrame();
		f.setBounds(70, 70, 70, 89);
		f.setVisible(true);
		f.pack();
	}
}

</pre>
</div>
</div>
      