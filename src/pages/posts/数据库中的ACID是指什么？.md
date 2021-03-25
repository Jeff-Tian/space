---
stackbit_url_path: >-
  posts/数据库中的ACID是指什么？
title: '数据库中的ACID是指什么？'
date: '2010-04-27 07:02:10'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/04/27/数据库中的ACID是指什么？
template: post
---

        <p>如果事务是ACID的，那么它将具有下列特性。</p>
<ul>
    <li>原子性（Atomicity）：事务要么全部执行，要么全部不执行。</li>
    <li>一致性（Consistency）：需要遵守所有的约束以及其他的数据完整性规则，并且完全地更新所有相关的对象（数据页、索引页）。</li>
    <li>隔离性（Isolation）：每一个事务都与任何其他事务完全地隔离。一个事务的动作不会受到另一个事务动作的干扰。</li>
    <li>持久性（Durability）：完成事务后，它的作用结果将永远存在于系统内。数据是“安全的”，这是指在诸如停电或其他非磁盘系统故障的情况下也不会导致发生数据只写入一半的情况。</li>
</ul>
      