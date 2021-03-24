---
stackbit_url_path: >-
  posts/在-ACCESS-中创建表的-SQL-示例
title: '在 ACCESS 中创建表的 SQL 示例'
date: '2010-03-02 07:41:59'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em; font-size: larger;">
<p>使用ASP、VB、VBA编程，在Access中创建表的SQL语句一例：</p>
<pre style="text-indent: 0;" class="brush: sql">CREATE TABLE FriendSite (
	ID COUNTER, 
	LinkType VARCHAR,
	SiteName VARCHAR,
	SiteUrl MEMO ,
	SiteIntro MEMO,
	LogoUrl	MEMO,
	SiteAdmin VARCHAR,
	Email VARCHAR,
	SitePassword VARCHAR,
	IsGood BIT,
	IsOK BIT, 
	Referer MEMO,
	CONSTRAINT PK_TVIPLevel26 PRIMARY KEY (SiteUrl, Referer)
)
</pre>
</div>
      