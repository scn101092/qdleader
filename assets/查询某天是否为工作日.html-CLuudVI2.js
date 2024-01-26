import{_ as e,o as a,c as t,a as n}from"./app-fr3Buw_y.js";const s={},d=n(`<h2 id="查询某天是否为工作日" tabindex="-1"><a class="header-anchor" href="#查询某天是否为工作日" aria-hidden="true">#</a> 查询某天是否为工作日</h2><p>我们自己写日历组件时经常会用到，判断某个日期是否为工作日；周一至周五为工作日:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const isWeekday = (date) =&gt; date.getDay() % 6 !== 0;

isWeekday(new Date(2022, 03, 11))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),i=[d];function c(r,_){return a(),t("div",null,i)}const o=e(s,[["render",c],["__file","查询某天是否为工作日.html.vue"]]);export{o as default};
