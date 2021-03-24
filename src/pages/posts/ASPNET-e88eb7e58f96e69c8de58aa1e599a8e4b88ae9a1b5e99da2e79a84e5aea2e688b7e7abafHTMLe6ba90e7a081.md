---
stackbit_url_path: >-
  posts/ASPNET-e88eb7e58f96e69c8de58aa1e599a8e4b88ae9a1b5e99da2e79a84e5aea2e688b7e7abafHTMLe6ba90e7a081
title: 'ASP.NET 获取服务器上页面的客户端HTML源码'
date: '2011-01-10 05:45:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - ASP.NET
  - C#
  - 获取客户端源码
canonical_url: >-
template: post
---
<h1><font color="#9b00d3"><font style="font-weight: bold">首先介绍一下通过发送Http请求来获取某个网页的HTML响应的方法，代码如下：</font></font></h1>  <pre class="brush: csharp">public string GetWebPageSource(string url) {
        Uri uri = new Uri(url);
        HttpWebRequest httpWebRequest = (HttpWebRequest)WebRequest.Create(uri);
        HttpWebResponse httpWebResponse = (HttpWebResponse)httpWebRequest.GetResponse();
        httpWebRequest.Method = &quot;Get&quot;;
        httpWebRequest.KeepAlive = false;

        StreamReader reader = new StreamReader(httpWebResponse.GetResponseStream(), System.Text.Encoding.UTF8);
        return reader.ReadToEnd();
}</pre>

<p>使用此方法，向某个服务器发送了HTTP请求，并获得了该服务器对这个请求的响应。这个服务器也可以是本地服务器。这个功能可以用在做代理服务器，或者做浏览器的时候。</p>

<h1><font color="#9b00d3">有另外一种需求，比如要将本服务器上的某个页面，做为HTML邮件发送出去，这时候，要获取本服务器上的页面HTML源码。</font></h1>

<p><strong><font color="#9b00d3"></font></strong>当然也可以尝试使用上面的方法，但是，总觉得有些欠妥，因为，对服务器来说，我只需要将属于我的ASPX页面，解析成HTML发送出去就可以了，干嘛要先对我自己发送一个HTTP请求呢？另外，如果这个页面是需要登录的话，那么用上面的方法，返回的HTML会变成拒绝访问，要求登录的那个页面的HTML源码。</p>

<p>其实，在这种情况下，最适合的方法，是使用 Server.Execute()。完整代码如下：</p>

<pre class="brush: csharp">public string GetPageHtmlSource(string path)
{
        StringWriter stringWriter = new StringWriter();
        HtmlTextWriter htmlWriter = new HtmlTextWriter(stringWriter);
        Server.Execute(path, htmlWriter);
        string html = stringWriter.GetStringBuilder().ToString();
        return html;
}</pre>