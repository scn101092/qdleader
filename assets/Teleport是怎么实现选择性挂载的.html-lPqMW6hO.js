import{_ as n,o as s,c as a,a as p}from"./app-fr3Buw_y.js";const t={},o=p(`<h2 id="teleport是怎么实现选择性挂载的" tabindex="-1"><a class="header-anchor" href="#teleport是怎么实现选择性挂载的" aria-hidden="true">#</a> Teleport是怎么实现选择性挂载的？</h2><p>Teleport是vue的一个内部组件，类似于React的Portal，它可以让组件渲染在父组件以外的DOM上，主要支持 to和disabled两个参数</p><p>to 必须，Teleport目标挂在的DOM元素。</p><p>disabled 可选，用于禁用Teleport的功能，不会移动到任何位置。</p><p>使用案例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code> <span class="token comment">// index.vue</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;outer&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span>Tooltip <span class="token keyword">with</span> Vue3 Teleport<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>button id<span class="token operator">=</span><span class="token string">&quot;show-modal&quot;</span> @click<span class="token operator">=</span><span class="token string">&quot;show&quot;</span><span class="token operator">&gt;</span>显示<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>Teleport to<span class="token operator">=</span><span class="token string">&quot;body&quot;</span><span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span>modal <span class="token operator">:</span>show<span class="token operator">=</span><span class="token string">&quot;showModal&quot;</span> @close<span class="token operator">=</span><span class="token string">&quot;hide&quot;</span><span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span>template #header<span class="token operator">&gt;</span>
                    <span class="token operator">&lt;</span>h3<span class="token operator">&gt;</span>custom modal<span class="token operator">&lt;</span><span class="token operator">/</span>h3<span class="token operator">&gt;</span>
                <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
            <span class="token operator">&lt;</span><span class="token operator">/</span>modal<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>Teleport<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
   <span class="token keyword">import</span> Modal <span class="token keyword">from</span> <span class="token string">&#39;./Modal.vue&#39;</span>
   <span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

   <span class="token keyword">const</span> showModal <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
   <span class="token keyword">const</span> <span class="token function-variable function">show</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
       showModal<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
   <span class="token punctuation">}</span>
   <span class="token keyword">const</span> <span class="token function-variable function">hide</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
       showModal<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
   <span class="token punctuation">}</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token comment">// Modal.vue</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>Transition name<span class="token operator">=</span><span class="token string">&quot;modal&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div v<span class="token operator">-</span><span class="token keyword">if</span><span class="token operator">=</span><span class="token string">&quot;show&quot;</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;modal-mask&quot;</span><span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;modal-wrapper&quot;</span><span class="token operator">&gt;</span>
           <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;modal-container&quot;</span><span class="token operator">&gt;</span>
               <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;modal-header&quot;</span><span class="token operator">&gt;</span>
               <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;header&quot;</span><span class="token operator">&gt;</span><span class="token keyword">default</span> header<span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
               <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
               <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;modal-body&quot;</span><span class="token operator">&gt;</span>
                   <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;body&quot;</span><span class="token operator">&gt;</span><span class="token keyword">default</span> body<span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
               <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
               <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;modal-footer&quot;</span><span class="token operator">&gt;</span>
                   <span class="token operator">&lt;</span>slot name<span class="token operator">=</span><span class="token string">&quot;footer&quot;</span><span class="token operator">&gt;</span><span class="token keyword">default</span> footer<span class="token operator">&lt;</span><span class="token operator">/</span>slot<span class="token operator">&gt;</span>
                   <span class="token operator">&lt;</span>button <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;modal-default-button&quot;</span> @click<span class="token operator">=</span><span class="token string">&quot;$emit(&#39;close&#39;)&quot;</span><span class="token operator">&gt;</span>x<span class="token operator">&lt;</span><span class="token operator">/</span>button<span class="token operator">&gt;</span>
               <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
           <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
       <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>Transition<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>script setup<span class="token operator">&gt;</span>
    <span class="token keyword">import</span> <span class="token punctuation">{</span>defineProps<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
    <span class="token keyword">const</span> props<span class="token operator">=</span><span class="token function">defineProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">show</span><span class="token operator">:</span>Boolean
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>

<span class="token operator">&lt;</span>style scoped<span class="token operator">&gt;</span>
    <span class="token punctuation">.</span>modal<span class="token operator">-</span>mask <span class="token punctuation">{</span>
        <span class="token literal-property property">position</span><span class="token operator">:</span> fixed<span class="token punctuation">;</span>
        z<span class="token operator">-</span>index<span class="token operator">:</span> <span class="token number">9998</span><span class="token punctuation">;</span>
        <span class="token literal-property property">top</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token literal-property property">left</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
        <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span>
        background<span class="token operator">-</span>color<span class="token operator">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token literal-property property">display</span><span class="token operator">:</span> table<span class="token punctuation">;</span>
        <span class="token literal-property property">transition</span><span class="token operator">:</span> opacity <span class="token number">0</span><span class="token punctuation">.</span>3s ease<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>modal<span class="token operator">-</span>wrapper <span class="token punctuation">{</span>
        <span class="token literal-property property">display</span><span class="token operator">:</span> table<span class="token operator">-</span>cell<span class="token punctuation">;</span>
        vertical<span class="token operator">-</span>align<span class="token operator">:</span> middle<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>modal<span class="token operator">-</span>container <span class="token punctuation">{</span>
        <span class="token literal-property property">width</span><span class="token operator">:</span> 300px<span class="token punctuation">;</span>
        <span class="token literal-property property">margin</span><span class="token operator">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>
        <span class="token literal-property property">padding</span><span class="token operator">:</span> 20px 30px<span class="token punctuation">;</span>
        background<span class="token operator">-</span>color<span class="token operator">:</span> #fff<span class="token punctuation">;</span>
        border<span class="token operator">-</span>radius<span class="token operator">:</span> 2px<span class="token punctuation">;</span>
        box<span class="token operator">-</span>shadow<span class="token operator">:</span> <span class="token number">0</span> 2px 8px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0.33</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token literal-property property">transition</span><span class="token operator">:</span> all <span class="token number">0</span><span class="token punctuation">.</span>3s ease<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>modal<span class="token operator">-</span>header h3 <span class="token punctuation">{</span>
        margin<span class="token operator">-</span>top<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token literal-property property">color</span><span class="token operator">:</span> #42b983<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>modal<span class="token operator">-</span>body <span class="token punctuation">{</span>
        <span class="token literal-property property">margin</span><span class="token operator">:</span> 20px <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>modal<span class="token operator">-</span><span class="token keyword">default</span><span class="token operator">-</span>button <span class="token punctuation">{</span>
        <span class="token literal-property property">float</span><span class="token operator">:</span> right<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token punctuation">.</span>modal<span class="token operator">-</span>enter<span class="token operator">-</span>from <span class="token punctuation">{</span>
        <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>modal<span class="token operator">-</span>leave<span class="token operator">-</span>to <span class="token punctuation">{</span>
        <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token punctuation">.</span>modal<span class="token operator">-</span>enter<span class="token operator">-</span>from <span class="token punctuation">.</span>modal<span class="token operator">-</span>container<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>modal<span class="token operator">-</span>leave<span class="token operator">-</span>to <span class="token punctuation">.</span>modal<span class="token operator">-</span>container <span class="token punctuation">{</span>
        <span class="token operator">-</span>webkit<span class="token operator">-</span>transform<span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token literal-property property">transform</span><span class="token operator">:</span> <span class="token function">scale</span><span class="token punctuation">(</span><span class="token number">1.1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">&gt;</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Teleport的to目标必须已经存在于DOM中，在挂载Teleport前，to目标的元素必须挂载完成，否则会报错。</p><h2 id="实现原理" tabindex="-1"><a class="header-anchor" href="#实现原理" aria-hidden="true">#</a> 实现原理</h2><p>主要是通过document.querySelector实现的，Teleport 实质是一个组件，必然会经历组件的初始化，挂载与更新</p><p>1.Teleport 组件通过process初始化，查看是否禁用teleport，禁用则在初始化容器时渲染，处理HMR 2.通过resolveTarget拿要渲染teleport的容器节点，目标不存在就报错返回，存在打注释定位标记。 3.进入挂载阶段，确定内部是否是array children结构，是否配置了disabled参数，配置了就解析在默认容器中，没有配置就解析在to指定的容器中，初始化结束。 4.更新阶段，核心函数moveTeleport，能触发Teleport更新只有两种情况 修改to或者disabled的值 组件内部的内容发生更新</p><p>moveTeleport 用于更新 修改to或者disabled的值分为以下情况</p><p>disabled从false变为true，会将to指定的容器移动到默认的容器 disabled从true为false，会将默认容器移动到to指定的容器 to指定的容器改变，向重新传递一个选择器，重新解析，移动到新的选择器位置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
<span class="token keyword">function</span> <span class="token function">moveTeleport</span><span class="token punctuation">(</span>
<span class="token parameter"><span class="token literal-property property">vnode</span><span class="token operator">:</span> VNode<span class="token punctuation">,</span>
<span class="token literal-property property">container</span><span class="token operator">:</span> RendererElement<span class="token punctuation">,</span>
<span class="token literal-property property">parentAnchor</span><span class="token operator">:</span> RendererNode <span class="token operator">|</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span> <span class="token literal-property property">o</span><span class="token operator">:</span> <span class="token punctuation">{</span> insert <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">m</span><span class="token operator">:</span> move <span class="token punctuation">}</span><span class="token operator">:</span> RendererInternals<span class="token punctuation">,</span>
<span class="token literal-property property">moveType</span><span class="token operator">:</span> TeleportMoveTypes <span class="token operator">=</span> TeleportMoveTypes<span class="token punctuation">.</span><span class="token constant">REORDER</span></span>
<span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">// 确认新的目标容器，目标容器变了，将Teleport插入新的目标容器</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>moveType <span class="token operator">===</span> TeleportMoveTypes<span class="token punctuation">.</span><span class="token constant">TARGET_CHANGE</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">insert</span><span class="token punctuation">(</span>vnode<span class="token punctuation">.</span>targetAnchor<span class="token operator">!</span><span class="token punctuation">,</span> container<span class="token punctuation">,</span> parentAnchor<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> el<span class="token punctuation">,</span> anchor<span class="token punctuation">,</span> shapeFlag<span class="token punctuation">,</span> children<span class="token punctuation">,</span> props <span class="token punctuation">}</span> <span class="token operator">=</span> vnode
<span class="token keyword">const</span> isReorder <span class="token operator">=</span> moveType <span class="token operator">===</span> TeleportMoveTypes<span class="token punctuation">.</span><span class="token constant">REORDER</span>
<span class="token comment">// 重新排序</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isReorder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">insert</span><span class="token punctuation">(</span>el<span class="token operator">!</span><span class="token punctuation">,</span> container<span class="token punctuation">,</span> parentAnchor<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// 没有重排序或者disabled属性设置为true</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>isReorder <span class="token operator">||</span> <span class="token function">isTeleportDisabled</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 遍历vnode子节点，将子节点移动到</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>shapeFlag <span class="token operator">&amp;</span> ShapeFlags<span class="token punctuation">.</span><span class="token constant">ARRAY_CHILDREN</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token punctuation">(</span>children <span class="token keyword">as</span> VNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">move</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span>children <span class="token keyword">as</span> VNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>
        container<span class="token punctuation">,</span>
        parentAnchor<span class="token punctuation">,</span>
        MoveType<span class="token punctuation">.</span><span class="token constant">REORDER</span>
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 需要重新排序</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>isReorder<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">insert</span><span class="token punctuation">(</span>anchor<span class="token operator">!</span><span class="token punctuation">,</span> container<span class="token punctuation">,</span> parentAnchor<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),e=[o];function l(r,c){return s(),a("div",null,e)}const u=n(t,[["render",l],["__file","Teleport是怎么实现选择性挂载的.html.vue"]]);export{u as default};
