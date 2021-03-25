---
stackbit_url_path: >-
  posts/WCF-Test-Client-Error-‘IMetadataExchange’-not-match
title: 'WCF Test Client Error: ‘IMetadataExchange’ not match'
date: '2012-04-01 00:33:44.5380879'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - Biztalk
  - WCF
canonical_url: https://be-net.azurewebsites.net/post/2012/04/01/WCF-Test-Client-Error-‘IMetadataExchange’-not-match
template: post
---
<h2><font style="font-weight: bold" color="#9b00d3">Problem:</font></h2>  <p>When adding a service in your WCF Test Client, you meet this issue says:</p>  <pre>The contract ‘IMetadataExchange’ in client configuration does not match the name in service contract, or there is no valid method in this contract.
To recover, please manually correct client configuration.
Or restore to default configuration.
Or check &quot;Always regenerate config when launching services&quot; in the
Tools -&gt; Options menu, then refresh the service.</pre>

<p>The screen shot:</p>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_501.png"><img style="background-image: none; border-right-width: 0px; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="WCF Test Client Error: ‘IMetadataExchange’ not match" border="0" alt="WCF Test Client Error: ‘IMetadataExchange’ not match" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_219.png" width="669" height="425" /></a></p>

<p>After you click “OK”, the service node will appear in the tree with the redundant “IMetadataExchange (sb)”, “IMetadataExchange (sap)”, … sections.</p>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_502.png"><img style="background-image: none; border-right-width: 0px; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="WCF Test Client Error: ‘IMetadataExchange’ not match" border="0" alt="WCF Test Client Error: ‘IMetadataExchange’ not match" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_220.png" width="682" height="371" /></a></p>

<h2><font color="#9b00d3"><font style="font-weight: bold">Cause:</font></font></h2>

<p>Caused by BizTalk according to <a href="http://blogs.msdn.com/b/wcftoolsteamblog/archive/2008/08/28/tips-for-wcf-tools-in-vs2008-sp1.aspx">http://blogs.msdn.com/b/wcftoolsteamblog/archive/2008/08/28/tips-for-wcf-tools-in-vs2008-sp1.aspx</a>.</p>

<h2><font style="font-weight: bold" color="#9b00d3">Solution:</font></h2>

<p>When you run the WCF Test Client, modify the <em><font color="#9b00d3">machine.config</font></em> file (located in <font color="#9b00d3">C:\Windows\Microsoft.NET\Framework\v4.0.30319\Config</font>)&#160; </p>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_503.png"><img style="background-image: none; border-right-width: 0px; margin: 0px 10px 0px 0px; padding-left: 0px; padding-right: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px; padding-top: 0px" title="machine.config" border="0" alt="machine.config" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_221.png" width="635" height="304" /></a></p>

<p>by commenting out the &lt;client /&gt; section below that is nested in the &lt;system.serviceModel&gt; element.</p>

<pre class="brush: xml">&lt;!--
		&lt;client&gt;
			&lt;endpoint address=&quot;&quot; binding=&quot;netTcpRelayBinding&quot; contract=&quot;IMetadataExchange&quot; name=&quot;sb&quot;/&gt;
			&lt;endpoint binding=&quot;sapBinding&quot; contract=&quot;IMetadataExchange&quot; name=&quot;sap&quot;/&gt;
			&lt;endpoint binding=&quot;siebelBinding&quot; contract=&quot;IMetadataExchange&quot; name=&quot;siebel&quot;/&gt;
			&lt;endpoint binding=&quot;sqlBinding&quot; contract=&quot;IMetadataExchange&quot; name=&quot;mssql&quot;/&gt;
			&lt;endpoint binding=&quot;oracleEBSBinding&quot; contract=&quot;IMetadataExchange&quot; name=&quot;oracleebs&quot;/&gt;
			&lt;endpoint binding=&quot;oracleDBBinding&quot; contract=&quot;IMetadataExchange&quot; name=&quot;oracledb&quot;/&gt;
			&lt;metadata&gt;
				&lt;policyImporters&gt;
					&lt;extension type=&quot;System.ServiceModel.Channels.ContextBindingElementImporter, System.ServiceModel, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089, processorArchitecture=MSIL&quot;/&gt;
					&lt;extension type=&quot;Microsoft.ServiceBus.Description.TcpRelayTransportBindingElementImporter, Microsoft.ServiceBus, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35&quot;/&gt;
					&lt;extension type=&quot;Microsoft.ServiceBus.Description.HttpRelayTransportBindingElementImporter, Microsoft.ServiceBus, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35&quot;/&gt;
					&lt;extension type=&quot;Microsoft.ServiceBus.Description.OnewayRelayTransportBindingElementImporter, Microsoft.ServiceBus, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35&quot;/&gt;
				&lt;/policyImporters&gt;
				&lt;wsdlImporters&gt;
					&lt;extension type=&quot;System.ServiceModel.Channels.ContextBindingElementImporter, System.ServiceModel, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089, processorArchitecture=MSIL&quot;/&gt;
					&lt;extension type=&quot;Microsoft.ServiceBus.Description.StandardRelayBindingImporter, Microsoft.ServiceBus, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35&quot;/&gt;
					&lt;extension type=&quot;Microsoft.ServiceBus.Description.TcpRelayTransportBindingElementImporter, Microsoft.ServiceBus, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35&quot;/&gt;
					&lt;extension type=&quot;Microsoft.ServiceBus.Description.HttpRelayTransportBindingElementImporter, Microsoft.ServiceBus, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35&quot;/&gt;
					&lt;extension type=&quot;Microsoft.ServiceBus.Description.OnewayRelayTransportBindingElementImporter, Microsoft.ServiceBus, Version=1.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35&quot;/&gt;
				&lt;/wsdlImporters&gt;
			&lt;/metadata&gt;
		&lt;/client&gt;--&gt;</pre>

<p>After that, restart your WCF Test Client you will get rid of this error.</p>