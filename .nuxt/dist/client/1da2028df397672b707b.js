(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{214:function(t,e,r){var content=r(249);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("5b35dbec",content,!0,{sourceMap:!1})},248:function(t,e,r){"use strict";var n=r(214);r.n(n).a},249:function(t,e,r){(t.exports=r(52)(!1)).push([t.i,"html{font-size:16px}.wrapper{display:grid;grid-template-columns:1fr repeat(12,1fr) 1fr;font-family:Rubik,sans-serif}.wrapper>*{grid-column:2/14}.gallery .title{text-align:center;font-size:3rem;margin-top:4rem}.gallery main,.showallRow{display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:4vw 2vw;margin:5vw 0}.main_item>h2{margin-top:.5rem;font-size:1.4rem;font-weight:500;text-decoration:underline}.gallery .showall{grid-column:2/3;display:flex;justify-content:center;align-items:center;font-size:1.5rem;padding:.7rem 1.2rem;background:transparent;font-family:Rubik,sans-serif;border:1px solid #023c71;border-radius:100px;text-decoration:none;color:#023c71;font-weight:500;outline:none;cursor:pointer}.background{width:100%;background:#0c6293;grid-column:1/15;display:grid;grid-template-columns:1fr repeat(12,1fr) 1fr}#Footer{grid-column:2/14}@media (min-width:1920px){html{font-size:16px}}@media (max-width:1675px){html{font-size:15px}}@media (max-width:1575px){html{font-size:14px}}@media (max-width:1475px){html{font-size:13px}}@media (max-width:1375px){html{font-size:12px}}@media (max-width:1275px){html{font-size:11px}}@media (max-width:1175px){html{font-size:10px}}@media (max-width:1075px){html{font-size:9px}}@media (max-width:975px){html{font-size:8px}}@media (max-width:885px){html{font-size:7px}}@media (max-width:775px){html{font-size:6px}}@media (max-width:650px){html{font-size:5px}}@media (max-width:576px){html{font-size:4px}#Navbar{margin-bottom:2vw}}@media (max-width:420px){.wrapper{grid-template-columns:.5fr repeat(12,1fr) .5fr}html{font-size:6px}.gallery main{grid-template-columns:1fr 1fr;grid-gap:4vw;margin:10vw 0}.main_item>h2{margin-top:.5rem;font-size:2rem}}@media (max-width:360px){html{font-size:5px}}@media (min-width:420px) and (orientation:portrait){.background{margin-top:30vh}}@media (max-width:1175px) and (orientation:portrait){.background{margin-top:45vh}}",""])},267:function(t,e,r){"use strict";r.r(e);r(106),r(107),r(17),r(36);var n=r(4),o=r(177),l=r(178),m=r(222),c=r(179),d={components:{Contacts:o.a,Navbar:l.a,Gallery:m.a,Footer:c.a},data:function(){return{galleriesOnPage:6}},asyncData:function(){var t=Object(n.a)(regeneratorRuntime.mark(function t(e){var r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.store,t.next=3,r.dispatch("actSetGalleries");case 3:return t.abrupt("return",{galleries:r.getters.getGalleries});case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),methods:{ellipsis:function(title){return title.length>40?"...":""},funcTitle:function(title){return title.toString().slice(0,40)+this.ellipsis(title.toString())}}},f=(r(248),r(21)),component=Object(f.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"wrapper"},[r("Contacts"),t._v(" "),r("no-ssr",[r("Navbar",{attrs:{id:"Navbar"}})],1),t._v(" "),r("section",{staticClass:"gallery"},[r("h2",{staticClass:"title"},[t._v("Галерея")]),t._v(" "),r("main",t._l(t.galleries.slice(0,this.galleriesOnPage),function(e){return r("div",{key:e.id,staticClass:"main_item"},[r("Gallery",{attrs:{"gallery-id":e.id,"gallery-photos":e.photos,"gallery-time":e.time}}),t._v(" "),r("h2",{staticClass:"name"},[t._v(t._s(t.funcTitle(e.title)))])],1)}),0),t._v(" "),r("div",{staticClass:"showallRow"},[this.galleriesOnPage>=t.galleries.length?t._e():r("button",{staticClass:"showall",attrs:{to:"/about"},on:{click:function(e){t.galleriesOnPage+=6}}},[t._v("Показать ещё")])])])],1),t._v(" "),r("div",{staticClass:"background"},[r("Footer",{attrs:{id:"Footer"}})],1),t._v(" "),r("script",{attrs:{type:"text/javascript"}},[t._v('\n   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};\n   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})\n   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");\n\n   ym(53837686, "init", {\n        clickmap:true,\n        trackLinks:true,\n        accurateTrackBounce:true\n   });\n')]),t._v(" "),t._m(0)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("noscript",[e("div",[e("img",{staticStyle:{position:"absolute",left:"-9999px"},attrs:{src:"https://mc.yandex.ru/watch/53837686",alt:""}})])])}],!1,null,null,null);e.default=component.exports}}]);