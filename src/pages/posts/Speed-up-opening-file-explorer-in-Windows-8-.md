---
stackbit_url_path: >-
  posts/Speed-up-opening-file-explorer-in-Windows-8-
title: 'Speed up opening file explorer in Windows 8 '
date: '2014-02-07 22:33:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - WIA
  - Windows 8
  - file explorer
  - service
canonical_url: >-
template: post
---
<h2><span style="color: #800080;">Problem:</span></h2>
<p>When opening file explorer in Windows 8, the desktop seems frozen for quite a while until it is opened eventually.&nbsp;</p>
<p><img src="/blog/image.axd?picture=%2f2014%2f02%2fopening+file+explorer.png" alt="Opening file explorer in windows 8" /></p>
<h2><span style="color: #800080;">Cause:</span></h2>
<p>Did some searching on internet and found this problem exists in Windows XP as well as other OS maybe.</p>
<p>It is caused by a service called "<strong>Windows Image Acquisition (WIA)</strong>".</p>
<h2><span style="color: #800080;">Solution:</span></h2>
<p>Stop the service "<strong>Windows Image Acquisition (WIA)</strong>".</p>
<ol>
<li>Press "Ctrl" + "R" to open the "Run" dialog, and then type "services.msc":&nbsp;<br /><br /><img src="/blog/image.axd?picture=%2f2014%2f02%2fopening+Run+dialog.png" alt="Opening &quot;Run&quot; dialog by pressing &quot;Ctrl&quot; + &quot;R&quot;" /></li>
<li>Locate the service&nbsp;"<strong>Windows Image Acquisition (WIA)</strong>" in the services list, right click it and select "Properties":<br /><br /><img src="/blog/image.axd?picture=%2f2014%2f02%2flocate+WIA+service.png" alt="Locate WIA service in the servies list" width="623" height="315" /></li>
<li>In the Properties window, change the "Startup type" to "Manual", then click "Stop" button and click "OK" to close the "Properties" window.<br /><img src="/blog/image.axd?picture=%2f2014%2f02%2fstop+WIA.png" alt="Stop WIA" /></li>
<li>Try open the file explorer again, it should be super fast now!</li>
</ol>