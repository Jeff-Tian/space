---
stackbit_url_path: >-
  posts/使用-JavaScript-更改网页中Dom元素的显示与隐藏状态
title: '使用 JavaScript 更改网页中Dom元素的显示与隐藏状态'
date: '2010-01-29 07:00:43'
excerpt: >-
  
comments_count: 0
positive_reactions_count: 0
tags: 
  - 
canonical_url: https://be-net.azurewebsites.net/post/2010/01/29/使用-JavaScript-更改网页中Dom元素的显示与隐藏状态
template: post
---

        <div style="text-indent: 2em;">
<p>如果某一Dom元素在网页中是不可见的，要使用 JavaScript 将它更改为可见状态，需要注意检查这个元素的祖先元素是否可见，而不是仅仅修改该元素的 style.display以及style.visible 就行了的。如果它某个祖先元素是隐藏的，那么即使这个元素的style.display属性为block而且style.visible属性为true，在网页中它仍然不会出现。</p>
<p>同样，如果要判断一给定的元素在页面中是否可见，不可以仅仅判断该元素自身的style.display和style.visible属性，还要依次检查其所有的祖先元素的style.display和style.visible，如果它们的style.display全不为'none'且style.visible全不为false，那么就可以确定该元素是可见的。</p>
<p>原理如上，很简单，但在实际操作上，除了style要检查外，为了确保安全，还要对其最终样式（在IE中为currentStyle，在Dom中为document.defaultView.getComputedStyle）进行同样的操作。</p>
<p>最终实现的代码为(mfDomKit.js)：</p>
</div>
<div style="text-indent: 0;">
<pre class="brush: javascript">//****************************************************************************************
// 注释：mfDomKit 对象
//
// 日期             作者                行为
// ---------------------------------------------------------------------------------------
// 2010-1-29        涂鸦                创建
//****************************************************************************************

function mfDomKit() {
    this.version = '1.0';
}

//////////////////////////////////////////////////////////////////////////////////////////
// 注释：   判断一个元素是否可见
//
// 参数：   o   要判断的元素，一般是一个HTML元素，如一个<div>&nbsp;</div>层等
//
// 返回：   true    如果可见
//          false   如果不可见
//
// 日期         作者                行为
// ---------------------------------------------------------------------------------------
// 2010-1-29    涂鸦                创建
//////////////////////////////////////////////////////////////////////////////////////////
mfDomKit.prototype.isVisible = function(o) {
    if (o) {
        if (o.style) {
            if (o.style.display == 'none' || o.style.visible == 'false') {
                return false;
            } else {
                //return true;
                // 递归检查其父结点，直到最顶层
                if (o.parentElement) {
                    return this.isVisible(o.parentElement);
                } else {
                    return true;
                }
            } // end if (o.style.display == 'none')
        } else {
            if (document.defaultView) {
                if (document.defaultView.getComputedStyle(o, null).display == 'none' || document.defaultView.getComputedStyle(o, null).visible == 'false') {
                    return false;
                } else {
                    //return true;
                    // 递归检查其父结点，直到最顶层
                    if (o.parentElement) {
                        return this.isVisible(o.parentElement);
                    } else {
                        return true;
                    }
                } // end if (document.defaultView.getComputedStyle(o, null).display == 'none')
            } else {
                if (o.currentStyle) {
                    if (o.currentStyle.display == 'none' || o.currentStyle.visible == 'false') {
                        return false;
                    } else {
                        // 递归检查其父结点，直到最顶层
                        if (o.parentElement) {
                            return this.isVisible(o.parentElement);
                        } else {
                            return true;
                        }
                    }
                } else {
                    return true;
                }
            }
        } // end if (o.style.display)
    }
};

//////////////////////////////////////////////////////////////////////////////////////////
// 注释：   显示一个元素
//
// 参数：   o                   要显示的元素，一般是一个HTML元素，如<div>&nbsp;</div>层等
//          oLastChangedDisplay 可选参数，一般不用传递过去。它的作用在试图显示元素 o 时，
//                              记住那个最后被修改了Display属性的元素。它会在递归时作为中间
//                              变量，如果不传递过去，此函数会自动生成这样的中间变量。所以
//                              一般是不用显式传递此参数的。
//
// 返回：   oLastChangedDisplay 返回一个元素，该元素就是那个在试图显示元素 o 的过程中，最后
//                              一个被改变了Display属性的元素。它可能是 o 自身，也可能是 o 
//                              的祖先节点元素。
//
// 日期         作者        行为
// --------------------------------------------------------------------------------------
// 2010-1-29    涂鸦        创建
/////////////////////////////////////////////////////////////////////////////////////////
mfDomKit.prototype.showElement = function(o, oLastChangedDisplay) {
    if (!oLastChangedDisplay) {
        var oLastChangedDisplay = null;
    }
    if (o) {
        if (o.style) {
            if (o.style.display == 'none') {
                o.style.display = '';
                // 记住被修改过display属性的元素
                oLastChangedDisplay = o;
            }
            if (o.style.visible == 'false') {
                o.style.visible = 'true';
                // 记住被修改过display属性的元素
                oLastChangedDisplay = o;
            }
        } else {
            if (document.defaultView) {
                if (document.defaultView.getComputedStyle(o, null).display == 'none') {
                    document.defaultView.getComputedStyle(o, null).display = '';
                    oLastChangedDisplay = o;
                }
                if (document.defaultView.getComputedStyle(o, null).visible == 'false') {
                    document.defaultView.getComputedStyle(o, null).visible = 'true';
                    oLastChangedDisplay = o;
                }
            } else {
                if (o.currentStyle) {
                    if (o.currentStyle.display == 'none') {
                        o.currentStyle.display = '';
                        oLastChangedDisplay = o;
                    }
                    if (o.currentStyle.visible == 'false') {
                        o.currentStyle.visible = 'true';
                        oLastChangedDisplay = o;
                    }
                } else {
                }
            }
        } // end if (o.style.display)

        // 递归检查其父结点，直到最顶层
        if (o.parentElement) {
            return this.showElement(o.parentElement, oLastChangedDisplay);
        } else {
            return oLastChangedDisplay;
        }
    } // end if (o)
};

/////////////////////////////////////////////////////////////////////////////////////////////
// 注释：   隐藏一个元素
//
// 参数：   o   要隐藏的元素
//
// 返回：   什么也不返回
//
// 日期         作者                行为
// ------------------------------------------------------------------------------------------
// 2010-1-29    涂鸦                创建
/////////////////////////////////////////////////////////////////////////////////////////////
mfDomKit.prototype.hideElement = function(o) {
    if (o) {
        o.style.display = 'none';
    }
};

//////////////////////////////////////////////////////////////////////////////////////////////
// 注释：   切换一个元素的显示与隐藏状态
//
// 参数：   o   要切换显示与隐藏状态的元素
//
// 返回：   true    切换成了显示状态
//          false   切换成了隐藏状态
//
// 日期             作者                行为
// -------------------------------------------------------------------------------------------
// 2010-1-29        涂鸦                创建
///////////////////////////////////////////////////////////////////////////////////////////////
mfDomKit.prototype.toggleElement = function(o) {
    if (this.isVisible(o)) {
        this.hideElement(o);
        return false;
    } else {
        this.showElement(o);
        return true;
    }
};
</pre>
</div>
      