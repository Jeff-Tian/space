---
stackbit_url_path: >-
  posts/WCF-Test-Client-Error-Assembly-was-not-found
title: 'WCF Test Client Error: Assembly was not found.'
date: '2012-04-01 00:52:18.5536395'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - Biztalk
  - WCF
canonical_url: https://be-net.azurewebsites.net/post/2012/04/01/WCF-Test-Client-Error-Assembly-was-not-found
template: post
---
<h2><font style="font-weight: bold" color="#9b00d3">Problem:</font></h2>  <p>When invoke a service method via WCF Test Client, you get an error message like this:</p>  <pre>Assembly Oracle.DataAccess, Version=2.111.7.0, Culture=neutral, 
PublicKeyToken=89b483f429c47342 was not found. Reinstall the
assembly or Visual Studio. The application cannot continue and will exit.</pre>

<p>Screen shot:</p>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_504.png"><img style="background-image: none; border-right-width: 0px; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="WCF Test Client Error: Assembly was not found." border="0" alt="WCF Test Client Error: Assembly was not found." src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_222.png" width="601" height="385" /></a></p>

<p>After you click “OK”, the program will exit.</p>

<h2><font style="font-weight: bold" color="#9b00d3">Causes:</font></h2>

<p>It seems that it’s caused by BizTalk.</p>

<h2><font style="font-weight: bold" color="#9b00d3">Solution:</font></h2>

<p>When you run the WCF Test Client, modify the <em><font color="#9b00d3">machine.config</font></em> file (located in <font color="#9b00d3">C:\Windows\Microsoft.NET\Framework\v4.0.30319\Config</font>) </p>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_503.png"><img style="margin: 0px 10px 0px 0px" title="machine.config" border="0" alt="machine.config" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_221.png" width="635" height="304" /></a></p>

<p>by commenting out all the nodes who contain the word “Oracle”.</p>

<pre class="brush: xml">&lt;!--&lt;section name=&quot;system.data.oracleclient&quot; type=&quot;System.Data.Common.DbProviderConfigurationHandler, System.Data, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089&quot;/&gt;--&gt;
&lt;!--&lt;add name=&quot;oracleEBSAdapterInboundTransactionBehavior&quot; type=&quot;Microsoft.Adapters.OracleEBS.OracleEBSInboundTransactionBehavior, Microsoft.Adapters.OracleEBS, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35&quot;/&gt;--&gt;
&lt;!--&lt;add name=&quot;oracleDBAdapterInboundTransactionBehavior&quot; type=&quot;Microsoft.Adapters.OracleDB.OracleDBInboundTransactionBehavior, Microsoft.Adapters.OracleDB, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35&quot;/&gt;--&gt;
&lt;!--&lt;add name=&quot;oracleEBSAdapter&quot; type=&quot;Microsoft.Adapters.OracleEBS.OracleEBSBindingElementExtensionElement, Microsoft.Adapters.OracleEBS, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35&quot;/&gt;--&gt;
&lt;!--&lt;add name=&quot;oracleDBAdapter&quot; type=&quot;Microsoft.Adapters.OracleDB.OracleDBAdapterExtensionElement, Microsoft.Adapters.OracleDB, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35&quot;/&gt;--&gt;
&lt;!--&lt;add name=&quot;oracleEBSBinding&quot; type=&quot;Microsoft.Adapters.OracleEBS.OracleEBSBindingCollectionElement, Microsoft.Adapters.OracleEBS, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35&quot;/&gt;--&gt;
&lt;!--&lt;add name=&quot;oracleDBBinding&quot; type=&quot;Microsoft.Adapters.OracleDB.OracleDBAdapterBindingSection, Microsoft.Adapters.OracleDB, Version=3.5.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35&quot;/&gt;--&gt;</pre>

<p>Now you can use your WCF Test Client normally.</p>