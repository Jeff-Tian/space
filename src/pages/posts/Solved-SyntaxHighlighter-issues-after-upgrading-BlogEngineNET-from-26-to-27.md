---
stackbit_url_path: >-
  posts/Solved-SyntaxHighlighter-issues-after-upgrading-BlogEngineNET-from-26-to-27
title: '[Solved] SyntaxHighlighter issues after upgrading BlogEngine.NET from 2.6 to 2.7'
date: '2014-04-21 19:54:08.7373952'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - BlogEngine.NET
  - Syntax Highlighter
canonical_url: >-
template: post
---
<h2><font color="#9b00d3">Problem:</font></h2>  <p>I updated my BlogEngine.NET from 2.6 to 2.7, and everything goes well. But one day I found that the syntax highlighter were functioning horribly poor. They are:</p>  <ol>   <li>Js error thrown on every post page claming:      <br /><font color="#ff0000">Uncaught ReferenceError: SyntaxHighlighter is not defined </font></li>    <li>Tabs were removed inside code block. </li>    <li>Auto text wrap not work at the long text lines. </li> </ol>  <h2><font color="#9b00d3">Cause:</font></h2>  <ol>   <li>The js error only happens if you turned on <strong>SyntaxHighlighter extension</strong>, and checked “<strong>collapse</strong>” option.       <br /><a href="http://zizhujy.com/blog/image.axd?picture=image_624.png"><img title="[Solved] SyntaxHighlighter issues after upgrading BlogEngine.NET from 2.6 to 2.7" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="[Solved] SyntaxHighlighter issues after upgrading BlogEngine.NET from 2.6 to 2.7" src="http://zizhujy.com/blog/image.axd?picture=image_thumb_343.png" width="626" height="401" /></a>       <br />It will add a script line after the syntax highlighter js files were referenced like this:       <br />      <pre class="brush: html">&lt;script type=&quot;text/javascript&quot; src=&quot;/Scripts/syntaxhighlighter/shCore.js&quot; defer=&quot;defer&quot; async=&quot;async&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;/Scripts/syntaxhighlighter/shAutoloader.js&quot; defer=&quot;defer&quot; async=&quot;async&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;/Scripts/syntaxhighlighter/shInit.js&quot; defer=&quot;defer&quot; async=&quot;async&quot;&gt;&lt;/script&gt;&lt;script type=&quot;text/javascript&quot; defer=&quot;defer&quot;&gt;
	SyntaxHighlighter.defaults['collapse'] = true;
});
&lt;/script&gt;</pre>
I guess the <strong>defer=”defer” async=”async”</strong> attributes makes the execution order is unpredictable, so the last line `<strong>SyntaxHighlighter.defaults[‘collapse’] = true</strong>` actually executes before the <strong>shCore.js</strong> loaded. </li>

  <li>This is because in the site.master.cs, there is a line of code: 
    <br />

    <pre class="brush: csharp">html = reg.Replace(html, string.Empty).Trim();</pre>
  </li>

  <li>As be explained in <a title="JQuery搞定SyntaxHighlighter v3.x长代码自动换行" href="http://diaosbook.com/Post/2012/9/12/jquery-fix-line-wrap-in-SyntaxHighlighter-v3" target="_blank">this article</a>, it is caused by the Syntax Highlighter 3.x separated the gutter and code so that when you copy code you won’t copy the line numbers. This is a good thing, but it forgot or gave up the auto line wrap functionality because it was hard to keep it. </li>
</ol>

<h2><font color="#9b00d3">Solution:</font></h2>

<ol>
  <li>Improve the <strong>SyntaxHighlighter extension</strong> so that it generates script codes like this to make sure when setting the SyntaxHighlighter.defaults, the SyntaxHighlighter had already been defined. 

    <br />

    <pre class="brush: html">&lt;script type=&quot;text/javascript&quot; src=&quot;/Scripts/syntaxhighlighter/shCore.js&quot; defer=&quot;defer&quot; async=&quot;async&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;/Scripts/syntaxhighlighter/shAutoloader.js&quot; defer=&quot;defer&quot; async=&quot;async&quot;&gt;&lt;/script&gt;
