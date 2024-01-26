import{_ as e,o as i,c as n,a}from"./app-fr3Buw_y.js";const t={},l=a(`<h1 id="css-的渲染层合成是什么-浏览器如何创建新的渲染层" tabindex="-1"><a class="header-anchor" href="#css-的渲染层合成是什么-浏览器如何创建新的渲染层" aria-hidden="true">#</a> css 的渲染层合成是什么 浏览器如何创建新的渲染层</h1><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>在 DOM 树中每个节点都会对应一个渲染对象（RenderObject），当它们的渲染对象处于相同的坐标空间（z 轴空间）时，就会形成一个 RenderLayers，也就是渲染层。渲染层将保证页面元素以正确的顺序堆叠，这时候就会出现层合成（composite），从而正确处理透明元素和重叠元素的显示。对于有位置重叠的元素的页面，这个过程尤其重要，因为一旦图层的合并顺序出错，将会导致元素显示异常。

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="浏览器如何创建新的渲染层" tabindex="-1"><a class="header-anchor" href="#浏览器如何创建新的渲染层" aria-hidden="true">#</a> 浏览器如何创建新的渲染层</h2><blockquote><p>根元素 document</p></blockquote><blockquote><p>有明确的定位属性（relative、fixed、sticky、absolute） opacity &lt; 1</p></blockquote><blockquote><p>有 CSS fliter 属性</p></blockquote><blockquote><p>有 CSS mask 属性</p></blockquote><blockquote><p>有 CSS mix-blend-mode 属性且值不为 normal</p></blockquote><blockquote><p>有 CSS transform 属性且值不为 none</p></blockquote><blockquote><p>backface-visibility 属性为 hidden</p></blockquote><blockquote><p>有 CSS reflection 属性</p></blockquote><blockquote><p>有 CSS column-count 属性且值不为 auto 或者有 CSS column-width 属性且值不为 auto</p></blockquote><blockquote><p>当前有对于 opacity、transform、fliter、backdrop-filter 应用动画</p></blockquote><blockquote><p>overflow 不为 visible</p></blockquote><h2 id="合成层的优点" tabindex="-1"><a class="header-anchor" href="#合成层的优点" aria-hidden="true">#</a> 合成层的优点</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>淘宝的栗子举的很详细，值得一看，里面提到了一旦renderLayer提升为了合成层就会有自己的绘图上下文，并且会开启硬件加速，有利于性能提升,里面列举了一些特点

合成层的位图，会交由 GPU 合成，比 CPU 处理要快
当需要 repaint 时，只需要 repaint 本身，不会影响到其他的层
对于 transform 和 opacity 效果，不会触发 layout 和 paint
注意：

提升到合成层后合成层的位图会交GPU处理，但请注意，仅仅只是合成的处理（把绘图上下文的位图输出进行组合）需要用到GPU，生成合成层的位图处理（绘图上下文的工作）是需要CPU。
当需要repaint的时候可以只repaint本身，不影响其他层，但是paint之前还有style， layout,那就意味着即使合成层只是repaint了自己，但style和layout本身就很占用时间。
仅仅是transform和opacity不会引发layout 和paint，那么其他的属性不确定。
总结合成层的优势：一般一个元素开启硬件加速后会变成合成层，可以独立于普通文档流中，改动后可以避免整个页面重绘，提升性能。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>性能优化点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>提升动画效果的元素 合成层的好处是不会影响到其他元素的绘制，因此，为了减少动画元素对其他元素的影响，从而减少paint，我们需要把动画效果中的元素提升为合成层。 提升合成层的最好方式是使用 CSS 的 will-change属性。从上一节合成层产生原因中，可以知道 will-change 设置为opacity、transform、top、left、bottom、right 可以将元素提升为合成层。
使用 transform 或者 opacity 来实现动画效果, 这样只需要做合成层的合并就好了。
减少绘制区域 对于不需要重新绘制的区域应尽量避免绘制，以减少绘制区域，比如一个 fix 在页面顶部的固定不变的导航header，在页面内容某个区域 repaint 时，整个屏幕包括 fix 的 header 也会被重绘。而对于固定不变的区域，我们期望其并不会被重绘，因此可以通过之前的方法，将其提升为独立的合成层。减少绘制区域，需要仔细分析页面，区分绘制区域，减少重绘区域甚至避免重绘。
利用合成层可能踩到的坑
合成层占用内存的问题
层爆炸，由于某些原因可能导致产生大量不在预期内的合成层，虽然有浏览器的层压缩机制，但是也有很多无法进行压缩的情况，这就可能出现层爆炸的现象（简单理解就是，很多不需要提升为合成层的元素因为某些不当操作成为了合成层）。解决层爆炸的问题，最佳方案是打破 overlap 的条件，也就是说让其他元素不要和合成层元素重叠。简单直接的方式：使用3D硬件加速提升动画性能时，最好给元素增加一个z-index属性，人为干扰合成的排序，可以有效减少chrome创建不必要的合成层，提升渲染性能，移动端优化效果尤为明显。 在这篇文章中的demo可以看出其中厉害。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[l];function d(s,c){return i(),n("div",null,o)}const u=e(t,[["render",d],["__file","合成层.html.vue"]]);export{u as default};
