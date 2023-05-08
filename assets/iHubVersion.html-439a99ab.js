import{_ as u,X as h,Y as f,a1 as e,a2 as n,Z as o,$ as s,a0 as c,C as d}from"./framework-ea1ea870.js";const p={},_=e("h1",{id:"ihub-version",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ihub-version","aria-hidden":"true"},"#"),n(" ihub-version")],-1),b=e("div",{class:"hint-container info"},[e("p",{class:"hint-container-title"},"插件说明"),e("p",null,[e("code",null,"ihub-version"),n("插件是版本插件，集成并加强了第三方version插件，用于设置项目版本。")])],-1),v=e("thead",null,[e("tr",null,[e("th",null,"信息"),e("th",null,"描述")])],-1),g=e("tr",null,[e("td",null,"插件ID"),e("td",null,[e("code",null,"pub.ihub.plugin.ihub-version")])],-1),m=e("tr",null,[e("td",null,"插件名称"),e("td",null,[e("code",null,"版本插件")])],-1),E=e("tr",null,[e("td",null,"插件类型"),e("td",null,[e("code",null,"Project"),e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote1"},"[1]"),e("a",{class:"footnote-anchor",id:"footnote-ref1"})])])],-1),k=e("tr",null,[e("td",null,"扩展名称"),e("td",null,[e("code",null,"iHubVersion")])],-1),x=e("td",null,"插件依赖",-1),A={href:"https://plugins.gradle.org/plugin/io.freefair.git-version",target:"_blank",rel:"noopener noreferrer"},B={href:"https://plugins.gradle.org/plugin/com.github.ben-manes.versions",target:"_blank",rel:"noopener noreferrer"},y=c('<div class="hint-container tip"><p class="hint-container-title">插件功能</p><ol><li>引入<code>git-version</code>插件自动配置项目版本，<code>增强支持推断版本号</code></li><li>引入<code>ben-manes.versions</code>插件用于检查组件版本号，<code>增强支持自动替换最新版本</code></li></ol></div><h2 id="扩展属性" tabindex="-1"><a class="header-anchor" href="#扩展属性" aria-hidden="true">#</a> 扩展属性</h2>',2),V=e("thead",null,[e("tr",null,[e("th",null,"Extension"),e("th",null,"Description"),e("th",null,"Default"),e("th",null,[n("Ext"),e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote2"},"[2]"),e("a",{class:"footnote-anchor",id:"footnote-ref2"})])]),e("th",null,[n("Prj"),e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote3"},"[3]"),e("a",{class:"footnote-anchor",id:"footnote-ref3"})])]),e("th",null,[n("Sys"),e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote4"},"[4]"),e("a",{class:"footnote-anchor",id:"footnote-ref4"})])]),e("th",null,[n("Env"),e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote5"},"[5]"),e("a",{class:"footnote-anchor",id:"footnote-ref5"})])])])],-1),D=e("td",null,[e("code",null,"autoReplaceLaterVersions")],-1),j={href:"https://plugins.gradle.org/plugin/com.github.ben-manes.versions",target:"_blank",rel:"noopener noreferrer"},P=e("td",null,[e("code",null,"false")],-1),C=e("td",null,"✔",-1),H=e("td",null,"✔",-1),L=e("td",null,"✔",-1),F=e("td",null,"❌",-1),I=e("tr",null,[e("td",null,[e("code",null,"useInferringVersion")]),e("td",null,[n("使用推断版本号，根据最新"),e("code",null,"git tag"),n("推断下一个版本号，支持tag格式"),e("code",null,"{major}.{minor}.{patch}"),n("或"),e("code",null,"v{major}.{minor}.{patch}"),n("，推断方式"),e("code",null,"patch + 1")]),e("td",null,[e("code",null,"false")]),e("td",null,"✔"),e("td",null,"✔"),e("td",null,"✔"),e("td",null,"✔")],-1),N=e("h2",{id:"插件安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#插件安装","aria-hidden":"true"},"#"),n(" 插件安装")],-1),S=e("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[e("pre",{class:"language-kotlin"},[e("code",null,[n("plugins "),e("span",{class:"token punctuation"},"{"),n(`
    `),e("span",{class:"token function"},"id"),e("span",{class:"token punctuation"},"("),e("span",{class:"token string-literal singleline"},[e("span",{class:"token string"},'"pub.ihub.plugin.ihub-version"')]),e("span",{class:"token punctuation"},")"),n(`
`),e("span",{class:"token punctuation"},"}"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),R=e("div",{class:"language-groovy line-numbers-mode","data-ext":"groovy"},[e("pre",{class:"language-groovy"},[e("code",null,[n("plugins "),e("span",{class:"token punctuation"},"{"),n(`
    id `),e("span",{class:"token string"},"'pub.ihub.plugin.ihub-version'"),n(`
`),e("span",{class:"token punctuation"},"}"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),T=c('<div class="hint-container note"><p class="hint-container-title">注</p><p>如果已经安装基础插件<code>ihub</code>，则无需单独安装<code>ihub-version</code>插件，<code>ihub</code>插件已经集成了<code>ihub-version</code>插件。</p></div><h2 id="配置示例" tabindex="-1"><a class="header-anchor" href="#配置示例" aria-hidden="true">#</a> 配置示例</h2>',2),G=e("div",{class:"language-kotlin line-numbers-mode","data-ext":"kt"},[e("pre",{class:"language-kotlin"},[e("code",null,[n("iHubVersion "),e("span",{class:"token punctuation"},"{"),n(`
    autoReplaceLaterVersions`),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"set"),e("span",{class:"token punctuation"},"("),e("span",{class:"token boolean"},"true"),e("span",{class:"token punctuation"},")"),n(`
`),e("span",{class:"token punctuation"},"}"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),K=e("div",{class:"language-groovy line-numbers-mode","data-ext":"groovy"},[e("pre",{class:"language-groovy"},[e("code",null,[n("iHubVersion "),e("span",{class:"token punctuation"},"{"),n(`
    autoReplaceLaterVersions `),e("span",{class:"token operator"},"="),n(),e("span",{class:"token boolean"},"true"),n(`
`),e("span",{class:"token punctuation"},"}"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w=e("hr",{class:"footnotes-sep"},null,-1),X={class:"footnotes"},Y={class:"footnotes-list"},Z={id:"footnote1",class:"footnote-item"},$=e("code",null,"Project",-1),q=e("code",null,"build.gradle",-1),z={href:"https://docs.gradle.org/current/dsl/org.gradle.api.Project.html",target:"_blank",rel:"noopener noreferrer"},J=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),M=c('<li id="footnote2" class="footnote-item"><p><code>Ext</code>（Extension）：插件自定义扩展属性，配置于<code>build.gradle</code>文件，配置方式<a href="explanation#%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E">详见</a> <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li><li id="footnote3" class="footnote-item"><p><code>Prj</code>（Project）：项目属性，配置于<code>gradle.properties</code>文件，配置格式<code>扩展名</code>.<code>属性名</code><a href="explanation#%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E">详见</a> <a href="#footnote-ref3" class="footnote-backref">↩︎</a></p></li><li id="footnote4" class="footnote-item"><p><code>Sys</code>（System）：系统属性，如命令行传递的信息等，配置格式<code>扩展名</code>.<code>属性名</code><a href="explanation#%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E">详见</a> <a href="#footnote-ref4" class="footnote-backref">↩︎</a></p></li><li id="footnote5" class="footnote-item"><p><code>Env</code>（Environment）：环境变量属性，配置格式全部大写，多个单词，用<code>_</code>分隔<a href="explanation#%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E">详见</a> <a href="#footnote-ref5" class="footnote-backref">↩︎</a></p></li>',4);function O(Q,U){const t=d("ExternalLinkIcon"),r=d("CodeTabs");return h(),f("div",null,[_,b,e("table",null,[v,e("tbody",null,[g,m,E,k,e("tr",null,[x,e("td",null,[e("a",A,[n("io.freefair.git-version"),o(t)]),n("、"),e("a",B,[n("com.github.ben-manes.versions"),o(t)])])])])]),y,e("table",null,[V,e("tbody",null,[e("tr",null,[D,e("td",null,[n("自动替换最新版本（"),e("a",j,[n("versions"),o(t)]),n("插件增强）")]),P,C,H,L,F]),I])]),N,o(r,{id:"157",data:[{title:"Kotlin"},{title:"Groovy"}],"tab-id":"build"},{tab0:s(({title:l,value:a,isActive:i})=>[S]),tab1:s(({title:l,value:a,isActive:i})=>[R]),_:1}),T,o(r,{id:"173",data:[{title:"Kotlin"},{title:"Groovy"}],"tab-id":"build"},{tab0:s(({title:l,value:a,isActive:i})=>[G]),tab1:s(({title:l,value:a,isActive:i})=>[K]),_:1}),w,e("section",X,[e("ol",Y,[e("li",Z,[e("p",null,[$,n("：项目类型插件，配置于"),q,n("文件，类型说明"),e("a",z,[n("详见"),o(t)]),n(),J])]),M])])])}const ee=u(p,[["render",O],["__file","iHubVersion.html.vue"]]);export{ee as default};
