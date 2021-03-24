---
stackbit_url_path: >-
  posts/The-better-word-count-extension-for-BlogEngineNET
title: 'The better word count extension for BlogEngine.NET'
date: '2012-02-19 05:15:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - BlogEngine.NET
  - Extensions
  - algorithm
  - word count
canonical_url: >-
template: post
---
<h1><span style="color: #800080">What is its usage?</span></h1>  <p><span style="color: #800080"></span></p>  <p>Displays count of the words in the post. </p>  <h1><span style="color: #800080">How does this extension come out?</span></h1>  <p>The other day I found a <a href="http://blog.geniali.ch/post/2011/01/10/GEBEE-Version-20-der-WordCount-Extension-fur-BlogEngineNET-20.aspx" target="_blank">word count extension</a> for BlogEngine.NET that can display counts of the words in the post, and I installed it. But it only works well with Western Language posts, for example, with English posts. If you publish an Asian Language post, the count would be incorrect. For example, I posted a 2500 words long article in Chinese, the word count extension displays only 17 words long! After I investigated its source code, I understood the algorithm. It only splits article into pieces by space, and then calculates the count of the pieces. That’s OK with Western Languages, but for Asian Languages, the words are continous without delimiting by space. So I decided to improve this extension to be compatible with Asian Languages.</p>  <h1><span style="color: #800080">How to install this BETTER version extension?</span></h1>  <p style="font-family: simsun; font-size: medium"><a href="/blog/file.axd?file=2012%2f2%2fWordCount.cs">WordCount.cs (2.45 kb)</a></p>  <p>Download the WordCount.cs from the above link and put it into your blog directory: ~\App_Code\Extensions\WordCount.cs.</p>  <p>Then add this piece of code to your PostView.ascx file under your theme directory. For example: ~\themes\Standard\PostView.ascx.</p>  <pre class="brush: csharp">&lt;%= WordCount.GetWordCount(Post) %&gt;</pre>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_476.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="The better word count extension for BlogEngine.NET" border="0" alt="The better word count extension for BlogEngine.NET" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_206.png" width="790" height="286" /></a></p>

<h1><span style="color: #800080">Screenshots:</span></h1>

<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_477.png"><img style="border-right-width: 0px; display: inline; border-top-width: 0px; border-bottom-width: 0px; border-left-width: 0px" title="The better word count extension for BlogEngine.NET" border="0" alt="The better word count extension for BlogEngine.NET" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/image_thumb_207.png" width="691" height="568" /></a></p>

<h1><span style="color: #800080">How did you improve the original word count extension?</span></h1>

<p>I just changed the algorithm for calculating the words. The algorithm is came from <a href="http://www.cnblogs.com/tracydj/archive/2010/10/20/1856548.html">http://www.cnblogs.com/tracydj/archive/2010/10/20/1856548.html</a>. The C# implementation of this algorithm is as below:</p>

<pre class="brush: csharp">    /// 
    /// Calculate word count
    /// 
    /// 
    private static int CalculateWordCount(string article){
        var sec = Regex.Split(article, @&quot;\s&quot;);
        int count = 0;
        foreach (var si in sec)
        {
            int ci = Regex.Matches(si, @&quot;[\u0000-\u00ff]+&quot;).Count;
            foreach (var c in si)
                if ((int)c &gt; 0x00FF) ci++;

            count += ci;
        }

        return count;
    }</pre>

<p>A little more description:</p>

<p>It is evolved from <a href="http://dnbegallery.org/cms/List/Extensions/WordCount" target="_blank">Word Count 2.5</a>, which is made by <a href="http://blog.geniali.ch/post/2011/01/10/GEBEE-Version-20-der-WordCount-Extension-fur-BlogEngineNET-20.aspx" target="_blank">GENiALi</a>. The original version has a critical bug - it does NOT work well with Asian Languages. For example, it displays only 17 words for a 2500 words long Chinese post. The cause is its word counting algorithm, it treats all characters separated by space as words, but Asian words are not even separated by space at all! So I improved its word counting algorithm and make it be compatible with Asian words post.</p>