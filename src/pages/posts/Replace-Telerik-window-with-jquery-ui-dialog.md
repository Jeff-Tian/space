---
stackbit_url_path: >-
  posts/Replace-Telerik-window-with-jquery-ui-dialog
title: 'Replace Telerik window with jquery-ui dialog'
date: '2014-02-28 04:06:49.2072017'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - ASP.NET
  - dialog
  - javascript
  - jquery
  - telerik
canonical_url: >-
template: post
---
<p>When you need to display some information via pop up window, it's better to use jquery-ui dialog than Telerik window. Not only because the Telerik is not supported any more, but also because the jquery-ui dialog can behaves much better, pure client side and with even less and simpler code!</p>  <h4>Step-by-step guide</h4>  <ol>   <li>     <p>Reference jquery-ui script in your html:</p>      <pre class="brush: html">&lt;script type=&quot;text/javascript&quot; src=&quot;@Url.Content(&quot;~/Scripts/libs/jquery-ui.min.js&quot;)&quot;&gt;&lt;/script&gt;</pre>
  </li>

  <li>
    <p>Add a placeholder div like this, and delete the original Telerik placeholder:</p>

    <pre class="brush: html">&lt;!-- Add a pure html placeholder --&gt;
&lt;div id=&quot;dispatching-history-report-window&quot; title=&quot;Dispatching History&quot; style=&quot;display: none;&quot;&gt;&lt;/div&gt;

&lt;!-- Delete the following Telerik placeholder --&gt;
@(Html.Telerik().Window().Modal(true)
		   .Name(&quot;DispatchingHistoryReportWindow&quot;)
		   .Title(&quot;Dispatching History&quot;)
		   .Buttons(buttons =&gt; buttons.Maximize().Close())
		   .Width(800).Resizable(resizing =&gt; resizing.Enabled(true))
		   .Height(440)
		   .Visible(false).Scrollable(false)
	  .Draggable(true))</pre>
  </li>

  <li>
    <p>Update the popup code as below shows:</p>

    <pre class="brush: javascript">// Original pop up using Telerik window
$(&quot;#DispatchingHistoryReportWindow&quot;).data('tWindow').center().open().content(&quot;Loading...&quot;).ajaxRequest(url);

// Updated pop up using jquery-ui dialog
var $dialog = $(&quot;#dispatching-history-report-window&quot;);

var dialogOptions = {
	height: &quot;auto&quot;,
	width: &quot;auto&quot;,
	position: &quot;center&quot;,
	modal: true
};

$dialog
	.dialog(dialogOptions)
	.html(&quot;<div class="loading">Loading...</div>&quot;);

$.ajax({
	url: url,
	cache: true,
	dataType: &quot;html&quot;,
	success: function (page) {
		$dialog
			.html(page)
			.dialog(dialogOptions)
	}
});</pre>
  </li>

  <li>Done! </li>
</ol>