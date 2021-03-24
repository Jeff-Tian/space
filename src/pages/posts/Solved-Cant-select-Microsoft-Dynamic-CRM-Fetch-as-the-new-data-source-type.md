---
stackbit_url_path: >-
  posts/Solved-Cant-select-Microsoft-Dynamic-CRM-Fetch-as-the-new-data-source-type
title: 'Solved: Can"t select "Microsoft Dynamic CRM Fetch" as the new data source type'
date: '2013-08-06 02:45:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - CRM
  - Fetch XML
  - SQL Business Intelligence
canonical_url: >-
template: post
---
<h2><span style="color: #9b00d3;">Problem:</span></h2>
<p>While learning CRM "Visualizations and Dashboards Hands-on Lab" on Exercise 4 - Building a Custom Report, the exercise mentioned in creating the report server project using SQL Server Business Intelligence Development Studio that select a type of Microsoft Dynamic CRM Fetch.</p>
<p><a href="http://zizhujy.com/blog/image.axd?picture=clip_image001.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border: 0px;" title="Solved: Can't select &quot;Microsoft Dynamic CRM Fetch&quot; as the new data source type" src="http://zizhujy.com/blog/image.axd?picture=clip_image001_thumb.png" alt="Solved: Can't select &quot;Microsoft Dynamic CRM Fetch&quot; as the new data source type" width="649" height="96" border="0" /></a></p>
<p>But when I do the steps I found there is no Microsoft Dynamic CRM Fetch option in the Type dropdown list.</p>
<p><a href="http://zizhujy.com/blog/image.axd?picture=clip_image002.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border: 0px;" title="Solved: Can't select &quot;Microsoft Dynamic CRM Fetch&quot; as the new data source type" src="http://zizhujy.com/blog/image.axd?picture=clip_image002_thumb.png" alt="Solved: Can't select &quot;Microsoft Dynamic CRM Fetch&quot; as the new data source type" width="648" height="363" border="0" /></a></p>
<h2><span style="color: #9b00d3;">Cause:</span></h2>
<p>By looking into the exercise description, I noticed it mentioned a "BIDS Extension that allows using FetchXML". So I guess the problem is caused by that I didn't install some necessary extensions or something.</p>
<p><a href="http://zizhujy.com/blog/image.axd?picture=clip_image003.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border: 0px;" title="Solved: Can't select &quot;Microsoft Dynamic CRM Fetch&quot; as the new data source type" src="http://zizhujy.com/blog/image.axd?picture=clip_image003_thumb.png" alt="Solved: Can't select &quot;Microsoft Dynamic CRM Fetch&quot; as the new data source type" width="652" height="305" border="0" /></a></p>
<h2><span style="color: #9b00d3;">Solution:</span></h2>
<p>Searched the key words "BIDS Extension" on line, found "<a href="http://msdn.microsoft.com/en-us/library/gg327981.aspx">http://msdn.microsoft.com/en-us/library/gg327981.aspx</a>", and then I followed the steps listed on that article, and the problem got solved.</p>
<ol>
<li>Download "Microsoft Dynamics CRM 2011 Report Authoring Extension (with SQL Server Data Tools support)" from <a href="http://www.microsoft.com/en-us/download/confirmation.aspx?id=27823">http://www.microsoft.com/en-us/download/confirmation.aspx?id=27823</a>.</li>
<li>Install it</li>
<li>Reopen your report server project, and then the "Microsoft Dynamic CRM Fetch" was populated on the Type dropdown list.</li>
</ol>
<p><a href="http://zizhujy.com/blog/image.axd?picture=clip_image004.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border: 0px;" title="Solved: Can't select &quot;Microsoft Dynamic CRM Fetch&quot; as the new data source type" src="http://zizhujy.com/blog/image.axd?picture=clip_image004_thumb.png" alt="Solved: Can't select &quot;Microsoft Dynamic CRM Fetch&quot; as the new data source type" width="659" height="443" border="0" /></a></p>