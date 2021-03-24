---
stackbit_url_path: >-
  posts/使用JavaScript复制网页控件中的内容
title: '使用JavaScript复制网页控件中的内容'
date: '2010-01-26 08:32:30'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: >-
template: post
---

        <div style="text-indent: 2em;">
<p>原理：先选中控件中的内容（如文本），再执行文档对象的复制命令。</p>
<p>代码：</p>
<pre class="brush: javascript" style="text-indent: 0;">function copyIt(o) {
  try {
    if (o.value.length &gt; 0 ) {
      o.select();
      window.document.execCommand('Copy');
      alert('复制成功');
    }
  } catch (oError) {
    alert(oError);
  }
}
</pre>
<p><a href="http://www.myfootprints.cn/javascript/default.asp?s=%2F%2F%20%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C%0A%2F%2F%20%E6%AD%A4%E5%87%BD%E6%95%B0%E7%94%A8%E4%BA%8E%E7%BB%99%E6%8C%87%E5%AE%9A%E7%9A%84%E5%AF%B9%E8%B1%A1%E6%B7%BB%E5%8A%A0%E4%BA%8B%E4%BB%B6%E5%A4%84%E7%90%86%E5%87%BD%E6%95%B0%0Afunction%20addEventHandler(oTarget%2C%20sEventType%2C%20fnHandler%2C%20vArgument%20%2F*%20optional%20*%2F)%20%7B%0A%20%20%20%20%2F%2F%23%20%E7%94%9F%E6%88%90handler%E5%87%BD%E6%95%B0%0A%20%20%20%20var%20handler%3B%0A%20%20%20%20if%20(typeof(vArgument)%20%3D%3D%20'undefined')%20%7B%0A%20%20%20%20%20%20%20%20handler%20%3D%20fnHandler%3B%0A%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20handler%20%3D%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20fnHandler(vArgument)%3B%0A%20%20%20%20%20%20%20%20%7D%3B%0A%20%20%20%20%7D%0A%20%20%20%20if%20(oTarget.addEventListener)%20%7B%20%20%20%20%20%20%20%20%20%2F%2F%20for%20DOM-compliant%20browsers%0A%20%20%20%20%20%20%20%20oTarget.addEventListener(sEventType%2C%20handler%2C%20false)%3B%0A%20%20%20%20%7D%20else%20if%20(oTarget.attachEvent)%20%7B%20%20%20%20%20%20%20%2F%2F%20for%20IE%0A%20%20%20%20%20%20%20%20oTarget.attachEvent(%22on%22%20%2B%20sEventType%2C%20handler)%3B%0A%20%20%20%20%7D%20else%20%7B%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%2F%2F%20for%20all%20others%0A%20%20%20%20%20%20%20%20oTarget%5B%22on%22%20%2B%20sEventType%5D%20%3D%20handler%3B%0A%20%20%20%20%7D%0A%20%7D%0A%0Afunction%20copyIt(o)%20%7B%0A%20%20try%20%7B%0A%20%20%20%20if%20(o.value.length%20%3E%200%20)%20%7B%0A%20%20%20%20%20%20o.select()%3B%0A%20%20%20%20%20%20window.document.execCommand('Copy')%3B%0A%20%20%20%20%20%20alert('%E5%A4%8D%E5%88%B6%E6%88%90%E5%8A%9F')%3B%0A%20%20%20%20%7D%0A%20%20%7D%20catch%20(oError)%20%7B%0A%20%20%20%20alert(oError)%3B%0A%20%20%7D%0A%7D%0A%0A%2F%2F%20%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AA%E6%8E%A7%E4%BB%B6%0Afunction%20createAComponent()%20%7B%0A%09var%20o%20%3D%20document.createElement('div')%3B%0A%09o.innerHTML%20%3D%20'%3Cinput%20type%3D%22text%22%20value%3D%22%E8%BF%99%E9%87%8C%E6%98%AF%E8%A6%81%E5%A4%8D%E5%88%B6%E7%9A%84%E6%96%87%E6%9C%AC%E3%80%82%22%20id%3D%22id2%22%20%2F%3E%20%3Cinput%20type%3D%22button%22%20value%3D%22%E5%A4%8D%E5%88%B6%22%20id%3D%22id1%22%20%2F%3E'%3B%0A%09document.body.insertBefore(o%2C%20document.body.firstChild)%3B%0A%7D%0A%0AcreateAComponent()%3B%0AaddEventHandler(document.getElementById('id1')%2C%20'click'%2C%20copyIt%2C%20document.getElementById('id2'))%3B" target="_blank" title="点击这里运行">现在就来练习使用它！</a></p>
</div>
      