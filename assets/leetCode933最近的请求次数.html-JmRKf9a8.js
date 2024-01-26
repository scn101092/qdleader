import{_ as e,o as n,c as t,a as i}from"./app-fr3Buw_y.js";const s={},r=i(`<ol start="933"><li>最近的请求次数 写一个 RecentCounter 类来计算特定时间范围内最近的请求。</li></ol><p>请你实现 RecentCounter 类：</p><p>RecentCounter() 初始化计数器，请求数为 0 。 int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。 保证 每次对 ping 的调用都使用比之前更大的 t 值。</p><p>示例：</p><p>输入： [&quot;RecentCounter&quot;, &quot;ping&quot;, &quot;ping&quot;, &quot;ping&quot;, &quot;ping&quot;] [[], [1], [100], [3001], [3002]] 输出： [null, 1, 2, 3, 3]</p><p>解释：</p><p>RecentCounter recentCounter = new RecentCounter(); recentCounter.ping(1); // requests = [1]，范围是 [-2999,1]，返回 1 recentCounter.ping(100); // requests = [1, 100]，范围是 [-2900,100]，返回 2 recentCounter.ping(3001); // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3 recentCounter.ping(3002); // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>var RecentCounter = function() {
  this.q =[]
};

RecentCounter.prototype.ping = function(t) {
  this.q.push(t);
  while(this.q[0] &lt; t -3000) {
    this.q.shift()
  }
  return this.q.length
};

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),u=[r];function l(o,c){return n(),t("div",null,u)}const a=e(s,[["render",l],["__file","leetCode933最近的请求次数.html.vue"]]);export{a as default};
