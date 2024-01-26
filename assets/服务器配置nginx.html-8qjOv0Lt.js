import{_ as n,o as s,c as a,a as e}from"./app-fr3Buw_y.js";const p={},o=e(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/local/webserver/nginx/sbin/nginx <span class="token parameter variable">-t</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>#error_log  logs<span class="token operator">/</span>error<span class="token punctuation">.</span>log<span class="token punctuation">;</span>
#error_log  logs<span class="token operator">/</span>error<span class="token punctuation">.</span>log  notice<span class="token punctuation">;</span>
#error_log  logs<span class="token operator">/</span>error<span class="token punctuation">.</span>log  info<span class="token punctuation">;</span>

#pid        logs<span class="token operator">/</span>nginx<span class="token punctuation">.</span>pid<span class="token punctuation">;</span>


events <span class="token punctuation">{</span>
    worker_connections  <span class="token number">1024</span><span class="token punctuation">;</span>
     use epoll<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


http <span class="token punctuation">{</span>

    # 设置常用的<span class="token constant">MIME</span>类型
    include       mime<span class="token punctuation">.</span>types<span class="token punctuation">;</span>
    default_type  application<span class="token operator">/</span>octet<span class="token operator">-</span>stream<span class="token punctuation">;</span>

    # 反向代理及负载均衡配置
    upstream backend_server <span class="token punctuation">{</span>
        server <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">8080</span><span class="token punctuation">;</span>
        server <span class="token number">127.0</span><span class="token number">.0</span><span class="token number">.1</span><span class="token operator">:</span><span class="token number">8081</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>



  # server 开始
server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name admin<span class="token punctuation">.</span>vuereact<span class="token punctuation">.</span>com<span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        alias  <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>webserver<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">/</span>admin<span class="token operator">/</span><span class="token punctuation">;</span>
        index  index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

     location <span class="token operator">/</span>api<span class="token operator">/</span> <span class="token punctuation">{</span>
        proxy_pass http<span class="token operator">:</span><span class="token operator">/</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">vuereact.top:5627</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    # 重点：解决二级目录部署时，访问css、js等静态资源报<span class="token number">404</span>的问题
    location <span class="token operator">/</span>assets<span class="token operator">/</span> <span class="token punctuation">{</span>
            alias  <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>webserver<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">/</span>admin<span class="token operator">/</span>assets<span class="token operator">/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
# server 结束

    server <span class="token punctuation">{</span>
    listen       <span class="token number">80</span><span class="token punctuation">;</span>
    server_name project1<span class="token punctuation">.</span>vuereact<span class="token punctuation">.</span>top<span class="token punctuation">;</span>
    location <span class="token operator">/</span> <span class="token punctuation">{</span>
        alias  <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>webserver<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">/</span>qiankun<span class="token operator">/</span>vue3main<span class="token operator">/</span><span class="token punctuation">;</span>
        index  index<span class="token punctuation">.</span>html index<span class="token punctuation">.</span>html<span class="token punctuation">;</span>
     <span class="token punctuation">}</span>

    location <span class="token operator">/</span>micro<span class="token operator">-</span>app<span class="token operator">-</span>demos<span class="token operator">/</span>qiankun<span class="token operator">-</span>demo<span class="token operator">/</span>vue3<span class="token operator">-</span>main<span class="token operator">/</span>assets<span class="token operator">/</span> <span class="token punctuation">{</span>
            alias  <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>webserver<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">/</span>qiankun<span class="token operator">/</span>vue3main<span class="token operator">/</span>assets<span class="token operator">/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    location <span class="token operator">/</span>micro<span class="token operator">-</span>app<span class="token operator">-</span>demos<span class="token operator">/</span>qiankun<span class="token operator">-</span>demo<span class="token operator">/</span>vite<span class="token operator">-</span>child<span class="token operator">/</span>assets<span class="token operator">/</span> <span class="token punctuation">{</span>
            alias  <span class="token operator">/</span>usr<span class="token operator">/</span>local<span class="token operator">/</span>webserver<span class="token operator">/</span>nginx<span class="token operator">/</span>html<span class="token operator">/</span>qiankun<span class="token operator">/</span>vite<span class="token operator">/</span>assets<span class="token operator">/</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),t=[o];function l(i,c){return s(),a("div",null,t)}const u=n(p,[["render",l],["__file","服务器配置nginx.html.vue"]]);export{u as default};
