---
stackbit_url_path: >-
  posts/ASP中带省略号地截取字符串
title: 'ASP中带省略号地截取字符串'
date: '2010-01-21 04:05:57'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em;">
<p>在网页中，经常会遇到要用表格来循环显示一些列表，而这些列表中，列宽是有限制的，有些内容太长，不能让它在有限宽度的单元格中完全显示出来。常见的解决方案是，只取其前面某部分的子字符串显示出来，并再定义一个鼠标滑过的提示，在这个提示框中显示全部内容。</p>
<p>然而，我看到很多代码，在实现上述解决方案的时候，就是这样做的：</p>
<pre class="brush: html" style="text-indent: 0;">&lt;td&gt;&lt;a href="someLink.asp" title="&lt;%= sString %&gt;" target="_blank"&gt;&lt;%= Left(sString, 6) %&gt;&lt;/a&gt;&lt;/td&gt;
</pre>
<p>这样做的确已经实现了上述解决方案，但是还可以再稍微改进一下，让用户在阅读网页的时候，清楚地了解到，这个单元格里的内容是否已经显示完全。比如，一个单元格的宽度限定了只能显示 6 个字符的话，当要显示的文本就只有 6 个字符时，那么如同上面一样地显示；但是如果（经常是这种情况）要显示的文本有比 6 个更多的字符的话，那么，在显示前 6 个字符后，再加上一个一点点的提示字符，比如省略号……等，这样看起来会意义会更加清楚。</p>
<p>据说可以不在后台截取文本，然后使用CSS来控制显示样式，然而我还没有看到一个跨浏览器的CSS解决方案，如果有的话，我想可能也会有点复杂。既然如此，那么就让我们用后台的截取字符串来实现吧（这是一个常用的解决方案）。现在要做的是，在不增加实现的复杂性前提下，将上述提到的后台截取文本方案改进得更好。</p>
<p>而上述截取文本是用 Left() 函数来实现的，很自然地想到，我们只需要将 Left() 函数改进一下，在返回的子字符串最后加上一个可以自定义的省略号就行了。假设这个改进的函数名叫 LeftWithEllipsis()，它比 Left() 多一个参数，就是要自定义的省略符号。如果要用“...”来提示用户，正在显示的文本没有结束，那么之前的代码只需要改为：</p>
<pre class="brush: html" style="text-indent: 0;">&lt;td&gt;&lt;a href="someLink.asp" title="&lt;%= sString %&gt;" target="_blank"&gt;&lt;%= LeftWithEllipsis(sString, 6, "...") %&gt;&lt;/a&gt;&lt;/td&gt;
</pre>
<p>其中，LeftWithEllipsis() 函数的代码如下：</p>
<pre class="brush: vb" style="text-indent: 0;">&lt;%
    ' 
    ' 截取字符串的左边指定的长度，如果还有剩余，用省略号代替
    '
    Function LeftWithEllipsis(ByRef s, ByVal lN, ByRef sEllipsis)
        LeftWithEllipsis = Left(s, lN) &amp; Replace(Mid(s, lN+1), Mid(s, lN+1), sEllipsis)
    End Function
%&gt;
</pre>
<p>非常简短，这个改进也许是微不足道的，对于开发者来说是不费吹灰之力的，但是对于用户来说，的确是更好的体验。何乐而不为？</p>
</div>
      