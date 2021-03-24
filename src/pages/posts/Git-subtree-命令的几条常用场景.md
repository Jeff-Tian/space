---
stackbit_url_path: >-
  posts/Git-subtree-命令的几条常用场景
title: 'Git subtree 命令的几条常用场景'
date: '2014-02-13 02:30:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - git
  - subtree
canonical_url: >-
template: post
---
<h2><span style="color: #800080">1. 查看当前 Git 仓库有哪些已建立的 Subtree</span></h2>  <p><strong>语法</strong>：<span style="border-top: #d9d9d9 1px solid; border-right: #d9d9d9 1px solid; border-bottom: #d9d9d9 1px solid; color: #de1144; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; border-left: #d9d9d9 1px solid; padding-right: 5px; background-color: #ececec">git log | grep git-subtree-dir | tr -d ' ' | cut -d &quot;:&quot; -f2 | sort |uniq</span></p>  <p><strong>示例</strong>：</p>  <pre class="cmd auto-wrap">$ git log | grep git-subtree-dir | tr -d ' ' | cut -d &quot;:&quot; -f2 | sort |uniq
ZiZhuJY.Web.UI/Scripts/flot/flot
ZiZhuJY.Web.UI/Scripts/flot/navigationControl</pre>

<h2><span style="color: #800080">2. 第一次添加子目录，建立与git项目的关联</span></h2>

<p>建立关联总共有2条命令。</p>

<p><strong>语法</strong>：<span style="border-top: #d9d9d9 1px solid; border-right: #d9d9d9 1px solid; border-bottom: #d9d9d9 1px solid; color: #de1144; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; border-left: #d9d9d9 1px solid; padding-right: 5px; background-color: #ececec">git remote add -f &lt;子仓库名&gt; &lt;子仓库地址&gt;</span></p>

<p>解释：其中-f意思是在添加远程仓库之后，立即执行fetch。</p>

<p><strong>语法</strong>：<span style="border-top: #d9d9d9 1px solid; border-right: #d9d9d9 1px solid; border-bottom: #d9d9d9 1px solid; color: #de1144; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; border-left: #d9d9d9 1px solid; padding-right: 5px; background-color: #ececec">git subtree add --prefix=&lt;子目录名&gt; &lt;子仓库名&gt; &lt;分支&gt; --squash</span></p>

<p>解释：--squash意思是把subtree的改动合并成一次commit，这样就不用拉取子项目完整的历史记录。--prefix之后的=等号也可以用空格。</p>

<p><strong>示例</strong>：</p>

<pre class="cmd auto-wrap">$git remote add -f ai https://github.com/aoxu/ai.git
$git subtree add --prefix=ai ai master --squash&#160; </pre>

<h2><span style="color: #800080">3. 从远程仓库更新子目录</span></h2>

<p>更新子目录有2条命令。</p>

<p><strong>语法</strong>：<span style="border-top: #d9d9d9 1px solid; border-right: #d9d9d9 1px solid; border-bottom: #d9d9d9 1px solid; color: #de1144; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; border-left: #d9d9d9 1px solid; padding-right: 5px; background-color: #ececec">git fetch &lt;远程仓库名&gt; &lt;分支&gt;</span></p>

<p><strong>语法</strong>：<span style="border-top: #d9d9d9 1px solid; border-right: #d9d9d9 1px solid; border-bottom: #d9d9d9 1px solid; color: #de1144; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; border-left: #d9d9d9 1px solid; padding-right: 5px; background-color: #ececec">git subtree pull --prefix=&lt;子目录名&gt; &lt;远程仓库名&gt; &lt;分支&gt; --squash</span></p>

<p><strong>示例</strong>：</p>

<pre class="cmd auto-wrap">$git fetch ai master
$git subtree pull --prefix=ai ai master --squash&#160; </pre>

<p>或者使用下面这一条命令：</p>

<p><strong>语法</strong>：<span style="border-top: #d9d9d9 1px solid; border-right: #d9d9d9 1px solid; border-bottom: #d9d9d9 1px solid; color: #de1144; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; border-left: #d9d9d9 1px solid; padding-right: 5px; background-color: #ececec">git pull -X subtree=&lt;子目录名&gt; &lt;远程仓库名&gt; &lt;分支&gt;</span></p>

