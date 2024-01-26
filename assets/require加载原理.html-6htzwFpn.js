import{_ as e,o as n,c as i,a as s}from"./app-fr3Buw_y.js";const d={},r=s(`<h2 id="require-模块引入与处理" tabindex="-1"><a class="header-anchor" href="#require-模块引入与处理" aria-hidden="true">#</a> require 模块引入与处理</h2><blockquote><p>CommonJS 模块同步加载并执行模块文件，CommonJS 模块在执行阶段分析模块依赖，采用深度优先遍历（depth-first traversal），执行顺序是父 -&gt; 子 -&gt; 父；</p></blockquote><p>eg:</p><p>a.js文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const getMes = require(&#39;./b&#39;)
console.log(&#39;我是 a 文件&#39;)
exports.say = function(){
    const message = getMes()
    console.log(message)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>b.js文件</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const say = require(&#39;./a&#39;)
const  object = {
   name:&#39;《React进阶实践指南》&#39;,
   author:&#39;我不是外星人&#39;
}
console.log(&#39;我是 b 文件&#39;)
module.exports = function(){
    return object
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主文件main.js</p><div class="language-const line-numbers-mode" data-ext="const"><pre class="language-const"><code>const b = require(&#39;./b&#39;)

console.log(&#39;node 入口文件&#39;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来终端输入 node main.js 运行 main.js，效果如下：</p><p>从上面的运行结果可以得出以下结论：</p><p>main.js 和 a.js 模块都引用了 b.js 模块，但是 b.js 模块只执行了一次。 a.js 模块 和 b.js 模块互相引用，但是没有造成循环引用的情况。 执行顺序是父 -&gt; 子 -&gt; 父；</p><h1 id="require-加载原理" tabindex="-1"><a class="header-anchor" href="#require-加载原理" aria-hidden="true">#</a> require 加载原理</h1><p>** 首先为了弄清楚上述两个问题。我们要明白两个感念，那就是 module 和 Module。 module ：在 Node 中每一个 js 文件都是一个 module ，module 上保存了 exports 等信息之外，还有一个 loaded 表示该模块是否被加载。</p><p>为 false 表示还没有加载； 为 true 表示已经加载</p><p>Module ：以 nodejs 为例，整个系统运行之后，会用 Module 缓存每一个模块加载的信息。**</p><p>require 的源码大致长如下的样子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> // id 为路径标识符
function require(id) {
   /* 查找  Module 上有没有已经加载的 js  对象*/
   const  cachedModule = Module._cache[id]
   
   /* 如果已经加载了那么直接取走缓存的 exports 对象  */
  if(cachedModule){
    return cachedModule.exports
  }
 
  /* 创建当前模块的 module  */
  const module = { exports: {} ,loaded: false , ...}

  /* 将 module 缓存到  Module 的缓存属性中，路径标识符作为 id */  
  Module._cache[id] = module
  /* 加载文件 */
  runInThisContext(wrapper(&#39;module.exports = &quot;123&quot;&#39;))(module.exports, require, module, __filename, __dirname)
  /* 加载完成 *//
  module.loaded = true 
  /* 返回值 */
  return module.exports
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面我们总结出一次 require 大致流程是这样的；</p><p><strong>require 会接收一个参数——文件标识符，然后分析定位文件，分析过程我们上述已经讲到了，加下来会从 Module 上查找有没有缓存，如果有缓存，那么直接返回缓存的内容。</strong></p><p><strong>如果没有缓存，会创建一个 module 对象，缓存到 Module 上，然后执行文件，加载完文件，将 loaded 属性设置为 true ，然后返回 module.exports 对象。借此完成模块加载流程。</strong></p><p><strong>模块导出就是 return 这个变量的其实跟 a = b 赋值一样， 基本类型导出的是值， 引用类型导出的是引用地址。</strong></p><p><strong>exports 和 module.exports 持有相同引用，因为最后导出的是 module.exports， 所以对 exports 进行赋值会导致 exports 操作的不再是 module.exports 的引用。</strong></p><h3 id="require-避免重复加载" tabindex="-1"><a class="header-anchor" href="#require-避免重复加载" aria-hidden="true">#</a> require 避免重复加载</h3><p>从上面我们可以直接得出，require 如何避免重复加载的，首先加载之后的文件的 module 会被缓存到 Module 上，比如一个模块已经 require 引入了 a 模块，如果另外一个模块再次引用 a ，那么会直接读取缓存值 module ，所以无需再次执行模块。 对应 demo 片段中，首先 main.js 引用了 a.js ，a.js 中 require 了 b.js 此时 b.js 的 module 放入缓存 Module 中，接下来 main.js 再次引用 b.js ，那么直接走的缓存逻辑。所以 b.js 只会执行一次，也就是在 a.js 引入的时候。</p>`,25),l=[r];function a(u,o){return n(),i("div",null,l)}const c=e(d,[["render",a],["__file","require加载原理.html.vue"]]);export{c as default};
