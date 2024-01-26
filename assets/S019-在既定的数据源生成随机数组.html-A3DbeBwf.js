import{_ as n,o as e,c as i,a as s}from"./app-fr3Buw_y.js";const r={},l=s(`<p>手写-怎么在制定数据源里面生成一个长度为 n 的不重复随机数组 能有几种方法 时间复杂度多少</p><p>第一版 时间复杂度为 O(n^2)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>



function getTenNum(testArray, n) {
 let result = [];
 for (let i = 0; i &lt; n; ++i) {
   const random = Math.floor(Math.random() * testArray.length);
   const cur = testArray[random];
   if (result.includes(cur)) {
     i--;
   }
   result.push(cur);
 }
 return result;
}
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const resArr = getTenNum(testArray, 10);




</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二版 标记法 / 自定义属性法 时间复杂度为 O(n)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getTenNum(testArray, n) {
 let hash = {};
 let result = [];
 let ranNum = n;
 while (ranNum &gt; 0) {
   const ran = Math.floor(Math.random() * testArray.length);
   let con = testArray[ran]
   if (!hash[con]) {
     hash[ran] = true;
     result.push(con);
     ranNum--;
   }
 }
 return result;
}
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const resArr = getTenNum(testArray, 10);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三版 交换法 时间复杂度为 O(n)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getTenNum(testArray, n) {
 const cloneArr = [...testArray];
 let result = [];
 for (let i = 0; i &lt; n; i++) {
   const ran = Math.floor(Math.random() * (cloneArr.length - i));
   result.push(cloneArr[ran]);
   cloneArr[ran] = cloneArr[cloneArr.length - i - 1];
 }
 return result;
}
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const resArr = getTenNum(testArray, 14);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>值得一提的是操作数组的时候使用交换法 这种思路在算法里面很常见</p><p>最终版 边遍历边删除 时间复杂度为 O(n)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function getTenNum(testArray, n) {
 const cloneArr = [...testArray];
 let result = [];
 for (let i = 0; i &lt; n; ++i) {
   const random = Math.floor(Math.random() * cloneArr.length);
   const cur = cloneArr[random];
   result.push(cur);
   cloneArr.splice(random, 1);
 }
 return result;
}
const testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const resArr = getTenNum(testArray, 14);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),d=[l];function a(t,v){return e(),i("div",null,d)}const u=n(r,[["render",a],["__file","S019-在既定的数据源生成随机数组.html.vue"]]);export{u as default};