<p><strong>示例</strong>：</p>

<pre class="cmd auto-wrap">$ git pull -X subtree=ZiZhuJY.Web.UI/Scripts/flot/coordinate jquery.flot.coordinate master
From https://github.com/Jeff-Tian/jquery.flot.coordinate.js
 * branch            master     -&gt; FETCH_HEAD
Already up-to-date.</pre>

<h2><span style="color: #800080">4. 从子目录push到远程仓库（确认你有写权限）</span></h2>

<p>推送子目录的变更有1条命令。</p>

<p><strong>语法</strong>：<span style="border-top: #d9d9d9 1px solid; border-right: #d9d9d9 1px solid; border-bottom: #d9d9d9 1px solid; color: #de1144; padding-bottom: 5px; padding-top: 5px; padding-left: 5px; border-left: #d9d9d9 1px solid; padding-right: 5px; background-color: #ececec">git subtree push --prefix=&lt;子目录名&gt; &lt;远程分支名&gt; 分支</span></p>

<p><strong>示例</strong>：</p>

<pre class="cmd auto-wrap">$ git subtree push --prefix=ZiZhuJY.Web.UI/Scripts/flot/coordinate jquery.flot.
coordinate master
git push using:  jquery.flot.coordinate master
1/     87 (0)2/     87 (1)3/     87 (2)4/     87 (3)5/     87 (4)6/     87 (5)7/
     87 (6)8/     87 (7)9/     87 (8)10/     87 (9)11/     87 (10)12/     87 (11
)13/     87 (12)14/     87 (13)15/     87 (14)16/     87 (15)17/     87 (16)18/
    87 (17)19/     87 (18)20/     87 (19)21/     87 (20)22/     87 (21)23/     8
7 (22)24/     87 (23)25/     87 (24)26/     87 (25)27/     87 (26)28/     87 (27
)29/     87 (28)30/     87 (29)31/     87 (30)32/     87 (31)33/     87 (32)34/
    87 (33)35/     87 (34)36/     87 (35)37/     87 (36)38/     87 (37)39/     8
7 (38)40/     87 (39)41/     87 (40)42/     87 (41)43/     87 (42)44/     87 (43
)45/     87 (44)46/     87 (45)47/     87 (46)48/     87 (47)49/     87 (48)50/
    87 (49)51/     87 (50)52/     87 (51)53/     87 (52)54/     87 (53)55/     8
7 (54)56/     87 (55)57/     87 (56)58/     87 (57)59/     87 (58)60/     87 (59
)61/     87 (60)62/     87 (61)63/     87 (62)64/     87 (63)65/     87 (64)66/
    87 (65)67/     87 (66)68/     87 (67)69/     87 (68)70/     87 (69)71/     8
7 (70)72/     87 (71)73/     87 (72)74/     87 (73)75/     87 (74)76/     87 (75
)77/     87 (76)78/     87 (77)79/     87 (78)80/     87 (79)81/     87 (80)82/
    87 (81)83/     87 (82)84/     87 (83)85/     87 (84)86/     87 (84)87/     8
7 (85)Username for 'https://github.com': Jeff-Tian
Password for 'https://Jeff-Tian@github.com':
Counting objects: 5, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 674 bytes, done.
Total 3 (delta 2), reused 0 (delta 0)
To https://github.com/Jeff-Tian/jquery.flot.coordinate.js.git
   2b45e6b..6cdd58f  6cdd58f79dba0b0b790e4e051abf7887f2985f8f -&gt; master</pre>

<hr />

<p>参考自：<a style="border-left-width: 0px; font-size: 1.5em; text-decoration: none; font-family: inherit; border-right-width: 0px; vertical-align: baseline; border-bottom-width: 0px; padding-bottom: 0px; padding-top: 0px; padding-left: 0px; margin: 0px; padding-right: 0px; border-top-width: 0px" href="http://aoxuis.me/posts/2013/08/07/git-subtree">使用git subtree集成项目到子目录</a></p>