---
stackbit_url_path: >-
  posts/Git-subtree-cheatsheet
title: 'Git subtree cheatsheet'
date: '2014-03-02 01:52:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - git
  - subtree
canonical_url: https://be-net.azurewebsites.net/post/2014/03/02/Git-subtree-cheatsheet
template: post
---
<h2><span style="color: #9b00d3">1. List all the existing subtrees under current Git repository</span></h2>  <p><strong>Usage: </strong><span style="border-top: #d9d9d9 1px solid; border-right: #d9d9d9 1px solid; border-bottom: #d9d9d9 1px solid; color: #de1144; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; border-left: #d9d9d9 1px solid; padding-right: 5px; background-color: #ececec">git log | grep git-subtree-dir | tr -d ' ' | cut -d &quot;:&quot; -f2 | sort |uniq</span></p>  <p><strong>Example:</strong></p>  <pre class="cmd">$ git log | grep git-subtree-dir | tr -d ' ' | cut -d &quot;:&quot; -f2 | sort |uniq
Web.UI/Scripts/flot/flot
Web.UI/Scripts/flot/coordinate</pre>

<h2><span style="color: #9b00d3">2. Add a new subtree folder and associate it to a git repository</span></h2>

<p>There are 2 commands need to be run to associate a subtree folder to a git repository.</p>

<p><strong>Usage: </strong><span style="border-top: #d9d9d9 1px solid; border-right: #d9d9d9 1px solid; border-bottom: #d9d9d9 1px solid; color: #de1144; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; border-left: #d9d9d9 1px solid; padding-right: 5px; background-color: #ececec">git remote add -f &lt;Name of the sub git repository&gt; &lt;URL of the sub git repository&gt;</span></p>

<p>Explanation: The -f option will execute fetch operation immediately after adding the new sub repository.</p>

<p><strong>Usage:</strong></p>

<p><strong>&#160;</strong><span style="border-top: #d9d9d9 1px solid; border-right: #d9d9d9 1px solid; border-bottom: #d9d9d9 1px solid; color: #de1144; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; border-left: #d9d9d9 1px solid; padding-right: 5px; background-color: #ececec">git subtree add --prefix=&lt;The new subtree folder path&gt; &lt;Name of the sub git repository&gt; &lt;Branch&gt;</span></p>

<p><span style="border-top: #d9d9d9 1px solid; border-right: #d9d9d9 1px solid; border-bottom: #d9d9d9 1px solid; color: #de1144; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; border-left: #d9d9d9 1px solid; padding-right: 5px; background-color: #ececec">--squash</span></p>

<p>Explanation: The --squash option will merge all the change of the subtree to a single commit, so that it eliminate the need to pull the whole history of the sub project. The equal sign '=' follows the --prefix can be replaced by a space too.</p>

<p><strong>Example:</strong></p>

<pre class="cmd">$git remote add -f ai https://github.com/aoxu/ai.git&#160;&#160; <br />$git subtree add --prefix=ai ai master --squash&#160; </pre>

<h2><span style="color: #9b00d3">3. Update subtree folder from remote repository</span></h2>

<p>Updating the subtree folder can be done by these 2 commands.</p>

<p><strong>Usage: </strong><span style="border-top: #d9d9d9 1px solid; border-right: #d9d9d9 1px solid; border-bottom: #d9d9d9 1px solid; color: #de1144; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; border-left: #d9d9d9 1px solid; padding-right: 5px; background-color: #ececec">git fetch &lt;Name of the remote repository&gt; &lt;branch&gt;</span></p>

<p><strong>Usage: </strong></p>

<p><span style="border-top: #d9d9d9 1px solid; border-right: #d9d9d9 1px solid; border-bottom: #d9d9d9 1px solid; color: #de1144; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; border-left: #d9d9d9 1px solid; padding-right: 5px; background-color: #ececec">git subtree pull --prefix=&lt;The subtree folder path&gt; &lt;Name of the remote repository&gt; &lt;Branch&gt; </span></p>

<p><span style="border-top: #d9d9d9 1px solid; border-right: #d9d9d9 1px solid; border-bottom: #d9d9d9 1px solid; color: #de1144; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; border-left: #d9d9d9 1px solid; padding-right: 5px; background-color: #ececec">--squash</span></p>

