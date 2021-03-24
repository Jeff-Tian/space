---
stackbit_url_path: >-
  posts/The-inverse-function-of-$param()-in-jQuery
title: 'The inverse function of $.param() in jQuery'
date: '2012-04-07 01:55:16.0884502'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - deserialize
  - javascript
  - jquery
canonical_url: >-
template: post
---
<p>jQuery has a useful function to serialize an object into url query string, which called $.param().</p>  <p>For example: </p>  <pre class="brush: javascript">$.param({ a: 2, b: 3, c: 4 }) 	// &quot;a=2&amp;b=3&amp;c=4&quot;
$.param({ a: [2, 3, 4] }) 	// &quot;a=2&amp;a=3&amp;a=4&quot;</pre>

<p>Sometimes we want do the opposite thing: we want to convert the url query string into an object. This process can be called deserialize the url query string. Unfortunately, I didn'’t find any method in jQuery to achive this, so I had to write my own one.</p>

<p>I named this function as “deserializeUrlParams()” and encapsulated it into zizhujy.com namespace. The code lists as below:</p>

<pre class="brush: javascript">var zizhujy = {};
zizhujy.com = {
    //
    // let object refer to value
    // Usage: object = zizhujy.com.set(object, value);
    //
    set: function (object, value) {
        if (object == null) {
            object = value;
        } else {
            if (object instanceof Array) {
                object.push(value);
            } else {
                var o = object;
                object = [];
                object.push(o);
                object.push(value);
            }
        }

        return object;
    },

    //
    // Usage: zizhujy.com.deserializeUrlParams(&quot;a=2&amp;b=3&quot;) --&gt; {a:2, b:3}
    //          zizhujy.com.deserializeUrlParams(&quot;a=2&amp;a=3&amp;a=4&quot;) --&gt; {a: [2, 3, 4]}
    //          zizhujy.com.deserializeUrlParams() &lt;==&gt; deserializeUrlParams(window.location.search.substring(1))
    //
    deserializeUrlParams: function () {
        var urlParams = null;
        var expression;
        // Regex for replacing addition symbol with a space
        var a = /\+/g;
        var reg = /([^&amp;=]+)=?([^&amp;]*)/g;
        var d = function (s) { return decodeURIComponent(s.replace(a, &quot; &quot;)); };

        var q = &quot;&quot;;
        if (arguments.length &gt; 0) q = arguments[0];
        else q = window.location.search.substring(1);

        while (expression = reg.exec(q)) {
            if (urlParams == null) urlParams = {};
            urlParams[d(expression[1])] = this.set(urlParams[d(expression[1])], d(expression[2]));
        }

        return urlParams;
    }
};</pre>

<p>You can test it out by <a title="Test it out!" href="http://www.myfootprints.cn/OldWeb/javascript/default.asp?s=var%20zizhujy%20%3D%20%7B%7D%3B%0Azizhujy.com%20%3D%20%7B%0A%20%20%20%20%2F%2F%0A%20%20%20%20%2F%2F%20let%20object%20refer%20to%20value%0A%20%20%20%20%2F%2F%20Usage%3A%20object%20%3D%20zizhujy.com.set(object%2C%20value)%3B%0A%20%20%20%20%2F%2F%0A%20%20%20%20set%3A%20function%20(object%2C%20value)%20%7B%0A%20%20%20%20%20%20%20%20if%20(object%20%3D%3D%20null)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20object%20%3D%20value%3B%0A%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(object%20instanceof%20Array)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20object.push(value)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20var%20o%20%3D%20object%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20object%20%3D%20%5B%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20object.push(o)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20object.push(value)%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20return%20object%3B%0A%20%20%20%20%7D%2C%0A%0A%20%20%20%20%2F%2F%0A%20%20%20%20%2F%2F%20Usage%3A%20deserializeUrlParams(%22a%3D2%26b%3D3%22)%20--%3E%20%7Ba%3A2%2C%20b%3A3%7D%0A%20%20%20%20%2F%2F%20%20%20%20%20%20%20%20%20%20deserializeUrlParams(%22a%3D2%26a%3D3%26a%3D4%22)%20--%3E%20%7Ba%3A%20%5B2%2C%203%2C%204%5D%7D%0A%20%20%20%20%2F%2F%20%20%20%20%20%20%20%20%20%20deserializeUrlParams()%20%3C%3D%3D%3E%20deserializeUrlParams(window.location.search.substring(1))%0A%20%20%20%20%2F%2F%0A%20%20%20%20deserializeUrlParams%3A%20function%20()%20%7B%0A%20%20%20%20%20%20%20%20var%20urlParams%20%3D%20null%3B%0A%20%20%20%20%20%20%20%20var%20expression%3B%0A%20%20%20%20%20%20%20%20%2F%2F%20Regex%20for%20replacing%20addition%20symbol%20with%20a%20space%0A%20%20%20%20%20%20%20%20var%20a%20%3D%20%2F%5C%2B%2Fg%3B%0A%20%20%20%20%20%20%20%20var%20reg%20%3D%20%2F(%5B%5E%26%3D%5D%2B)%3D%3F(%5B%5E%26%5D*)%2Fg%3B%0A%20%20%20%20%20%20%20%20var%20d%20%3D%20function%20(s)%20%7B%20return%20decodeURIComponent(s.replace(a%2C%20%22%20%22))%3B%20%7D%3B%0A%0A%20%20%20%20%20%20%20%20var%20q%20%3D%20%22%22%3B%0A%20%20%20%20%20%20%20%20if%20(arguments.length%20%3E%200)%20q%20%3D%20arguments%5B0%5D%3B%0A%20%20%20%20%20%20%20%20else%20q%20%3D%20window.location.search.substring(1)%3B%0A%0A%20%20%20%20%20%20%20%20while%20(expression%20%3D%20reg.exec(q))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(urlParams%20%3D%3D%20null)%20urlParams%20%3D%20%7B%7D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20urlParams%5Bd(expression%5B1%5D)%5D%20%3D%20this.set(urlParams%5Bd(expression%5B1%5D)%5D%2C%20d(expression%5B2%5D))%3B%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20return%20urlParams%3B%0A%20%20%20%20%7D%0A%7D%3B%0A%20%20%20%20%20%20%20%20%0Aalert(zizhujy.com.deserializeUrlParams(%22single%3DSingle%26multiple%3DMultiple%26multiple%3DMultiple3%26check%3Dcheck2%26radio%3Dradio1%22).multiple)%3B" target="_blank">here</a>.</p>

<p><a href="http://www.zizhujy.com/blog/image.axd?picture=image_505.png"><img style="border-bottom: 0px; border-left: 0px; display: inline; border-top: 0px; border-right: 0px" title="deserialize the url query string" border="0" alt="deserialize the url query string" src="http://www.zizhujy.com/blog/image.axd?picture=image_thumb_223.png" width="227" height="227" /></a></p>