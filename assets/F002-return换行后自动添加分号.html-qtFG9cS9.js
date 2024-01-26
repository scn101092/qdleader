import{_ as e,o as n,c as i,a as r}from"./app-fr3Buw_y.js";const s={},t=r(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function arrayFormValue(items) {
	return 
		[items];
}

arrayFormValue(10);  // =&gt; ???
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>*答案： undefined</p><p>*解析： 这里需要注意的是return和[items]之间已经换行了，js会在换行之间自动加入分号 所以等价于：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function arrayFromValue(items) {
	return;
	[items];
}
arrayFromValue(10);  // =&gt; undefined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>return;函数就直接结束并返回undefined的了，所以下面结果为undefined</p>`,5),a=[t];function d(l,u){return n(),i("div",null,a)}const m=e(s,[["render",d],["__file","F002-return换行后自动添加分号.html.vue"]]);export{m as default};
