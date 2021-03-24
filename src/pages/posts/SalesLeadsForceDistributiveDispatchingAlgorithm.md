---
stackbit_url_path: >-
  posts/SalesLeadsForceDistributiveDispatchingAlgorithm
title: '销售线索强制分布派发算法'
date: '2014-01-12 00:28:00'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 任务分派
  - 强制分布
  - 算法
canonical_url: >-
template: post
---
<h2><span style="color: #9b00d3;">问题：</span></h2>
<p>一个呼叫中心，有电话专员若干名，主管一名。这位主管每天都会从固定的渠道拿到需要跟踪的销售线索列表，这些销售线索是分批到达的，每批列表里的销售线索数量不等，有多有少。这位主管每次拿到一批线索列表后，便将它们分派给电话专员们去跟踪。有些电话专员经验丰富，她会给他多派些；有些是新来的，就少派些；对于大多数专员，应该分到数量相同的线索。这些多派少派，可以使用权重来表示。比如对于大多数专员，权重是1；对于那个经验丰富的专员，权重是1.2；对于新人，权重是0.8。但是这个权重分配，是会随着时间的变化而变化的，比如新人变得熟练，或者有其他的特殊情况。而且电话专员的总人数也会变化（有离职的，有新招进来的）。这位主管希望（<strong>强制分布</strong>）</p>
<p>- <span style="background-color: #ffff00;">每次分配后，每位电话专员所得到的线索数量是尽量符合他/她的权重占比的；</span></p>
<p>- <span style="background-color: #ffff00;">不仅如此，从长期经过很多次的分配后来看，每位专员所得到的线索数量也是尽量符合他/她的可能经过了很多次变化的权重占比的。</span></p>
<p>举例来说，这位主管管理着3名电话专员，拿到第一批线索100个，第二批50个，她希望这样分配：</p>
<table class="confluenceTable" style="border-collapse: collapse; margin: 0px; overflow-x: auto; color: #333333; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;" border="0">
<tbody>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" rowspan="2"><strong>电话专员</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" rowspan="2"><strong>权重设定</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" rowspan="2"><strong>权重占比</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>100</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>50</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>150</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong><span style="background-color: #ffff99;">&nbsp;</span></strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" rowspan="2"><strong>电话专员</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" rowspan="2"><strong>权重设定</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" rowspan="2"><strong>权重占比</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>300</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">&nbsp;</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" rowspan="2"><strong>电话专员</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">450</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">批次#1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">批次#2</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">小计</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong><span style="background-color: #ffff99;">&nbsp;</span></strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">批次#3</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">&nbsp;</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>小计</strong></td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>甲</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.8</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.26667</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">27</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">13</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>40</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong><span style="background-color: #ffff99;">&nbsp;</span></strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>乙</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.38462</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">115</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">&nbsp;</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>甲</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>40</strong></td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>乙</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.33333</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">33</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">17</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>50</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong><span style="background-color: #ffff99;">&nbsp;</span></strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>丙</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">1.1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.42308</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">127</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">&nbsp;</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>乙</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>165</strong></td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>丙</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">1.2</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.4</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">40</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">20</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>60</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong><span style="background-color: #ffff99;">&nbsp;</span></strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>丁</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.5</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.19231</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">58</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">&nbsp;</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>丙</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>187</strong></td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>小计</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>3</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>100</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>50</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>150</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong><span style="background-color: #ffff99;">&nbsp;</span></strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>小计</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>2.6</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>300</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">&nbsp;</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>丁</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>58</strong></td>
</tr>
</tbody>
</table>
<p><strong><span style="color: #9b00d3; font-size: 1.5em;">分析：</span></strong></p>
<p>就拿上面的例子，为什么是那样分配，就真的是最好的呢？因为从主管的2个要求来看，就是要做2个尽量符合。</p>
<p>- <span style="background-color: #ffff00;"><strong>第一个是每次分配的数量分布尽量符合当次的权重占比分布；</strong></span></p>
<p>- <strong><span style="background-color: #ffff00;">第二个是长期来看，分配的数量分布尽量符合变化着的权重的占比分布。</span></strong></p>
<p>什么是尽量符合呢？如果某电话专员的权重占比是0.22，待分的线索数量是10个。如果给这位专员分配5个，就不是很符合这个权重占比，因为 5/10 = 0.5 是 0.22&nbsp; 的2倍多。如果给他分配1个，1/10 = 0.1 有点接近0.22了。如果分配2个，那么 2/10 = 0.2 就更接近0.22这个理想值了。</p>
<p>所以，所谓尽量符合就是让所分配的线索数量在总的线索数量中的占比，尽量接近权重占比，最好等于权重占比就好了。比如，给他从10个中分配2.2个线索，这是理想情况，但是现实不允许这样分，所以，我们的目标是让真实的分配情况与理想的分配情况相差最小。比如 2/10 - 0.22 = 0.2 - 0.22 = -0.02</p>
<p>换个角度，真实的分配情况与理想的分配情况相差最小，除了可以计算比率的差值，还可以直接计算分配个数的差值。比如 2 - 10*0.22 = 2 - 2.2 = -0.2，就是说，真实情况分配的线索个数，比理想的分配个数差了0.2个（应该分2.2个，但实际上分了2个）。但是这个差无法避免，所以是最小的了。</p>
<p>如何找到这个最小值2？用计算个头误差的角度来看问题后，方法就很明显了：先算出理想应该分配的个数，再四舍五入一下就行了（注意，你一定不能找到一个除了四舍五入值的更接近理想值的值了）。</p>
<p>将上述方法应用到每个人身上，所得到的方案一定是满足第一个要求的：这个实际分配的数量分布一定最符合当次的理想分配数量分布，从而也最符合当次的权重占比分布。</p>
<p>在某些情况下，四舍五入会导致实际分配的数量总计与应分配线索数量有些微偏差。这时候需要对已有分配做些调整，这个调整仍需保证最终的实际分配与理想分配误差最小，具体可行的方案后述（详见解决方案&ldquo;微调&rdquo;步以及数学证明）。</p>
<p>总结一下，采用对理想分配数先四舍五入取整然后调整的方法，就能够满足第一个要求。但是对于第二个要求呢？实际上，若要保证分配方案每批次最优，则不能保证长期来看总体最优。举个例子：</p>
<table class="confluenceTable" style="border-collapse: collapse; margin: 0px; overflow-x: auto; color: #333333; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
<tbody>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" rowspan="2"><strong>电话专员</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" rowspan="2"><strong>权重设定</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" rowspan="2"><strong>权重占比</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>3</strong></td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">批次#1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">批次#2</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">批次#3</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">小计</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>甲</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.6</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.6</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>3</strong></td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>乙</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.4</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.4</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>0</strong></td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>小计</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>3</strong></td>
</tr>
</tbody>
</table>
<p>以上分配方案，每次最优，但是总体来看，明显有问题，即所有的线索全部分配在了甲身上，而乙则永远得不到分配。如果像下面这样分配，则既能保证总体最优，而每次也仍然接近理想分配。</p>
<table class="confluenceTable" style="border-collapse: collapse; margin: 0px; overflow-x: auto; color: #333333; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
<tbody>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" rowspan="2"><strong>电话专员</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" rowspan="2"><strong>权重设定</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" rowspan="2"><strong>权重占比</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>3</strong></td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">批次#1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">批次#2</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">批次#3</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">小计</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>甲</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.6</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.6</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>2</strong></td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>乙</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.4</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.4</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>小计</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>3</strong></td>
</tr>
</tbody>
</table>
<p>批次#1与批次#3仍然是最优分配，只有批次#2不是。</p>
<p>事实上我们只需要引入累计误差，在分配时总是试图使得累计误差最小，则这个方案便能够既实现总体最优，又能保证每次也最优或者第二优（详见后面数学证明）。</p>
<h2><span style="color: #9b00d3;">解决方案：（一共 4 步）</span></h2>
<p><strong>1. 归一化。</strong></p>
<p>对于给定的权重设置，做归一化处理，如：</p>
<table class="confluenceTable" style="border-collapse: collapse; margin: 0px; overflow-x: auto; color: #333333; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
<tbody>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1"><strong>电话专员</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1"><strong>权重设定</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1"><strong>权重占比</strong></td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>甲</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.8</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.2667</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>乙</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.3333</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>丙</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">1.2</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.4</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>小计</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>3</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
</tr>
</tbody>
</table>
<p><strong>2. 根据累积偏差计算理想分配方案。</strong></p>
<p>如前所述，引进累积偏差是为了符合主管的第二个要求：长期来看分配最优。</p>
<p>给电话专员甲的理想分配数量是 当前批次待分配的总线索数量去乘以其当前的（归一化后的）权重占比，然后减去其分配前累计偏差（如果从来没有分配过，此值显然为0）。如：</p>
<table class="confluenceTable" style="border-collapse: collapse; margin: 0px; overflow-x: auto; color: #333333; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
<tbody>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" rowspan="2"><strong>电话专员</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" rowspan="2"><strong>权重设定</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" rowspan="2"><strong>权重占比</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top; text-align: center;">
<p style="margin: 0px; padding: 0px;"><strong>分配前</strong></p>
<p style="margin: 10px 0px 0px; padding: 0px;"><strong>累积偏差</strong></p>
</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>批次#1 待分配数量：100</strong></td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">&nbsp;</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">理想分配</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>甲</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.8</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.266666666666667</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top; text-align: center;">0.5</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">=&nbsp;26.66666667 - 0.5 = 26.16666667</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>乙</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.333333333333333</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top; text-align: center;">0.6</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">=&nbsp;33.33333333 - 0.6 = 32.73333333</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>丙</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">1.2</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.4</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top; text-align: center;">-1.1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">=&nbsp;40 - (-1.1) = 41.1</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>小计</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>3</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top; text-align: center;"><strong>累计误差平方和：1.82&nbsp;</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>=SUM(D3:D5) = 100</strong></td>
</tr>
</tbody>
</table>
<p><strong>3. 四舍五入。</strong></p>
<p>将理想分配数值进行四舍五入取整（<strong>若取整后小于0，则取0。因为分配负数是没有意义的！</strong>），并记录当前单次偏差以及当前分配后累积偏差（第一次分配时，当前分配后累积偏差=当前偏差；后续分配时，如上一步所描述的，需要使用这次计录下来的分配后累积偏差；而后续分配后的累积偏差=分配前累积偏差（也就是上一次分配后累积偏差）+当前单次偏差）。如：</p>
<table class="confluenceTable" style="border-collapse: collapse; margin: 0px; overflow-x: auto; color: #333333; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
<tbody>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" rowspan="2"><strong>电话专员</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>批次#1 待分配数量：100</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">&nbsp;</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">&nbsp;</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">&nbsp;</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">理想分配</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">四舍五入取整</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">单次偏差</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">分配后累积偏差</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>甲</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">26.1666666666667</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">=ROUND(B3,0) =&nbsp;26</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">-0.1666666666667</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.3333333333333</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>乙</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">32.7333333333333</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">=ROUND(B4,0) =&nbsp;33</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.2666666666667</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.8666666666667</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>丙</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">41.1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">=ROUND(B5,0) =&nbsp;41</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">-0.1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">-1.2</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>小计</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>100</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>=SUM(C3:C5) = 100</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>单次误差平方和：</strong><strong>0.108888888888918</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;"><strong>累计误差平方和：0.222222222222218</strong></td>
</tr>
</tbody>
</table>
<p>可以看到，累计误差平方和已由1.82减小到0.22。长期来看，累积误差总是呈现减小趋势，体现了主管的第二点要求。但同时单次偏差也非常接近最优值（最接近或者第二接近，后有证明），体现了主管的第一要求。</p>
<p>注意，这里偏差=实际值 - 理想值。偏差可正可负，但是+0.3与-0.3，其绝对值是一样的。也就是说+0.3的偏差，与-0.3的偏差，其差别程度是一样的，这个绝对值、这个偏差程度，我这里叫做误差。使用正负号是为了让我们知道，这个差别，是实际值比理想值大还是小。在对偏差的小计栏里，计算的是误差平方和。这个值可以很方便的衡量所有电话专员的误差叠加效果。误差叠加，用偏差绝对值的和也是可以的，但是使用平方和计算起来更方便些。如甲的偏差是+0.3，而乙的偏差是-0.3，那么他们合起来的误差叠加是0.6，或者误差平方和是0.18。</p>
<p><strong>4. 微调。</strong></p>
<p>上面的例子中，由于四舍五入取整后，所有电话专员的分配数量和=待分配的线索数量，所以这一步不需要做了。</p>
<p>但有些情况下，由于四舍五入取整带来的偏差不能恰好抵消，会导致电话专员的分配数量和大于或者小于待分配的线索数量。如：</p>
<table class="confluenceTable" style="border-collapse: collapse; margin: 0px; overflow-x: auto; color: #333333; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
<tbody>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">电话专员</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">理想分配数量</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">四舍五入取整值</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">甲</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">1.5</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">2</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">乙</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">1.5</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">2</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">小计</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">3</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">4</td>
</tr>
</tbody>
</table>
<p>这时候需要对已取整的数量做调整，以使得电话专员的分配数量和=待分配的线索数量。</p>
<p>记 &Delta; = 电话专员的分配数量和 - 待分配的线索数量。</p>
<p>若&Delta; &gt; 0 （&Delta;为一个小整数），则需要从已分配数量中减去&Delta;，我们一个一个地来减。</p>
<p>从分配数量大于0<span style="background-color: #ffff99;"><strong>并且权重大于0</strong></span>的电话专员中，找到分配后累积偏差（是找最大<strong>偏差</strong>不是找最大误差，只有这样才能保证调整后对<strong>整体误差</strong>影响最小）最大的人，从他的分配数量中减去1，同时更新单次偏差值以及分配后累积偏差值。（这个人一定存在，否则&Delta;不可能大于0）</p>
<p>重新计算&Delta;（其实就是&Delta;=&Delta;-1），然后看&Delta;是否仍然大于 0，如果是，再重复上一步。如此进行下去直到&Delta;=0为止。微调结束。</p>
<p>若&Delta; &lt; 0 (&Delta;为一个负整数），则需要在已分配数量中再加上&Delta;，我们一个一个地来加。</p>
<p>从<span style="background-color: #ffff99;"><strong>权重大于0</strong></span>的电话专员中，找到分配后累积偏差（是找最小<strong>偏差</strong>不是找最小误差，只有这样才能保证调整后对<strong>整体误差</strong>影响最小）最小的人，在他的分配数量中再加上1，同时更新单次偏差值以及分配后累积偏差值。</p>
<p>重新计算&Delta;（其实就是&Delta;=&Delta;+1），然后看&Delta;是否仍然小于 0，如果是，再重复上一步。如此进行下去直到&Delta;=0为止。微调结束。</p>
<p><strong>5. 分配成功结束。</strong></p>
<h2><span style="color: #9b00d3;">相关的问答以及数学证明：</span></h2>
<p><strong>1. 什么是理想分配数量，什么是实际分配数量？</strong></p>
<p>答：</p>
<p>理想分配数量是不考虑现实约束，直接通过数学计算得到的一个值，这个值可能是小数。</p>
<p>实际分配数量是对理想值进行一个取整，这样就会导致与理想值有一个偏差。当然运气好的时候，理想分配数量是整数，那么这时理想值=现实值，偏差为0。</p>
<p><span style="color: #ff0000;">若取整后为负，则实际分配数量为0。因为分配负数个与分配小数个线索一样，没有意义。</span></p>
<p><strong>2. 在文章的最前面举的例子中，提到有权重变化。而给出的解决方案中，却没有对权重变化进行讨论，为什么？</strong></p>
<p>答：</p>
<p>如分析中提到的，我们将减小分配数量与总数量的占比与权重占比的偏差这一目标转化成了减小实际分配数量与理想分配数量的偏差。这样一来，在解决方案中就不需要考虑权重的变化。对于变化了的权重，我们仍然使用同一方法计算出其理想分配数量（即待分配数量乘以权重占比再减去累积偏差，不管这个权重占比是否变化，我们每次都是需要重新计算的。因为即使权重不变，待分配数量也是变化的，所以我们分配前都会重新计算理想分配数量）。</p>
<p><strong>3. 目标进行了转化，效果是一样的吗？</strong></p>
<p>答：</p>
<p>不错。</p>
<p><strong>【命题】对于下列分配情况，当实际分配数量与理想分配数量偏差最小时，实际分配数量占待分配数量的比例也其权重占比的偏差也最小。反之亦然。</strong></p>
<p><span style="background-color: #3399ff;">待分配数量为 S，累积偏差为0。</span></p>
<table class="confluenceTable" style="border-collapse: collapse; margin: 0px; overflow-x: auto; color: #333333; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
<tbody>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">电话专员</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">归一化的权重占比</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">
<p style="margin: 0px; padding: 0px;">理想分配数量</p>
</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">
<p style="margin: 0px; padding: 0px;">实际分配数量</p>
</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">TM1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">W1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">S * W1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">L1</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">TM2</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">W2</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">S * W2</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">L2</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">小计</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">S</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">S</td>
</tr>
</tbody>
</table>
<p>【证明】：我们这里只对电话专员TM1做分析。</p>
<p>记实际分配数量与理想分配数量偏差为<em style="font-size: 14px; font-family: arial; color: #444444; text-align: center; line-height: 18px;">&epsilon;：</em></p>
<p><em style="font-size: 14px; font-family: arial; color: #444444; text-align: center; line-height: 18px;">&epsilon;1 = L1 - S*W1</em></p>
<p>记实际分配数量占待分配数量的比例为r：</p>
<p><em style="font-size: 14px; font-family: arial; color: #444444; text-align: center; line-height: 18px;">r1 = L1 / S - W1</em></p>
<p>于是有 r1 = <em style="font-size: 14px; font-family: arial; color: #444444; text-align: center; line-height: 18px;">&epsilon;1 / S</em>。显然讨论r1与<em style="font-size: 14px; font-family: arial; color: #444444; text-align: center; line-height: 18px;">&epsilon;1</em>的最小值情况是等价的。</p>
<p>【证毕】</p>
<p><strong>3. 我们（主管）的目标将线索分配给所有的电话专员后，整体上看，分配后的分布与权重分布尽量吻合，上面的解决方案以及刚才的证明都似乎只是单个专员单个专员的分析和证明，这样能够达到整体的目标吗？</strong></p>
<p>答：</p>
<p>可以。首先，这个尽量吻合，我们需要量化。对单个专员，我们用偏差量化这个吻合的程度；对于整体，方差或者说所有专员的偏差平方和，是一个很好的量化指标。当然，更直观的也许是用偏差的绝对值和，但是绝对值计算起来，对大于0小于0需要分情况讨论，比较繁琐，故使用平方和更方便。如果说每个专员都偏差都达到了最小，那么整体上看，偏差平方和也一定达到了最小，因为这个和是所有的非负数相加。你可以这样想，若每个专员的偏差都达到了最小，而偏差平方和却没有最小，就说明它还可以更小，就说明有某一个专员的偏差还可以更小，这是不可能的，因为每个专员的偏差都已经最小了，就是不可能再小的意思。</p>
<p><strong>【命题】用E表示偏差。E1, E2, ..., En 都已达到最小，那么 E1<sup>2</sup> + E2<sup>2</sup> + ... + En<sup>2</sup> 一定也达到了最小。</strong></p>
<p>【证略】</p>
<p><strong>【推论】每个电话专员的实际分配与理想分配的偏差最小，等价于总体分配产生的方差（偏差平方和或者误差平方和）最小。</strong></p>
<p><strong>3. 为什么给一个电话专员的理想分配数量是用待分配线索总数乘以他的当前权重占比，然后减去累积偏差值？</strong></p>
<p>答：</p>
<p>理想分配结果是每个专员都没有被多分也没有被少分。直观地说，待分配数量乘以当前权重占比得到的数，能够使得单次分配最优（单次理想值）。减去累积偏差的效果是以前多分了的，这次少分点，以前少分了的，这次多分点。</p>
<p><strong>【命题】一个主管分配销售线索分配了n次，第i次的待分配数量是Si，具体分配情况如下表（i = 1, 2, ..., n）。</strong></p>
<table class="confluenceTable" style="border-collapse: collapse; margin: 0px; overflow-x: auto; color: #333333; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
<tbody>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">电话专员</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">归一化的权重占比</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">
<p style="margin: 0px; padding: 0px;">单次理想分配数量</p>
</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">
<p style="margin: 0px; padding: 0px;">（累积）理想分配数量</p>
</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">
<p style="margin: 0px; padding: 0px;">分配前累积偏差</p>
</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">
<p style="margin: 0px; padding: 0px;">当次实际分配数量</p>
</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">
<p style="margin: 0px; padding: 0px;">当次偏差</p>
</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">
<p style="margin: 0px; padding: 0px;">分配后累积偏差</p>
</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">TM1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">W1i</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">S * W1i</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">S * W1i - D1i</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">D1i = &Sigma;(L1j - S*W1j) j = 1, 2, ..., i-1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">L1i</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">E1i = L1i - S*W1i</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">D1i + E1i =&nbsp;&Sigma;(L1j - S*W1j) j = 1, 2, ..., i</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">TM2</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">W2i</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">S * W2i</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">S * W2i - D2i</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">D2i = &Sigma;(L2j - S*W2j) j = 1, 2, ..., i-1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">L2i</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">E2i = L2i - S*W2i</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">D2i + E2i =&nbsp;&Sigma;(L2j - S*W2j) j = 1, 2, ..., i</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">小计</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">Si</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">Si</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">Si</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0</td>
</tr>
</tbody>
</table>
<p><strong>那么，当且仅当 L1i（实际） 与 S*W1i - D1i（理想） 的误差最小时，TM1的分配后累积误差（偏差的绝对值）最小。</strong></p>
<p>【证明】</p>
<p>TM1的第i次分配后累积偏差=D1i + E1i = D1i + L1i - S*W1i = L1i - (S*W1i - D1i)。显然，L1i 与 S*W1i - D1i 越接近，则分配后累积误差越小。反之亦然。</p>
<p>【证毕】</p>
<p><strong>4. 微调方案一定要按照解决方案中所描述的步骤进行吗？</strong></p>
<p>答：</p>
<p>是的。我现在想不到另外的能够达到目标的微调方案，如果你能想到，请分享给我。但是我敢保证这里列出的微调方案能够达到目标，换句话说，这个微调方案即使不是最简单的，但一定是正确的。为什么？请你仔细想一想。若有漏洞，请指出。</p>
<p>____________________________________________________________________________</p>
<p><strong><span style="font-size: large;">以上问题是我的自问自答，以下是回答别人的疑问及意见：</span></strong></p>
<p>____________________________________________________________________________</p>
<h2><span style="color: #800080;">问题列表：</span></h2>
<div id="comment-318603840" class="comment  " style="margin: 0px 0px -1px; padding: 10px 0px; border-top-width: 1px; border-top-style: solid; border-top-color: #cccccc; clear: left; position: relative; color: #333333; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
<div class="comment-header" style="margin: 0px 0px 10px; padding: 0px 0px 0px 42px;">
<h4 class="author" style="margin: 0px; padding: 0px; font-size: 14px; line-height: 1.2; color: #666666;"><a class="url fn confluence-userlink userlink-1" style="color: #3b73af; text-decoration: none; vertical-align: top;" title="" href="https://confluence.englishtown.com/display/~Chris.Chenchao">Chris Chenchao</a></h4>
</div>
<div class="comment-body" style="margin: 0px; padding: 0px 0px 0px 42px;">
<div class="comment-content wiki-content" style="margin: -5px 0px 0px; padding: 0px 20px 0px 0px;">
<p style="margin: 0px; padding: 0px;"><a class="confluence-userlink user-mention userlink-0" style="color: #3b73af; text-decoration: none; display: inline-block; background-color: #f5f5f5; padding: 0px 2px; border: 1px solid #dddddd; border-top-left-radius: 3px; border-top-right-radius: 3px; border-bottom-right-radius: 3px; border-bottom-left-radius: 3px; line-height: 16px; white-space: nowrap; background-position: initial initial; background-repeat: initial initial;" title="" href="https://confluence.englishtown.com/display/~Jeff.Tian">Jeff Tian</a>, this is a really interesting page.</p>
<p style="margin: 10px 0px 0px; padding: 0px;">Btw, what if a new team member joins the team?</p>
<p style="margin: 10px 0px 0px; padding: 0px;">Which is TM1, TM2, and in the middle we add TM3? In this case, I guess the expected allocation will be updated.</p>
<p style="margin: 10px 0px 0px; padding: 0px;">And shoud we 累计偏差归零重新来吗？</p>
<p style="margin: 10px 0px 0px; padding: 0px;"><img class="emoticon emoticon-smile" style="margin: 0px; padding: 0px; vertical-align: text-bottom;" src="https://confluence.englishtown.com/s/en_GB-1988229788/4727/ffd10e10ff7bc0a1d7e29b4d2225707dd7f03d0b.10/_/images/icons/emoticons/smile.png" alt="(smile)" /></p>
</div>
<div class="comment-actions" style="margin: 10px 0px 0px; padding: 0px; font-size: 12px; clear: both;">
<ul class="comment-actions-primary" style="margin: 0px; overflow: auto; line-height: 16px; display: inline; padding: 0px;">
<li class="first action-reply-comment" style="border: 0px; list-style-type: none; display: inline-block; margin: 0px; color: #707070; float: left;"><a id="reply-comment-318603840" style="color: #707070; text-decoration: none;" href="https://confluence.englishtown.com/pages/replycomment.action?commentId=318603840&amp;pageId=318603336">&nbsp;</a></li>
</ul>
</div>
</div>
</div>
<ol class="comment-threads" style="margin: 0px; list-style-type: none; padding-left: 40px; color: #333333; font-family: Arial, sans-serif; font-size: 14px; line-height: 20px;">
<li id="comment-thread-319193644" class="comment-thread">
<div id="comment-319193644" class="comment   odd" style="margin: 0px 0px -1px; padding: 10px 0px; border-top-width: 1px; border-top-style: solid; border-top-color: #cccccc; clear: left; position: relative;">
<p class="comment-user-logo" style="margin: 0px 10px 0px 0px; padding: 0px; width: 32px; float: left;"><a class="userLogoLink userlink-0" style="color: #3b73af; text-decoration: none; display: inline; line-height: 30px;" title="" href="https://confluence.englishtown.com/display/~Jeff.Tian"><img class="userLogo logo" style="margin: 0px; padding: 0px; width: 32px; height: 32px; border-top-left-radius: 2px; border-top-right-radius: 2px; border-bottom-right-radius: 2px; border-bottom-left-radius: 2px;" title="" src="https://confluence.englishtown.com/download/attachments/223739995/me.png?version=1&amp;modificationDate=1378433470086&amp;api=v2" alt="User icon: Jeff.Tian" /></a></p>
<div class="comment-header" style="margin: 0px 0px 10px; padding: 0px 0px 0px 42px;">
<h4 class="author" style="margin: 0px; padding: 0px; font-size: 14px; line-height: 1.2; color: #666666;"><a class="url fn confluence-userlink userlink-0" style="color: #3b73af; text-decoration: none; vertical-align: top;" title="" href="https://confluence.englishtown.com/display/~Jeff.Tian">Jeff Tian</a></h4>
</div>
<div class="comment-body" style="margin: 0px; padding: 0px 0px 0px 42px;">
<div class="comment-content wiki-content" style="margin: -5px 0px 0px; padding: 0px 20px 0px 0px;">
<p style="margin: 0px; padding: 0px;">It's OK to add new team members. We don't need to&nbsp;累计偏差归零重新来。</p>
<p style="margin: 10px 0px 0px; padding: 0px;">我们的目标是，让实际分配的线索数量与理想的分配数量长期来看尽量接近。分配是分批次来的，每次分配的时候，Team member 都已经确定好了。虽然可能有些人是新来的，没有参加过上次分配；以及有些人上次分过，这次不在组里了。</p>
<p style="margin: 10px 0px 0px; padding: 0px;">累计偏差永远不归零，每次分配后产生的偏差可正可负，这个算法本身保证了累计偏差长期来看尽量接近于0。</p>
<p style="margin: 10px 0px 0px; padding: 0px;">比如上次给某人如果多分了导致累计偏差=0.4，下次分配时，只要他还在组里，会给他少分一点（对理想的分配数进行向下取整），产生一个负的偏差，比如-0.2，这样，在这次分配后他的累计偏差变成了0.2。</p>
<p style="margin: 10px 0px 0px; padding: 0px;">对于新加入组员的情况，举个例子：</p>
<p style="margin: 10px 0px 0px; padding: 0px;">第一次共分配了15个销售线索给甲和乙，甲的权重是0.7，乙的权重是0.3。那么最精确最理想不产生偏差的分配方案是，给甲和乙分别分配10.5和4.5个。但是由于实际情况，我们不得不进行取整，于是，给甲分配了11个，而给乙分配了4个。这样导致甲和乙的累计偏差（=这次的单次偏差，因为这是第一次分配）分别是0.5（相对理想分配数量多分了0.5个）和-0.5（相对理想分配数量少分了0.5个）。</p>
<p style="margin: 10px 0px 0px; padding: 0px;">分了这一次后，累计的方差（偏差平方和是0.5^2 + (-0.5)^2 = ）0.5。理想情况是方差为0，但是实际需要导致这个方差为0.5，而且找不到方案能让方差比0.5更小了。</p>
<p style="margin: 10px 0px 0px; padding: 0px;">下次又来了17个销售线索，并且加入了新的TM丙。并且这次主管对权重进行了调整，比如新的权重是（并计算理想的分配数量）：</p>
<div class="table-wrap" style="margin: 10px 0px 0px; padding: 0px; overflow-x: auto;">
<table class="confluenceTable tablesorter" style="border-collapse: collapse; margin: 0px; overflow-x: auto;">
<thead>
<tr class="sortableHeader"><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">TM</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">权重</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;" colspan="1">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">理想的分配数量</div>
</th></tr>
</thead>
<tbody>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">甲</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.4</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">17 * 0.4 = 6.8</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">乙</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.3</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">17 * 0.3 = 5.1</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">丙</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">0.3</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">17 * 0.3 = 5.1</td>
</tr>
</tbody>
</table>
</div>
<p style="margin: 10px 0px 0px; padding: 0px;">那么如果再次四舍五入会是这样的结果：</p>
<p style="margin: 10px 0px 0px; padding: 0px;">第二分配表（<strong>方案1</strong>）</p>
<div class="table-wrap" style="margin: 10px 0px 0px; padding: 0px; overflow-x: auto;">
<table class="confluenceTable tablesorter" style="border-collapse: collapse; margin: 0px; overflow-x: auto;">
<thead>
<tr class="sortableHeader"><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">TM</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">权重</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;" colspan="1">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">理想的分配数量</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;" colspan="1">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">实际分配数量</div>
</th></tr>
</thead>
<tbody>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">甲</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.4</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">17 * 0.4 = 6.8</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">7</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">乙</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.3</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">17 * 0.3 = 5.1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">5</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">丙</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">0.3</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">17 * 0.3 = 5.1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">5</td>
</tr>
</tbody>
</table>
</div>
<p style="margin: 10px 0px 0px; padding: 0px;">这是没有考虑累计偏差的直接分配方法，从单次看，方差是最小的，但是让我们来看看两次合计起来的情况：</p>
<div class="table-wrap" style="margin: 10px 0px 0px; padding: 0px; overflow-x: auto;">
<table class="confluenceTable tablesorter" style="border-collapse: collapse; margin: 0px; overflow-x: auto;">
<thead>
<tr class="sortableHeader"><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">TM</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">第一次分配理想数量</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;" colspan="1">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">第二次分配理想数量</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;" colspan="1">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">总的理想数量</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;" colspan="1">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">第一次实际分配数量</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;" colspan="1">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">第二次实际分配数量</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;" colspan="1">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">总的实际分配数量</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;" colspan="1">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">总的偏差</div>
</th></tr>
</thead>
<tbody>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">甲</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">10.5</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">6.8</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1"><strong>17.3</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">11</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">7</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1"><strong>18</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">0.7</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">乙</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">4.5</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">5.1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1"><strong>9.6</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">4</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">5</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1"><strong>9</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">-0.6</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">丙</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">0</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">5.1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1"><strong>5.1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">0</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">5</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1"><strong>5</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">-0.1</td>
</tr>
</tbody>
</table>
</div>
<p style="margin: 10px 0px 0px; padding: 0px;">总体来看，方差为<strong>0.86</strong>。</p>
<p style="margin: 10px 0px 0px; padding: 0px;">同样的例子，在第二次分配时我们将累计偏差考虑进去，便能够找到如下的方案，总体产生的方差更小，即使中途有新的TM加入。</p>
<p style="margin: 10px 0px 0px; padding: 0px;">看下面的表，注意和方案1的表比较，我们的理想分配数量变化了，从而四舍五入的实际分配数量也变化了。这就是文章中所提的（累积）理想分配数量 = Si * Wji - Dji。</p>
<p style="margin: 10px 0px 0px; padding: 0px;">第二次分配表（<strong>方案2</strong>）</p>
<div class="table-wrap" style="margin: 10px 0px 0px; padding: 0px; overflow-x: auto;">
<table class="confluenceTable tablesorter" style="border-collapse: collapse; margin: 0px; overflow-x: auto;">
<thead>
<tr class="sortableHeader"><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">TM</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;" colspan="1">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">累计偏差</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">权重</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;" colspan="1">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">理想的分配数量</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;" colspan="1">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">实际分配数量</div>
</th></tr>
</thead>
<tbody>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">甲</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">0.5 (上次多分了)</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.4</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">17 * 0.4 - 0.5 = 6.3 （这次要少分些）</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">6</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">乙</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">-0.5</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">0.3</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">17 * 0.3 - (-0.5) = 5.6</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">6</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">丙</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">0</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">0.3</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">17 * 0.3 - 0 = 5.1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">5</td>
</tr>
</tbody>
</table>
</div>
<p style="margin: 10px 0px 0px; padding: 0px;">好，现在我们再来统计一下：</p>
<div class="table-wrap" style="margin: 10px 0px 0px; padding: 0px; overflow-x: auto;">
<table class="confluenceTable tablesorter" style="border-collapse: collapse; margin: 0px; overflow-x: auto;">
<thead>
<tr class="sortableHeader"><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">TM</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">第一次分配理想数量</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;" colspan="1">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">第二次分配理想数量</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;" colspan="1">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">总的理想数量</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;" colspan="1">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">第一次实际分配数量</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;" colspan="1">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">第二次实际分配数量</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;" colspan="1">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">总的实际分配数量</div>
</th><th class="confluenceTh sortableHeader" style="border: 1px solid #dddddd; padding: 7px 15px 7px 10px; vertical-align: top; background-color: #f0f0f0; color: #333333; cursor: pointer; background-position: 100% 50%; background-repeat: no-repeat no-repeat;" colspan="1">
<div class="tablesorter-header-inner" style="margin: 0px; padding: 0px;">总的偏差</div>
</th></tr>
</thead>
<tbody>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">甲</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">10.5</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">6.8</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1"><strong>17.3</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">11</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1"><span style="color: #ff0000;">6</span></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1"><strong>17</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">-0.3</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">乙</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;">4.5</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">5.1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1"><strong>9.6</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">4</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1"><span style="color: #ff0000;">6</span></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1"><strong>10</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">0.4</td>
</tr>
<tr>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">丙</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">0</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">5.1</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1"><strong>5.1</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">0</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">5</td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1"><strong>5</strong></td>
<td class="confluenceTd" style="border: 1px solid #dddddd; padding: 7px 10px; vertical-align: top;" colspan="1">-0.1</td>
</tr>
</tbody>
</table>
</div>
<p style="margin: 10px 0px 0px; padding: 0px;">新的方差是：<strong>0.26</strong>，比0.86要小，而且在现在的整数约束下再也找不到其他分配方案，能产生比0.26更小的方差了。</p>
<p style="margin: 10px 0px 0px; padding: 0px;">相信这个例子能够更加直观地说明为什么<strong>组员的变化</strong>以及<strong>权重的变化</strong>都<strong>不</strong>会影响考虑累计偏差的分配方案的<strong>最优性</strong>了。</p>
<p style="margin: 10px 0px 0px; padding: 0px;">非常感谢你的问题！</p>
</div>
</div>
</div>
</li>
</ol>