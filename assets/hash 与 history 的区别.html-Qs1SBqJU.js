import{_ as e,o as n,c as i,a as s}from"./app-fr3Buw_y.js";const a={},d=s(`<p>一、实现原理 <strong>hash 原理</strong> hash 通过监听浏览器 onhashchange 事件变化，查找对应路由应用。通过改变 location.hash 改变页面路由。</p><p><strong>history 原理</strong> 利用 html5 的history Interface 中新增的 pushState() 和 replaceState() 方法，改变页面路径。 history Interface 是浏览器历史记录栈提供的接口，可通过 back、forward、go 等，可以读取浏览器历史记录栈的信息，pushState、repalceState 还可以对浏览器历史记录栈进行修改。</p><p>（1）在url显示： hash有#很Low ； history 无#好看 （2）回车刷新： hash 可以加载到hash值对应页面 ； history一般就是404掉了</p><p>（3）支持版本： hash支持低版本浏览器和IE浏览器 ； historyHTML5新推出的API</p><p><strong>hash 模式不足</strong> 1、hash 模式中的 # 也称作锚点，这里的的 # 和 css 中的 # 是一个意思，所以在 hash 模式内，页面定位会失效。 2、hash 不利于 SEO（搜索引擎优化）。</p><p>用hash实现前端路由 hash路由，浏览器地址#后面的变化，是可以被监听到的，浏览器为我们提供了原生监听事件hashchange，它可以监听到如下的变化：</p><p>点击a标签，改变了浏览器地址 浏览器的前进后退行为 通过window.location方法，改变浏览器地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  // 第一次加载的时候，不会执行 hashchange 监听事件，默认执行一次
    // DOMContentLoaded 为浏览器 DOM 加载完成时触发
    window.addEventListener(&#39;DOMContentLoaded&#39;, Load)
    window.addEventListener(&#39;hashchange&#39;, HashChange)
    // 展示页面组件的节点
    var routeView = null
    function Load() {
      routeView = document.getElementById(&#39;route-view&#39;)
      HashChange()
    }
    function HashChange() {
      // 每次触发 hashchange 事件，通过 location.hash 拿到当前浏览器地址的 hash 值
      // 根据不同的路径展示不同的内容
      switch(location.hash) {
      case &#39;#/page1&#39;:
        routeView.innerHTML = &#39;page1&#39;
        return
      case &#39;#/page2&#39;:
        routeView.innerHTML = &#39;page2&#39;
        return
      default:
        routeView.innerHTML = &#39;page1&#39;
        return
      }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>用history实现前端路由</strong></p><p>包括a 标签的点击事件也是不会被popstate 监听。我们需要想个办法解决这个问题，才能实现history 模式。 解决思路 我们可以通过遍历页面上的所有 a 标签，阻止 a 标签的默认事件的同时，加上点击事件的回调函数，在回调函数内获取 a 标签的 href 属性值，再通过 pushState 去改变浏览器的 location.pathname 属性值。然后手动执行 popstate 事件的回调函数，去匹配相应的路由。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> window.addEventListener(&#39;DOMContentLoaded&#39;, Load)
    window.addEventListener(&#39;popstate&#39;, PopChange)
    var routeView = null
    function Load() {
      routeView = document.getElementById(&#39;route-view&#39;)
      // 默认执行一次 popstate 的回调函数，匹配一次页面组件
      PopChange()
      // 获取所有带 href 属性的 a 标签节点
      var aList = document.querySelectorAll(&#39;a[href]&#39;)
      // 遍历 a 标签节点数组，阻止默认事件，添加点击事件回调函数
      aList.forEach(aNode =&gt; aNode.addEventListener(&#39;click&#39;, function(e) {
        e.preventDefault() //阻止a标签的默认事件
        var href = aNode.getAttribute(&#39;href&#39;)
        //  手动修改浏览器的地址栏
        history.pushState(null, &#39;&#39;, href)
        // 通过 history.pushState 手动修改地址栏，
        // popstate 是监听不到地址栏的变化，所以此处需要手动执行回调函数 PopChange
        PopChange()
      }))
    }
    function PopChange() {
      console.log(&#39;location&#39;, location)
      switch(location.pathname) {
      case &#39;/page1&#39;:
        routeView.innerHTML = &#39;page1&#39;
        return
      case &#39;/page2&#39;:
        routeView.innerHTML = &#39;page2&#39;
        return
      default:
        routeView.innerHTML = &#39;page1&#39;
        return
      }
    }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>pushState() 设置的新 URL 可以是与当前 URL 同源的任意 URL；而 hash 只可修改 # 后面的部分，因此只能设置与当前 URL 同文档的 URL pushState() 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发动作将记录添加到栈中 pushState() 通过 stateObject 参数可以添加任意类型的数据到记录中；而 hash 只可添加短字符串 pushState() 可额外设置 title 属性供后续使用</p>`,12),l=[d];function t(r,v){return n(),i("div",null,l)}const u=e(a,[["render",t],["__file","hash 与 history 的区别.html.vue"]]);export{u as default};
