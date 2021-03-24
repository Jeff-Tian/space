---
stackbit_url_path: >-
  posts/IE-7-不支持-tr-元素的-border-属性
title: 'IE 7 不支持 tr 元素的 border 属性'
date: '2010-01-19 09:50:14'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em;">
<p>IE 7 不支持 tr 元素的 border 属性，从而在写 CSS 时，如果需要对表格的行加上自定义的边框，则还需要对 td 的上下边框进行指定。然后将 table 的 border-collapse 属性指定为 collapse，这样，即使同时指定的 tr 与 td 的边框，也不会让行与行的交界处所指定的边框变得比自定义的更粗。如下：</p>
<pre style="text-indent: 0;" class="brush: css">table {
    border-collapse: collapse;
    border: solid 1px black;
}

table tr {
    border: solid 1px black;
}

table tr td {
    border-top: solid 1px black;
    border-bottom: solid 1px black;
}
</pre>
<p>以下是一个表格示例，它的行边框在IE 7及其他浏览器都显示正常。</p>
<style type="text/css">
<!--

    
    /* 课程列表 */
    #divCourseList table 
    {
    	margin: 0;
    	padding: 0;
    	border: solid 1px #DEDEDE;
    	border-collapse: collapse;
    	width: 100%;
    	height: auto;
    	font-size: 10px;
    }
    
    #divCourseList table thead th 
    {
    	height: 20px;
    	text-align: left;
    }
    
    #divCourseList table tbody tr 
    {
    	border: solid 1px #DEDEDE;
    }
    
    /* IE 7 及以下不支持 tr 的 border 属性 */
    #divCourseList table tbody tr td
    {
    	border-top: solid 1px #dedede;
    	border-bottom: solid 1px #dedede;
    }
    
    #divCourseList table tbody tr:hover
    {
    	border: solid 2px #66B114;
    	background-color: #DDF89A;
    }
    
    #divCourseList table tbody tr.selected
    {
    	border: solid 2px #66B114;
    	background-color: #DDF89A;
    }
    
    #divCourseList table tbody tr td 
    {
    	vertical-align: middle;
    	height: 50px;
    }
    
    #divCourseList table tbody tr td.hook
    {
    	background-color: #83C635;
    	width: 25px;
    	text-align: center;
    }
    
    #divCourseList table tbody tr td.detail 
    {
    	padding-left: 10px;
    	padding-right: 10px;
    }
    
    #divCourseList table tbody tr td.detail .name 
    {
    	font-weight: bold;
    	font-size: 150%;
    	display: block;
    	height: auto;
    	margin: 10px;
    }
    
    #divCourseList table tbody tr td.detail .desc 
    {
    	color: #333333;
    	margin: 10px;
    }
    
    
    #divCourseList table tbody tr td.price 
    {
    	width: 150px;
    	font-family: arial;
    }
    
    #divCourseList table tbody tr td.price div 
    {
    	display: block;
    	height: auto;
    	margin: 10px;
    }
    
    #divCourseList table tbody tr td.price .price_member span
    {    	
    	font-weight: bold;
    	color: #CC0000;
    	font-size: 180%;
    }
    
    #divCourseList table tbody tr td.price .price_publish span
    {    	
    	text-decoration: line-through;
    	font-size: 150%;
    	color: #660000;
    }
    
    #divCourseList table tfoot td 
    {
    	height: 20px;
    	text-align: left;
    }