<p><strong>Example:</strong></p>

<pre class="cmd">$git fetch ai master
$git subtree pull --prefix=ai ai master --squash</pre>

<p>Or updating the subtree folder just by this single command:</p>

<p><strong>Usage: </strong><span style="border-top: #d9d9d9 1px solid; border-right: #d9d9d9 1px solid; border-bottom: #d9d9d9 1px solid; color: #de1144; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; border-left: #d9d9d9 1px solid; padding-right: 5px; background-color: #ececec">git pull -X subtree=&lt;The subtree folder path&gt; &lt;Name of the remote repository&gt; &lt;Branch&gt;</span></p>

<p><strong>Example:</strong></p>

<pre class="cmd">$ git pull -X subtree=Web.UI/Scripts/flot/coordinate jquery.flot.coordinate master
From https://github.com/Jeff-Tian/jquery.flot.coordinate.js* branch            master     -&gt; FETCH_HEAD
Already up-to-date.</pre>

<h2><span style="color: #9b00d3">4. Push from subtree folder to remote repository (Make sure you have the write permission)</span></h2>

<p>Pushing the change of the subtree folder can be done by the following single command.</p>

<p><strong>Usage: </strong></p>

<p><span style="border-top: #d9d9d9 1px solid; border-right: #d9d9d9 1px solid; border-bottom: #d9d9d9 1px solid; color: #de1144; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; border-left: #d9d9d9 1px solid; padding-right: 5px; background-color: #ececec">git subtree push --prefix=&lt;The subtree folder path&gt; &lt;Name of the remote repository&gt; &lt;Branch&gt;</span></p>

<p><strong>Example</strong>：</p>

<pre class="cmd">$ git subtree push --prefix=Web.UI/Scripts/flot/coordinate jquery.flot.coordinate master
git push using:  jquery.flot.coordinate master
1/     87 (0)2/     87 (1)3/     87 (2)4/     87 (3)5/     87 (4)6/     87 (5)7/87 (6)8/     87 (7)9/     87 (8)10/     87 (9)11/     87 (10)12/     87 (11
)13/     87 (12)14/     87 (13)15/     87 (14)16/     87 (15)17/     87 (16)18/87 (17)19/     87 (18)20/     87 (19)21/     87 (20)22/     87 (21)23/     8
7 (22)24/     87 (23)25/     87 (24)26/     87 (25)27/     87 (26)28/     87 (27
)29/     87 (28)30/     87 (29)31/     87 (30)32/     87 (31)33/     87 (32)34/87 (33)35/     87 (34)36/     87 (35)37/     87 (36)38/     87 (37)39/     8
7 (38)40/     87 (39)41/     87 (40)42/     87 (41)43/     87 (42)44/     87 (43
)45/     87 (44)46/     87 (45)47/     87 (46)48/     87 (47)49/     87 (48)50/87 (49)51/     87 (50)52/     87 (51)53/     87 (52)54/     87 (53)55/     8
7 (54)56/     87 (55)57/     87 (56)58/     87 (57)59/     87 (58)60/     87 (59
)61/     87 (60)62/     87 (61)63/     87 (62)64/     87 (63)65/     87 (64)66/87 (65)67/     87 (66)68/     87 (67)69/     87 (68)70/     87 (69)71/     8
7 (70)72/     87 (71)73/     87 (72)74/     87 (73)75/     87 (74)76/     87 (75
)77/     87 (76)78/     87 (77)79/     87 (78)80/     87 (79)81/     87 (80)82/87 (81)83/     87 (82)84/     87 (83)85/     87 (84)86/     87 (84)87/     8
7 (85)Username for 'https://github.com': Jeff-Tian
Password for 'https://Jeff-Tian@github.com':
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 674 bytes, done.
Total 3 (delta 2), reused 0 (delta 0)
To <a href="https://github.com/Jeff-Tian/jquery.flot.coordinate.js.git2b45e6b..6cdd58f">https://github.com/Jeff-Tian/jquery.flot.coordinate.js.git2b45e6b..6cdd58f</a>  <br />6cdd58f79dba0b0b790e4e051abf7887f2985f8f -&gt; master</pre>