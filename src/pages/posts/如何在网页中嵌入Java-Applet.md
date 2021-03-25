---
stackbit_url_path: >-
  posts/如何在网页中嵌入Java-Applet
title: '如何在网页中嵌入Java Applet'
date: '2010-03-26 04:46:04'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/03/26/如何在网页中嵌入Java-Applet
template: post
---

        <p>要在网页中嵌入Java Applet，需要先将编译好的.class文件，放到与网页相同的文件夹下，然后在网页代码中，嵌入如下代码（假设这个.class文件名为Applet1.class）：</p>
<pre class="brush: html">		&lt;OBJECT
			classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93"
			width="400" height="200" align="baseline"
			codebase="http://java.sun.com/products/plugin/1.2.2/jinstall-1_2_2-win.cab#Version=1,2,2,0"&gt;
			&lt;PARAM NAME="code" VALUE="Applet1.class"&gt;
			&lt;PARAM NAME="codebase" VALUE="."&gt;
			&lt;PARAM NAME="type"
				VALUE="application/x-java-applet;version=1.2.2"&gt;
			&lt;COMMENT&gt;
				&lt;EMBED type=
					"application/x-java-applet;version=1.2.2"
					width="400" height="200" align="baseline"
					code="Applet1.class" codebase="."
					pluginspage="http://java.sun.com/products/plugin/1.2/plugininstall.
					html"&gt;
					&lt;NOEMBED&gt;
						No Java 2 support for APPLET!!
					&lt;/NOEMBED&gt;
				&lt;/EMBED&gt;
			&lt;/COMMENT&gt;
		&lt;/OBJECT&gt;
</pre>
<p>效果如下所示：</p>
<object classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93" width="400" height="200" align="baseline" codebase="http://java.sun.com/products/plugin/1.2.2/jinstall-1_2_2-win.cab#Version=1,2,2,0">
<param name="code" value="Applet1.class">
<param name="codebase" value=".">
<param name="type" value="application/x-java-applet;version=1.2.2"> 			<comment> 				<embed type="application/x-java-applet;version=1.2.2" width="400" height="200" align="baseline" code="Applet1.class" codebase="." pluginspage="http://java.sun.com/products/plugin/1.2/plugininstall.
html"> 					<noembed></noembed> 				 			</comment> 		</object>
<p>以上显示的Java Applet的Java源代码(Applet1.java)为：</p>
<pre class="brush: java">// Very simple applet
import javax.swing.*;
import java.awt.*;

public class Applet1 extends JApplet {
	public void init() {
		getContentPane().add(new JLabel("欢迎来到涂鸦网：http://www.myfootprints.cn."));
	}
}
</pre>
<p>更多示例：</p>
<object classid="clsid:8AD9C840-044E-11D1-B3E9-00805F499D93" width="400" height="200" align="baseline" codebase="http://java.sun.com/products/plugin/1.2.2/jinstall-1_2_2-win.cab#Version=1,2,2,0">
<param name="code" value="AwtSample.class">
<param name="codebase" value=".">
<param name="type" value="application/x-java-applet;version=1.2.2"> 			<comment> 				<embed type="application/x-java-applet;version=1.2.2" width="400" height="200" align="baseline" code="AwtSample.class" codebase="." pluginspage="http://java.sun.com/products/plugin/1.2/plugininstall.
html"> 					<noembed></noembed> 				 			</comment> 		</object>
<p>它的源码为：</p>
<pre class="brush: java">import java.applet.*;
import java.awt.color.*;
import java.awt.Color;
import java.awt.Graphics;

/**
 * AWT 的演示示例，
 * 绘制圆角矩形、矩形和椭圆
 * 
 * @author 涂鸦
 *
 */
public class AwtSample extends Applet {
	private static final long serialVersionUID = 1L;
	
	/**
	 * 绘制图形
	 * @param g 图形对象
	 */
	public void paint(Graphics g) {
		g.drawRect(24, 22, 60, 34);
		g.drawRoundRect(10, 10, 90, 60, 50, 30);
		
		// 设置图形颜色
		g.setColor(Color.cyan);
		g.fillOval(10, 80, 120, 30);
		
		int k = 0;
		for (int i = 1; i &lt;= 8; i++) {
			// 实现了一个颜色的变迁
			Color c = new Color(i*32 - 1, 0 , 0);
			g.setColor(c);
			k = k + 5;
			g.drawOval(80 + k, 77 + k, 120 - 2 * k, 80 - 2 * k);
			
		}
	}
}
</pre>
      