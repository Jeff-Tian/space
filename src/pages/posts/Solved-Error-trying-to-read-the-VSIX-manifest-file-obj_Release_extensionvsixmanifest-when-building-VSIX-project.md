---
stackbit_url_path: >-
  posts/Solved-Error-trying-to-read-the-VSIX-manifest-file-obj_Release_extensionvsixmanifest-when-building-VSIX-project
title: 'Solved: Error trying to read the VSIX manifest file "obj\Release\extension.vsixmanifest" when building VSIX project.'
date: '2014-02-13 18:39:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - VSIX
  - Visual Studio
  - extension
  - manifest
  - offline
  - sync center
  - windows 8
canonical_url: https://be-net.azurewebsites.net/post/2014/02/13/Solved-Error-trying-to-read-the-VSIX-manifest-file-obj_Release_extensionvsixmanifest-when-building-VSIX-project
template: post
---
<h2><span style="color: #800080;">Problem:&nbsp;</span></h2>
<p>When building a VSIX project on Windows 8 through Visual studio, the following errors occurs:</p>
<p><span style="color: #ff0000;">Error trying to read the VSIX manifest file "obj\Release\extension.vsixmanifest". The network path was not found. (Exception from HRESULT: 0x80070035).</span></p>
<p><a title="Error trying to read the VSIX manifest file &quot;obj\Release\extension.vsixmanifest&quot;." href="/blog/image.axd?picture=%2f2014%2f02%2fUntitled.png" target="_blank"><img src="/blog/image.axd?picture=%2f2014%2f02%2fUntitled.png" alt="Error trying to read the VSIX manifest file &quot;obj\Release\extension.vsixmanifest&quot;." width="647" height="232" /></a></p>
<p>When you look into the "obj\Release\" folder, you found the file "extension.vsixmanfiest" is there. When you explore to "bin\Release\" folder, you found the vsix file is already generated. If you double click it to install the vsix package, you will get the same error claiming:</p>
<p><span style="color: #ff0000;">Error trying to read the VSIX manifest file "obj\Release\extension.vsixmanifest". The network path was not found. (Exception from HRESULT: 0x80070035).</span></p>
<h2><span style="color: #800080;">Cause:</span></h2>
<p>Even if the file "extension.vsixmanifest" file exists in the "obj\Release\" folder, the vsix installer would still read from "My documents\" folder for the fuck reason. In most cases, it works fine because the "My documents\" folder is readable. But if it is not, the building and the installing vsix package would fail with the above error messages.</p>
<p>In my case this time, the problem is caused by "My documents\" folder is hidden, and when I trying to explore to it, the error "The system cannot find the file specified." shows up.</p>
<p><img src="/blog/image.axd?picture=%2f2014%2f02%2fmy+documents.png" alt="" /></p>
<p>So I recalled I turned on "offline files feature" almost more than one year ago, which automatically mapped "my documents\" folder to a network drive so that I can visit the same "My documents\" files from any where by any computer. And a month ago I turned it off, but it didn't bring "my documents\" back.</p>
<h2><span style="color: #800080;">Solution:</span></h2>
<p>Turn on "offline files" again. (It will work even you can't connect to the real share folder any more)</p>
<p>1. Go to "Control Panel" --&gt; "Sync Center", click "Manage offline files":</p>
<p><img src="/blog/image.axd?picture=%2f2014%2f02%2fsyncCenter.png" alt="" /></p>
<p>2. Click "Enable offline files" button, click "OK" and then restart your computer:</p>
<p><img src="/blog/image.axd?picture=%2f2014%2f02%2fofflinefiles.png" alt="" /></p>
<p>3. Rebuild your solution, it should success now.</p>