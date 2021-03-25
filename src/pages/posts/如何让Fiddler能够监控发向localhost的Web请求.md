---
stackbit_url_path: >-
  posts/如何让Fiddler能够监控发向localhost的Web请求
title: '如何让Fiddler能够监控发向localhost的Web请求'
date: '2012-02-07 06:40:52.1131953'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - Fiddler
  - localhost
  - web test
  - web 请求
canonical_url: https://be-net.azurewebsites.net/post/2012/02/07/如何让Fiddler能够监控发向localhost的Web请求
template: post
---
<h1><font color="#800080">一、问题：<a title="如何让Fiddler能够监控发向localhost的Web请求" href="http://fiddler2.com/fiddler/help/hookup.asp#Q-LocalTraffic" target="_blank"><img style="border-bottom: 0px; border-left: 0px; display: inline; margin-left: 0px; border-top: 0px; margin-right: 0px; border-right: 0px" title="如何让Fiddler能够监控发向localhost的Web请求" border="0" alt="如何让Fiddler能够监控发向localhost的Web请求" align="right" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_436.png" width="240" height="87" /></a></font></h1>  <p>Fiddler是个非常好用的网络抓包工具，能够监测所有的Web请求细节。然而，在本地部署站点并调试时，使用Fiddler却发现抓不到相关的Web请求了。</p>  <h1><font color="#800080">二、原因：</font></h1>  <p>站点在本地运行时，网址为 http://localhost/yoursite，正是这个localhost引起了问题。</p>  <ul>   <li>Fiddler简介：Fiddler是一款免费且强大的数据包抓取软件。<strong>它通过<font color="#ff0000">代理的方式</font>获取程序http通讯的数据</strong>，可以用其检测网页和服务器的交互情况，能够记录所有客户端和服务器间的http请求，支持监视、设置断点、甚至修改输入输出数据等功能。fiddler包含了一个强大的基于事件脚本的子系统，并且能够使用.net框架语言扩展。</li>    <li>Internetnet Explorer 和.NET Framework硬编码了如下行为：当向localhost发起任何请求时，都不通过代理。于是作为一个代理，Fiddler就收不到任何这样的请求了。</li> </ul>  <h1><font color="#800080">三、解决方案</font></h1>  <ol>   <li>使用IE 9 Release Candidate Build：IE 9 Release Candidate (简称IE 9 RC) Build允许Fiddler代理发送给localhost或者127.0.0.1的网络请求。</li>    <li>最简单的变通方案：不使用localhost或者127.0.0.1，而使用你的机器名来宿主你的网站。即使用http://machinename:8081/mytestpage.aspx来取代http://localhost:8081/mytestpage.aspx。</li>    <li>使用Firefox浏览器：使用Firefox浏览器，你就不会遇到“发送给localhost的网络请求没有被监测到”的情况了。（当Fiddler处于“抓包”模式时，Firefox 的 FiddlerHook 加载项会将localhost从“绕过代理”清单中移去）</li> </ol>  <h1><font color="#800080">四、参考资料：</font></h1>  <p><a href="http://fiddler2.com/fiddler/help/hookup.asp#Q-LocalTraffic" target="_blank">http://fiddler2.com/fiddler/help/hookup.asp#Q-LocalTraffic</a></p>