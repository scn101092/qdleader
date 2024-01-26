import{_ as e,o as d,c as n,a as i}from"./app-fr3Buw_y.js";const s={},a=i(`<p>###V006-watch和computed的区别</p><p>#使用场景</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>computed 　　　　
　　　　当一个属性受多个属性影响的时候就需要用到computed(当有一些数据需要随着另外一些数据变化时，建议使用computed)
　　　　最典型的例子： 购物车商品结算的时候
watch
　　　　当一条数据影响多条数据的时候就需要用watch(当有一个通用的响应数据变化的时候，要执行一些业务逻辑或异步操作的时候建议使用watch)
　　　　搜索数据
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>#总结：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>watch顾名思义，用于监听数据变化，其中可以监听的数据来源有三部分：props、data、computed内的数据；
watch提供两个参数（newValue，oldValue），第一个参数是新值，第二个参数保存旧值；



computed用于处理复杂的逻辑运算，主要和methods储存方法来进行区分；
methods储存方法，，computed储存需要处理的数据值；methods每次都会调用，computed有缓存机制，只有改变时才执行，性能更佳；

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),t=[a];function c(l,u){return d(),n("div",null,t)}const r=e(s,[["render",c],["__file","V006-watch和computed的区别.html.vue"]]);export{r as default};
