import{_ as e,o as n,c as i,a as s}from"./app-fr3Buw_y.js";const l={},d=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>let aname = &#39;2&#39;
obj = {
  aname : &#39;1&#39;,
  say() {
    console.log(this.aname);
    return function () {
      console.log(this.aname)
      console.log(aname)
    }
  }
}
obj.say()()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1
undefined
2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var aname = &#39;2&#39;
obj = {
  aname : &#39;1&#39;,
  say() {
    console.log(this.aname);
    return function () {
      console.log(this.aname)
      console.log(aname)
    }
  }
}
obj.say()()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1
2
2

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),a=[d];function v(c,r){return n(),i("div",null,a)}const u=e(l,[["render",v],["__file","y004-执行打印.html.vue"]]);export{u as default};
