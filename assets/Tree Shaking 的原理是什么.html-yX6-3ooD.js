import{_ as n,o as s,c as a,a as e}from"./app-fr3Buw_y.js";const p={},t=e(`<h1 id="tree-shaking-的原理是什么" tabindex="-1"><a class="header-anchor" href="#tree-shaking-的原理是什么" aria-hidden="true">#</a> Tree Shaking 的原理是什么</h1><p>Tree Shaking 指基于 ES Module 进行静态分析，通过 AST 将用不到的函数进行移除，从而减小打包体积。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/* TREE-SHAKING */</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> sum <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./maths.js&#39;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">sum</span><span class="token punctuation">(</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span>  <span class="token comment">// 10</span>
<span class="token comment">// maths.js</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">sum</span> <span class="token punctuation">(</span> <span class="token parameter">x<span class="token punctuation">,</span> y</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>

<span class="token comment">// 由于 sub 函数没有引用到，最终将不会对它进行打包</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">sub</span> <span class="token punctuation">(</span> <span class="token parameter">x<span class="token punctuation">,</span> y</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">-</span> y
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终打包过程中，sub 没有被引用到，将不会对它进行打包。以下为打包后代码。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// maths.js</span>

<span class="token keyword">function</span> <span class="token function">sum</span> <span class="token punctuation">(</span> <span class="token parameter">x<span class="token punctuation">,</span> y</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token punctuation">}</span>


console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span> <span class="token function">sum</span><span class="token punctuation">(</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="import" tabindex="-1"><a class="header-anchor" href="#import" aria-hidden="true">#</a> import *</h2><p>当使用语法 import * 时，Tree Shaking 依然生效。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> maths <span class="token keyword">from</span> <span class="token string">&#39;./maths&#39;</span>

<span class="token comment">// Tree Shaking 依然生效</span>
maths<span class="token punctuation">.</span><span class="token function">sum</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
maths<span class="token punctuation">[</span><span class="token string">&#39;sum&#39;</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>import * as maths，其中 maths 的数据结构是固定的，无复杂数据，通过 AST 分析可查知其引用关系。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> maths <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">sum</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">sub</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token constant">JSON</span> TreeShaking
Tree Shaking 甚至可对 <span class="token constant">JSON</span> 进行优化。原理是因为 <span class="token constant">JSON</span> 格式简单，通过 <span class="token constant">AST</span> 容易预测结果，不像 <span class="token constant">JS</span> 对象有复杂的类型与副作用。


<span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token template-punctuation string">\`</span></span>\`js

<span class="token punctuation">{</span>
  <span class="token string-property property">&quot;a&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;b&quot;</span><span class="token operator">:</span> <span class="token number">4</span>
<span class="token punctuation">}</span>
<span class="token keyword">import</span> obj <span class="token keyword">from</span> <span class="token string">&#39;./main.json&#39;</span>

<span class="token comment">// obj.b 由于未使用到，仍旧不会被打包</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>a<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="对于已经-import-但未实际使用的模块使用-webpack-还会对它打包吗" tabindex="-1"><a class="header-anchor" href="#对于已经-import-但未实际使用的模块使用-webpack-还会对它打包吗" aria-hidden="true">#</a> 对于已经 import 但未实际使用的模块使用 webpack 还会对它打包吗？</h4><p>tree shaking通过扫描所有 ES6 的 export，找出被 import 的内容并添加到最终代码中。tree shaking的使用时 源码必须遵循 ES6 的模块规范 (import &amp; export)，如果是 CommonJS 规范 (require) 则无法使用。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// .babelrc</span>
<span class="token punctuation">{</span>
    <span class="token string-property property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">[</span><span class="token string">&quot;es2015&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string-property property">&quot;modules&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>tree shaking在webpack2.0里面需要进行手动设置，webpack3和webpack4里面为默认设置。</p><h4 id="一、对于方法的处理" tabindex="-1"><a class="header-anchor" href="#一、对于方法的处理" aria-hidden="true">#</a> 一、对于方法的处理</h4><p>通过tree shaking设置后，webpack里面会将没有使用的方法标记为： unused harmony export xxx，但代码仍然保留。（webpack编译后的源码里面仍然包含没有使用的方法） 随后使用UglifyJSPlugin进行第二步，将已经标记的没有使用的方法进行删除。</p><h4 id="二、对于类的处理" tabindex="-1"><a class="header-anchor" href="#二、对于类的处理" aria-hidden="true">#</a> 二、对于类的处理</h4><p>与标记方法不同，webpack打包时会将整个类进行标记，也就是说，即使类里面的方法没有被使用也会进行打包编译。 这表明 webpack tree shaking 只处理顶层内容，例如类和对象内部都不会再被分别处理。 综上所述，可以得出 “对于已经 import 但未实际使用的模块使用 webpack 还会对它打包” 。 当然，想要精简代码是可以实现的 模块/文件级别的 tree shaking，如果模块没有导入但是模块内的函数存在副作用(对外部变量进行读写)的话，也会被打包。解决方法是在模块所在的npm包的package.json中增加 sideEffects: false, 表示所有的模块/文件都是没有副作用的，或者有副作用的话被删了也没关系</p>`,18),c=[t];function o(i,l){return s(),a("div",null,c)}const r=n(p,[["render",o],["__file","Tree Shaking 的原理是什么.html.vue"]]);export{r as default};
