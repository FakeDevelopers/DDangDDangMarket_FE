(function(t){function e(e){for(var o,s,r=e[0],c=e[1],l=e[2],d=0,h=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&h.push(n[s][0]),n[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(h.length)h.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],o=!0,r=1;r<i.length;r++){var c=i[r];0!==n[c]&&(o=!1)}o&&(a.splice(e--,1),t=s(s.s=i[0]))}return t}var o={},n={app:0},a=[];function s(e){if(o[e])return o[e].exports;var i=o[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=t,s.c=o,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)s.d(i,o,function(e){return t[e]}.bind(null,o));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"09b6":function(t,e,i){"use strict";i("fbaa")},"2d2d":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);var o=i("7a23"),n=i("6c02");const a=t=>(Object(o["B"])("data-v-519cf81c"),t=t(),Object(o["z"])(),t),s={class:"ListContainer"},r=["src"],c={class:"pagination-frame"},l=a(()=>Object(o["i"])("a",{class:"page-text"}," 〈〈 ",-1)),u=[l],d=a(()=>Object(o["i"])("a",{class:"page-text"}," 〈 ",-1)),h=[d],b=["onClick"],p={class:"page-text"},O=a(()=>Object(o["i"])("a",{class:"page-text"}," 〉 ",-1)),j=[O],m=a(()=>Object(o["i"])("a",{class:"page-text"}," 〉〉 ",-1)),g=[m];function f(t,e,i,n,a,l){const d=Object(o["G"])("TimerScreen");return Object(o["y"])(),Object(o["h"])("div",null,[Object(o["i"])("ul",s,[(Object(o["y"])(!0),Object(o["h"])(o["a"],null,Object(o["E"])(t.listItems.items,e=>(Object(o["y"])(),Object(o["h"])("li",{key:e.title,class:"listDesign"},[Object(o["i"])("img",{src:`${this.apiAddress}${e.thumbnail}`,class:"image-container",alt:"상품 사진"},null,8,r),Object(o["i"])("section",null,Object(o["I"])(t.$t("productName"))+": "+Object(o["I"])(e.productTitle),1),Object(o["i"])("section",null,Object(o["I"])(t.$t("openingBid"))+": "+Object(o["I"])(l.comma(e.openingBid)),1),Object(o["i"])("section",null,Object(o["I"])(t.$t("hopePrice"))+": "+Object(o["I"])(l.comma(e.hopePrice)),1),Object(o["i"])("section",null,Object(o["I"])(t.$t("bidderCount"))+": "+Object(o["I"])(e.bidderCount),1),Object(o["i"])("section",null,[Object(o["i"])("section",null,[Object(o["k"])(d,{"expiration-day":e.expirationDate},null,8,["expiration-day"])])])]))),128))]),Object(o["i"])("div",null,[Object(o["i"])("ul",c,[Object(o["i"])("li",{onClick:e[0]||(e[0]=t=>l.startPointChange("start"))},u),Object(o["i"])("li",{class:"page-left-btn",onClick:e[1]||(e[1]=t=>l.startPointChange("left"))},h),(Object(o["y"])(!0),Object(o["h"])(o["a"],null,Object(o["E"])(l.paginationUnits,e=>(Object(o["y"])(),Object(o["h"])("li",{key:e,class:Object(o["s"])([e===t.currentPage?"selected-page":"","page-btn"]),onClick:t=>l.changeCurrentPage(e)},[Object(o["i"])("a",p,Object(o["I"])(e),1)],10,b))),128)),Object(o["i"])("li",{class:"page-right-btn",onClick:e[2]||(e[2]=t=>l.startPointChange("right"))},j),Object(o["i"])("li",{onClick:e[3]||(e[3]=t=>l.startPointChange("end"))},g)])])])}function P(t,e,i,n,a,s){return Object(o["y"])(),Object(o["h"])("div",null,[Object(o["i"])("section",null,Object(o["I"])(t.$t("remainedTime"))+": "+Object(o["I"])(s.millisToDate(t.countdown)),1)])}var y=i("5502"),v={name:"TimerScreen.vue",props:{expirationDay:String},data:function(){return{countdown:0,expirationTime:0,stopTimer:!1,dayBool:!1,otherHourBool:!1,hourBool:!1,minuteBool:!1,expirationBool:!1}},mounted(){this.expirationTime=new Date(this.expirationDay).getTime(),this.setupCountdownTimer()},watch:{pageCheck(){this.pageCheck&&(this.$store.state.pageMove=!1,this.countdown<0&&(this.countdown=this.expirationTime-(new Date).getTime(),this.setupCountdownTimer()))},countdown(){this.dayBool=this.dayCheck(),this.otherHourBool=this.otherHourCheck(),this.hourBool=this.hourCheck(),this.minuteBool=this.minuteCheck(),this.expirationBool=this.expirationTime-(new Date).getTime()},expirationDay(t){this.expirationTime=new Date(t).getTime()}},computed:{...Object(y["b"])({pageCheck:"getPageMove"})},methods:{setupCountdownTimer(){let t=setInterval(()=>{this.countdown=this.expirationTime-(new Date).getTime(),this.countdown<=0&&clearInterval(t)},1e3)},millisToDate(t){if(this.dayBool){const e=Math.floor(t/864e5);return e+this.$t("days")}if(this.otherHourBool){const e=Math.floor(t/36e5%24);return e+this.$t("hours")}if(this.hourBool){const e=Math.floor(t/36e5%24),i=Math.floor(t/6e4%60);return e+this.$t("hours")+(0!==i?i+this.$t("minutes"):"")}if(this.minuteBool){const e=Math.floor(t/6e4%60),i=(t%6e4/1e3).toFixed(0);return(0!==e?e+this.$t("minutes"):"")+(i<10?"0":"")+i+this.$t("seconds")}if(this.expirationBool)return this.$t("expired")},minuteCheck(){return this.countdown<=36e5&&this.countdown>0},hourCheck(){return this.countdown<=108e5&&this.countdown>36e5},otherHourCheck(){return this.countdown<864e5&&this.countdown>108e5},dayCheck(){return this.countdown>=864e5}}},w=i("6b0d"),C=i.n(w);const x=C()(v,[["render",P]]);var T=x,k=i("bc3a"),S=i.n(k);const $={baseUrl:"http://bidderbidder.kro.kr:8080"};async function I(t,e){try{return await S.a.get($.baseUrl+"/product/getPageProductList",{params:{listCount:t,page:e}})}catch(i){console.log(i)}}async function M(t,e){const i=$.baseUrl+"/user/login",o=new FormData;o.append("email",t),o.append("passwd",e);try{const t=await S.a.post(i,o);console.log(t)}catch(n){console.log(n)}}var L={name:"ProductView.vue",data:function(){return{listSize:15,pageCount:10,currentPage:1,startPoint:1,apiAddress:$.baseUrl}},components:{TimerScreen:T},created(){this.$store.dispatch("FETCH_LIST",{listSize:this.listSize,currentPage:this.currentPage})},computed:{...Object(y["b"])({listItems:"getProductList"}),startPage(){return this.startPoint},maxPage(){return this.listItems.itemCount>this.listSize?Math.round(this.listItems.itemCount/this.listSize):1},endPage(){let t=this.startPage+this.pageCount-1;return t<this.maxPage?t:this.maxPage},paginationUnits(){return Array.from({length:this.endPage-this.startPage+1},(t,e)=>this.startPage+e)}},methods:{changeCurrentPage(t){this.currentPage=t,this.$store.dispatch("FETCH_LIST",{listSize:this.listSize,currentPage:this.currentPage}),this.$store.state.pageMove=!0},getPage(t){this.startPoint=t,this.currentPage=t,this.$store.dispatch("FETCH_LIST",{listSize:this.listSize,currentPage:this.currentPage}),this.$store.state.pageMove=!0},startPointChange(t){"left"===t?this.startPoint<=this.pageCount?this.startPoint=1:(this.startPoint-=this.pageCount,this.getPage(this.startPoint)):"right"===t?(this.startPoint+this.pageCount>=this.maxPage?this.startPoint=this.maxPage:this.startPoint+=this.pageCount,this.getPage(this.startPoint)):"start"===t?(this.startPoint=1,this.getPage(this.startPoint)):"end"===t&&(this.startPoint=this.maxPage,this.getPage(this.startPoint))},comma(t){return null===t?this.$t("none"):t.toLocaleString()}}};i("5ab0");const B=C()(L,[["render",f],["__scopeId","data-v-519cf81c"]]);var _=B;const D=[{path:"/",redirect:"/products"},{path:"/products",name:"products",component:_}],z=Object(n["a"])({history:Object(n["b"])(),routes:D});var F=z;function H(t,e,i,n,a,s){const r=Object(o["G"])("HeaderScreen"),c=Object(o["G"])("router-view");return Object(o["y"])(),Object(o["h"])("div",null,[Object(o["k"])(r),Object(o["k"])(c)])}const N=t=>(Object(o["B"])("data-v-4f3402d4"),t=t(),Object(o["z"])(),t),E={class:"header"},U=["value"],G=N(()=>Object(o["i"])("label",{for:"username"},"id: ",-1)),A=N(()=>Object(o["i"])("br",null,null,-1)),J=N(()=>Object(o["i"])("label",{for:"password"},"pw:",-1)),V=N(()=>Object(o["i"])("br",null,null,-1)),K=N(()=>Object(o["i"])("br",null,null,-1)),R={type:"submit"},W=N(()=>Object(o["i"])("input",{type:"checkbox",value:"true"},null,-1));function q(t,e,i,n,a,s){const r=Object(o["G"])("router-link"),c=Object(o["G"])("modal");return Object(o["y"])(),Object(o["h"])("div",null,[Object(o["i"])("nav",E,[Object(o["k"])(r,{to:"/products"},{default:Object(o["N"])(()=>[Object(o["j"])(Object(o["I"])(t.$t("productList")),1)]),_:1}),Object(o["i"])("button",{onClick:e[0]||(e[0]=e=>t.modalOpen(!0)),class:"LoginBtn"},Object(o["I"])(t.$t("login")),1),Object(o["O"])(Object(o["i"])("select",{"onUpdate:modelValue":e[1]||(e[1]=e=>t.$i18n.locale=e)},[(Object(o["y"])(!0),Object(o["h"])(o["a"],null,Object(o["E"])(t.$i18n.availableLocales,t=>(Object(o["y"])(),Object(o["h"])("option",{key:"locale-"+t,value:t},Object(o["I"])(t),9,U))),128))],512),[[o["K"],t.$i18n.locale]]),this.showModal?(Object(o["y"])(),Object(o["f"])(c,{key:0},{header:Object(o["N"])(()=>[Object(o["i"])("h3",null,Object(o["I"])(t.$t("login")),1)]),body:Object(o["N"])(()=>[Object(o["i"])("form",{onSubmit:e[4]||(e[4]=Object(o["P"])((...t)=>s.submitForm&&s.submitForm(...t),["prevent"]))},[Object(o["i"])("div",null,[G,Object(o["O"])(Object(o["i"])("input",{id:"username",type:"text","onUpdate:modelValue":e[2]||(e[2]=t=>a.email=t)},null,512),[[o["L"],a.email]])]),A,Object(o["i"])("div",null,[J,Object(o["O"])(Object(o["i"])("input",{id:"password",type:"password","onUpdate:modelValue":e[3]||(e[3]=t=>a.passwd=t)},null,512),[[o["L"],a.passwd]])]),V,K,Object(o["i"])("button",R,Object(o["I"])(t.$t("login")),1)],32)]),footer:Object(o["N"])(()=>[Object(o["i"])("label",null,[W,Object(o["j"])(Object(o["I"])(t.$t("automaticLogin")),1)])]),_:1})):Object(o["g"])("",!0)])])}const Q={class:"modal-mask"},X={class:"modal-container"},Y={class:"modal-header"},Z=Object(o["j"])(" default header "),tt={class:"modal-body"},et=Object(o["j"])(" default body "),it={class:"modal-footer"},ot=Object(o["j"])(" default footer ");function nt(t,e,i,n,a,s){return Object(o["y"])(),Object(o["f"])(o["c"],{name:"modal"},{default:Object(o["N"])(()=>[Object(o["i"])("div",Q,[Object(o["i"])("div",{class:"modal-wrapper",onClick:e[0]||(e[0]=Object(o["P"])(e=>t.modalClose(!1),["self"]))},[Object(o["i"])("div",X,[Object(o["i"])("div",Y,[Object(o["F"])(t.$slots,"header",{},()=>[Z])]),Object(o["i"])("div",tt,[Object(o["F"])(t.$slots,"body",{},()=>[et])]),Object(o["i"])("div",it,[Object(o["F"])(t.$slots,"footer",{},()=>[ot])])])])])]),_:3})}var at={methods:{...Object(y["c"])({modalClose:"setShowModal"})}};i("e1ae");const st=C()(at,[["render",nt]]);var rt=st,ct={name:"login",data(){return{email:"",passwd:""}},components:{Modal:rt},methods:{...Object(y["c"])({modalOpen:"setShowModal"}),submitForm:function(){M(this.email,this.passwd)}},computed:{...Object(y["b"])({showModal:"getModalState"})}};i("ea85");const lt=C()(ct,[["render",q],["__scopeId","data-v-4f3402d4"]]);var ut=lt,dt={name:"App",components:{HeaderScreen:ut}};i("09b6");const ht=C()(dt,[["render",H]]);var bt=ht,pt=Object(y["a"])({state:{showModal:!1,productList:[],pageMove:!1},mutations:{setShowModal(t,e){this.state.showModal=e},SET_LIST(t,e){t.productList=e}},getters:{getModalState(t){return t.showModal},getPageMove(t){return t.pageMove},getProductList(t){return t.productList}},actions:{async FETCH_LIST({commit:t},e){const i=await I(e.listSize,e.currentPage);return t("SET_LIST",i.data),i}},modules:{}}),Ot=i("47e2"),jt=i("dd11"),mt=i("edd4"),gt={ko:jt,en:mt};const ft=Object(Ot["a"])({locale:"ko",fallbackLocale:"en",messages:gt});Object(o["e"])(bt).use(pt).use(F).use(ft).mount("#app")},5975:function(t,e,i){},"5a7f":function(t,e,i){},"5ab0":function(t,e,i){"use strict";i("5a7f")},dd11:function(t){t.exports=JSON.parse('{"productName":"상품 이름","openingBid":"최소 입찰가","hopePrice":"희망가","bidderCount":"입찰자 수","automaticLogin":"자동으로 로그인 하시겠습니까?","login":"로그인","productList":"상품 리스트","remainedTime":"남은시간","expired":"기간 만료","days":"일","hours":"시간","minutes":"분","seconds":"초","none":"없음"}')},e1ae:function(t,e,i){"use strict";i("5975")},ea85:function(t,e,i){"use strict";i("2d2d")},edd4:function(t){t.exports=JSON.parse('{"productName":"Product Name","openingBid":"Opening Bid","hopePrice":"Hope Price","bidderCount":"Bidder Count","automaticLogin":"Would you want to sign in with automatically?","login":"sign in","productList":"Product List","remainedTime":"Remained Time","expired":"Expired","days":"d","hours":"hr","minutes":"min","seconds":"sec","none":"None"}')},fbaa:function(t,e,i){}});
//# sourceMappingURL=app.b47dd6c7.js.map
