---
stackbit_url_path: >-
  posts/The-fix-for-bug-“Cannot-delete-subscribers”-for-BlogEngineNET
title: 'The fix for bug “Cannot delete subscribers” in BlogEngine.NET'
date: '2012-02-20 07:01:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - BUG
  - BlogEngine.NET
canonical_url: >-
template: post
---
<h2><span style="color: #800080;">[Background]</span></h2>
<p>There is a bug in BlogEngine.NET 2.5.</p>
<h2><span style="color: #800080;">[Bug Description]</span></h2>
<p>You cannot delete the subscribers from the newsletter widget.</p>
<h2><span style="color: #800080;">[Repro Steps]</span></h2>
<ol>
<li>Navigate to your BlogEngine.NET blog</li>
<li>Log in as administrator</li>
<li>Navigate to the Newsletter widget</li>
<li>Click &ldquo;edit&rdquo; button on the right top of the widget
<ul>
<li><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_478.png"><img style="display: inline; border-width: 0px;" title="The fix for bug &ldquo;Cannot delete subscribers&rdquo; for BlogEngine.NET" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_208.png" alt="The fix for bug &ldquo;Cannot delete subscribers&rdquo; for BlogEngine.NET" width="244" height="167" border="0" /></a></li>
</ul>
</li>
<li>Click &ldquo;Delete&rdquo; link on the edit panel</li>
<li>Click &ldquo;Save&rdquo; button on the edit panel</li>
<li>Repeat step 4 and observe the email list
<ul>
<li><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_479.png"><img style="display: inline; border-width: 0px;" title="The fix for bug &ldquo;Cannot delete subscribers&rdquo; for BlogEngine.NET" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_209.png" alt="The fix for bug &ldquo;Cannot delete subscribers&rdquo; for BlogEngine.NET" width="584" height="390" border="0" /></a></li>
</ul>
</li>
</ol>
<h2><span style="color: #800080;">[Actual Result]</span></h2>
<p>The email address hadn&rsquo;t been deleted from the email list.</p>
<h2><span style="color: #800080;">[Expected Result]</span></h2>
<p>The email address should be deleted from the email list successfully.</p>
<h2><span style="color: #800080;">[Cause]</span></h2>
<p>Code defect. The relative code file is ~\BlogEngine.NET\widgets\Newsletter\edit.ascx.cs.</p>
<p>If you investigate it you will find the doc variable always read the original email list from disk, even if you clicked the save button, in which case it should keep the new email list has some email addresses deleted.</p>
<h2><span style="color: #800080;">[Solution]</span></h2>
<p>You can download the revised code file from the below link and replace the original file with this one.</p>
<h2><span style="color: #800080;">[File download]</span></h2>
<p style="font-family: Simsun; font-size: medium; display: inline !important;"><a href="/blog/file.axd?file=2012%2f2%2fedit.ascx.cs">edit.ascx.cs (5.47 kb)</a></p>
<p style="font-family: Simsun; font-size: medium; display: inline !important;">&nbsp;</p>
<h2><span style="color: #800080;">[Remark to Solution]</span></h2>
<p>The revised code file added 2 event handlers (Onunload(), OnLoad()) and modified 1 event handler (SaveEmails()). It uses the Session variable to store the modified doc (has some email addresses deleted).</p>
<p>&nbsp;</p>
<h2><span style="color: #800080;">[Updated code]</span></h2>
<pre class="brush: csharp">	// This event handler is append to the orignal file
        protected override void OnLoad(EventArgs e)
        {
            if (IsPostBack)
            {
                if (Session["docEmailList"] != null)
                {
                    doc = (XmlDocument)Session["docEmailList"];
                }
            }

            base.OnLoad(e);
        }

	// This event handler is append to the orignal file
        protected override void OnUnload(EventArgs e)
        {
            Session["docEmailList"] = doc;

            base.OnUnload(e);
        }

        /// 
        /// Saves the emails.
        /// 
	/// This event handler has already in the original file. I just append a statement (Session.Remove()) to it. 
        private void SaveEmails()
        {
            using (var ms = new MemoryStream())
            using (var fs = File.Open(fileName, FileMode.Create, FileAccess.Write))
            {
                doc.Save(ms);
                ms.WriteTo(fs);
            }
		
		// I append this statement:
            Session.Remove("docEmailList");
        }</pre>