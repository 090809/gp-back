(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{174:function(t,e,r){var content=r(186);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("59503198",content,!0,{sourceMap:!1})},175:function(t,e,r){var content=r(190);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("3a72967c",content,!0,{sourceMap:!1})},176:function(t,e,r){var content=r(198);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("eb42af36",content,!0,{sourceMap:!1})},177:function(t,e,r){"use strict";var n={name:"Navbar",data:function(){return{show:!1,width:window.innerWidth}},methods:{showMenu:function(){return this.width>759}}},o=(r(189),r(21)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("router-link",{attrs:{to:"/"}},[n("img",{staticClass:"logo",attrs:{src:r(187),alt:""}})]),t._v(" "),n("button",{staticClass:"burger_btn"},[n("img",{key:"openburger",staticClass:"burger",attrs:{src:r(188),alt:""},on:{click:function(e){t.show=!t.show}}})]),t._v(" "),n("transition",{attrs:{name:"fade"}},[t.show||t.showMenu()?n("ul",[n("li",[n("router-link",{attrs:{to:"/about"}},[t._v("О нас")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/changes"}},[t._v("Плафторма перемен")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/events"}},[t._v("Мероприятия")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/news"}},[t._v("Новости")])],1),t._v(" "),n("li",[n("router-link",{attrs:{to:"/gallery"}},[t._v("Галерея")])],1)]):t._e()])],1)},[],!1,null,"262a3c07",null);e.a=component.exports},178:function(t,e,r){"use strict";var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"footer_item contacts"},[n("nav",{staticClass:"contacts_item contacts_item_up"},[n("a",{attrs:{href:"youtube"}},[n("img",{attrs:{src:r(193),alt:""}})]),t._v(" "),n("a",{attrs:{href:"vk"}},[n("img",{attrs:{src:r(194),alt:""}})]),t._v(" "),n("a",{attrs:{href:"inst"}},[n("img",{attrs:{src:r(195),alt:""}})])]),t._v(" "),n("nav",{staticClass:"contacts_item contacts_item_down"},[n("p",[t._v("Контактная информация:")]),t._v(" "),n("a",{attrs:{href:"tel:+79822312466"}},[t._v("+7(982)-231-24-66")]),t._v(" "),n("a",{attrs:{href:"mailto:press@gorodperemen.spb.ru"}},[t._v("press@gorodperemen.spb.ru")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"footer_item poweredby"},[e("img",{staticClass:"logo",attrs:{src:r(196),alt:""}}),this._v(" "),e("p",[this._v("© 2019 Петербург - город перемен")]),this._v(" "),e("p",[this._v("powered by "),e("span",{staticStyle:{"font-weight":"500"}},[this._v("Bonch.dev")])])])}],o={name:"Footer"},A=(r(197),r(21)),component=Object(A.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("ul",{staticClass:"footer_item nav"},[r("li",[r("router-link",{attrs:{to:"/"}},[t._v("Главная")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/about"}},[t._v("О нас")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/changes"}},[t._v("Плафторма перемен")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/events"}},[t._v("Мероприятия")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/news"}},[t._v("Новости")])],1),t._v(" "),r("li",[r("router-link",{attrs:{to:"/gallery"}},[t._v("Галерея")])],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1)])},n,!1,null,"456808f8",null);e.a=component.exports},179:function(t,e,r){"use strict";var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"contacts"},[e("nav",{staticClass:"contacts_item contacts_item_left"},[e("a",{attrs:{href:"tel:+79822312466"}},[this._v("+7(982)-231-24-66")]),this._v(" "),e("a",{attrs:{href:"mailto:gorod@peremen.ru"}},[this._v("gorod@peremen.ru")])]),this._v(" "),e("nav",{staticClass:"contacts_item contacts_item_right"},[e("a",{attrs:{href:"youtube"}},[e("img",{attrs:{src:r(182),alt:""}})]),this._v(" "),e("a",{attrs:{href:"vk"}},[e("img",{attrs:{src:r(183),alt:""}})]),this._v(" "),e("a",{attrs:{href:"inst"}},[e("img",{attrs:{src:r(184),alt:""}})])])])}],o={name:"contacts"},A=(r(185),r(21)),component=Object(A.a)(o,function(){this.$createElement;this._self._c;return this._m(0)},n,!1,null,"45e707ae",null);e.a=component.exports},181:function(t,e,r){"use strict";var n=r(3),o=r(16),A=r(23),c=r(104),d=r(54),l=r(10),f=r(55).f,m=r(74).f,v=r(11).f,h=r(191).trim,w=n.Number,x=w,E=w.prototype,B="Number"==A(r(73)(E)),C="trim"in String.prototype,y=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,A=(e=C?e.trim():h(e,3)).charCodeAt(0);if(43===A||45===A){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===A){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,l=c.length;i<l;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(B?l(function(){E.valueOf.call(r)}):"Number"!=A(r))?c(new x(y(e)),r,w):y(e)};for(var I,_=r(7)?f(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;_.length>N;N++)o(x,I=_[N])&&!o(w,I)&&v(w,I,m(x,I));w.prototype=E,E.constructor=w,r(12)(n,"Number",w)}},182:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADfSURBVHgBrZPfDYIwEIevFxNeGQE3wGcSQjdwA9hAnUCdwBVkAlcw/HnHDRiBdxLwd0Z8g5bYL2khTe9re70SOUZJV9d1No5jihYqpfw1AsR0iGnQ8iiK7qqqqiPGb+SGE6NLyR2pCENyR8CGCZKb3TAMOdnhm4QdEt3EcZz1fb+1EZuEP7TW7SSWhf4WTnieJzmfLa0NWVKWZYJ8nnHsZGmeSRgURbFn5gP+E7JAhK0Ezgkhe5AlOEHLeDoNOQKuFzbAV1q4tTVghxeWOkMpfIpXHjqt5BvzxFeLi1zzBtSGVnrExzNTAAAAAElFTkSuQmCC"},183:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFjSURBVHgB7VLLTcNAEN3dYMk3XII7IJz9UdxBOiAdJKkgLgEqgFQAHdj4ewwd4A5wzv7xxvIisyRIVq55kjWzMzvPb2eGsSsuBc/z3Gzb1qCPAo7jhGSDIDA1TVtzzs2u6wzYsmmaveu6b7IYdwxd1w15Jo4bXDrAp4I+GMexN5CWIKLgkuLwmRCCzj+E+OEB9eZYocDFp1+SOd+R9TyvrOv6UXnRrXTSNF3BmOMkcYmhqBzFF1C5YKdxHBXvlFwBLl+QknMqAUOJf5HNsmytqquqyiOuvnHUXPTjc0yAYp8GgUaPn/2Bn28RDxR1W9u2+3tcRqIoWqLpr2w6QpB58iCkQ+sANXs2HXMMaP6HkIAV2MAUbBoMtCGQpFzNDgtNPTJPFBfU/Nls5qM9D0quRO5eqBWYVF905vkF5dGeFfxQVQohz5z9g2EfaVhyod8ty3qR+SRJNpj4nTxDxJFdcTG+AfMFqZmyGUC4AAAAAElFTkSuQmCC"},184:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGvSURBVHgBrZTbbcIwFIYdY+CRjJBOUPqIECJMABs0TEA3aJig6gYwAXSCpALEMxM0I/idS/r/lo0q1dCm5UiOHfucz+diOxCQ1WoVB0HwjGEs/iZ5WZbTXq+XBxaWYUJjYY6mq7FECPsh+giMgbKeFYfDYQApfkvJsixqNBovgIRoc3AmZCmsxZh4vQbbbrcR+06nc9ap1Wq0G3EMkHBQZde1z4N6vT6BYnI8HkPOIT0aRsv9fj/17GsYSvjDaSulmFchpVwC+I6eobUBTLARvRufTqcx9bGeQz85A6HUcmFBiYYL7ghPvuUVm6UAZrBZYJMBmsY/oS3DWq/Xpc9LwO4cDKGmrCTD7Xa7U5uOD5+dFH6ZEUZD/uB8pfC6QEsJ5xrGyyrAHT/NZnPoJuCdKQxCfGQP4JvP0FsUGJuKIZ9Pm82GBSAstiBtwWEVD/vWeG7PWuwWvnh273XmQlFY4QfmyhUEc+ZGMJ/XinKxypDiwrEhLMMwqgp0MkPbIZ8a162PfuQK5BMlfpaEHxSB+TP39ppIcWMhMBe3k1zypRU3ErIkn22+tOJ/nhoGWZ/O8QNc09NuogAAAABJRU5ErkJggg=="},185:function(t,e,r){"use strict";var n=r(174);r.n(n).a},186:function(t,e,r){(t.exports=r(52)(!1)).push([t.i,"a[data-v-45e707ae]{padding-right:1rem;text-decoration:none;color:#515050;cursor:pointer}a[data-v-45e707ae]:last-child{padding-right:0}.contacts[data-v-45e707ae]{align-items:center;font-family:Rubik,sans-serif;font-size:1.125rem;padding:.3em 0;border-bottom:1px solid #d6d5d5;margin-bottom:.5rem}.contacts[data-v-45e707ae],.contacts_item[data-v-45e707ae]{display:flex}.contacts_item_right[data-v-45e707ae]{margin-left:auto;align-items:center}.contacts_item_right img[data-v-45e707ae]{width:1.5rem;height:1.5rem}@media (max-width:765px){.contacts[data-v-45e707ae]{display:none}}",""])},187:function(t,e,r){t.exports=r.p+"img/4ef07c1.png"},188:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAqCAYAAADxughHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADrSURBVHgB7de/DYJAFAbwd9BY0hE6R7gwAW7gBuokhg3cQNgEOytwBK2gdALwewY7+7uXfL+E+0N1L8cd+ZysvPeVc+6Mx2OaSeSWZemw1rbv+0bnqTZlWWoBDZ4tphsxYF3rvigKGcfx5lDEES+uYtg8z7sEW3QQ4/RIJGgqMU7PdYL+LfZl+mk9xDi9wbSQWoxDDW06TdMTV5jDvBKb6mEYLt//CO7hLs/zF4bZej9HDTug5/qO/oQiGiEiMsf9BswjgTCPxIx5JELMI1FhHgmNeYSI7GMeCY15JGbMIxFiHokK80ho//LIB4sYvpOfeQVcAAAAAElFTkSuQmCC"},189:function(t,e,r){"use strict";var n=r(175);r.n(n).a},190:function(t,e,r){(t.exports=r(52)(!1)).push([t.i,"nav[data-v-262a3c07]{display:flex;height:4vw;align-items:center}.logo[data-v-262a3c07]{height:4.5rem;max-width:10rem}.burger_btn[data-v-262a3c07]{width:3rem;height:3rem;display:none;border:none;background:none;padding:0}.burger[data-v-262a3c07]{width:100%}ul[data-v-262a3c07]{align-items:center;list-style:none;margin-left:auto}li>a[data-v-262a3c07],ul[data-v-262a3c07]{display:flex}li>a[data-v-262a3c07]{flex-direction:column;text-align:center;background:transparent;justify-content:center;text-decoration:none;color:#323232;font-family:Rubik,sans-serif;font-size:1.125rem;font-weight:500;padding:.5rem;margin-left:3rem}li>a[data-v-262a3c07]:hover{color:#0c6293}@media (max-width:765px){nav[data-v-262a3c07],ul[data-v-262a3c07]{flex-direction:column;align-items:flex-start;z-index:1000;margin-left:-4rem}ul[data-v-262a3c07]{width:110%;align-items:center;padding:1rem 0;background:#fff}li[data-v-262a3c07],ul a[data-v-262a3c07]{display:block;width:100%}ul a[data-v-262a3c07]{font-size:2.3rem;padding:1rem 0}.burger_btn[data-v-262a3c07]{margin-top:1.4vw;align-self:flex-end;display:inline;display:initial;position:absolute;cursor:pointer;width:2rem;height:2rem}}@media (max-width:650px){.burger_btn[data-v-262a3c07]{margin-top:1vw}}@media (max-width:560px){.burger_btn[data-v-262a3c07]{margin-top:.7vw}}@media (max-width:420px){.logo[data-v-262a3c07]{height:8rem;max-width:12rem}.burger_btn[data-v-262a3c07]{margin-top:5vw}}.fade-enter-active[data-v-262a3c07],.fade-leave-active[data-v-262a3c07]{transition:opacity .3s ease}.fade-enter[data-v-262a3c07],.fade-leave-to[data-v-262a3c07]{opacity:0}",""])},191:function(t,e,r){var n=r(6),o=r(22),A=r(10),c=r(192),d="["+c+"]",l=RegExp("^"+d+d+"*"),f=RegExp(d+d+"*$"),m=function(t,e,r){var o={},d=A(function(){return!!c[t]()||"​"!="​"[t]()}),l=o[t]=d?e(v):c[t];r&&(o[r]=l),n(n.P+n.F*d,"String",o)},v=m.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(f,"")),t};t.exports=m},192:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},193:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGDSURBVHgB7ZjtTcMwFEVvKgbICGGCdIRkAmCDsEE3KEwATABsECYgTEA7QbNBs4G5L3EqaBGN7BfkHz7SrR0pqo7y9Z4NRCKRP0mmnGSMSTmk0KVLkqQ7d1Lyi0jF5ExhpbTFjhHJ1uaNaSjenpxFuTWzN2GwPpZ7MOHRSyacZBx3CJNywZ8VwqUQwRzhshTBDOGSyzNoEC7dAn60zA1za+fapDB+VN//jccrZmcU8b2CP2AFeORQMvdQuqKqgoKUKeYOg+gTPFEXHLGi8o29ZF7hyGyCI1a04rSGA7MLCmbokpZwYFZBETND0Zdan8GBC8yE/QSJXAYP1AUpVnB4hlIJ9b3Fh25bxJh3TiUZlJBavId7Wy/t+guGF6CAPp0IOj/A/8BGbvEG4dJ3M1uEy1YEG4RLvWAZahCmpKyPm37hbkvRJ8J5WVqmlDrefwftFoS0R85dhyINrJwcnOzNmGGdfM1cYbiiGeZl3Pr4YGr7yB2YtHkkWHFNJm0eRSKRM3wB+RcfuCU0fHwAAAAASUVORK5CYII="},194:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGwSURBVHgB7ZfhccIwDIUVJsgIGQE2CBswQroBGwAbdIN0g7YThA1gA2eDsoEqNeEuuLYlmxz8wN+dMUf0rBfZcQxAJpPJvDYFJIKIJXUVtaXjcl8UxRFmoKBE9ZgItIlIs6GupVaCn57aivQXXwCN00CYIwdJNI6Bl9Q+FNptwNxWof/hwE4I6gJJJO0+oDUoYxYUe4AwNQ7LwMU3JIDDrFSK0MNV0GFCFen3jaBrPDqDiupx7OLGqR9fFS8QSUT11vzxZ3B8Uo+CYAfzoBnnQJ76m1+4Qoqy15GaxorfoUzrtY3yWjQ4bNDX+AaVBul7hTKG46aeFnZpIUwFt1O0FOLLqznqOpBZ/5taGxrsXXGnLQ5PsFFURBPH7F1+CodBvmsD4dfY3JypcivXBXuKYXx3vsFjid/wqZKf+DhOOHn4tAZL1K2dp5rU7I1PN6k5Fs2JQWsv1JjcYzq8mfMmfYrQJFUyxeTXRF9inMkWYsGhGiYiydbSV/fotSY5iea4zzQevVHqDaQyMRpKVge0HcqY5L+dVkI+NNiL+kJvpbOgq8F9eO3HPqjPZDKZV+AXjvqvCTrg4X8AAAAASUVORK5CYII="},195:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKmSURBVHgB1ZmBdZswEIbPeRmADapMUHcDvEEzQegE9gZOJrA7ge0J7E4AncBsAJ3A3uB6F4TfoQisIw4h33v3jOAO/Ug6SWAAB0RMyFKyEw7HydaZQBt00ZAd8fMpyEyta1KLo5+UzMA4KMlmk8mkrAUW0BT3QpZZxyGIyBZkT+JcTgJ/TLDq94248EgXDvDB4NvxlkPVSHtx7hc7pqL/NzAAXE/L+IvJnkU5vSP/qYj9DcNgOs5nojy9h6r/a07QA3rSyN5c3ovH0Bn0lOI4uoeeWFFzstiaz4fHFfdKxhkJPSuSfAuMmaNuIi/IFiJ+3+L3E6v5+AJnMYq6DT3pvw5h3GqcZbHnckl2tsbjOvL4ZMCZWeEm5F+qmxPE0HEhKw1qQftkhePPrfhshfv8E09M4fN34i5oBKaO77qrIhEXWV9JGirQTZIH7nZPHM/wsSi/cHdAADaTF3Rf/l3a0zzf8fHOE2IaJdSzdu9on3plu483HJwEicdvra1MK7DA7vGzcPw30h+r7lZt47QCE7gCNpcqJr1y/aYCjagobhEYe+JiZzgEcwfhnJ3V4AnCuUzS9h5laKBGYO6UpyhWB8Hcc+67Uw5eozVrceQpc+by3PnHluu1Ga4ICt9EKIZD4cTtFbEHJzY4kzVdzINbtqJm73gQ4gz412kvGoGMHOwZNDeXbWzJdyvKMWhAHSd8O/FuO/xTj3+BCvosdSvPQ/Kuhcfk0Qrg49jjt0IlfQQyS1DCMdiDvgIZbo3Q7Za65W4hkCmw6l7TImyJ7/zG42753wNPvrzaRNYM3IBbCvwQtPPg4HwJgX3e/ofizAJzGC85C9zBeNnVHzCP0PzKNQZK2mQ81EnyCMN9TQ2hJJvxwatA+54wg3GI5JyYtX4Nw5H9DfEff/k/uBTSptQAAAAASUVORK5CYII="},196:function(t,e,r){t.exports=r.p+"img/164862b.png"},197:function(t,e,r){"use strict";var n=r(176);r.n(n).a},198:function(t,e,r){(t.exports=r(52)(!1)).push([t.i,'footer[data-v-456808f8]{display:grid;width:100%;grid-template-areas:"nav contacts poweredby";grid-template-columns:1fr 1fr 1fr;grid-gap:2vw;background:#0c6293;color:#fff;font-family:Rubik;font-style:normal;padding:5vw 0;font-size:1.125rem}.footer_item[data-v-456808f8]{display:flex;flex-direction:column;align-items:center}.nav[data-v-456808f8]{grid-area:nav;align-items:flex-start;list-style:none;font-weight:500;font-size:1.2rem;padding:0;margin:0}.nav li[data-v-456808f8]{padding:0;margin:0 0 1rem}.nav a[data-v-456808f8]{color:#fff;cursor:pointer}.nav a[data-v-456808f8]:hover{text-decoration:none}.contacts[data-v-456808f8]{grid-area:contacts}.contacts a[data-v-456808f8]{color:#fff;text-decoration:none;font-weight:500}.contacts_item[data-v-456808f8]{display:flex}.contacts_item_up[data-v-456808f8]{width:60%;justify-content:space-between;margin-bottom:2rem}.contacts_item_up img[data-v-456808f8]{width:2.5rem;height:2.5rem}.contacts_item_down[data-v-456808f8]{width:60%;flex-direction:column}.contacts_item_down a[data-v-456808f8],.contacts_item_down p[data-v-456808f8]{margin-bottom:1rem}.poweredby[data-v-456808f8]{grid-area:poweredby}.poweredby img[data-v-456808f8]{width:60%;margin-bottom:1rem}@media (min-width:576px) and (max-width:855px){footer[data-v-456808f8]{font-size:1rem}}@media (max-width:576px){footer[data-v-456808f8]{grid-template-areas:"nav" "contacts" "poweredby";grid-template-columns:1fr;grid-gap:2vw;font-size:1.5rem}.nav[data-v-456808f8]{align-items:center;font-size:2rem}.contacts_item_up[data-v-456808f8],.poweredby img[data-v-456808f8]{width:40%}.contacts_item_down[data-v-456808f8]{align-items:center}}',""])},208:function(t,e,r){var content=r(243);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(53).default)("3377af4e",content,!0,{sourceMap:!1})},215:function(t,e,r){"use strict";r(181);var n={name:"Gallery",props:{galleryId:Number,galleryTime:String,galleryPhotos:Array},computed:{backgroundImage:function(){if(void 0!==this.galleryPhotos[0])return'url("'+this.galleryPhotos[0].path+'") 50% 50% no-repeat;'}}},o=(r(242),r(21)),component=Object(o.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"gallery",style:{background:t.backgroundImage}},[r("h2",[t._v(t._s(t.galleryPhotos.length)+" фото")]),t._v(" "),r("span",{staticClass:"data"},[t._v(t._s(t.galleryTime))]),t._v(" "),r("router-link",{attrs:{to:{path:"/gallery/"+t.galleryId}}})],1)},[],!1,null,"6214fa91",null);e.a=component.exports},242:function(t,e,r){"use strict";var n=r(208);r.n(n).a},243:function(t,e,r){(t.exports=r(52)(!1)).push([t.i,".gallery[data-v-6214fa91]{display:flex;flex-direction:column;justify-content:flex-end;width:100%;height:12vw;border-radius:15px;font-family:Rubik,sans-serif;color:#fff;box-shadow:inset -12px -181px 95px -72px rgba(0,0,0,.75);background-size:cover!important;padding:.5rem 1rem;position:relative}h2[data-v-6214fa91]{font-weight:500;font-size:1.1rem;margin-bottom:.5rem}span[data-v-6214fa91]{font-size:.8rem}a[data-v-6214fa91]{position:absolute;display:block;top:0;left:0;right:0;bottom:0}@media (max-width:992px){.gallery[data-v-6214fa91]{padding:1rem 1.5rem}h2[data-v-6214fa91]{font-size:1.5rem;margin-bottom:.5rem}span[data-v-6214fa91]{font-size:.9rem}}@media (max-width:650px){.gallery[data-v-6214fa91]{padding:1.1rem 2rem}h2[data-v-6214fa91]{font-size:1.5rem;margin-bottom:.5rem}span[data-v-6214fa91]{font-size:.9rem}}@media (max-width:420px){.gallery[data-v-6214fa91]{height:30vw;padding:1rem 2rem}h2[data-v-6214fa91]{margin-bottom:.5rem}h2[data-v-6214fa91],span[data-v-6214fa91]{font-size:1.5rem}}",""])}}]);