&lt;script type=&quot;text/javascript&quot; src=&quot;/Scripts/syntaxhighlighter/shInit.js&quot; defer=&quot;defer&quot; async=&quot;async&quot;&gt;&lt;/script&gt;&lt;script type=&quot;text/javascript&quot; defer=&quot;defer&quot;&gt;

        if (typeof executeOn === 'undefined') {
            window.executeOn = function (condition, func) {
                var interval = setInterval(function () {
                    try {
                        var result = false;

                        if (typeof condition === &quot;function&quot;) {
                            result = condition();
                        } else if (typeof condition === &quot;string&quot;) {
                            result = eval(condition);
                        } else {
                            throw &quot;argument 'condition' must be a bool function or a bool expression.&quot;;
                        }

                        if (result === true) {
                            clearInterval(interval);
                            func();
                        }
                    } catch (ex) {
                        clearInterval(interval);
                        throw ex;
                    }
                }, 100);
            };
        }

	// Make sure the SyntaxHighlighter has already been defined, otherwise wait a chunk of time
	executeOn(&quot;typeof SyntaxHighlighter !== 'undefined' &quot;, function() {
		SyntaxHighlighter.defaults['collapse'] = true;

		executeOn(&quot;document.readyState === 'loaded' || document.readyState === 'complete'&quot;, function() {
			SyntaxHighlighter.all();
	            });
	});
