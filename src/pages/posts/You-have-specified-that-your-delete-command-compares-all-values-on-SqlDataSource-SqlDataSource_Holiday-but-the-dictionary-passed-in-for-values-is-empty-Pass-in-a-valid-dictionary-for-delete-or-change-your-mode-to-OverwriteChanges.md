---
stackbit_url_path: >-
  posts/You-have-specified-that-your-delete-command-compares-all-values-on-SqlDataSource-SqlDataSource_Holiday-but-the-dictionary-passed-in-for-values-is-empty-Pass-in-a-valid-dictionary-for-delete-or-change-your-mode-to-OverwriteChanges
title: 'You have specified that your delete command compares all values on SqlDataSource "SqlDataSource_Holiday", but the dictionary passed in for values is empty.  Pass in a valid dictionary for delete or change your mode to OverwriteChanges.'
date: '2010-05-31 02:59:14'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>今天使用ListView控件连接了数据库，在数据库配置中，使用了乐观并发控制。</p>
<p>在页面上，可以进行添加、修改，但是在删除行时，却出现如下错误：</p>
<p>&nbsp;</p>
<h2 style="font-family: Verdana; font-weight: normal; font-size: 14pt; color: maroon; "><i>You have specified that your delete command compares all values on SqlDataSource 'SqlDataSource_Holiday', but the dictionary passed in for values is empty. &nbsp;Pass in a valid dictionary for delete or change your mode to OverwriteChanges.</i></h2>
<p>&nbsp;</p>
<p>在网上找了很久也没有找到相应的解决办法，后来，仔细看ListView的代码，部分如下：</p>
<pre class="brush: csharp">&lt;asp:ListView ID="ListView_Holiday" runat="server" DataKeyNames="idHoliday" 
                DataSourceID="SqlDataSource_Holiday" InsertItemPosition="LastItem"&gt;
                &lt;ItemTemplate&gt;
                    &lt;tr style="background-color:#DCDCDC;color: #000000;"&gt;
                        &lt;td&gt;
                            &lt;asp:Label ID="idHolidayLabel" runat="server" Text='&lt;%# Eval("idHoliday") %&gt;' /&gt;
                        &lt;/td&gt;
                        &lt;td&gt;
                            &lt;asp:Label ID="holidayDateLabel" runat="server" 
                                Text='&lt;%# Eval("holidayDate") %&gt;' /&gt;
                        &lt;/td&gt;
                        &lt;td&gt;
                            &lt;asp:Label ID="nameLabel" runat="server" Text='&lt;%# Eval("name") %&gt;' /&gt;
                        &lt;/td&gt;
                        &lt;td&gt;
                            &lt;asp:Button ID="DeleteButton" runat="server" CommandName="Delete" 
                                Text="删除" /&gt;
                            &lt;asp:Button ID="EditButton" runat="server" CommandName="Edit" Text="修改" /&gt;
                        &lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/ItemTemplate&gt;
                &lt;AlternatingItemTemplate&gt;
                    &lt;tr style="background-color:#FFF8DC;"&gt;
                        &lt;td&gt;
                            &lt;asp:Label ID="idHolidayLabel" runat="server" Text='&lt;%# Eval("idHoliday") %&gt;' /&gt;
                        &lt;/td&gt;
                        &lt;td&gt;
                            &lt;asp:Label ID="holidayDateLabel" runat="server" 
                                Text='&lt;%# Eval("holidayDate") %&gt;' /&gt;
                        &lt;/td&gt;
                        &lt;td&gt;
                            &lt;asp:Label ID="nameLabel" runat="server" Text='&lt;%# Eval("name") %&gt;' /&gt;
                        &lt;/td&gt;
                        &lt;td&gt;
                            &lt;asp:Button ID="DeleteButton" runat="server" CommandName="Delete" 
                                Text="删除" /&gt;
                            &lt;asp:Button ID="EditButton" runat="server" CommandName="Edit" Text="修改" /&gt;
                        &lt;/td&gt;
                    &lt;/tr&gt;
                &lt;/AlternatingItemTemplate&gt;
……
</pre>
<p>可以见到在&lt;asp:Label /&gt;中的数据绑定全是使用的Eval()方式，网上说Eval()是单向的数据绑定方式。于是猜是不是这个问题，便<strong>将Eval全替换成了Bind</strong>，结果真就可以删除了！<img alt="" src="http://www.zizhujy.com/blog/image.axd?picture=image_179.png"></p>
<p>原来以为&lt;asp:Label /&gt;只能使用Eval()绑定，而&lt;asp:TextBox /&gt;才能使用Bind()绑定呢。<img alt="" src="http://www.zizhujy.com/blog/image.axd?picture=image_180.png"></p>
      