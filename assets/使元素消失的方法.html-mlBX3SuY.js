import{_ as e,o as i,c as n,a as s}from"./app-fr3Buw_y.js";const d={},l=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>visibility:hidden、display:none、z-index=-1、opacity：0
1.opacity：0,该元素隐藏起来了，但不会改变页面布局，并且，如果该元素已经绑定了一些事件，如click事件也能触发
2.visibility:hidden,该元素隐藏起来了，但不会改变页面布局，但是不会触发该元素已经绑定的事件
3.display:node, 把元素隐藏起来，并且会改变页面布局，可以理解成在页面中把该元素删掉

4. z-index:-1000;
       将元素隐藏不占据空间，会改变页面布局，不能进行交互事件

5. position:absolute;top:-1000px;left:-1000px;
       这个方法是通过将left和top的值设的很大，让元素定位到浏览器外面。不占据空间，不能点击

       将定位方式设置为relative或者fixed然后将其定位到浏览器外面可以达到同样的效果，区别在于使用relative定位仍会占有原有的空间，而使用absolute以及fixed定位不占据空间

6. transform:rotateY(90deg);
       使用3d旋转，使元素隐藏，旋转x轴也可以达到同样的效果，要注意的是，css3 3D转换元素进行使用的时候，必须给父元素添加transform-style:preserve-3d;perspective:1000px;用于提供3D空间，以及设置景深

7. transform: scale(0,0)
       通过缩放达到元素消失的视觉效果，元素仍占据空间

8. width:0;height:0;overflow:hidden;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),a=[l];function v(r,t){return i(),n("div",null,a)}const o=e(d,[["render",v],["__file","使元素消失的方法.html.vue"]]);export{o as default};
