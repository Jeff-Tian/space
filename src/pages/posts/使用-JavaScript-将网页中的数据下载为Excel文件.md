---
stackbit_url_path: >-
  posts/使用-JavaScript-将网页中的数据下载为Excel文件
title: '使用 JavaScript 将网页中的数据下载为Excel文件'
date: '2010-05-13 07:44:27'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <p>&nbsp;</p>
<p>数据导出的方法可以分为两大类：第一类是在Web服务器端生成符合Excel格式的字符串或文件流供用户下载；第二类是在客户端使用Script脚本调用本地Excel对象。将数据直接插入到Excel文件中。</p>
<p>&nbsp;</p>
<p>数据导出既可以在Web服务器端，也可以在客户端实现，在客户端配置允许的情况下。一般建议使用客户端方式，具体实现方法，举例如下。</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<pre class="brush: javascript">        function exportToExcel(sheetName) {
            // 启动 Excel 和获取 Application 对象
            var excelApp;

            try {
                excelApp = new ActiveXObject("Excel.Application");
            } catch (e) {
                alert("Excel 创建失败。可能是因为浏览器安全设置未允许ActiveXObject的运行，或者你使用的浏览器不支持ActiveXObject，也可能是由于你的系统未安装Excel。\n详细信息：\n" + e);
                return;
            }

            // 增加工作薄和Sheet，指定Sheet名称
            var wkb = excelApp.Workbooks.Add;
            var wks = wkb.ActiveSheet;
            wks.Name = sheetName;

            var row, col;

            row = 1;
            col = 1;

            // 表头
            row++;
            wks.Cells(row, col).Value = "入仓储确认单";

            row++;
            wks.Cells(row, col).Value = "部门：";
            col++;
            wks.Cells(row, col).Value = "NOKIA 仓储组";
            col--;
            row++;
            wks.Cells(row, col).Value = "入货日期：";
            col++;
            wks.Cells(row, col).Value = "2010年5月4日";
            col++;
            wks.Cells(row, col).Value = "共（）箱";

            var subTotalRow = row;
            var subTotalCol = col;

            // 表身
            var table = document.getElementById("ctl00_ctl00_ContentPlaceHolder1_nwmsOperatorContentPlaceHolder_GridView_Warehousing");
            
            for (var curRow = 1; curRow &lt; table.rows.length + 1; curRow++) {
                theRow = table.rows[curRow - 1];
                if (curRow &gt; 1) {
                    wks.Cells(curRow + row, 1).Value = curRow - 1;
                } else {
                    wks.Cells(curRow + row, 1).Value = "序列号";
                }
                for (var curCell = 2; curCell &lt; theRow.cells.length + 1; curCell++) {
                    wks.Cells(curRow + row, curCell).Value = theRow.cells[curCell - 1].innerText;
                }
            }

            wks.Cells(subTotalRow, subTotalCol).Value = "共（" + (curRow - 2) + "）箱";

            // 表尾
            row = curRow + row + 1;
            col = 1;

            wks.Cells(row, col).Value = "NOKIA项目入货人：";
            col++;
            wks.Cells(row, col).Value = "张惠娟";
            col++;
            wks.Cells(row, col).Value = "大通仓储收货人：";
            col = 1;
            row++;
            wks.Cells(row, col).Value = "入货日期：";
            col++;
            var date = new Date();
            wks.Cells(row, col).Value = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
            col++;
            wks.Cells(row, col).Value = "收货日期：";
            
            

            // 显示 Excel
            excelApp.Visible = true;
        }<font class="Apple-style-span" face="Arial, Verdana, sans-serif"><span class="Apple-style-span" style="white-space: normal;"> </span></font></pre>
<p>&nbsp;</p>
<p>客户端导出方式的优势在于：首先。它采用的是客户端代码，不占用任何服务器资源；其次．采用了Excel Application对象编程，所有的格式和样式都可以通过编程实现，比较灵活；并且，生成的文件即为Excel 工作簿格式，无须转换即可导入。</p>
<p>&nbsp;</p>
<p>然而．正是因为在户端操作，就要求客户端安装Excel．并且在导出时最好不要进行别的Excel操作；同样，IE对安全性也有一些专门的要求，必须修改IE的安全配置：</p>
<p>&nbsp;</p>
<p>●将IIS站点加入IE的信任站点中，此时程序可以运行；</p>
<p>&nbsp;</p>
<p>●当打开Excel时．IE会弹出如图l提示要屏蔽此提示。可以更改IE安全设置或修改以下注册表键值：</p>
<p>&nbsp;</p>
<p>【HKEY_CURRENT_USERLSofiware\Microsofl\Windows\CurrentVersion\lntemet Settings\Zones\2】”1201”=dword：00000001</p>
<p>
</p><p>将”1201” 从dword：00000001 设为dword：00000000。</p>
<p></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
      