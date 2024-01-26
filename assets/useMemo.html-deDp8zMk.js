import{_ as e,o as n,c as s,a as i}from"./app-fr3Buw_y.js";const d={},t=i(`<h2 id="usememo" tabindex="-1"><a class="header-anchor" href="#usememo" aria-hidden="true">#</a> useMemo</h2><blockquote><p>讲这篇文章之前，大家需要对虚拟 dom 这块的知识有所了解才行，react 类组件里的 render 每次被触发的时候都做了哪些事情？</p></blockquote><p>更新虚拟 dom 如果更新后的虚拟 dom 和老的虚拟 dom 有差异，则更新真实 dom，否则不更新真实 dom useMemo 是做什么的，一言以蔽之，做性能优化用的，如果说类组件的性能优化的方法是 shouldComponentUpdate 和 PureComponent，那么给函数组件做性能优化的就是这个 useMemo。</p><p>useMemo 怎么使用？它的输入参数有两个值，一个是某一个在渲染过程中被调用了的函数，另一个是一个变量，意思就是，只有当这个变量被调用的时候，这个函数才被执行，那么根据我们铺垫的知识，相应的，不会对虚拟 dom 进行更改，自然不会更改真实 dom。</p><p>如果你不理解没有关系，我们看下面这个例子。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// Father.js

import React, { useState } from &#39;react&#39;;
import Son from &#39;./Son&#39;
export default (props)=&gt;{
    const [number,setNumber]=useState(0)
    const [name, setName]=useState(&#39;Yui&#39;)
    return(
        &lt;&gt;
        &lt;button onClick={()=&gt;{setNumber(number+1)}}&gt;{&#39;number is:&#39;+number}&lt;/button&gt;
        &lt;button onClick={()=&gt;{setName(&#39;rena&#39;)}}&gt;{&#39;change name&#39;}&lt;/button&gt;
        &lt;Son name={name}/&gt;
        &lt;/&gt;
    )
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个组件里面只有两个 state，一个 name，一个 number，把 number 作为 props 传入了子组件。有两个按钮，分别改变 number 和 name 的值。</p><p>子组件 Son.js 为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React, { Component, useMemo } from &quot;react&quot;;

export default (props) =&gt; {
  const showName = (name) =&gt; {
    console.log(&quot;Son render&quot;);
    return &quot;my name is &quot; + name;
  };
  return (
    &lt;&gt;
      &lt;div&gt;
        {useMemo(() =&gt; {
          console.log(&quot;memo&quot;);
          showName(props.name);
        }, [props.name])}
      &lt;/div&gt;
      &lt;div&gt;{showName(props.name)}&lt;/div&gt;
    &lt;/&gt;
  );
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>showName 这个函数出现在了渲染函数中，那么它是 useMemo 的一个合适的输入，注意，父组件往子组件里只传了 name，并没有传 number，但是当我们点击改变 number 的按钮时，第二个 showName 仍然会被执行，但是 name 的值并没有实质性的改变，jsx 却被替换了，这意味着，这次更改虚拟 dom 是完全没有意义的，浪费的。</p><p>第一个 showName 由于放在 useMemo 里面所以并没有被调用，请注意第二个参数 props.name，它的意思是，只有当 props.name 这个值产生变化的时候，useMemo 传入的回调函数才会被调用。这避免了重复渲染，也就是，避免了更改虚拟 dom，继而操作真实 dom。</p><p>也就是说，假如我们单击 change name 按钮，两个 showName 函数都会被执行。</p>`,12),m=[t];function a(l,o){return n(),s("div",null,m)}const u=e(d,[["render",a],["__file","useMemo.html.vue"]]);export{u as default};
