import{_ as u,X as p,Y as h,a1 as t,a2 as e,Z as o,$ as n,a0 as l,C as r}from"./framework-ea1ea870.js";const f={},b=t("h1",{id:"ihub-test",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#ihub-test","aria-hidden":"true"},"#"),e(" ihub-test")],-1),_=t("div",{class:"hint-container info"},[t("p",{class:"hint-container-title"},"插件说明"),t("p",null,[t("code",null,"ihub-test"),e("插件用于配置测试任务。")])],-1),v=t("thead",null,[t("tr",null,[t("th",null,"信息"),t("th",null,"描述")])],-1),m=t("tr",null,[t("td",null,"插件ID"),t("td",null,[t("code",null,"pub.ihub.plugin.ihub-test")])],-1),g=t("tr",null,[t("td",null,"插件名称"),t("td",null,[t("code",null,"测试插件")])],-1),k=t("tr",null,[t("td",null,"插件类型"),t("td",null,[t("code",null,"Project"),t("sup",{class:"footnote-ref"},[t("a",{href:"#footnote1"},"[1]"),t("a",{class:"footnote-anchor",id:"footnote-ref1"})])])],-1),E=t("tr",null,[t("td",null,"扩展名称"),t("td",null,[t("code",null,"iHubTest")])],-1),x=t("td",null,"插件依赖",-1),y=t("a",{href:"iHubBom"},"ihub-bom",-1),B={href:"https://docs.gradle.org/current/userguide/test_report_aggregation_plugin.html",target:"_blank",rel:"noopener noreferrer"},A=t("code",null,"主项目",-1),P=l('<h2 id="扩展属性" tabindex="-1"><a class="header-anchor" href="#扩展属性" aria-hidden="true">#</a> 扩展属性</h2><table><thead><tr><th>Extension</th><th>Description</th><th>Default</th><th>Ext<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></th><th>Prj<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></th><th>Sys<sup class="footnote-ref"><a href="#footnote4">[4]</a><a class="footnote-anchor" id="footnote-ref4"></a></sup></th><th>Env<sup class="footnote-ref"><a href="#footnote5">[5]</a><a class="footnote-anchor" id="footnote-ref5"></a></sup></th></tr></thead><tbody><tr><td><code>enabled</code></td><td>启用测试</td><td><code>true</code></td><td>✔</td><td>✔</td><td>✔</td><td>❌</td></tr><tr><td><code>classes</code></td><td>包含测试类（<code>,</code>分割，支持通配符<code>*</code>）</td><td><code>**/*Test*,**/*FT*,**/*UT*</code></td><td>✔</td><td>✔</td><td>✔</td><td>❌</td></tr><tr><td><code>forkEvery</code></td><td>每跑x个测试类后重启fork进程</td><td><code>100</code></td><td>✔</td><td>✔</td><td>✔</td><td>❌</td></tr><tr><td><code>maxParallelForks</code></td><td>最多启动进程数</td><td><code>1</code></td><td>✔</td><td>✔</td><td>✔</td><td>❌</td></tr><tr><td><code>runProperties</code></td><td>任务运行时属性<a href="explanation#runproperties">详见</a></td><td><code>{System.properties}</code></td><td>✔</td><td>❌</td><td>❌</td><td>❌</td></tr><tr><td><code>runIncludePropNames</code></td><td>运行时包含系统属性名称（<code>,</code>分割，支持通配符<code>*</code>）<a href="explanation#runincludepropnames">详见</a></td><td>❌</td><td>✔</td><td>✔</td><td>✔</td><td>❌</td></tr><tr><td><code>runSkippedPropNames</code></td><td>运行时排除系统属性名称（<code>,</code>分割，支持通配符<code>*</code>）<a href="explanation#runskippedpropnames">详见</a></td><td>❌</td><td>✔</td><td>✔</td><td>✔</td><td>❌</td></tr><tr><td><code>enabledLocalProperties</code></td><td>启用本地属性<a href="explanation#enabledlocalproperties">详见</a></td><td><code>true</code></td><td>✔</td><td>✔</td><td>❌</td><td>❌</td></tr><tr><td><code>debug</code></td><td>启用测试调试</td><td><code>false</code></td><td>✔</td><td>✔</td><td>✔</td><td>❌</td></tr><tr><td><code>failFast</code></td><td>只要有一个测试失败就停止测试</td><td><code>false</code></td><td>✔</td><td>✔</td><td>✔</td><td>❌</td></tr><tr><td><code>testFramework</code></td><td>测试框架</td><td><a href="#%E6%B5%8B%E8%AF%95%E6%A1%86%E6%9E%B6">详见</a></td><td>✔</td><td>✔</td><td>❌</td><td>❌</td></tr></tbody></table><h2 id="插件安装" tabindex="-1"><a class="header-anchor" href="#插件安装" aria-hidden="true">#</a> 插件安装</h2>',3),T=t("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[t("pre",{class:"language-kotlin"},[t("code",null,[e("plugins "),t("span",{class:"token punctuation"},"{"),e(`
    `),t("span",{class:"token function"},"id"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string-literal singleline"},[t("span",{class:"token string"},'"pub.ihub.plugin.ihub-test"')]),t("span",{class:"token punctuation"},")"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),j=t("div",{class:"language-groovy line-numbers-mode","data-ext":"groovy"},[t("pre",{class:"language-groovy"},[t("code",null,[e("plugins "),t("span",{class:"token punctuation"},"{"),e(`
    id `),t("span",{class:"token string"},"'pub.ihub.plugin.ihub-test'"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),I=t("h2",{id:"配置示例",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#配置示例","aria-hidden":"true"},"#"),e(" 配置示例")],-1),D=t("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[t("pre",{class:"language-kotlin"},[t("code",null,[e("iHubTest "),t("span",{class:"token punctuation"},"{"),e(`
    enabled`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"set"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),e(`
    failFast`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"set"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),F=t("div",{class:"language-groovy line-numbers-mode","data-ext":"groovy"},[t("pre",{class:"language-groovy"},[t("code",null,[e("iHubTest "),t("span",{class:"token punctuation"},"{"),e(`
    enabled `),t("span",{class:"token operator"},"="),e(),t("span",{class:"token boolean"},"true"),e(`
    failFast `),t("span",{class:"token operator"},"="),e(),t("span",{class:"token boolean"},"true"),e(`
`),t("span",{class:"token punctuation"},"}"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),N=l(`<h2 id="测试框架" tabindex="-1"><a class="header-anchor" href="#测试框架" aria-hidden="true">#</a> 测试框架</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>测试框架依赖配置目前支持：<code>SPOCK</code>、<code>JUNIT_JUPITER</code>、<code>NONE</code></li><li><code>Groovy</code>环境默认<code>SPOCK</code>、<code>Java</code>环境默认<code>JUNIT_JUPITER</code></li></ul></div><h3 id="spock" tabindex="-1"><a class="header-anchor" href="#spock" aria-hidden="true">#</a> SPOCK</h3><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>dependencies <span class="token punctuation">{</span>
    testImplementation <span class="token string">&#39;org.spockframework:spock-spring&#39;</span>
    testRuntimeOnly <span class="token string">&#39;com.athaydes:spock-reports&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="junit-jupiter" tabindex="-1"><a class="header-anchor" href="#junit-jupiter" aria-hidden="true">#</a> JUNIT_JUPITER</h3><div class="language-groovy line-numbers-mode" data-ext="groovy"><pre class="language-groovy"><code>dependencies <span class="token punctuation">{</span>
    testImplementation <span class="token string">&#39;org.junit.jupiter:junit-jupiter&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">`,7),S={class:"footnotes"},C={class:"footnotes-list"},J={id:"footnote1",class:"footnote-item"},U=t("code",null,"Project",-1),H=t("code",null,"build.gradle",-1),K={href:"https://docs.gradle.org/current/dsl/org.gradle.api.Project.html",target:"_blank",rel:"noopener noreferrer"},O=t("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),R=l('<li id="footnote2" class="footnote-item"><p><code>Ext</code>（Extension）：插件自定义扩展属性，配置于<code>build.gradle</code>文件，配置方式<a href="explanation#%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E">详见</a> <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li><li id="footnote3" class="footnote-item"><p><code>Prj</code>（Project）：项目属性，配置于<code>gradle.properties</code>文件，配置格式<code>扩展名</code>.<code>属性名</code><a href="explanation#%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E">详见</a> <a href="#footnote-ref3" class="footnote-backref">↩︎</a></p></li><li id="footnote4" class="footnote-item"><p><code>Sys</code>（System）：系统属性，如命令行传递的信息等，配置格式<code>扩展名</code>.<code>属性名</code><a href="explanation#%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E">详见</a> <a href="#footnote-ref4" class="footnote-backref">↩︎</a></p></li><li id="footnote5" class="footnote-item"><p><code>Env</code>（Environment）：环境变量属性，配置格式全部大写，多个单词，用<code>_</code>分隔<a href="explanation#%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E">详见</a> <a href="#footnote-ref5" class="footnote-backref">↩︎</a></p></li>',4);function V(w,G){const c=r("ExternalLinkIcon"),i=r("CodeTabs");return p(),h("div",null,[b,_,t("table",null,[v,t("tbody",null,[m,g,k,E,t("tr",null,[x,t("td",null,[y,e("、"),t("a",B,[e("test-report-aggregation"),o(c)]),e("（"),A,e("）")])])])]),P,o(i,{id:"350",data:[{title:"Kotlin"},{title:"Groovy"}],"tab-id":"build"},{tab0:n(({title:d,value:a,isActive:s})=>[T]),tab1:n(({title:d,value:a,isActive:s})=>[j]),_:1}),I,o(i,{id:"361",data:[{title:"Kotlin"},{title:"Groovy"}],"tab-id":"build"},{tab0:n(({title:d,value:a,isActive:s})=>[D]),tab1:n(({title:d,value:a,isActive:s})=>[F]),_:1}),N,t("section",S,[t("ol",C,[t("li",J,[t("p",null,[U,e("：项目类型插件，配置于"),H,e("文件，类型说明"),t("a",K,[e("详见"),o(c)]),e(),O])]),R])])])}const X=u(f,[["render",V],["__file","iHubTest.html.vue"]]);export{X as default};
