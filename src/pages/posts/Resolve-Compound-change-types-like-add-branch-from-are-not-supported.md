---
stackbit_url_path: >-
  posts/Resolve-Compound-change-types-like-add-branch-from-are-not-supported
title: 'Resolved: Compound change types like ‘add+branch from’ are not supported.'
date: '2013-02-28 05:50:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - codeflow
  - janus
  - source control
  - source depot
canonical_url: https://be-net.azurewebsites.net/post/2013/02/28/Resolve-Compound-change-types-like-add-branch-from-are-not-supported
template: post
---
<h2><span style="color: #9b00d3;">Problem:</span></h2>
<p>When you want to send a code review using CodeFlow 2010 after you changed some code in a changelist, you met an error like this:</p>
<p>Compound change types like &lsquo;add+branch from&rsquo; are not supported.</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_617.png"><img style="background-image: none; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-width: 0px;" title="image" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_306.png" alt="image" width="655" height="289" border="0" /></a></p>
<h2><span style="color: #9b00d3;">Cause:</span></h2>
<p>You renamed a file in Visual Studio with the Janus source control plugin.</p>
<h2><span style="color: #9b00d3;">Resolution:</span></h2>
<p><strong>Step 1</strong>. Identify that file who caused this problem. If you forgot which file you have renamed, then you can find it by as the following steps.</p>
<ol>
<li>Create another changelist in your source control. Move a file from the original changelist which caused this problem. And then try to send code review against the new changelist. If the error happens, then that file are found.</li>
<li>If no error met against the new changelist, it indicates the problematic file is still in the original changelist, repeat step 1 until you find the problematic file.</li>
</ol>
<p><strong>Step 2.</strong> In your source folder, check if the file with the original name exists, if yes in your source control, delete it (You may revert it first if it can not be deleted).</p>
<p><strong>Step 3.</strong> In your changelist, revert the file with the new name.</p>
<p><strong>Step 4.</strong> Add your new name file to your changelist.</p>
<p><strong>Step 5.</strong> The problem was fixed.</p>