-->
</style>
<!-- 课程列表 -->
                <div id="divCourseList">
                    <table cellpadding="2" id="tbCourseList">
                        <!-- 课程列表头部 -->
                        <thead>
                            <tr>
                                <!-- 对比 -->
                                <th style="background: url('../img/icon_down.gif') no-repeat left center;">                                    
                                </th>
                                <th colspan="2" style="position: relative;">
                                    <input type="button" value="对比课程">                                </th>
                                <!-- 对比结束 -->
                            </tr>
                        </thead>
                        <!-- 课程列表头部结束 -->
                        <tbody>
                            <tr>
                                <!-- 勾子（如课程对比） -->
                                <td class="hook">
                                    <input type="checkbox">
                                </td>
                                <!-- 勾子结束 -->
                                <!-- 明细 -->
                                <td class="detail">
                                    <!-- 名称层 -->
                                    <div class="name">
                                        <a href="course.asp">职业健康安全OHSAS18001内审员</a>
                                    </div>
                                    <!-- 名称层结束 -->
                                    <div class="desc">
                                        地点： 上海； 开课日期： 1月18日； 课时： 12； 培训机构： 英标BSI管理
                                    </div>
                                </td>
                                <!-- 明细结束 -->
                                <!-- 价格层 -->
                                <td class="price">                                
                                    <div class="price_member"><label>会员价： </label><span>￥1,890</span></div>
                                    <div class="price_publish"><label>市价： </label><span>￥2,100</span></div>                                    
                                </td>
                                <!-- 价格层结束 -->
                            </tr>
                            <tr>
                                <!-- 勾子（如课程对比） -->
                                <td class="hook">
                                    <input type="checkbox">
                                </td>
                                <!-- 勾子结束 -->
                                <!-- 明细 -->
                                <td class="detail">
                                    <!-- 名称层 -->
                                    <div class="name">
                                        <a href="">职业健康安全OHSAS18001内审员</a>
                                    </div>
                                    <!-- 名称层结束 -->
                                    <div class="desc">
                                        地点： 上海； 开课日期： 1月18日； 课时： 12； 培训机构： 英标BSI管理
                                    </div>
                                </td>
                                <!-- 明细结束 -->
                                <!-- 价格层 -->
                                <td class="price">                                
                                    <div class="price_member"><label>会员价： </label><span>￥1,890</span></div>
                                    <div class="price_publish"><label>市价： </label><span>￥2,100</span></div>                                    
                                </td>
                                <!-- 价格层结束 -->
                            </tr>
                            <tr>
                                <!-- 勾子（如课程对比） -->
                                <td class="hook">
                                    <input type="checkbox">
                                </td>
                                <!-- 勾子结束 -->
                                <!-- 明细 -->
                                <td class="detail">
                                    <!-- 名称层 -->
                                    <div class="name">
                                        <a href="">职业健康安全OHSAS18001内审员</a>
                                    </div>
                                    <!-- 名称层结束 -->
                                    <div class="desc">
                                        地点： 上海； 开课日期： 1月18日； 课时： 12； 培训机构： 英标BSI管理
                                    </div>
                                </td>
                                <!-- 明细结束 -->
                                <!-- 价格层 -->
                                <td class="price">                                
                                    <div class="price_member"><label>会员价： </label><span>￥1,890</span></div>
                                    <div class="price_publish"><label>市价： </label><span>￥2,100</span></div>                                    
                                </td>
                                <!-- 价格层结束 -->
                            </tr>
                            <tr>
                                <!-- 勾子（如课程对比） -->
                                <td class="hook">
                                    <input type="checkbox">
                                </td>
                                <!-- 勾子结束 -->
                                <!-- 明细 -->
                                <td class="detail">
                                    <!-- 名称层 -->
                                    <div class="name">
                                        <a href="">职业健康安全OHSAS18001内审员</a>
                                    </div>
                                    <!-- 名称层结束 -->
                                    <div class="desc">
                                        地点： 上海； 开课日期： 1月18日； 课时： 12； 培训机构： 英标BSI管理
                                    </div>
                                </td>
                                <!-- 明细结束 -->
                                <!-- 价格层 -->
                                <td class="price">                                
                                    <div class="price_member"><label>会员价： </label><span>￥1,890</span></div>
                                    <div class="price_publish"><label>市价： </label><span>￥2,100</span></div>                                    
                                </td>
                                <!-- 价格层结束 -->
                            </tr>
                            <tr>
                                <!-- 勾子（如课程对比） -->
                                <td class="hook">
                                    <input type="checkbox">
                                </td>
                                <!-- 勾子结束 -->
                                <!-- 明细 -->
                                <td class="detail">
                                    <!-- 名称层 -->
                                    <div class="name">
                                        <a href="">职业健康安全OHSAS18001内审员</a>
                                    </div>
                                    <!-- 名称层结束 -->
                                    <div class="desc">
                                        地点： 上海； 开课日期： 1月18日； 课时： 12； 培训机构： 英标BSI管理
                                    </div>
                                </td>
                                <!-- 明细结束 -->
                                <!-- 价格层 -->
                                <td class="price">                                
                                    <div class="price_member"><label>会员价： </label><span>￥1,890</span></div>
                                    <div class="price_publish"><label>市价： </label><span>￥2,100</span></div>                                    
                                </td>
                                <!-- 价格层结束 -->
                            </tr>
                            <tr>
                                <!-- 勾子（如课程对比） -->
                                <td class="hook">
                                    <input type="checkbox">
                                </td>
                                <!-- 勾子结束 -->
                                <!-- 明细 -->
                                <td class="detail">
                                    <!-- 名称层 -->
                                    <div class="name">
                                        <a href="">职业健康安全OHSAS18001内审员</a>
                                    </div>
                                    <!-- 名称层结束 -->
                                    <div class="desc">
                                        地点： 上海； 开课日期： 1月18日； 课时： 12； 培训机构： 英标BSI管理
                                    </div>
                                </td>
                                <!-- 明细结束 -->
                                <!-- 价格层 -->
                                <td class="price">                                
                                    <div class="price_member"><label>会员价： </label><span>￥1,890</span></div>
                                    <div class="price_publish"><label>市价： </label><span>￥2,100</span></div>                                    
                                </td>
                                <!-- 价格层结束 -->
                            </tr>
                            <tr>
                                <!-- 勾子（如课程对比） -->
                                <td class="hook">
                                    <input type="checkbox">
                                </td>
                                <!-- 勾子结束 -->
                                <!-- 明细 -->
                                <td class="detail">
                                    <!-- 名称层 -->
                                    <div class="name">
                                        <a href="">职业健康安全OHSAS18001内审员</a>
                                    </div>
                                    <!-- 名称层结束 -->
                                    <div class="desc">
                                        地点： 上海； 开课日期： 1月18日； 课时： 12； 培训机构： 英标BSI管理
                                    </div>
                                </td>
                                <!-- 明细结束 -->
                                <!-- 价格层 -->
                                <td class="price">                                
                                    <div class="price_member"><label>会员价： </label><span>￥1,890</span></div>
                                    <div class="price_publish"><label>市价： </label><span>￥2,100</span></div>                                    
                                </td>
                                <!-- 价格层结束 -->
                            </tr>
                            <tr>
                                <!-- 勾子（如课程对比） -->
                                <td class="hook">
                                    <input type="checkbox">
                                </td>
                                <!-- 勾子结束 -->
                                <!-- 明细 -->
                                <td class="detail">
                                    <!-- 名称层 -->
                                    <div class="name">
                                        <a href="">职业健康安全OHSAS18001内审员</a>
                                    </div>
                                    <!-- 名称层结束 -->
                                    <div class="desc">
                                        地点： 上海； 开课日期： 1月18日； 课时： 12； 培训机构： 英标BSI管理
                                    </div>
                                </td>
                                <!-- 明细结束 -->
                                <!-- 价格层 -->
                                <td class="price">                                
                                    <div class="price_member"><label>会员价： </label><span>￥1,890</span></div>
                                    <div class="price_publish"><label>市价： </label><span>￥2,100</span></div>                                    
                                </td>
                                <!-- 价格层结束 -->
                            </tr>
                            <tr>
                                <!-- 勾子（如课程对比） -->
                                <td class="hook">
                                    <input type="checkbox">
                                </td>
                                <!-- 勾子结束 -->
                                <!-- 明细 -->
                                <td class="detail">
                                    <!-- 名称层 -->
                                    <div class="name">
                                        <a href="">职业健康安全OHSAS18001内审员</a>
                                    </div>
                                    <!-- 名称层结束 -->
                                    <div class="desc">
                                        地点： 上海； 开课日期： 1月18日； 课时： 12； 培训机构： 英标BSI管理
                                    </div>
                                </td>
                                <!-- 明细结束 -->
                                <!-- 价格层 -->
                                <td class="price">                                
                                    <div class="price_member"><label>会员价： </label><span>￥1,890</span></div>
                                    <div class="price_publish"><label>市价： </label><span>￥2,100</span></div>                                    
                                </td>
                                <!-- 价格层结束 -->
                            </tr>
                        </tbody>

                        <!-- 课程列表底部 -->
                        <tfoot>
                            <tr>
                                <!-- 对比 -->
                                <td style="background: url('../img/icon_up.gif') no-repeat left center;">                                    
                                </td>
                                <td colspan="2" style="position: relative;">
                                    <input type="button" value="对比课程">                                </td>
                                <!-- 对比结束 -->
                            </tr>
                        </tfoot>
                        <!-- 课程列表底部结束 -->
                    </table>
                </div>
                <!-- 课程列表结束 -->
</div>
      