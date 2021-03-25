---
stackbit_url_path: >-
  posts/A-quick-tour-to-Regular-Expression-for-testers
title: 'A quick tour to Regular Expression for testers'
date: '2012-03-04 01:06:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - Regular Expression
canonical_url: https://be-net.azurewebsites.net/post/2012/03/04/A-quick-tour-to-Regular-Expression-for-testers
template: post
---
<h3><a name="_Toc318302098"></a></h3>
<h3 style="font-size: 1.17em; font-family: Simsun; font-weight: normal;"><strong>Download the word version of this post:</strong></h3>
<p style="font-family: Simsun; font-weight: normal; font-size: medium;"><a href="/blog/file.axd?file=2012%2f3%2fA+quick+tour+to+Regular+Expression+for+testers.docx">A quick tour to Regular Expression for testers.docx (1.53 mb)</a></p>
<h3>Preface</h3>
<p>If you are new with Regular Expression, this document will try to instruct you to understand what it is, where you may meet it, how you can use it. If you had already been familiar with it, you can treat this document as a quick reference. Hope you and Regular Expression become good friends ever since.</p>
<h4><a name="_Toc318302099"></a><a name="_What_is_regular"></a>What is regular expression?</h4>
<p><strong>Regular expression:</strong> A <strong>pattern</strong> used like a sieve to retrieve elements of strings. &ndash; <strong><em>Hackers &amp; painters:</em></strong><em> big ideas from the computer age, by Paul Graham</em></p>
<p>Regular expressions are special characters that <strong>match</strong> or <strong>capture</strong> portions of a field, as well as the rules that govern all characters. &ndash; <a href="https://support.google.com/googleanalytics/bin/answer.py?hl=en&amp;answer=55582">Google Analytics</a> <em></em></p>
<h4><a name="_Toc318302100"></a><a name="_A_quick_example:"></a>You can back to these definitions when you have completed the next sections, then you will have better understanding about what the definitions are saying.</h4>
<h4><a name="_Toc318302101"></a>A quick example:</h4>
<p>In case that you had built a web site, and there is form on the page to ask user to input their phone number. You may want to verify if the user typed valid numbers. How would you implement this verification functionality?</p>
<p>You can check each character of the user input, using a for-loop structure. If encountered a non-numeric character then fail, else success.</p>
<p>But there is a much better way to achieve this. See the definition for Regular Expression? You can predefine a pattern &ndash; this pattern indicates that the string should be consisted of digital numbers only - to test the user input. This way is faster, more maintainable and much more intuitive if you are getting to be used to using it.</p>
<p>Test it out!</p>
<p>The pattern for the all-digital numbers is &ldquo;^\d*$&rdquo;. You can test it via <a href="http://www.pagecolumn.com/tool/regtest.htm">Online Regular Expression tester</a>&hellip;</p>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td valign="top" width="319">
<p><strong>No match example</strong></p>
</td>
<td valign="top" width="319">
<p><strong>Match example</strong></p>
</td>
</tr>
<tr>
<td valign="top" width="319">
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image002_1.jpg"><img style="display: inline; border: 0px;" title="clip_image002" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image002_thumb_1.jpg" alt="clip_image002" width="312" height="307" border="0" /></a></p>
</td>
<td valign="top" width="319">
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image004_1.jpg"><img style="display: inline; border: 0px;" title="clip_image004" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image004_thumb_1.jpg" alt="clip_image004" width="303" height="307" border="0" /></a></p>
</td>
</tr>
</tbody>
</table>
<p>So &ldquo;^\d*$&rdquo; is a pattern, which can be used to test if the user input is consisted of numbers only or not.</p>
<p>From this example, you should have gotten an intuitive impression what is pattern. Now you can back to the <a href="#_What_is_regular">First Section</a> to read the definitions again, you should get a better understanding of them. The next sections will introduce you how to make your own patterns and list some frequently used patterns.</p>
<h4><a name="_Toc318302102"></a>Basic concepts:</h4>
<p>The only concept you should understand is pattern, which you had learnt from the former sections.</p>
<h4><a name="_Toc318302103"></a>Create your first pattern:</h4>
<p>Now you are building an awesome tool, which can send a web request to a remote server to publish an article, and the server responds your tool with a message. For instance, if your article is published successfully, it responds a string &ldquo;Your article has been published successfully&rdquo;; if your article contains some sensitive information and was detected by the server, or for other reasons, in a word if your publishing is failed unluckily, the server responds a string &ldquo;Oh&hellip; I failed to publish your article&rdquo;.</p>
<p>How can you let your tool know the publishing result?</p>
<p>Just set a regular expression pattern to test the response message! Your tool will use the created pattern to test if the response message contains the word &ldquo;successfully&rdquo; or not. What would this pattern be like?</p>
<p>One of the pattern candidates is &ldquo;<strong>successfully</strong>&rdquo;.</p>
<p>So the &ldquo;<strong>successfully</strong>&rdquo; is your first regular expression pattern.</p>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td valign="top" width="319">
<p><strong>No match example</strong></p>
</td>
<td valign="top" width="319">
<p><strong>Match example</strong></p>
</td>
</tr>
<tr>
<td valign="top" width="319">
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image006_1.jpg"><img style="display: inline; border: 0px;" title="clip_image006" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image006_thumb_1.jpg" alt="clip_image006" width="315" height="334" border="0" /></a></p>
</td>
<td valign="top" width="319">
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image008_1.jpg"><img style="display: inline; border: 0px;" title="clip_image008" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image008_thumb_1.jpg" alt="clip_image008" width="337" height="334" border="0" /></a></p>
</td>
</tr>
</tbody>
</table>
<h4><a name="_Toc318302104"></a>Create more patterns:</h4>
<p>As you might have seen, the first pattern is very simple and can only match the exact word &ldquo;successfully&rdquo;. In most of cases, you want your patterns be vaguer to match different words at one time. You have met this situation in <a href="#_A_quick_example:">the second section</a>. You just want to match digital numbers, but you don&rsquo;t care what numbers they exactly are. Another example can be that you want to test a user input is a valid email address or not.</p>
<p>To design these patterns you need to learn more about the <strong>regular expression characters</strong>.</p>
<p><a name="_Toc318302105"></a>Regular expression characters can be divided into 7 categories, they are:</p>
<p>&middot; Wildcards and quantifier</p>
<p>&middot; Anchors</p>
<p>&middot; Grouping</p>
<p>&middot; Predefined special characters</p>
<p>&middot; Predefined classes</p>
<p>&middot; Delimiters</p>
<p>&middot; Other</p>
<h6>Wildcards and quantifier:</h6>
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="13%">
<p><strong>Code</strong></p>
</td>
<td width="41%">
<p><strong>Remark</strong></p>
</td>
<td width="44%">
<p><strong>Example</strong></p>
</td>
</tr>
<tr>
<td width="13%">
<p>*</p>
</td>
<td width="41%">
<p><a href="http://www.google.com/support/analytics/bin/answer.py?answer=91154">Matches zero or more of the previous item</a></p>
</td>
<td width="44%">
<p>The default previous item is the previous character. <strong>goo*gle</strong> matches <strong>gooogle</strong>, <strong>goooogle</strong></p>
</td>
</tr>
<tr>
<td width="13%">
<p>+</p>
</td>
<td width="41%">
<p>Just like a star, except that a <a href="http://www.google.com/support/analytics/bin/answer.py?answer=91153">plus sign must match at least one previous item</a></p>
</td>
<td width="44%">
<p><strong>gooo+gle</strong> matches <strong>goooogle</strong>, but never <strong>google</strong>.<strong></strong></p>
</td>
</tr>
<tr>
<td width="13%">
<p>?</p>
</td>
<td width="41%">
<p><a href="https://support.google.com/googleanalytics/bin/answer.py?answer=91149">Matches zero or one of the previous item</a></p>
</td>
<td width="44%">
<p><strong>labou?r</strong> matches both <strong>labor</strong> and <strong>labour</strong></p>
</td>
</tr>
<tr>
<td width="13%">
<p>{n}</p>
</td>
<td width="41%">
<p>Matches previous item with n occurrences</p>
</td>
<td width="44%">
<p><strong>Jef{2}</strong> matches<strong> Jeff</strong>, but not <strong>Jef</strong>, nor <strong>Jefff</strong></p>
</td>
</tr>
<tr>
<td width="13%">
<p>{n,m}</p>
</td>
<td width="41%">
<p>Matches previous item with at least n and at most m occurrences</p>
</td>
<td width="44%">
<p><strong>I{2,5}van</strong> matches <strong>IIvan</strong>, and <strong>IIIvan</strong>, <strong>IIIIIvan</strong>, but not <strong>Ivan</strong>, nor <strong>IIIIIIvan</strong>, nor <strong>IIIIIIIIIIvan</strong></p>
</td>
</tr>
<tr>
<td width="13%">
<p>{n,}</p>
</td>
<td width="41%">
<p>Matches at least n previous item</p>
</td>
<td width="44%">
<p><strong>Ka{5}te</strong> matches <strong>Kaaaaate</strong>, and <strong>Kaaaaaaaaaaate</strong>, but not <strong>Kate</strong>, nor <strong>Kaaaate</strong></p>
</td>
</tr>
<tr>
<td width="13%">
<p>|</p>
</td>
<td width="41%">
<p><a href="https://support.google.com/googleanalytics/bin/answer.py?answer=91150">Lets you do an "or" match</a></p>
</td>
<td width="44%">
<p><strong>a|b</strong> matches <strong>a </strong>or <strong>b</strong></p>
</td>
</tr>
</tbody>
</table>
<h6>Anchors:</h6>
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="11%">
<p><strong>Code</strong></p>
</td>
<td width="46%">
<p><strong>Remark</strong></p>
</td>
<td width="42%">
<p><strong>Example</strong></p>
</td>
</tr>
<tr>
<td width="11%">
<p>^</p>
</td>
<td width="46%">
<p><a href="https://support.google.com/googleanalytics/bin/answer.py?answer=91146">Requires that your data be at the beginning of its field</a></p>
</td>
<td width="42%">
<p><strong>^site </strong>matches<strong> site </strong>but not <strong>mysite</strong></p>
</td>
</tr>
<tr>
<td width="11%">
<p>$</p>
</td>
<td width="46%">
<p><a href="https://support.google.com/googleanalytics/bin/answer.py?answer=91148">Requires that your data be at the end of its field</a></p>
</td>
<td width="42%">
<p><strong>site$</strong> matches <strong>site</strong> but not <strong>sitescan</strong></p>
</td>
</tr>
<tr>
<td width="11%">
<p>\b</p>
</td>
<td width="46%">
<p>Require that your data be at the border of a word</p>
</td>
<td width="42%">
<p><strong>\bsite\b </strong>matches<strong> my site </strong>but not <strong>mysite</strong></p>
</td>
</tr>
<tr>
<td width="11%">
<p>\B</p>
</td>
<td width="46%">
<p>Require that your data be at the border of non-word characters</p>
</td>
<td width="42%">
<p><strong>\Bsite\B </strong>matches<strong> _site_</strong> but not <strong>site</strong></p>
</td>
</tr>
</tbody>
</table>
<h6>Grouping:</h6>
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="15%">
<p><strong>Code</strong></p>
</td>
<td width="41%">
<p><strong>Remark</strong></p>
</td>
<td width="43%">
<p><strong>Example</strong></p>
</td>
</tr>
<tr>
<td width="15%">
<p>()</p>
</td>
<td width="41%">
<p><a href="https://support.google.com/googleanalytics/bin/answer.py?answer=91151">Use parenthesis to create an item</a>, instead of accepting the default</p>
</td>
<td width="43%">
<p><strong>Thank(s|you)</strong> will match both <strong>Thanks</strong> and <strong>Thankyou</strong>, and will remember the matched characters <strong>s</strong> or <strong>you</strong>, you can use $1 to refer the remembered s or you in other places<strong></strong></p>
</td>
</tr>
<tr>
<td width="15%">
<p>[]</p>
</td>
<td width="41%">
<p><a href="https://support.google.com/googleanalytics/bin/answer.py?answer=91152">Use brackets to create a list of items to match to</a></p>
</td>
<td width="43%">
<p><strong>[abc]</strong> creates a list with <strong>a</strong>, <strong>b</strong> and <strong>c</strong> in it, it will match <strong>a</strong>, <strong>b</strong> and <strong>c</strong>.</p>
</td>
</tr>
<tr>
<td width="15%">
<p>-</p>
</td>
<td width="41%">
<p><a href="https://support.google.com/googleanalytics/bin/answer.py?answer=91152">Use dashes with brackets to extend your list</a></p>
</td>
<td width="43%">
<p><strong>[A-Z]</strong> creates a list for the uppercase English alphabet, it will match A, B, C, &hellip;, Z<strong></strong></p>
</td>
</tr>
</tbody>
</table>
<h6>Predefined special characters:</h6>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="12%">
<p><strong>Code</strong></p>
</td>
<td width="52%">
<p><strong>Remark</strong></p>
</td>
<td width="35%">
<p><strong>Example</strong></p>
</td>
</tr>
<tr>
<td width="12%">
<p>\t</p>
</td>
<td width="52%">
<p>Matches tab character</p>
</td>
<td width="35%">
<p><strong>I\tT</strong>matches</p>
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td valign="bottom" width="64">
<p><strong>I</strong></p>
</td>
<td valign="bottom" width="64">
<p><strong>T</strong></p>
</td>
</tr>
</tbody>
</table>
<p>But not <strong>I T</strong>, nor <strong>IT</strong></p>
</td>
</tr>
<tr>
<td width="12%">
<p>\n</p>
</td>
<td width="52%">
<p>Matches new line character</p>
</td>
<td width="35%">
<p><strong>Hello\r\nWorld</strong> matches <strong>Hello</strong></p>
<p><strong>World</strong>, but not <strong>Hello World</strong></p>
</td>
</tr>
<tr>
<td width="12%">
<p>\r</p>
</td>
<td width="52%">
<p>Matches carriage return character</p>
</td>
<td width="35%">
<p>Same as above. In most cases, <strong>\r\n</strong> are used together</p>
</td>
</tr>
<tr>
<td width="12%">
<p>\f</p>
</td>
<td width="52%">
<p>Matches the form feed character</p>
</td>
<td width="35%">
<p>I can&rsquo;t come up with one example now</p>
</td>
</tr>
<tr>
<td width="12%">
<p>\a</p>
</td>
<td width="52%">
<p>Matches the alert character</p>
</td>
<td width="35%">
<p>&hellip;</p>
</td>
</tr>
<tr>
<td width="12%">
<p>\e</p>
</td>
<td width="52%">
<p>Matches the escape character</p>
</td>
<td width="35%">
<p>&hellip;</p>
</td>
</tr>
<tr>
<td width="12%">
<p>\cX</p>
</td>
<td width="52%">
<p>Matches the control character corresponding to X</p>
</td>
<td width="35%">
<p>&hellip;</p>
</td>
</tr>
<tr>
<td width="12%">
<p>\b</p>
</td>
<td width="52%">
<p>Matches the back character</p>
</td>
<td width="35%">
<p>&hellip;</p>
</td>
</tr>
<tr>
<td width="12%">
<p>\v</p>
</td>
<td width="52%">
<p>Matches the vertical tab character</p>
</td>
<td width="35%">
<p>&hellip;</p>
</td>
</tr>
<tr>
<td width="12%">
<p>\0</p>
</td>
<td width="52%">
<p>Matches the Null character</p>
</td>
<td width="35%">
<p>These special characters are rarely used in common cases</p>
</td>
</tr>
</tbody>
</table>
<h6>Predefined classes:</h6>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="10%">
<p><strong>Code</strong></p>
</td>
<td width="13%">
<p><strong>Equivalent expression</strong></p>
</td>
<td width="44%">
<p><strong>Remark</strong></p>
</td>
<td width="30%">
<p><strong>Example</strong></p>
</td>
</tr>
<tr>
<td width="10%">
<p>.</p>
</td>
<td width="13%">
<p>[^\n\r] (here ^ represents except)</p>
</td>
<td width="44%">
<p><a href="https://support.google.com/googleanalytics/bin/answer.py?answer=91145">Matches any single character (letter, number or symbol)</a> except new line and carriage return characters</p>
</td>
<td width="30%">
<p><strong>goo.gle</strong> matches <strong>gooogle</strong>, <strong>goodgle</strong>, <strong>goo8gle</strong></p>
</td>
</tr>
<tr>
<td width="10%">
<p>\d</p>
</td>
<td width="13%">
<p>[0-9]</p>
</td>
<td width="44%">
<p>Matches digital number character</p>
</td>
<td width="30%">
<p>You&rsquo;ve already seen in the quick example.</p>
<p><strong>\d</strong> matches <strong>5</strong>, but not <strong>f</strong>;</p>
<p><strong>\d+</strong> matches <strong>55</strong>, but not <strong>five</strong></p>
</td>
</tr>
<tr>
<td width="10%">
<p>\D</p>
</td>
<td width="13%">
<p>[^0-9]</p>
<p>(here ^ represents except)</p>
</td>
<td width="44%">
<p>Matches non-digital character</p>
</td>
<td width="30%">
<p><strong>\D</strong> matches <strong>f</strong>, but not <strong>5</strong>;</p>
<p><strong>\D+</strong> matches <strong>five</strong>, but not <strong>55</strong></p>
</td>
</tr>
<tr>
<td width="10%">
<p>\s</p>
</td>
<td width="13%">
<p>[ \t\n\x0B\f\r]</p>
</td>
<td width="44%">
<p>Matches the whitespace character</p>
</td>
<td width="30%">
<p><strong>Hello\sWorld</strong> matches <strong>Hello World</strong>, but not <strong>HelloWorld</strong></p>
</td>
</tr>
<tr>
<td width="10%">
<p>\S</p>
</td>
<td width="13%">
<p>[^ \t\n\x0B\f\r]</p>
</td>
<td width="44%">
<p>Matches the non-whitespace character</p>
</td>
<td width="30%">
<p><strong>Hello\SWorld</strong> matches <strong>Hello_World</strong>, <strong>Hello-World</strong>, <strong>HellooWorld</strong>, but not <strong>Hello World</strong></p>
</td>
</tr>
<tr>
<td width="10%">
<p>\w</p>
</td>
<td width="13%">
<p>[a-zA-Z_0-9]</p>
</td>
<td width="44%">
<p>Matches the word character (letter, digital number and underscore)</p>
</td>
<td width="30%">
<p><strong>\w+</strong> matches <strong>Hello5_</strong>, but not <strong>-#@!$%^&amp;*()-+</strong></p>
</td>
</tr>
<tr>
<td width="10%">
<p>\W</p>
</td>
<td width="13%">
<p>[^a-zA-Z_0-9]</p>
</td>
<td width="44%">
<p>Matches the non-word character</p>
</td>
<td width="30%">
<p><strong>\W+</strong> matches <strong>-#@!$%^&amp;*()-+</strong>, but not <strong>hello</strong></p>
</td>
</tr>
</tbody>
</table>
<h6>Delimiters:</h6>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="15%">
<p><strong>Code</strong></p>
</td>
<td width="41%">
<p><strong>Remark</strong></p>
</td>
<td width="43%">
<p><strong>Example</strong></p>
</td>
</tr>
<tr>
<td width="15%">
<p>(?:x)</p>
</td>
<td width="41%">
<p>Matches x but not remembers the match</p>
</td>
<td width="43%">
<p>Please refer the Grouping section.</p>
<p><strong>Thank(?:s|you)</strong> will match both <strong>Thanks</strong> and <strong>Thankyou</strong>, but will not remember the matched characters <strong>s</strong> or <strong>you</strong></p>
</td>
</tr>
<tr>
<td width="15%">
<p>x(?=y)</p>
</td>
<td width="41%">
<p>Look ahead, matches the previous item x if it is followed by y</p>
</td>
<td width="43%">
<p><strong>Thank(?=you)</strong> will match the word <strong>Thank</strong> in <strong>Thankyou</strong>, but not the one in <strong>Thanks</strong></p>
</td>
</tr>
<tr>
<td width="15%">
<p>X(?!y)</p>
</td>
<td width="41%">
<p>Look ahead, matches the previous item x if it is not followed by y</p>
</td>
<td width="43%">
<p><strong>Thank(?!you)</strong> will match the word <strong>Thank</strong> in <strong>Thanks</strong>, but not the one in <strong>Thankyou</strong></p>
</td>
</tr>
</tbody>
</table>
<h6>Other:</h6>
<table border="0" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td width="15%">
<p><strong>Code</strong></p>
</td>
<td width="41%">
<p><strong>Remark</strong></p>
</td>
<td width="43%">
<p><strong>Example</strong></p>
</td>
</tr>
<tr>
<td width="15%">
<p>\</p>
</td>
<td width="41%">
<p><a href="http://www.google.com/support/analytics/bin/answer.py?answer=91144">Turns a regular expression character into an everyday character</a></p>
</td>
<td width="43%">
<p><strong>mysite\.com</strong> keeps the dot from being a wildcard, it will match <strong>mysite.com</strong>;</p>
<p><strong>2\*3</strong> keeps the star from being a wildcard, it will match <strong>2*3</strong>;</p>
<p><strong>2\^3</strong> keeps the hat from being an anchor, it will match <strong>2^3</strong>;</p>
<p><strong>subway\(metro\)</strong> keeps the parenthesis from being a grouping character, it will match <strong>subway(metro)</strong>.</p>
</td>
</tr>
</tbody>
</table>
<p><strong>Tips for Regular Expressions (From Google):</strong></p>
<p>1. Make the regular expression as simple as possible so that you and your colleagues can work with them easily in the future.</p>
<p>2. Be sure to use a backslash if you have characters like "?" or "." and you wish to match those literal characters -- otherwise, they will be interpreted as special regular expression characters.</p>
<p>3. Not all regular expressions include special characters. For example, you can specify that a Google Analytics goal be a regular expression, and even if you don't have any special characters, your goal will be interpreted according to the rules of regular expressions.</p>
<p>4. Regular expressions are greedy. For example, <strong>site</strong> matches <strong>mysite</strong> and <strong>yoursite</strong> and <strong>sitescan</strong>. If site is your regular expression, it is the equivalent of asking to match to all strings that contain site. Therefore, you should use anchors whenever necessary, to get a more accurate match. ^site$, which uses both a beginning ^ and ending $ anchor, will ensure that the expression has to start with site and end with site and include nothing else. Notice, too, that there were no special characters in the regular expression site -- it is interpreted as a regular expression only if it is in a regular expression-sensitive field.</p>
<h4><a name="_Toc318302106"></a>Application Cases:</h4>
<p>Below sections list some real life cases that we use the regular expression in our test work. So if you still feel that regular expression is new to you after read this article, then you will find there are many chances for you to practice it. Practice makes perfect, hope regular expression be one of your good friends in testing before long.</p>
<h5><a name="_Toc318302107"></a><a name="_GoBack"></a>BVT with MSJade (Some of the discourses in this section are only applicable for Microsoft Testers who use MSJade framework)</h5>
<p>In our team, we are executing the BVT daily with MSJade. The most common test cases are handler feed validation. When we want to validate a feed node value, we can ask for Regular Expression&rsquo;s help. Take this feed (<a href="http://xxx.xxx.xxx/feed.rss">http://xxx.xxx.xxx/feed.rss</a>) for example, if we want to validate the Sizing node.</p>
<p>&lt;?xml version="1.0" encoding="utf-8" ?&gt;</p>
<p>&lt;Campaign&gt;</p>
<p>&lt;Bracket&gt;</p>
<p>&lt;StartDate&gt;2012-02-05&lt;/StartDate&gt;</p>
<p>&lt;EndDate&gt;2012-02-05&lt;/EndDate&gt;</p>
<p>&lt;Label&gt;Bracket!&lt;/Label&gt;</p>
<p>&lt;Groups&gt;</p>
<p>&lt;Group&gt;</p>
<p>&lt;MMCategoryID&gt;17&lt;/MMCategoryID&gt;</p>
<p>&lt;Label&gt;Group &amp;lt;[D]&amp;gt;&lt;/Label&gt;</p>
<p>&lt;Title&gt;No Description&lt;/Title&gt;</p>
<p>&lt;Description&gt;&lt;/Description&gt;</p>
<p>&lt;Ads&gt;&lt;/Ads&gt;</p>
<p>&lt;VoteModel&gt;pollVote&lt;/VoteModel&gt;</p>
<p>&lt;Sizing&gt;7,5,3,1&lt;/Sizing&gt;</p>
<p>&lt;VotableNum&gt;7,5,3,0&lt;/VotableNum&gt;</p>
<p>&lt;Round&gt;1&lt;/Round&gt;</p>
<p>&lt;/Group&gt;</p>
<p>&lt;/Groups&gt;</p>
<p>&lt;/Bracket&gt;</p>
<p>&lt;/Campaign&gt;</p>
<p>We can write below test case in MSJade:</p>
<p>&lt;RDTestCase ID="0001" Product="Brackets"&gt;</p>
<p>&lt;TestCaseInfo Title="Verify the node format of Campaign Info Handler - Group Sizing" Owner="Brackets Test Team" Priority="1" Frequency="BVT" /&gt;</p>
<p>&lt;Command ID="1" ResultValue="PASS" Pre="" Post="" RepeatCount="0" Module="<strong>GenericTestCases</strong>" ApiName="<strong>HandlerTC.CheckXmlNodeFormat</strong>"&gt;</p>
<p>&lt;Param name="handlerUrl" value="<a href="http://xxx.xxx.xxx/feed.rss">http://xxx.xxx.xxx/feed.rss</a>" /&gt;</p>
<p>&lt;Param name="xPath" value="/Campaign/Bracket/Groups/Group/Sizing" /&gt;</p>
<p>&lt;Param name="formatType" value="<strong>Array[number]</strong>" /&gt;</p>
<p>&lt;Param name="<strong>customRegex</strong>" value=" <strong>^(?:\d+\s*,\s*)*\d+\s*$</strong>" /&gt;</p>
<p>&lt;Param name="attribute" value="" /&gt;</p>
<p>&lt;Param name="fullMatch" value="True" /&gt;</p>
<p>&lt;Param name="allowEmpty" value="False" /&gt;</p>
<p>&lt;/Command&gt;</p>
<p>&lt;/RDTestCase&gt;</p>
<p>We want to make sure editor had written value in Sizing node in pattern of 7,5,3,1, so we use the pattern ^(?:\d+,\s*)*\d+\s*$ to test it. The pattern ^(?:\d+,\s*)*\d+\s*$ can be read as the value should begin with one or more digital numbers, then followed with a comma, before and after the comma, maybe some whitespaces there. The digital-comma will repeat sometimes or even not appear, but it must end with a digital number, and there may be some whitespaces around the digital numbers.</p>
<p>Below is the test result for pattern ^(?:\d+,\s*)*\d+\s*$:</p>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td valign="top" width="213">
<p><strong>Entries</strong></p>
</td>
<td valign="top" width="213">
<p><strong>Result</strong></p>
</td>
</tr>
<tr>
<td valign="top" width="213">
<p>7</p>
</td>
<td valign="top" width="213">
<p>Match</p>
</td>
</tr>
<tr>
<td valign="top" width="213">
<p>11,9,7,5 , 3,1</p>
</td>
<td valign="top" width="213">
<p>Match</p>
</td>
</tr>
<tr>
<td valign="top" width="213">
<p>Hello</p>
</td>
<td valign="top" width="213">
<p>Not Match!</p>
</td>
</tr>
<tr>
<td valign="top" width="213">
<p>9,,,5,1</p>
</td>
<td valign="top" width="213">
<p>Not Match!</p>
</td>
</tr>
</tbody>
</table>
<p>In the feed nodes, there are many other kind of values need to be validated. I&rsquo;ll summarize some and you can replace the ^(?:\d+,\s*)*\d+\s*$ by them in the above BVT test case to make it yours.</p>
<h6>Reusable patterns</h6>
<p>This table can be extended during our working experiences growing, if you identified a reusable pattern, please share to the team.</p>
<table border="1" cellspacing="0" cellpadding="0">
<tbody>
<tr>
<td valign="top" width="10%">
<p><strong>Pattern</strong></p>
</td>
<td valign="top" width="28%">
<p><strong>Code</strong></p>
</td>
<td valign="top" width="19%">
<p><strong>Remark</strong></p>
</td>
<td valign="top" width="26%">
<p><strong>Matches</strong></p>
</td>
<td valign="top" width="15%">
<p><strong>Not Matches</strong></p>
</td>
</tr>
<tr>
<td valign="top" width="10%">
<p>Array[Number]</p>
</td>
<td valign="top" width="28%">
<p>^(?:\d+,\s*)*\d+\s*$</p>
</td>
<td valign="top" width="19%">&nbsp;</td>
<td valign="top" width="26%">
<p>7</p>
<p>11,9,7,5, 3,1</p>
</td>
<td valign="top" width="15%">
<p>Hello</p>
<p>9,,,5,1</p>
</td>
</tr>
<tr>
<td valign="top" width="10%">
<p>Email</p>
</td>
<td valign="top" width="28%">
<p>^(?:\w+[\-\.]?)*\w+@(?:\w+\.?)*\w+$</p>
</td>
<td valign="top" width="19%">&nbsp;</td>
<td valign="top" width="26%">
<p><a href="mailto:Jeff.tian@facebook.com">Jeff.tian@facebook.com</a></p>
<p><a href="mailto:v-jeff@somewhere.com">v-jeff@somewhere.com</a></p>
<p><a href="mailto:admin@website.com">admin@website.com</a></p>
</td>
<td valign="top" width="15%">
<p><a href="mailto:Jeff%5etian@somesite.com">Jeff^tian@somesite.com</a></p>
<p>-.*@some</p>
</td>
</tr>
<tr>
<td valign="top" width="10%">
<p>Date</p>
</td>
<td valign="top" width="28%">
<p>^(((0?[1-9]|1[012])/(0?[1-9]|1\d|2[0-8])|(0?[13456789]|1[012])/(29|30)|(0?[13578]|1[02])/31)/(19|[2-9]\d)\d{2}|0?2/29/((19|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([2468][048]|[3579][26])00)))$</p>
</td>
<td valign="top" width="19%">&nbsp;</td>
<td valign="top" width="26%">
<p>12/31/2002</p>
<p>12/31/1998</p>
<p>2/29/2012</p>
</td>
<td valign="top" width="15%">
<p>31/12/2002</p>
<p>12/31/98</p>
<p>2/29/2011</p>
</td>
</tr>
<tr>
<td valign="top" width="10%">
<p>Time</p>
</td>
<td valign="top" width="28%">
<p>^(([0-9])|([0-1][0-9])|([2][0-3])):(([0-9])|([0-5][0-9]))(?::(([0-9])|([0-5][0-9])))?$</p>
</td>
<td valign="top" width="19%">&nbsp;</td>
<td valign="top" width="26%">
<p>23:59:59</p>
<p>11:05:23</p>
<p>16:05</p>
</td>
<td valign="top" width="15%">
<p>24:00:00</p>
<p>11:05:60</p>
<p>16:05:</p>
</td>
</tr>
<tr>
<td valign="top" width="10%">
<p>DateTime</p>
</td>
<td valign="top" width="28%">
<p>^(((0?[1-9]|1[012])/(0?[1-9]|1\d|2[0-8])|(0?[13456789]|1[012])/(29|30)|(0?[13578]|1[02])/31)/(19|[2-9]\d)\d{2}|0?2/29/((19|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([2468][048]|[3579][26])00)))(?: (([0-9])|([0-1][0-9])|([2][0-3])):(([0-9])|([0-5][0-9]))(?::(([0-9])|([0-5][0-9])))?)?$</p>
</td>
<td valign="top" width="19%">&nbsp;</td>
<td valign="top" width="26%">
<p>12/31/2002 09:00:00</p>
<p>12/31/2002</p>
</td>
<td valign="top" width="15%">
<p>09:00:00</p>
</td>
</tr>
<tr>
<td valign="top" width="10%">
<p>Url</p>
</td>
<td valign="top" width="28%">
<p>(((ht|f)tp(s?):\/\/)|(www\.[^ \[\]\(\)\n\r\t]+)|(([012]?[0-9]{1,2}\.){3}[012]?[0-9]{1,2})\/)([^ \[\]\(\),;&amp;quot;'&amp;lt;&amp;gt;\n\r\t]+)([^\. \[\]\(\),;&amp;quot;'&amp;lt;&amp;gt;\n\r\t])|(([012]?[0-9]{1,2}\.){3}[012]?[0-9]{1,2})</p>
</td>
<td valign="top" width="19%">
<p>This is built-in in the MSJade Generic Test Cases, so you don&rsquo;t really need it in BVT. But you can use it in other scenarios, such as web test.</p>
</td>
<td valign="top" width="26%">
<p><a href="http://www.site.com">www.site.com</a></p>
<p><a href="https://192.168.0.1:80/users/~fname.lname/file.txt">https://192.168.0.1:80/users/~fname.lname/file.txt</a></p>
<p><a href="http://www.baidu.com">http://www.baidu.com</a></p>
</td>
<td valign="top" width="15%">
<p>Imap://.com</p>
</td>
</tr>
<tr>
<td valign="top" width="10%">
<p>Xml tag</p>
</td>
<td valign="top" width="28%">
<p>&lt;(\w+)(\s(\w*=".*?")?)*((/&gt;)|((/*?)&gt;.*?&lt;/\1&gt;))</p>
</td>
<td valign="top" width="19%">
<p>Verify if the tags are closed correctly</p>
</td>
<td valign="top" width="26%">
<p>&lt;node&gt;value&lt;/node&gt;</p>
<p>&lt;Campaign&gt;</p>
<p>&lt;Bracket&gt;</p>
<p>&lt;StartDate&gt;2012-02-05&lt;/StartDate&gt;</p>
<p>&lt;EndDate&gt;2012-02-05&lt;/EndDate&gt;</p>
<p>&lt;Label&gt;Bracket!&lt;/Label&gt;</p>
<p>&lt;Groups&gt;</p>
<p>&lt;Group&gt;</p>
<p>&lt;Sizing&gt;7,5,3,1&lt;/Sizing&gt;</p>
<p>&lt;VotableNum&gt;7,5,3,0&lt;/VotableNum&gt;</p>
<p>&lt;Round&gt;1&lt;/Round&gt;</p>
<p>&lt;/Group&gt;</p>
<p>&lt;/Groups&gt;</p>
<p>&lt;/Bracket&gt;</p>
<p>&lt;/Campaign&gt;</p>
</td>
<td valign="top" width="15%">
<p>&lt;node&gt;blablabla&lt;/anotherNode&gt;</p>
<p>&lt;Campaign&gt;</p>
<p>&lt;Bracket&gt;</p>
<p>&lt;Groups&gt;</p>
<p>&lt;Group&gt;</p>
<p>&lt;/Groups&gt;</p>
<p>&lt;/Bracket&gt;</p>
<p>&lt;/Campaign&gt;</p>
</td>
</tr>
<tr>
<td valign="top" width="10%">
<p>Currency</p>
</td>
<td valign="top" width="28%">
<p>^(\$|)([1-9]\d{0,2}(\,\d{3})*|([1-9]\d*))(\.\d{2})?$</p>
</td>
<td valign="top" width="19%">&nbsp;</td>
<td valign="top" width="26%">
<p>$1,234,567.89</p>
<p>1234567.89</p>
<p>$9.99</p>
</td>
<td valign="top" width="15%">
<p>$1,2345,67.89</p>
<p>$1234,345,678.0</p>
<p>0</p>
</td>
</tr>
</tbody>
</table>
<h5><a name="_Toc318302108"></a>Response validation in Web test</h5>
<p>Almost every project will have web and load testing, during the web test, we&rsquo;ll verify that if a handler respond correctly. In this place we may use the regular expression pattern to test if the response text is expected or not.</p>
<p>For example:</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image010_1.jpg"><img style="display: inline; border: 0px;" title="clip_image010" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image010_thumb_1.jpg" alt="clip_image010" width="575" height="175" border="0" /></a></p>
<p>In the above screenshot, the web test is call a create submission handler, and the handler will respond the submission id (a number), so we can use pattern \d+ in the Validation Rules, once it fails, then it indicates the submission creating meet some errors. Also the Reusable Patterns can used here if applicable.</p>
<h5><a name="_Toc318302109"></a>Daily find/replace in Visual Studio</h5>
<p>In case there is a csv file like below, and you want to replace the &ldquo;description xx&rdquo; to &ldquo;a xx description&rdquo;, how would you do (there are 1000 rows!)?</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image012_1.jpg"><img style="display: inline; border: 0px;" title="clip_image012" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image012_thumb_1.jpg" alt="clip_image012" width="416" height="205" border="0" /></a></p>
<p><strong>Solution:</strong></p>
<p>Use this pattern: description {:d+}</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image014_1.jpg"><img style="display: inline; border: 0px;" title="clip_image014" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image014_thumb_1.jpg" alt="clip_image014" width="459" height="290" border="0" /></a></p>
<p><strong>Note:</strong></p>
<p>Visual Studio Find and Replace feature uses another Regular Expression grammar, which means that it uses some other characters to express the same meaning. For example, it uses :d to represent digital numbers, which is represented by \d in other systems, uses {} as () for grouping, uses \1 as $1 for back reference. For the other differences, you can refer to <a href="http://msdn.microsoft.com/en-us/library/2k3te2cs.aspx">http://msdn.microsoft.com/en-us/library/2k3te2cs.aspx</a>.</p>
<p>Take the above example again, if now you want to replace all the original ThumbUrl <a href="http://image.jpg">http://image.jpg</a> with <a href="http://thumb.jpg">http://thumb.jpg</a>, how would you do?</p>
<p><strong>Solution:</strong></p>
<p>Use pattern http\://image.jpg$</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image016_1.jpg"><img style="display: inline; border: 0px;" title="clip_image016" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image016_thumb_1.jpg" alt="clip_image016" width="450" height="403" border="0" /></a></p>
<p>You should add a dollar sign $ behind the url to only replace the ThumbUrl which is positioned in the end of each line. If you miss the $, then the ImageUrl will also be replaced unexpectedly.</p>
<p>Regular Expression makes these daily work very efficient.</p>
<h5><a name="_Toc318302110"></a>Match rule in Fiddler Autoresponder</h5>
<p>Sometimes you need to emulate some files are down with Fiddler. For example, by set the regular expression &ldquo;.+\.gif$&rdquo; you can block all the gif images:</p>
<p><a href="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image018_1.jpg"><img style="display: inline; border: 0px;" title="clip_image018" src="https://raw.githubusercontent.com/Jeff-Tian/blogengine.net/master/Source/BlogEngine/BlogEngine.NET/App_Data/files/clip_image018_thumb_1.jpg" alt="clip_image018" width="535" height="216" border="0" /></a></p>
<p>.+\.gif$ includes all the uris that start with any character(s) and end with .gif.</p>
<h5><a name="_Toc318302111"></a>Configurations in Web.config and WebContent.config (Some of discourses in this section are only applicable for Microsoft tester who test the web application developed based on Starter Kit 3/4)</h5>
<p>If you download the project source code and read the Web.Config and WebContent.Config files, you will also find many regular expressions usage.</p>
<p>Below are some configurations for handlers from WebContent.Config:</p>
<p>&lt;!-- Media Manager content source --&gt;</p>
<p>&lt;source name="MediaManager" baseUrl="http://api.mediamanager.msn-int.com/"&gt;</p>
<p>&lt;cacheSettings duration="0" /&gt;</p>
<p>&lt;storageSettings&gt;</p>
<p>&lt;/storageSettings&gt;</p>
<p>&lt;contentItems&gt;</p>
<p>&lt;!--Comment--&gt;</p>
<p>&lt;contentItem match="<strong>Comments/(?'postId'[0-9]+)/(?'start'[0-9]*)/(?'end'[0-9]*)</strong>" <strong>regex</strong>="<strong>true</strong>"&gt;</p>
<p>&lt;cache duration="0"/&gt;</p>
<p>&lt;processors&gt;</p>
<p>&lt;add name="Xslt" type="Microsoft.Msn.Set.Web.Content.Xml.XsltProcessor, Microsoft.Msn.Set.Web"&gt;</p>
<p>&lt;xslt url="xslt/Comments.xslt"&gt;</p>
<p>&lt;outputSettings indent="false" /&gt;</p>
<p>&lt;xsltArgs&gt;</p>
<p>&lt;add name="startIndex" value="${start}"/&gt;</p>
<p>&lt;/xsltArgs&gt;</p>
<p>&lt;xsltExtensions&gt;</p>
<p>&lt;add namespace="Website" type="Website.Core.XsltExtensions, Website" /&gt;</p>
<p>&lt;/xsltExtensions&gt;</p>
<p>&lt;/xslt&gt;</p>
<p>&lt;/add&gt;</p>
<p>&lt;/processors&gt;</p>
<p>&lt;resources&gt;</p>
<p>&lt;add name="Comments" url="commentservice.svc/group/${MM_PROJECTGROUPID}/project/${MM_PROJECTID}/entitytype/Submission/entity/${postId}/comments/?commentstatus=${MM_COMMENT_STATUS}&amp;amp;start_index=${start}&amp;amp;end_index=${end}&amp;amp;sortby=${MM_COMMENT_SORT}&amp;amp;sortdirection=desc" /&gt;</p>
<p>&lt;/resources&gt;</p>
<p>&lt;/contentItem&gt;</p>
<p>Notice the bolded part, that means the handler url would be like <a href="http://xxx.xxx.xxx/MediaManager/Comments/136/1/9">http://xxx.xxx.xxx/MediaManager/Comments/136/1/9</a>. The 136 is the postId (digital numbers, required because the pattern uses + sign), the 1 is the start index (digital number, optional because pattern uses *), the 9 is the end index (digital number, optional because pattern uses *).</p>
<p>Below are part of the URL routing settings from Web.Config, it is also using Regular Expressions!</p>
<p>&lt;!-- URL Routing --&gt;</p>
<p>&lt;routing&gt;</p>
<p>&lt;map&gt;</p>
<p>&lt;add url="<strong>{campaignname}/admin/comments/{postID}/</strong>" destination="~/admin/Comments.aspx"&gt;</p>
<p>&lt;constraints&gt;</p>
<p>&lt;add name="campaignname" value="<strong>.*</strong>" /&gt;</p>
<p>&lt;add name="postID" value="<strong>[0-9]*</strong>" /&gt;</p>
<p>&lt;/constraints&gt;</p>
<p>&lt;/add&gt;</p>
<p>&lt;add url="<strong>{campaignname}</strong>/" destination="~/default.aspx"&gt;</p>
<p>&lt;constraints&gt;</p>
<p>&lt;add name="campaignname" value="<strong>((?!\.axd).)+</strong>" /&gt;</p>
<p>&lt;/constraints&gt;</p>
<p>&lt;/add&gt;</p>
<p>&lt;/map&gt;</p>
<p>&lt;/routing&gt;</p>
<p>In the first &lt;add /&gt; node, the {campaignname} can be replaced with any string and the {postID} should be replaced with digital numbers, so the final url should be like <a href="http://xxx.xxx.xxx/StopDiabetes/Comments/136/">http://xxx.xxx.xxx/StopDiabetes/Comments/136/</a> .</p>
<p>In the second &lt;add /&gt; node, the pattern shows that the {campaignname} can be replaced with any string but not ends with &ldquo;.axd&rdquo;.</p>
<h4><a name="_Toc318302112"></a>Summary:</h4>
<p>The Regular Expression is a powerful tool, can be used in many scenarios. If you use it well, it can help you yield twice the result with half the effort.</p>
<p>If you meet some situation that needs a regular expression pattern which is not mentioned in the document, you can try to find in the <a href="http://regexlib.com/">Online Regular Expression Library</a>. If even this doesn&rsquo;t work, then it&rsquo;s time to create on your own, and the <a href="http://www.pagecolumn.com/tool/regtest.htm">Online Regular Expression Tester</a> will help you do this.</p>
<h4><a name="_Toc318302113"></a>References:</h4>
<p>Regular Expression Library: <a href="http://regexlib.com/">http://regexlib.com/</a></p>
<p>Online Regular Expression Tester: <a href="http://www.pagecolumn.com/tool/regtest.htm">http://www.pagecolumn.com/tool/regtest.htm</a></p>
<p>&nbsp;</p>
<h3>Download the word version of this post:</h3>
<p><a href="/blog/file.axd?file=2012%2f3%2fA+quick+tour+to+Regular+Expression+for+testers.docx">A quick tour to Regular Expression for testers.docx (1.53 mb)</a></p>