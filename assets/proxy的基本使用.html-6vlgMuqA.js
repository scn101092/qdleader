import{_ as n,o as s,c as a,a as t}from"./app-fr3Buw_y.js";const p={},e=t(`<p>Proxy 对象用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）。</p><p>其基本语法如下：</p><p>const p = new Proxy(target, handler); 请注意到定义里的关键词“用于创建一个对象的代理”，因此Proxy只能代理对象，任何原始值类型都是无法代理的 。如对number, boolean类型的原始值代理都会得到 “Cannot create proxy with a non-object as target or handler”的错误：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">&#39;bar&#39;</span><span class="token punctuation">,</span>
  <span class="token function">fn</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fn调用了&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> handler <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">get</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">我被读取了</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">属性</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span> <span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">我被设置了</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>key<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">属性, val: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>val<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">apply</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> thisArg<span class="token punctuation">,</span> argumentsList</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;fn调用被拦截&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">target</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>thisArg<span class="token punctuation">,</span> <span class="token operator">...</span>argumentsList<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> handler<span class="token punctuation">)</span><span class="token punctuation">;</span>
p<span class="token punctuation">.</span>foo<span class="token punctuation">;</span> <span class="token comment">// 输出：我被读取了foo属性</span>
p<span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">&#39;bar1&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 输出：我被设置了foo属性, val: bar1</span>
p<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出：我被读取了fn属性 fn调用了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Proxy的13 种方法如下</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 在读取代理对象的原型时触发该操作，比如在执行 Object.getPrototypeOf(proxy) 时。</span>
handler<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 在设置代理对象的原型时触发该操作，比如在执行 Object.setPrototypeOf(proxy, null) 时。</span>
handler<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">// 在判断一个代理对象是否是可扩展时触发该操作，比如在执行 Object.isExtensible(proxy) 时。</span>
handler<span class="token punctuation">.</span><span class="token function">isExtensible</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">// 在让一个代理对象不可扩展时触发该操作，比如在执行 Object.preventExtensions(proxy) 时。</span>
handler<span class="token punctuation">.</span><span class="token function">preventExtensions</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 在获取代理对象某个属性的属性描述时触发该操作，比如在执行 Object.getOwnPropertyDescriptor(proxy, &quot;foo&quot;) 时。</span>
handler<span class="token punctuation">.</span><span class="token function">getOwnPropertyDescriptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">// 在定义代理对象某个属性时的属性描述时触发该操作，比如在执行 Object.defineProperty(proxy, &quot;foo&quot;, {}) 时。</span>
andler<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">// 在判断代理对象是否拥有某个属性时触发该操作，比如在执行 &quot;foo&quot; in proxy 时。</span>
handler<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 在读取代理对象的某个属性时触发该操作，比如在执行 proxy.foo 时。</span>
handler<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">// 在给代理对象的某个属性赋值时触发该操作，比如在执行 proxy.foo = 1 时。</span>
handler<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 在删除代理对象的某个属性时触发该操作，比如在执行 delete proxy.foo 时。</span>
handler<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 在获取代理对象的所有属性键时触发该操作，比如在执行 Object.getOwnPropertyNames(proxy) 时。</span>
handler<span class="token punctuation">.</span><span class="token function">ownKeys</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">// 在调用一个目标对象为函数的代理对象时触发该操作，比如在执行 proxy() 时。</span>
<span class="token function">handler</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token comment">// 在给一个目标对象为构造函数的代理对象构造实例时触发该操作，比如在执行new proxy() 时。</span>
handler<span class="token punctuation">.</span><span class="token function">construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","proxy的基本使用.html.vue"]]);export{r as default};