&lt;/script&gt;</pre>
The updated SyntaxHighlighter extension(<strong>SyntaxHighlighter.cs</strong>, if you don't have it, add it to the <strong>~/App_Code/</strong> folder in your BlogEngine.NET project) looks like this: 

    <pre class="brush: csharp; collapse: true">using System.Text;
using System.Web;
using System.Web.UI.HtmlControls;
using BlogEngine.Core;
using BlogEngine.Core.Web.Controls;
using BlogEngine.Core.Web.Extensions;
using Page=System.Web.UI.Page;
using System.Collections.Generic;
using System;

[Extension(&quot;Adds &lt;a target=\&quot;_new\&quot; href=\&quot;http://alexgorbatchev.com/wiki/SyntaxHighlighter\&quot;&gt;Alex Gorbatchev's&lt;/a&gt; source code formatter&quot;, &quot;2.5.2&quot;, &quot;&lt;a target=\&quot;_new\&quot; href=\&quot;http://dotnetblogengine.net/\&quot;&gt;BlogEngine.NET&lt;/a&gt;&quot;)]
public class SyntaxHighlighter
{
    #region Private members
    private const string ExtensionName = &quot;SyntaxHighlighter&quot;;
    static protected Dictionary&lt;Guid, ExtensionSettings&gt; _blogsOptions = new Dictionary&lt;Guid, ExtensionSettings&gt;();
    static protected Dictionary&lt;Guid, ExtensionSettings&gt; _blogsThemes = new Dictionary&lt;Guid, ExtensionSettings&gt;();
    #endregion

    /// &lt;summary&gt;
    ///     The sync root.
    /// &lt;/summary&gt;
    private static readonly object syncRoot = new object();

    private static ExtensionSettings Options
    {
        get
        {
            Guid blogId = Blog.CurrentInstance.Id;
            ExtensionSettings options = null;
            _blogsOptions.TryGetValue(blogId, out options);

            if (options == null)
            {
                lock (syncRoot)
                {
                    _blogsOptions.TryGetValue(blogId, out options);

                    if (options == null)
                    {
                        // Initializes
                        //   (1) Options
                        //   (3) Themees
                        // for the current blog instance.

                        // options
                        options = new ExtensionSettings(&quot;Options&quot;);
                        options.IsScalar = true;
                        options.Help = OptionsHelp();

                        options.AddParameter(&quot;cdnScriptsPath&quot;, &quot;CDN Script Path&quot;, 250, false);
                        options.AddParameter(&quot;cdnStylesPath&quot;, &quot;CDN Styles Path&quot;, 250, false);
                        options.AddParameter(&quot;gutter&quot;, &quot;Gutter&quot;);
                        options.AddParameter(&quot;smart-tabs&quot;, &quot;Smart tabs&quot;);
                        options.AddParameter(&quot;auto-links&quot;, &quot;Auto links&quot;);
                        options.AddParameter(&quot;collapse&quot;, &quot;Collapse&quot;);
                        options.AddParameter(&quot;tab-size&quot;, &quot;Tab size&quot;);
                        options.AddParameter(&quot;toolbar&quot;, &quot;Toolbar&quot;);

                        options.AddValue(&quot;cdnScriptsPath&quot;, &quot;&quot;); // &quot;http://alexgorbatchev.com.s3.amazonaws.com/pub/sh/3.0.83/scripts/&quot;);
                        options.AddValue(&quot;cdnStylesPath&quot;, &quot;&quot;); // &quot;http://alexgorbatchev.com.s3.amazonaws.com/pub/sh/3.0.83/styles/&quot;);
                        options.AddValue(&quot;gutter&quot;, true);
                        options.AddValue(&quot;smart-tabs&quot;, true);
                        options.AddValue(&quot;auto-links&quot;, true);
                        options.AddValue(&quot;collapse&quot;, false);
                        options.AddValue(&quot;tab-size&quot;, 4);
                        options.AddValue(&quot;toolbar&quot;, true);

                        _blogsOptions[blogId] = ExtensionManager.InitSettings(ExtensionName, options);

                        // themes
                        ExtensionSettings themes = new ExtensionSettings(&quot;Themes&quot;);
                        themes.IsScalar = true;
                        themes.AddParameter(&quot;SelectedTheme&quot;, &quot;Themes&quot;, 20, false, false, ParameterType.ListBox);
                        themes.AddValue(&quot;SelectedTheme&quot;, new string[] { &quot;Default&quot;, &quot;Django&quot;, &quot;Eclipse&quot;, &quot;Emacs&quot;, &quot;FadeToGrey&quot;, &quot;MDUltra&quot;, &quot;Midnight&quot;, &quot;Dark&quot; }, &quot;Default&quot;);
                        _blogsThemes[blogId] = ExtensionManager.InitSettings(ExtensionName, themes);
                    }
                }
            }

            return options;
        }
    }

    private static ExtensionSettings Themes
    {
        get
        {
            // by invoking the &quot;Options&quot; property getter, we are ensuring
            // that an entry is put into _blogsThemes for the current blog instance.
            ExtensionSettings options = Options;
            return _blogsThemes[Blog.CurrentInstance.Id];
        }
    }

    static SyntaxHighlighter()
    {
        Post.Serving += AddSyntaxHighlighter;
        InitSettings();
    }

    private static void AddSyntaxHighlighter(object sender, ServingEventArgs e)
    {
        if (!ExtensionManager.ExtensionEnabled(&quot;SyntaxHighlighter&quot;))
            return;

		if(e.Location == ServingLocation.Feed) 
            return;

        // if no code blocks on the page - don't bother
        if (!e.Body.ToLowerInvariant().Contains(&quot;&lt;pre class=\&quot;brush:&quot;))
            return;
	
        HttpContext context = HttpContext.Current;
		
        Page page = (Page)context.CurrentHandler;

        if ((context.CurrentHandler is Page == false) || (context.Items[ExtensionName] != null))
        {
            return;
        }

        AddCssStyles(page);
        AddJavaScripts(page);
        AddOptions(page);

        context.Items[ExtensionName] = 1;
    }

    private static void AddCssStyles(Page page)
    {
        AddStylesheet(&quot;shCore.css&quot;, page);

        if (Themes != null)
        {
            switch (Themes.GetSingleValue(&quot;SelectedTheme&quot;))
            {
                case &quot;Django&quot;:
                    AddStylesheet(&quot;shThemeDjango.css&quot;, page);
                    break;
                case &quot;Eclipse&quot;:
                    AddStylesheet(&quot;shThemeEclipse.css&quot;, page);
                    break;
                case &quot;Emacs&quot;:
                    AddStylesheet(&quot;shThemeEmacs.css&quot;, page);
                    break;
                case &quot;FadeToGrey&quot;:
                    AddStylesheet(&quot;shThemeFadeToGrey.css&quot;, page);
                    break;
                case &quot;MDUltra&quot;:
                    AddStylesheet(&quot;shThemeMDUltra.css&quot;, page);
                    break;
                case &quot;Midnight&quot;:
                    AddStylesheet(&quot;shThemeMidnight.css&quot;, page);
                    break;
                case &quot;Dark&quot;:
                    AddStylesheet(&quot;shThemeRDark.css&quot;, page);
                    break;
                default:
                    AddStylesheet(&quot;shThemeDefault.css&quot;, page);
                    break;
            }
        }       
    }

    private static void AddJavaScripts(Page page)
    {
        if (BlogSettings.Instance.EnableOptimization)
        {
            BlogEngine.Core.Web.Scripting.Helpers.AddScript(
                page, string.Format(&quot;{0}Scripts/highlighter&quot;, Utils.ApplicationRelativeWebRoot), false, true, true);
        }
        else
        {
            BlogEngine.Core.Web.Scripting.Helpers.AddScript(
                page, string.Format(&quot;{0}Scripts/syntaxhighlighter/shCore.js&quot;, Utils.ApplicationRelativeWebRoot), false, true, true);
            BlogEngine.Core.Web.Scripting.Helpers.AddScript(
                page, string.Format(&quot;{0}Scripts/syntaxhighlighter/shAutoloader.js&quot;, Utils.ApplicationRelativeWebRoot), false, true, true);
            BlogEngine.Core.Web.Scripting.Helpers.AddScript(
                page, string.Format(&quot;{0}Scripts/syntaxhighlighter/shInit.js&quot;, Utils.ApplicationRelativeWebRoot), false, true, true);
        }
    }

    #region Script/Style adding

    private static void AddJavaScript(string src, Page page)
    {
        page.ClientScript.RegisterStartupScript(page.GetType(), src, String.Format(&quot;&lt;script type=\&quot;text/javascript\&quot; src=\&quot;{0}\&quot;&gt;&lt;/script&gt;&quot;, GetUrl(ScriptsFolder(), src)));
    }

    private static void AddStylesheet(string href, Page page)
    {
        HtmlLink css = new HtmlLink();
        css.Attributes[&quot;type&quot;] = &quot;text/css&quot;;
        css.Attributes[&quot;rel&quot;] = &quot;stylesheet&quot;;
        css.Attributes[&quot;href&quot;] = GetUrl(StylesFolder(), href);
        //begin: jeff@zizhujy.com
        try
        {
            if (page != null &amp;&amp; page.Header != null &amp;&amp; page.Header.Controls != null)
                page.Header.Controls.Add(css);
        }
        catch (NullReferenceException ex)
        {
            throw ex;
        }
        catch (Exception ex)
        {
            throw ex;
        }
        //end: jeff@zizhujy.com
    }

    private static void AddOptions(Page page)
    {
        StringBuilder sb = new StringBuilder();

        var executeOn = @&quot;
        if (typeof executeOn === 'undefined') {
            window.executeOn = function (condition, func) {
                var interval = setInterval(function () {
                    try {
                        var result = false;

                        if (typeof condition === &quot;&quot;function&quot;&quot;) {
                            result = condition();
                        } else if (typeof condition === &quot;&quot;string&quot;&quot;) {
                            result = eval(condition);
                        } else {
                            throw &quot;&quot;argument 'condition' must be a bool function or a bool expression.&quot;&quot;;
                        }

                        if (result === true) {
                            clearInterval(interval);
                            func();
                        }
                    } catch (ex) {
                        clearInterval(interval);
                        throw ex;
                    }
                }, 100);
            };
        }&quot;;

        
        sb.AppendLine(&quot;&lt;script type=\&quot;text/javascript\&quot; defer=\&quot;defer\&quot;&gt;&quot;);
        sb.AppendLine(executeOn);

        sb.AppendLine(@&quot;executeOn(&quot;&quot;typeof SyntaxHighlighter !== 'undefined' &quot;&quot;, function() {&quot;);

        // add not-default options
        if (Options != null)
        {
            if(Options.GetSingleValue(&quot;gutter&quot;).ToLowerInvariant() == &quot;false&quot;)
                sb.AppendLine(GetOption(&quot;gutter&quot;));

            if (Options.GetSingleValue(&quot;smart-tabs&quot;).ToLowerInvariant() == &quot;false&quot;)
                sb.AppendLine(GetOption(&quot;smart-tabs&quot;));

            if (Options.GetSingleValue(&quot;auto-links&quot;).ToLowerInvariant() == &quot;false&quot;)
                sb.AppendLine(GetOption(&quot;auto-links&quot;));

            if (Options.GetSingleValue(&quot;collapse&quot;).ToLowerInvariant() == &quot;true&quot;)
                sb.AppendLine(GetOption(&quot;collapse&quot;));
            
            if (Options.GetSingleValue(&quot;toolbar&quot;).ToLowerInvariant() == &quot;false&quot;)
                sb.AppendLine(GetOption(&quot;toolbar&quot;));

            if (Options.GetSingleValue(&quot;tab-size&quot;) != &quot;4&quot;)
                sb.AppendLine(GetOption(&quot;tab-size&quot;));
        }  
        
        //sb.AppendLine(&quot;\tSyntaxHighlighter.all();&quot;);

        sb.AppendLine(@&quot;
            executeOn(&quot;&quot;document.readyState === 'loaded' || document.readyState === 'complete'&quot;&quot;, function() {
                SyntaxHighlighter.all();
            });&quot;);

        sb.AppendLine(@&quot;});&quot;);
        sb.AppendLine(&quot;&lt;/script&gt;&quot;);
        page.ClientScript.RegisterStartupScript(page.GetType(), &quot;SyntaxHighlighter&quot;, sb.ToString(), false);
    }

    private static string GetUrl(string folder, string url)
    {
        string s = HttpContext.Current.Server.UrlPathEncode(string.Format(&quot;{0}{1}&quot;, folder, url));
        if (!folder.ToLowerInvariant().Contains(&quot;http:&quot;) &amp;&amp; !folder.ToLowerInvariant().Contains(&quot;https://&quot;))
            s = Utils.ApplicationRelativeWebRoot + s;
        return s;
    }
    
    #endregion

    #region Private methods

    private static void InitSettings()
    {
        // call Options getter so default settings are loaded on application start.
        var s = Options;
    }

    static string OptionsHelp()
    {
        StringBuilder sb = new StringBuilder();
        sb.AppendLine(&quot;&lt;p&gt;This extension implements excellent Alex Gorbatchev's syntax highlighter JS library for source code formatting. Please refer to &lt;a target=\&quot;_new\&quot; href=\&quot;http://alexgorbatchev.com/wiki/SyntaxHighlighter:Usage\&quot;&gt;this site&lt;/a&gt; for usage.&lt;/p&gt;&quot;);
        sb.AppendLine(&quot;&lt;p&gt;&lt;b&gt;cdnScriptsPath&lt;/b&gt;: Allows you to load the SyntaxHighlighter script from a CDN. Leave empty for local files&lt;/p&gt;&quot;);
        sb.AppendLine(&quot;&lt;p&gt;&lt;b&gt;cdnStylesPath&lt;/b&gt;: Allows you to load the SyntaxHighlighter styles from a CDN. Leave empty for local files&lt;/p&gt;&quot;);
        sb.AppendLine(&quot;&lt;p&gt;&lt;b&gt;auto-links&lt;/b&gt;: Allows you to turn detection of links in the highlighted element on and off. If the option is turned off, URLs won't be clickable.&lt;/p&gt;&quot;);
        sb.AppendLine(&quot;&lt;p&gt;&lt;b&gt;collapse&lt;/b&gt;: Allows you to force highlighted elements on the page to be collapsed by default.&lt;/p&gt;&quot;);
        sb.AppendLine(&quot;&lt;p&gt;&lt;b&gt;gutter&lt;/b&gt;:	Allows you to turn gutter with line numbers on and off.&lt;/p&gt;&quot;);
        sb.AppendLine(&quot;&lt;p&gt;&lt;b&gt;smart-tabs&lt;/b&gt;:	Allows you to turn smart tabs feature on and off.&lt;/p&gt;&quot;);
        sb.AppendLine(&quot;&lt;p&gt;&lt;b&gt;tab-size&lt;/b&gt;: Allows you to adjust tab size.&lt;/p&gt;&quot;);
        sb.AppendLine(&quot;&lt;p&gt;&lt;b&gt;toolbar&lt;/b&gt;: Toggles toolbar on/off.&lt;/p&gt;&quot;);
        sb.AppendLine(&quot;&lt;p&gt;&lt;a target=\&quot;_new\&quot; href=\&quot;http://alexgorbatchev.com/wiki/SyntaxHighlighter:Configuration\&quot;&gt;more...&lt;/a&gt;&lt;/p&gt;&quot;);
        return sb.ToString();
    }

    static string GetOption(string opt)
    {
        if (Options != null)
        {
            string pattern = &quot;\tSyntaxHighlighter.defaults['{0}'] = {1};&quot;;

            string val = Options.GetSingleValue(opt).ToLowerInvariant();
            return string.Format(pattern, opt, val);
        }

        return &quot;&quot;;
    }

    static string ScriptsFolder()
    {
        if (Options != null)
        {
            if (!String.IsNullOrEmpty(Options.GetSingleValue(&quot;cdnScriptsPath&quot;)))
                return Options.GetSingleValue(&quot;cdnScriptsPath&quot;);
            else
                return &quot;Scripts/syntaxhighlighter/&quot;;
        }
        return &quot;&quot;;
    }

    static string StylesFolder()
    {
        if (Options != null)
        {
            if (!String.IsNullOrEmpty(Options.GetSingleValue(&quot;cdnStylesPath&quot;)))
                return Options.GetSingleValue(&quot;cdnStylesPath&quot;);
            else
                return &quot;Styles/syntaxhighlighter/&quot;;
        }
        return &quot;&quot;;
    }

    #endregion
}</pre>
  </li>

  <li>Open your site.master.cs, and comment out the line as below shows inside the Render method. 
    <br />

    <pre class="brush: csharp;">protected override void Render(HtmlTextWriter writer)
    {
        using (HtmlTextWriter htmlwriter = new HtmlTextWriter(new System.IO.StringWriter()))
        {
            base.Render(htmlwriter);
            string html = htmlwriter.InnerWriter.ToString();

            //html = reg.Replace(html, string.Empty).Trim();

            writer.Write(html);
        }
    }</pre>
  </li>

  <li>Go to your BlogEngine.NET Control panel, navigate to “Settings/Custom code” pane, and paste the following code to the “head section”: 
    <br />

    <pre class="brush: html">&lt;style type=&quot;text/css&quot;&gt;
    body .syntaxhighlighter .line {
        white-space: pre-wrap !important;
    }
&lt;/style&gt;

&lt;script type=&quot;text/javascript&quot; id=&quot;line-word-wrap-syntax-highlighter&quot;&gt;
    $(function () {
        // Line wrap back
        var shLineWrap = function () {
            // Fix by Jeff Tian that make it work with the collapsed setting
            $('.syntaxhighlighter:not(.collapsed)').each(function () {
                // Fetch
                var $sh = $(this),
                    $gutter = $sh.find('td.gutter'),
                    $code = $sh.find('td.code')
                ;
                // Cycle through lines
                $gutter.children('.line').each(function (i) {
                    // Fetch
                    var $gutterLine = $(this),
                        $codeLine = $code.find('.line:nth-child(' + (i + 1) + ')')
                    ;
                    //alert($gutterLine);
                    // Fetch height
                    var height = $codeLine.height() || 0;
                    if (!height) {
                        height = 'auto';
                    }
                    else {
                        height = height += 'px';
                        //alert(height);
                    }
                    // Copy height over
                    $gutterLine.attr('style', 'height: ' + height + ' !important'); // fix by Edi, for JQuery 1.7+ under Firefox 15.0
                });
            });
        };

        // Line wrap back when syntax highlighter has done it's stuff
        var shLineWrapWhenReady = function () {
            if ($('.syntaxhighlighter').length === 0) {
                setTimeout(shLineWrapWhenReady, 100);
            }
            else {
                shLineWrap();
                // Fix by Jeff Tian that make it work with the collapsed setting
                if ($(&quot;.syntaxhighlighter.collapsed&quot;).length &gt; 0) {
                    setTimeout(shLineWrapWhenReady, 100);
                }
            }
        };

        // Fire
        shLineWrapWhenReady();
    });
&lt;/script&gt;</pre>
Screenshot: 

    <br /><a href="http://zizhujy.com/blog/image.axd?picture=image_625.png"><img title="[Solved] SyntaxHighlighter issues after upgrading BlogEngine.NET from 2.6 to 2.7" style="border-left-width: 0px; border-right-width: 0px; background-image: none; border-bottom-width: 0px; padding-top: 0px; padding-left: 0px; display: inline; padding-right: 0px; border-top-width: 0px" border="0" alt="[Solved] SyntaxHighlighter issues after upgrading BlogEngine.NET from 2.6 to 2.7" src="http://zizhujy.com/blog/image.axd?picture=image_thumb_344.png" width="618" height="212" /></a> </li>

  <li>Now all issues related to SyntaxHighlighter are resolved! </li>
</ol>