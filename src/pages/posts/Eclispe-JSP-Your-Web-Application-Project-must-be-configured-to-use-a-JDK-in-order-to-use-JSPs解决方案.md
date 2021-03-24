---
stackbit_url_path: >-
  posts/Eclispe-JSP-Your-Web-Application-Project-must-be-configured-to-use-a-JDK-in-order-to-use-JSPs解决方案
title: 'Eclispe JSP "Your Web Application Project must be configured to use a JDK in order to use JSPs."解决方案'
date: '2010-04-03 22:28:55'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p><span class="Apple-style-span" style="font-family: verdana, sans-serif; line-height: 21px; font-size: 14px; ">
</span></p><p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; "><span style="line-height: 24px; font-size: medium; ">问题描述：</span></p>
<p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; "><span style="line-height: 24px; font-size: medium; ">当你在Eclipse的程序中加入一个JSP文件后，整个Project 会报一个这样的Error.</span></p>
<p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; ">“Your Web Application Project must be configured to use a JDK in order to use JSPs.”</p>
<p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; "><span style="line-height: 24px; font-size: medium; ">问题原因：</span></p>
<p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; "><span style="line-height: 24px; font-size: medium; ">默认Eclipse的编译环境是JRE，而JRE是不带编译器的，只有JDK才带编译器。所以必须把JDK作为你项目的Installed JRE。</span></p>
<p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; ">如果你还没有安装JDK，那么可以先到这里（JDK官方下载页面）下载并安装：<span class="Apple-style-span" style="font-family: Arial, Verdana, sans-serif; line-height: 19px; font-size: 12px; "><a href="https://cds.sun.com/is-bin/INTERSHOP.enfinity/WFS/CDS-CDS_Developer-Site/en_US/-/USD/ViewFilteredProducts-SingleVariationTypeFilter;pgid=yYdgaHqkkjVSR0EUPIQsoQ3D0000IbFtVsyz;sid=rHJYMXtL5kZYMTD8AkUQNJTiM4w-crYO-ZCX8GZVMQh2jg==?DLWidget=true&amp;AutoWidgetDL=">https://cds.sun.com/is-bin/INTERSHOP.enfinity/WFS/CDS-CDS_Developer-Site/en_US/-/USD/ViewFilteredProducts-SingleVariationTypeFilter;pgid=yYdgaHqkkjVSR0EUPIQsoQ3D0000IbFtVsyz;sid=rHJYMXtL5kZYMTD8AkUQNJTiM4w-crYO-ZCX8GZVMQh2jg==?DLWidget=true&amp;AutoWidgetDL=</a></span></p>
<p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; ">
</p><p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; "><span style="line-height: 24px; font-size: medium; ">解决方案:</span></p>
<p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; "><span style="line-height: 24px; font-size: medium; ">1.在Window 菜单下选择Preferences</span></p>
<p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; "><span class="Apple-style-span" style="line-height: 24px; font-size: medium; ">2.在Java-Installed JRE上，选择Add ,选择Standard JVM,然后选择JDK 所在的目录。选择JDK作为Installed JRE 首选。</span></p>
<p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; ">
</p><p style="padding-top: 0px; padding-right: 0px; padding-bottom: 0px; padding-left: 0px; margin-top: 1em; margin-right: 0px; margin-bottom: 0.5em; margin-left: 0px; "><span style="line-height: 24px; font-size: medium; ">错误消失。</span></p>
<div><span style="line-height: 24px; font-size: medium; "><br>
</span></div>
<p></p>
<p></p>
<p></p>
      