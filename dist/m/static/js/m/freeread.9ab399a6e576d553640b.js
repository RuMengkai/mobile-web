webpackJsonp([5,0],{0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var s=n(2),i=o(s),l=n(228),a=o(l);new i.default({el:"#freeread",template:"<App/>",components:{App:a.default}})},1:function(t,e){},4:function(t,e,n){"use strict";!function(){var t=document.documentElement.clientWidth||document.body.clientWidth;t=t>640?640:t;var e=t/750*100;document.documentElement.style.fontSize=e+"px"}(),window.VERSION="0.1",window.HOST="http://api.kofuf.com";var o=n(19);o.attach(document.body),window.getAuthLink=function(t,e){return"https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx05e842991e5fa0b2&redirect_uri="+HOST+"%2Fapi%2Fsession%2Fauth_weixin&response_type=code&scope=snsapi_userinfo&state="+t+"_"+e+"#wechat_redirect"},window.getAuth=function(t,e,n,o){var s=t.get("gid"),i=e.parse();localStorage.getItem("gid")||("undefined"!=typeof i.gid?(localStorage.setItem("gid",i.gid),localStorage.setItem("token",i.token)):"undefined"!=typeof s?(localStorage.setItem("gid",t.get("gid")),localStorage.setItem("token",t.get("token"))):window.location.href=getAuthLink(n,o))},window.clearcookie=function(t){localStorage.clear(),t.set("gid",0,{domain:".kofuf.com",path:"/",expires:-1}),t.set("token",0,{domain:".kofuf.com",path:"/",expires:-1})}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={ajaxPost:function(t,e,n,o){$.ajax({url:t,type:"POST",data:e,success:function(t){n(t)},error:function(t){o(t)}})},ajaxGet:function(){},httpPost:function(t,e,n,o,s){t.http.options.emulateJSON=!0,t.http.options.headers={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},t.http.interceptors.push(function(t,e){t.headers.set("from","3"),t.headers.set("gid",localStorage.getItem("gid")),t.headers.set("token",localStorage.getItem("token")),t.headers.set("version",VERSION),e()}),t.http.post(e,n).then(function(t){return t.bodyText}).then(function(t){var t=JSON.parse(t);o(t)},function(t){s(t)})},httpGet:function(t,e,n,o,s){t.http.options.emulateJSON=!0,t.http.options.headers={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},t.http.interceptors.push(function(t,e){t.headers.set("from","3"),t.headers.set("gid",localStorage.getItem("gid")),t.headers.set("token",localStorage.getItem("token")),t.headers.set("version",VERSION),e()}),t.http.get(e,n).then(function(t){return t.bodyText}).then(function(t){var t=JSON.parse(t);o(t)},function(t){s(t)})}}},8:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={getUrlKey:function(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||["",""])[1].replace(/\+/g,"%20"))||null}}},10:function(t,e){"use strict";function n(t){var e=new Date(t),n=new Date;if(o(new Date(t),"yyyy")-o(n,"yyyy")<0)return o(e,"yyyy-MM-dd");if(o(new Date(t),"MM")-o(n,"MM")<0)return o(e,"MM-dd");var s=o(n,"dd")-o(e,"dd");if(0==s){var i=o(n,"hh")-o(e,"hh");if(0==i){var l=o(n,"mm")-o(e,"mm");return l<5?"刚刚":isNaN(l)?i+"小时前":l+"分钟前"}return i+"小时前"}return s+"天前"}function o(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var o in n)if(new RegExp("("+o+")").test(e)){var s=(n[o]+"").replace(/^0/,"");e=e.replace(RegExp.$1,1===RegExp.$1.length?s:i(s))}return e}function s(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var o in n)if(new RegExp("("+o+")").test(e)){var s=(n[o]+"").replace(/^0/,"");e=e.replace(RegExp.$1,1===RegExp.$1.length?s:l(s))}return e}function i(t){return("00"+t).substr(t.length)}function l(t){return t}Object.defineProperty(e,"__esModule",{value:!0}),e.formatedDate=n,e.formatDate=o,e.formatDate2=s},11:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:{type:Boolean,default:!1},text:String,position:String},created:function(){this.show=this.value},data:function(){return{show:!1}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)}}}},12:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=n(46),i=o(s);e.default={mixins:[i.default],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},17:function(t,e){},18:function(t,e){},20:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"vux-mask"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},staticRenderFns:[]}},21:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content"},[t._t("default")],2)])])],1)},staticRenderFns:[]}},22:function(t,e,n){var o,s;n(17),o=n(11);var i=n(20);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},23:function(t,e){},29:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function s(t){return JSON.parse((0,l.default)(t))}Object.defineProperty(e,"__esModule",{value:!0});var i=n(63),l=o(i),a=n(27),u=o(a),r=n(91),c=o(r),d=n(89),f=o(d),p=n(90),h=o(p),g=function(){return{content:"Pull Down To Refresh",height:60,autoRefresh:!1,downContent:"Pull Down To Refresh",upContent:"Release To Refresh",loadingContent:"Loading...",clsPrefix:"xs-plugin-pulldown-"}},w=function(){return{content:"Pull Up To Refresh",pullUpHeight:60,height:40,autoRefresh:!1,downContent:"Release To Refresh",upContent:"Pull Up To Refresh",loadingContent:"Loading...",clsPrefix:"xs-plugin-pullup-"}};e.default={props:{value:{type:Object,default:function(){return{pulldownStatus:"",pullupStatus:""}}},height:String,lockX:Boolean,lockY:Boolean,scrollbarX:Boolean,scrollbarY:Boolean,bounce:{type:Boolean,default:!0},useOriginScroll:{type:Boolean,default:!1},useTransition:{type:Boolean,default:!0},preventDefault:{type:Boolean,default:!1},stopPropagation:Boolean,boundryCheck:{type:Boolean,default:!0},gpuAcceleration:{type:Boolean,default:!0},usePulldown:{type:Boolean,default:!1},usePullup:{type:Boolean,default:!1},pulldownConfig:{type:Object,default:function(){return{}}},pullupConfig:{type:Object,default:function(){return{}}},enableHorizontalSwiping:{type:Boolean,default:!1},scrollBottomOffset:{type:Number,default:0}},methods:{reset:function(t,e,n){t&&("undefined"!=typeof t.left&&this._xscroll.scrollLeft(t.left,e,n),"undefined"!=typeof t.top&&this._xscroll.scrollTop(t.top,e,n)),this._xscroll&&this._xscroll.resetSize()},donePulldown:function(){var t=this;this.pulldown.reset(function(){t.reset()}),this.currentValue.pulldownStatus="default"},disablePullup:function(){this.pullup.stop(),this.currentValue.pullupStatus="disabled"},enablePullup:function(){this.currentValue.pullupStatus="default",this.pullup.restart()},donePullup:function(){this.pullup.complete(),this.reset(),this.currentValue.pullupStatus="default"},getStyles:function(){var t=this.height;!this.height&&this.$el&&!this.$el.style.height&&this.lockX&&(t=document.documentElement.clientHeight+"px",this.reset()),this.height&&0===this.height.indexOf("-")&&(t=document.documentElement.clientHeight+parseInt(this.height)+"px"),this.styles={height:""+t}}},created:function(){var t=this;this.value?this.currentValue=this.value:this.currentValue={pulldownStatus:"",pullupStatus:""},this.handleOrientationchange=function(){setTimeout(function(){t.reset()},100)}},data:function(){return{currentValue:{},styles:{}}},watch:{currentValue:{handler:function(t){this.$emit("input",s(t))},deep:!0},height:function(){this.getStyles()},value:{handler:function(t){"default"===t.pullupStatus&&"default"!==this.currentValue.pullupStatus&&this.donePullup(),"default"===t.pulldownStatus&&"default"!==this.currentValue.pulldownStatus&&this.donePulldown(),"disabled"===t.pullupStatus&&"disabled"!==this.currentValue.pullupStatus&&this.disablePullup(),"enabled"===t.pullupStatus&&"disabled"===this.currentValue.pullupStatus&&this.enablePullup()},deep:!0}},mounted:function(){var t=this;this.uuid=Math.random().toString(36).substring(3,8),this.$nextTick(function(){t.$el.setAttribute("id","vux-scroller-"+t.uuid);var e=null;if(t.$slots.default&&(e=t.$slots.default[0].elm),!e)throw new Error("no content is found");if(t._xscroll=new c.default({renderTo:"#vux-scroller-"+t.uuid,lockX:t.lockX,lockY:t.lockY,scrollbarX:t.scrollbarX,scrollbarY:t.scrollbarY,content:e,bounce:t.bounce,useOriginScroll:t.useOriginScroll,useTransition:t.useTransition,preventDefault:t.preventDefault,boundryCheck:t.boundryCheck,gpuAcceleration:t.gpuAcceleration,stopPropagation:t.stopPropagation}),t._xscroll.on("scroll",function(){if(t._xscroll){var e=t._xscroll.getScrollTop();t.$emit("on-scroll",{top:e,left:t._xscroll.getScrollLeft()});var n=t._xscroll.containerHeight,o=t._xscroll.height;e>=n-o-t.scrollBottomOffset&&t.$emit("on-scroll-bottom")}}),t.usePulldown){var n=t.$slots.pulldown,o=(0,u.default)(g(),t.pulldownConfig);n&&(o.container=n[0].elm),t.pulldown=new f.default(o),t._xscroll.plug(t.pulldown),t.pulldown.on("loading",function(e){t.$emit("on-pulldown-loading",t.uuid)}),t.pulldown.on("statuschange",function(e){t.currentValue.pulldownStatus=e.newVal})}if(t.usePullup){var s=t.$slots.pullup,i=(0,u.default)(w(),t.pullupConfig);s&&(i.container=s[0].elm),t.pullup=new h.default(i),t._xscroll.plug(t.pullup),t.pullup.on("loading",function(e){t.$emit("on-pullup-loading",t.uuid)}),t.pullup.on("statuschange",function(e){t.currentValue.pullupStatus=e.newVal})}t.enableHorizontalSwiping&&(t._xscroll.on("panstart",function(e){2!==e.direction&&4!==e.direction||(e.preventDefault(),t.scrollbarY&&(t._xscroll.userConfig.scrollbarY=!1),t._xscroll.userConfig.lockY=!0)}),t._xscroll.on("panend",function(){t.scrollbarY&&(t._xscroll.userConfig.scrollbarY=!0),t._xscroll.userConfig.lockY=!1})),t._xscroll.render(),window.addEventListener("orientationchange",t.handleOrientationchange,!1)}),this.getStyles()},beforeDestroy:function(){this.pullup&&(this._xscroll.unplug(this.pullup),this.pullup.pluginDestructor()),this.pulldown&&(this._xscroll.unplug(this.pulldown),this.pulldown.pluginDestructor()),window.removeEventListener("orientationchange",this.handleOrientationchange,!1),this._xscroll.destroy(),this._xscroll=null}}},35:function(t,e){},40:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.styles},[n("div",{staticClass:"xs-container"},[t._t("default"),t._v(" "),t._t("pulldown"),t._v(" "),t._t("pullup")],2)])},staticRenderFns:[]}},41:function(t,e,n){var o,s;n(35),o=n(29);var i=n(40);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},42:function(t,e,n){var o,s;n(18),o=n(12);var i=n(21);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},60:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(10);e.default={name:"list",data:function(){return{}},props:{freeshow:Boolean,datalist:Array},components:{},created:function(){},methods:{toDetail:function(t){location.href="detail.html?id="+t}},filters:{formatDate:o.formatedDate}}},79:function(t,e){},80:function(t,e,n){t.exports=n.p+"m/static/img/read.b7c743a.png"},83:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"list"}},t._l(t.datalist,function(e){return o("li",{on:{click:function(n){t.toDetail(e.id)}}},[o("div",{staticClass:"title"},[t._v("\n     "+t._s(e.name)+"\n   ")]),t._v(" "),o("div",{staticClass:"img vux-1px-b"},[o("img",{attrs:{src:e.thumb,alt:"",onerror:"this.src='http://static0.kofuf.com/1493739178223.jpg?imageView2/1/w/200/h/133/q/100|imageslim'"}}),t._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:t.freeshow,expression:"freeshow"}],staticClass:"hint"},[t._v("\n       试读\n     ")])]),t._v(" "),o("span",{staticClass:"date"},[t._v(t._s(t._f("formatDate")(e.published)))]),t._v(" "),o("span",{staticClass:"view"},[o("img",{attrs:{src:n(80),alt:""}}),t._v(t._s(e.view_count)+" 人看过")])])}))},staticRenderFns:[]}},87:function(t,e,n){var o,s;n(79),o=n(60);var i=n(83);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},120:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),n(1),n(4);var s=n(5),i=o(s),l=n(8),a=o(l),u=n(87),r=o(u),c=n(2),d=o(c),f=n(22),p=o(f),h=n(47),g=o(h),w=n(49),v=(o(w),n(48)),m=(o(v),n(41)),_=o(m),y=n(7),x=o(y);d.default.use(x.default),d.default.use(g.default),d.default.prototype.$geturlpara=a.default,e.default={name:"freeread",components:{Loading:p.default,List:r.default,Scroller:_.default},data:function(){return{showContent:!1,loadingshow:!0,articlesList:{suites:[{price:""}]}}},created:function(){var t=this.$geturlpara.getUrlKey("id");this.getData(t)},methods:{getData:function(t){var e=this;console.log("get"+t),i.default.httpGet(d.default,HOST+"/api/channels/tryout.json?id="+t,{id:t},function(t){console.log(t),e.loadingshow=!1,0!=t.status?(alert(t.error),console.log("请求失败")):(e.showContent=!0,e.articlesList=t)},function(t){e.loadingshow=!1,console.log(t)})}},filters:{formatDate:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){var e=new Date(t),n=new Date,o=n-e;return console.log(formatDate(e,"yyyy")-formatDate(n,"yyyy")),o>31536e3?formatDate(e,"yyyy年MM月dd日"):formatDate(e,"MM月dd日")})}}},190:function(t,e){},211:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"freeread"}},[n("p",{staticClass:"hint"},[t._v(t._s(t.articlesList.tip))]),t._v(" "),t.showContent?n("scroller",{ref:"scrollerEvent",attrs:{"lock-x":""}},[t.showContent?n("div",{staticClass:"content"},[n("ul",{staticClass:"channel-list"},[n("list",{attrs:{datalist:t.articlesList.articles,freeshow:!0}})],1)]):t._e()]):t._e(),t._v(" "),n("Loading",{attrs:{text:t.loadtext},model:{value:t.loadingshow,callback:function(e){t.loadingshow=e},expression:"loadingshow"}})],1)},staticRenderFns:[]}},228:function(t,e,n){var o,s;n(190),o=n(120);var i=n(211);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o}});