webpackJsonp([5,0],{0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var s=n(2),i=o(s),a=n(237),l=o(a),u=n(9),r=o(u);i.default.use(r.default),new i.default({el:"#channels",template:"<App/>",components:{App:l.default}})},1:function(t,e){},4:function(t,e,n){"use strict";!function(){var t=document.documentElement.clientWidth||document.body.clientWidth;t=t>640?640:t;var e=t/750*100;document.documentElement.style.fontSize=e+"px"}(),window.VERSION="0.1",window.HOST="http://dev.kofuf.com";var o=n(32);o.attach(document.body),window.getAuthLink=function(t,e){return"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx05e842991e5fa0b2&redirect_uri=http://api.kofuf.com%2Fapi%2Fsession%2Fauth_weixin&response_type=code&scope=snsapi_userinfo&state="+t+"_"+e+"#wechat_redirect"},window.getAuth=function(t,e,n,o){var s=t.get("gid"),i=e.parse();localStorage.getItem("gid")||("undefined"!=typeof i.gid?(localStorage.setItem("gid",i.gid),localStorage.setItem("token",i.token)):"undefined"!=typeof s?(localStorage.setItem("gid",t.get("gid")),localStorage.setItem("token",t.get("token"))):window.location.href=getAuthLink(n,o))},window.clearcookie=function(t){localStorage.clear(),t.set("gid",0,{domain:".kofuf.com",path:"/",expires:-1}),t.set("token",0,{domain:".kofuf.com",path:"/",expires:-1})}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={ajaxPost:function(t,e,n,o){$.ajax({url:t,type:"POST",data:e,success:function(t){n(t)},error:function(t){o(t)}})},ajaxGet:function(){},httpPost:function(t,e,n,o,s){t.http.options.emulateJSON=!0,t.http.options.headers={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},t.http.interceptors.push(function(t,e){t.headers.set("from","3"),t.headers.set("gid",localStorage.getItem("gid")),t.headers.set("token",localStorage.getItem("token")),t.headers.set("version",VERSION),e()}),t.http.post(e,n).then(function(t){return t.bodyText}).then(function(t){var t=JSON.parse(t);o(t)},function(t){s(t)})},httpGet:function(t,e,n,o,s){t.http.options.emulateJSON=!0,t.http.options.headers={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},t.http.interceptors.push(function(t,e){t.headers.set("from","3"),t.headers.set("gid",localStorage.getItem("gid")),t.headers.set("token",localStorage.getItem("token")),t.headers.set("version",VERSION),e()}),t.http.get(e,n).then(function(t){return t.bodyText}).then(function(t){var t=JSON.parse(t);o(t)},function(t){s(t)})}}},6:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={getUrlKey:function(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||["",""])[1].replace(/\+/g,"%20"))||null}}},10:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:{type:Boolean,default:!1},text:String,position:String},created:function(){this.show=this.value},data:function(){return{show:!1}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)}}}},12:function(t,e){},15:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"vux-mask"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},staticRenderFns:[]}},17:function(t,e,n){var o,s;n(12),o=n(10);var i=n(15);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},19:function(t,e){"use strict";function n(){var t=window.navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)}Object.defineProperty(e,"__esModule",{value:!0}),e.isWeiXin=n},20:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(39),i=o(s);e.default={components:{XDialog:i.default},created:function(){"undefined"!=typeof this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"}},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}},21:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function s(t){return JSON.parse((0,a.default)(t))}Object.defineProperty(e,"__esModule",{value:!0});var i=n(53),a=o(i),l=n(14),u=o(l),r=n(76),c=o(r),d=n(74),f=o(d),p=n(75),h=o(p),v=function(){return{content:"Pull Down To Refresh",height:60,autoRefresh:!1,downContent:"Pull Down To Refresh",upContent:"Release To Refresh",loadingContent:"Loading...",clsPrefix:"xs-plugin-pulldown-"}},_=function(){return{content:"Pull Up To Refresh",pullUpHeight:60,height:40,autoRefresh:!1,downContent:"Release To Refresh",upContent:"Pull Up To Refresh",loadingContent:"Loading...",clsPrefix:"xs-plugin-pullup-"}};e.default={props:{value:{type:Object,default:function(){return{pulldownStatus:"",pullupStatus:""}}},height:String,lockX:Boolean,lockY:Boolean,scrollbarX:Boolean,scrollbarY:Boolean,bounce:{type:Boolean,default:!0},useOriginScroll:{type:Boolean,default:!1},useTransition:{type:Boolean,default:!0},preventDefault:{type:Boolean,default:!1},stopPropagation:Boolean,boundryCheck:{type:Boolean,default:!0},gpuAcceleration:{type:Boolean,default:!0},usePulldown:{type:Boolean,default:!1},usePullup:{type:Boolean,default:!1},pulldownConfig:{type:Object,default:function(){return{}}},pullupConfig:{type:Object,default:function(){return{}}},enableHorizontalSwiping:{type:Boolean,default:!1},scrollBottomOffset:{type:Number,default:0}},methods:{reset:function(t,e,n){t&&("undefined"!=typeof t.left&&this._xscroll.scrollLeft(t.left,e,n),"undefined"!=typeof t.top&&this._xscroll.scrollTop(t.top,e,n)),this._xscroll&&this._xscroll.resetSize()},donePulldown:function(){var t=this;this.pulldown.reset(function(){t.reset()}),this.currentValue.pulldownStatus="default"},disablePullup:function(){this.pullup.stop(),this.currentValue.pullupStatus="disabled"},enablePullup:function(){this.currentValue.pullupStatus="default",this.pullup.restart()},donePullup:function(){this.pullup.complete(),this.reset(),this.currentValue.pullupStatus="default"},getStyles:function(){var t=this.height;!this.height&&this.$el&&!this.$el.style.height&&this.lockX&&(t=document.documentElement.clientHeight+"px",this.reset()),this.height&&0===this.height.indexOf("-")&&(t=document.documentElement.clientHeight+parseInt(this.height)+"px"),this.styles={height:""+t}}},created:function(){var t=this;this.value?this.currentValue=this.value:this.currentValue={pulldownStatus:"",pullupStatus:""},this.handleOrientationchange=function(){setTimeout(function(){t.reset()},100)}},data:function(){return{currentValue:{},styles:{}}},watch:{currentValue:{handler:function(t){this.$emit("input",s(t))},deep:!0},height:function(){this.getStyles()},value:{handler:function(t){"default"===t.pullupStatus&&"default"!==this.currentValue.pullupStatus&&this.donePullup(),"default"===t.pulldownStatus&&"default"!==this.currentValue.pulldownStatus&&this.donePulldown(),"disabled"===t.pullupStatus&&"disabled"!==this.currentValue.pullupStatus&&this.disablePullup(),"enabled"===t.pullupStatus&&"disabled"===this.currentValue.pullupStatus&&this.enablePullup()},deep:!0}},mounted:function(){var t=this;this.uuid=Math.random().toString(36).substring(3,8),this.$nextTick(function(){t.$el.setAttribute("id","vux-scroller-"+t.uuid);var e=null;if(t.$slots.default&&(e=t.$slots.default[0].elm),!e)throw new Error("no content is found");if(t._xscroll=new c.default({renderTo:"#vux-scroller-"+t.uuid,lockX:t.lockX,lockY:t.lockY,scrollbarX:t.scrollbarX,scrollbarY:t.scrollbarY,content:e,bounce:t.bounce,useOriginScroll:t.useOriginScroll,useTransition:t.useTransition,preventDefault:t.preventDefault,boundryCheck:t.boundryCheck,gpuAcceleration:t.gpuAcceleration,stopPropagation:t.stopPropagation}),t._xscroll.on("scroll",function(){if(t._xscroll){var e=t._xscroll.getScrollTop();t.$emit("on-scroll",{top:e,left:t._xscroll.getScrollLeft()});var n=t._xscroll.containerHeight,o=t._xscroll.height;e>=n-o-t.scrollBottomOffset&&t.$emit("on-scroll-bottom")}}),t.usePulldown){var n=t.$slots.pulldown,o=(0,u.default)(v(),t.pulldownConfig);n&&(o.container=n[0].elm),t.pulldown=new f.default(o),t._xscroll.plug(t.pulldown),t.pulldown.on("loading",function(e){t.$emit("on-pulldown-loading",t.uuid)}),t.pulldown.on("statuschange",function(e){t.currentValue.pulldownStatus=e.newVal})}if(t.usePullup){var s=t.$slots.pullup,i=(0,u.default)(_(),t.pullupConfig);s&&(i.container=s[0].elm),t.pullup=new h.default(i),t._xscroll.plug(t.pullup),t.pullup.on("loading",function(e){t.$emit("on-pullup-loading",t.uuid)}),t.pullup.on("statuschange",function(e){t.currentValue.pullupStatus=e.newVal})}t.enableHorizontalSwiping&&(t._xscroll.on("panstart",function(e){2!==e.direction&&4!==e.direction||(e.preventDefault(),t.scrollbarY&&(t._xscroll.userConfig.scrollbarY=!1),t._xscroll.userConfig.lockY=!0)}),t._xscroll.on("panend",function(){t.scrollbarY&&(t._xscroll.userConfig.scrollbarY=!0),t._xscroll.userConfig.lockY=!1})),t._xscroll.render(),window.addEventListener("orientationchange",t.handleOrientationchange,!1)}),this.getStyles()},beforeDestroy:function(){this.pullup&&(this._xscroll.unplug(this.pullup),this.pullup.pluginDestructor()),this.pulldown&&(this._xscroll.unplug(this.pulldown),this.pulldown.pluginDestructor()),window.removeEventListener("orientationchange",this.handleOrientationchange,!1),this._xscroll.destroy(),this._xscroll=null}}},22:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,default:!0}},created:function(){"undefined"!=typeof this.value&&(this.currentValue=this.value)},watch:{value:{handler:function(t){this.currentValue=t},immediate:!0},currentValue:function(t){this.$emit(t?"on-show":"on-hide"),this.$emit("input",t)}},data:function(){return{currentValue:!1}},methods:{onTouchMove:function(t){!this.scroll&&t.preventDefault()}}}},23:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"failed",data:function(){return{}},props:{msg:String},components:{},created:function(){},methods:{}}},28:function(t,e){},29:function(t,e){},30:function(t,e){},31:function(t,e){},33:function(t,e,n){t.exports=n.p+"m/static/img/pay_result_failure.dac5b24.png"},34:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-dialog",on:{touchmove:t.onTouchMove}},[n("transition",{attrs:{name:t.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-mask",on:{click:function(e){t.hideOnBlur&&(t.currentValue=!1)}}})]),t._v(" "),n("transition",{attrs:{name:t.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-dialog"},[t._t("default")],2)])],1)},staticRenderFns:[]}},35:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-alert"},[n("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]}},36:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"failed"}},[o("img",{attrs:{src:n(33),alt:""}}),t._v(" "),o("p",[t._v(t._s(t.msg))])])},staticRenderFns:[]}},37:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.styles},[n("div",{staticClass:"xs-container"},[t._t("default"),t._v(" "),t._t("pulldown"),t._v(" "),t._t("pullup")],2)])},staticRenderFns:[]}},38:function(t,e,n){var o,s;n(31),o=n(21);var i=n(37);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},39:function(t,e,n){var o,s;n(28),o=n(22);var i=n(34);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},40:function(t,e,n){var o,s;n(30),o=n(23);var i=n(36);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},41:function(t,e){},47:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(14),i=o(s);e.default={props:{leftOptions:Object,title:String,transition:String,rightOptions:{type:Object,default:function(){return{showMore:!1}}}},computed:{_leftOptions:function(){return(0,i.default)({showBack:!0,preventGoBack:!1},this.leftOptions||{})}},methods:{onClickBack:function(){this._leftOptions.preventGoBack?this.$emit("on-click-back"):this.$router?this.$router.back():window.history.back()}}}},54:function(t,e){},58:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-header"},[n("div",{staticClass:"vux-header-left"},[n("transition",{attrs:{name:t.transition}},[n("a",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"vux-header-back",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},t.onClickBack]}},[t._v(t._s("undefined"==typeof t._leftOptions.backText?"返回":t._leftOptions.backText))])]),t._v(" "),n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t._leftOptions.showBack,expression:"_leftOptions.showBack"}],staticClass:"left-arrow",on:{click:t.onClickBack}})]),t._v(" "),t._t("left")],2),t._v(" "),n("h1",{staticClass:"vux-header-title",on:{click:function(e){t.$emit("on-click-title")}}},[t._t("default",[n("transition",{attrs:{name:t.transition}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.title,expression:"title"}]},[t._v(t._s(t.title))])])])],2),t._v(" "),n("div",{staticClass:"vux-header-right"},[t.rightOptions.showMore?n("a",{staticClass:"vux-header-more",on:{click:[function(e){if(!("button"in e)&&t._k(e.keyCode,"preventDefault"))return null},function(e){t.$emit("on-click-more")}]}}):t._e(),t._v(" "),t._t("right")],2)])},staticRenderFns:[]}},62:function(t,e,n){var o,s;n(54),o=n(47);var i=n(58);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},73:function(t,e,n){var o,s;n(29),o=n(20);var i=n(35);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},111:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:String,isMsg:Boolean},computed:{className:function(){return"weui-icon weui_icon_"+this.type+" weui-icon-"+this.type.replace(/_/g,"-")}}}},118:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"channels",props:{subs:Array},data:function(){return{loadtext:"loading..."}},mounted:function(){this.$refs.list[this.$refs.list.length-1].className="channels-item",console.log(this.$refs.list[this.$refs.list.length-1].className),console.log(this.subs);var t=this.subs.map(function(t,e){return console.log(t.view_count),t.view_count>9999&&(t.view_count=(Math.ceil(t.view_count/1e3)/10).toFixed(1)+"万"),t});console.log(t)},components:{},methods:{channelsDetail:function(t){console.log(t),window.location.href="channel.html?id="+t}}}},123:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),n(1),n(4);var s=n(19),i=n(5),a=o(i),l=n(6),u=o(l),r=n(232),c=o(r),d=n(40),f=o(d),p=n(2),h=o(p),v=n(17),_=o(v),g=n(62),m=o(g),w=n(225),x=o(w),b=n(38),y=o(b),k=n(9),C=o(k),S=n(65),O=o(S),$=n(52),R=o($),T=n(51),F=o(T);h.default.use(O.default),h.default.use(C.default),h.default.prototype.$geturlpara=u.default,e.default={name:"channels",data:function(){return{loadingshow:!0,loadtext:"loading...",channels:{unsubs:[],subs:[],user:{name:"功夫财经",profile:"https://mwimg.mlinks.cc/ms_image_18938_6d17d71962adfbf579928a0a49704002.jpg?imageMogr/v2/thumbnail/300x300"}},showContent:!1,showsub:!1,failedshow:!1,failedmsg:"服务请求失败，请刷新重试"}},components:{Icon:x.default,XHeader:m.default,Loading:_.default,Channels:c.default,Scroller:y.default,Failed:f.default},beforeCreate:function(){(0,s.isWeiXin)()&&getAuth(F.default,R.default)},created:function(){this.fetchData()},methods:{fetchData:function(t){var e=this;a.default.httpGet(h.default,HOST+"/api/channels.json",{},function(t){e.channels=t,0!=e.channels.status?(e.failedmsg=e.channels.error,e.failedshow=!0):(0!=e.channels.subs&&(e.showsub=!0),e.showContent=!0,e.loadingshow=!1,e.$nextTick(function(){e.$refs.scrollerEvent.reset()}))},function(t){console.log(t),e.loadingshow=!1}),setTimeout(function(){e.loadingshow=!1},1e4)},logErr:function(t){this.$vux.alert.show({title:"提示",content:t,dialogTransition:"",maskTransition:"",onShow:function(){},onHide:function(){}})},loginout:function(){localStorage.clear(),F.default.set("gid",0,{domain:".kofuf.com",path:"/",expires:-1}),F.default.set("token",0,{domain:".kofuf.com",path:"/",expires:-1}),WeixinJSBridge.invoke("closeWindow",{},function(t){})}}}},189:function(t,e){},190:function(t,e){},201:function(t,e){},210:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"channels"}},[0!=t.subs.length?n("div",t._l(t.subs,function(e){return n("div",{ref:"list",refInFor:!0,staticClass:"channels-item vux-1px-b",on:{click:function(n){t.channelsDetail(e.id)}}},[n("img",{staticClass:"headimg",attrs:{src:e.thumb,alt:"",onerror:"this.src='http://182.92.99.123:8080/privilege/uploadedFile/1490888681914.jpg'"}}),t._v(" "),n("div",{staticClass:"channels-info"},[n("p",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),0!=e.view_count?n("span",{staticClass:"view_count"},[t._v(t._s(e.view_count)+"人订阅")]):t._e(),t._v(" "),n("p",{staticClass:"author_name"},[n("span",[t._v(t._s(e.author_name))]),n("span",[t._v(t._s(e.author_field))])]),t._v(" "),n("p",{staticClass:"brief"},[t._v(t._s(e.brief))]),t._v(" "),n("p",{staticClass:"price-co"},[e.channel_price==-1?n("span",{staticClass:"price"},[t._v("¥ "),n("span",[t._v(t._s(e.suites[0].price))]),t._v("/年")]):n("span",[n("span",{staticClass:"price"},[t._v(t._s(e.text)+" ¥ "),n("span",[t._v(t._s(e.channel_price))]),t._v("/年")]),t._v(" "),n("span",{staticClass:"oldprice"},[t._v(" ¥ "),n("span",[t._v(t._s(e.suites[0].price))]),t._v("/年")])])]),t._v(" "),n("div",{staticClass:"nstep "})])])})):n("div",{staticClass:"channels-none"},[t._v("\n    赶快订阅吧！！！\n  ")])])},staticRenderFns:[]}},211:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{class:[t.className,t.isMsg?"weui-icon_msg":""]})},staticRenderFns:[]}},223:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"channels"}},[t.showContent?n("scroller",{ref:"scrollerEvent",attrs:{"lock-x":""}},[n("div",{staticClass:"wriper"},[t.channels.user?n("div",{staticClass:"header"},[n("div",{staticClass:"headimg"},[n("img",{attrs:{src:t.channels.user.profile,alt:""}})]),t._v(" "),n("span",{staticClass:"name"},[t._v(t._s(t.channels.user.name))])]):t._e(),t._v(" "),n("div",{staticClass:"content vux-1px-b"},[t.showsub?n("div",{staticClass:"channels-title vux-1px-t vux-1px-b"},[n("span"),t._v("\n          已订阅\n        ")]):t._e(),t._v(" "),t.showsub?n("Channels",{attrs:{subs:t.channels.subs}}):t._e(),t._v(" "),n("div",{staticClass:"channels-title vux-1px-t vux-1px-b"},[n("span"),t._v("\n          推荐订阅\n        ")]),t._v(" "),n("Channels",{attrs:{subs:t.channels.unsubs}})],1)])]):t._e(),t._v(" "),t.failedshow?n("Failed",{attrs:{msg:t.failedmsg}}):t._e(),t._v(" "),n("Loading",{attrs:{text:t.loadtext},model:{value:t.loadingshow,callback:function(e){t.loadingshow=e},expression:"loadingshow"}})],1)},staticRenderFns:[]}},225:function(t,e,n){var o,s;n(190),o=n(111);var i=n(211);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},232:function(t,e,n){var o,s;n(189),o=n(118);var i=n(210);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},237:function(t,e,n){var o,s;n(201),o=n(123);var i=n(223);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o}});