webpackJsonp([20,0],{0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(1),a=o(i),s=n(625),r=o(s),l=n(16),u=o(l);a.default.use(u.default),new a.default({el:"#goods",template:"<App/>",components:{App:r.default}})},2:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);o(i);e.default={ajaxPost:function(t,e,n,o){$.ajax({url:t,type:"POST",data:e,success:function(t){n(t)},error:function(t){o(t)}})},ajaxGet:function(){},httpPost:function(t,e,n,o,i){t.http.options.emulateJSON=!0,t.http.options.headers={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},t.http.interceptors.push(function(t,e){t.headers.set("from",config().from),t.headers.set("gid",config().gid),t.headers.set("token",config().token),t.headers.set("version",VERSION),e()}),t.http.post(e,n).then(function(t){return t.bodyText}).then(function(t){var t=JSON.parse(t);o(t)},function(t){i(t)||console.log(t)})},httpGet:function(t,e,n,o,i){t.http.options.emulateJSON=!0,t.http.options.headers={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},t.http.interceptors.push(function(t,e){t.headers.set("from",config().from),t.headers.set("gid",config().gid),t.headers.set("token",config().token),t.headers.set("version",VERSION),e()}),t.http.get(e,{params:n}).then(function(t){return t.bodyText}).then(function(t){var t=JSON.parse(t);o(t)},function(t){i(t)||console.log(t)})}}},3:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(){var t=window.navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)}function a(){var t,e,n,o;return t=document.documentElement.scrollLeft||document.body.scrollLeft,e=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientWidth,o=document.documentElement.clientHeight,{left:t,top:e,width:n,height:o}}function s(){var t,e;return t=document.body.clientHeight,e=document.body.scrollTop,{top:e,height:t}}function r(t,e){var n=HOST+"/api/session/share_weixin_config?url="+encodeURIComponent(window.location.href.split("#")[0]);(0,u.default)({url:n,method:"get",params:{}}).then(function(t){wx.config({debug:!1,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"]})}),wx.ready(function(){var t=shareData.title,e=shareData.link,n=shareData.imgUrl,o=shareData.desc;wx.onMenuShareTimeline({title:t,link:e,imgUrl:n,success:function(){},cancel:function(){}}),wx.onMenuShareAppMessage({title:t,desc:o,link:e,imgUrl:n,type:"link",success:function(){},cancel:function(){}}),wx.onMenuShareQZone({title:t,desc:o,link:e,imgUrl:n,success:function(){},cancel:function(){}}),wx.onMenuShareQQ({title:t,desc:o,link:e,imgUrl:n,success:function(){},cancel:function(){}})})}Object.defineProperty(e,"__esModule",{value:!0}),e.isWeiXin=i,e.getClient=a,e.getBody=s,e.weixinShare=r;var l=n(5),u=o(l)},4:function(t,e,n){"use strict";!function(){var t=document.documentElement.clientWidth||document.body.clientWidth;t=t>640?640:t;var e=t/750*100;e=e<60?e:60,document.documentElement.style.fontSize=e+"px",t<350?window.phonetype="small":window.phonetype="large"}(),document.write('<script src="https://s19.cnzz.com/z_stat.php?id=1262435637&web_id=1262435637" language="JavaScript"></script>'),document.write('<script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js" charset="utf-8"></script>'),window.base="dev","pro"==base?(window.VERSION="0.1",window.HOST="https://api.kofuf.com",window.HOSTM="https://m.kofuf.com",window.HOSTA="https://api.kofuf.com",window.appid="wx05e842991e5fa0b2",localStorage.setItem("from","3"),window.config=function(){return{paytype:"JSAPI",from:localStorage.getItem("from"),gid:localStorage.getItem("gid"),token:localStorage.getItem("token")}}):(window.VERSION="0.1",window.HOST="http://123.57.35.40",window.HOSTM="http://dev.kofuf.com",window.HOSTA="http://123.57.35.40",window.appid="wx0a542ef9d4d41cef",localStorage.setItem("from","3"),localStorage.setItem("gid","1047501566"),localStorage.setItem("token","f32cd7de15144e2b931214730e6ed9f4"),window.config=function(){return{paytype:"JSAPI",from:localStorage.getItem("from"),gid:localStorage.getItem("gid"),token:localStorage.getItem("token")}}),window.shareData={title:"功夫财经",link:HOSTM+"/m/home.html",imgUrl:"http://m.kofuf.com/static/img_h5/h5_logo.png",desc:"功夫财经致力于联动最出色的财经学者，提供最优质的原创内容，打造中国规模最大的、粘性最高的财富命运共同体，以新型金融服务平台为终极己任，解决中产焦虑，提升国民财商。 "};var o=n(35);o.attach(document.body),window.getAuthLink=function(t){return"https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appid+"&redirect_uri="+HOSTA+"%2Fapi%2Fsession%2Fauth_weixin&response_type=code&scope=snsapi_userinfo&state="+t+"#wechat_redirect"},window.getAuth=function(t,e,n,o){var i=t.get("gid"),a=e.parse();if(!localStorage.getItem("gid")||""==localStorage.getItem("gid"))if("undefined"!=typeof a.gid)localStorage.setItem("gid",a.gid),localStorage.setItem("token",a.token);else if("undefined"!=typeof i)localStorage.setItem("gid",t.get("gid")),localStorage.setItem("token",t.get("token"));else{var s;s=void 0!=o&&""!=o?n+"_"+o:n,s=s?s:"",window.location.href=getAuthLink(s)}},window.clearcookie=function(t){localStorage.clear(),t.set("gid",0,{domain:".kofuf.com",path:"/",expires:-1}),t.set("token",0,{domain:".kofuf.com",path:"/",expires:-1})}},5:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(43),a=o(i),s=n(42),r=o(s),l=n(14),u=n(28),c=o(u),d=n(1),f=o(d);f.default.use(c.default);var p=r.default.create({baseURL:"https://api.kofuf.com",timeout:15e3,headers:{"Content-Type":"application/x-www-form-urlencoded"}});p.interceptors.request.use(function(t){return t.headers.token=(0,l.getToken)(),t.headers.gid=(0,l.getGid)(),t.headers.from=(0,l.getFrom)(),t},function(t){console.log(t),a.default.reject(t)}),p.interceptors.response.use(function(t){var e=t.data;return 0!==e.status?(f.default.$vux.toast.show({text:e.error,time:3e3,width:"auto",type:"text",position:"bottom"}),a.default.reject({error:e})):e},function(t){return console.log("err"+t),f.default.$vux.toast.show({text:t.message,time:3e3,width:"auto",type:"warn"}),a.default.reject(t)}),e.default=p},6:function(t,e){},7:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:{type:Boolean,default:!1},text:String,position:String},created:function(){this.show=this.value},data:function(){return{show:!1}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)}}}},8:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(38),a=o(i);e.default={mixins:[a.default],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},9:function(t,e){},10:function(t,e){},11:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"vux-mask"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},staticRenderFns:[]}},12:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content"},[t._t("default")],2)])])],1)},staticRenderFns:[]}},13:function(t,e,n){var o,i;n(9),o=n(7);var a=n(11);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=o},14:function(t,e){"use strict";function n(){return localStorage.getItem(f)}function o(t){return localStorage.setItem(f,t)}function i(){return localStorage.removeItem(f)}function a(){return localStorage.getItem(p)}function s(t){return localStorage.setItem(p,t)}function r(){return localStorage.removeItem(p)}function l(){return localStorage.getItem(h)||3}function u(t){return localStorage.setItem(h,t)}function c(){return localStorage.removeItem(h)}function d(){return localStorage.getItem(m)}Object.defineProperty(e,"__esModule",{value:!0}),e.getToken=n,e.setToken=o,e.removeToken=i,e.getGid=a,e.setGid=s,e.removeGid=r,e.getFrom=l,e.setFrom=u,e.removeFrom=c,e.getVersion=d;var f="token",p="gid",h="from",m="version"},21:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:String}}},22:function(t,e){},24:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.title?n("div",{staticClass:"weui-cells__title",style:{color:t.titleColor},domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),n("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!t.title},style:{marginTop:t.gutter}},[t._t("after-title"),t._v(" "),t._t("default")],2)])},staticRenderFns:[]}},26:function(t,e,n){var o,i;n(22),o=n(21);var a=n(24);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=o},27:function(t,e,n){var o,i;n(31);var a=n(33);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=o},29:function(t,e,n){var o,i;n(32),o=n(30);var a=n(34);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=o},30:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(27),a=o(i),s=n(55),r=n(63),l=o(r);e.default={components:{InlineDesc:a.default},props:(0,l.default)(),computed:{valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}}},methods:{getLabelStyles:function(){return{width:this.$parent.labelWidth||this.$parent.$parent.labelWidth,textAlign:this.$parent.labelAlign||this.$parent.$parent.labelAlign,marginRight:this.$parent.labelMarginRight||this.$parent.$parent.labelMarginRight}},onClick:function(){(0,s.go)(this.link,this.$router)}}}},31:function(t,e){},32:function(t,e){},33:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},staticRenderFns:[]}},34:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link,"vux-cell-no-border-intent":!t.borderIntent},on:{click:t.onClick}},[n("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),n("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[n("p",[t.title?n("label",{staticClass:"vux-label",style:t.getLabelStyles()},[t._v(t._s(t.title))]):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),n("inline-desc",[t._t("inline-desc",[t._v(t._s(t.inlineDesc))])],2)],1),t._v(" "),n("div",{staticClass:"weui-cell__ft",class:t.valueClass},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?n("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},staticRenderFns:[]}},37:function(t,e,n){var o,i;n(10),o=n(8);var a=n(12);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=o},41:function(t,e){},44:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"failed",data:function(){return{}},props:{msg:String},components:{},created:function(){},methods:{}}},45:function(t,e){},46:function(t,e,n){t.exports=n.p+"m/static/img/pay_result_failure.dac5b24.png"},47:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"failed"}},[o("img",{attrs:{src:n(46),alt:""}}),t._v(" "),o("p",[t._v(t._s(t.msg))])])},staticRenderFns:[]}},48:function(t,e,n){var o,i;n(45),o=n(44);var a=n(47);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=o},50:function(t,e){"use strict";function n(t){var e=new Date(t),n=new Date;if(o(new Date(t),"yyyy")-o(n,"yyyy")<0)return o(e,"yyyy-MM-dd");if(o(new Date(t),"MM")-o(n,"MM")<0)return o(e,"MM-dd");var i=o(n,"dd")-o(e,"dd");if(0==i){var a=o(n,"hh")-o(e,"hh");if(0==a){var s=o(n,"mm")-o(e,"mm");return s<5?"刚刚":isNaN(s)?"1小时前":s+"分钟前"}return a+"小时前"}return 1==i?"昨天":i+"天前"}function o(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var o in n)if(new RegExp("("+o+")").test(e)){var i=(n[o]+"").replace(/^0/,"");e=e.replace(RegExp.$1,1===RegExp.$1.length?i:a(i))}return e}function i(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var o in n)if(new RegExp("("+o+")").test(e)){var i=(n[o]+"").replace(/^0/,"");e=e.replace(RegExp.$1,1===RegExp.$1.length?i:s(i))}return e}function a(t){return("00"+t).substr(t.length)}function s(t){return t}Object.defineProperty(e,"__esModule",{value:!0}),e.formatedDate=n,e.formatDate=o,e.formatDate2=i},52:function(t,e,n){var o,i;n(56),o=n(53);var a=n(59);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=o},53:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{showLoading:{type:Boolean,default:!0},tip:String,backgroundColor:String},methods:{getStyle:function(){if(!this.showLoading&&this.tip)return{"background-color":this.backgroundColor}}}}},56:function(t,e){},59:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weui-loadmore",class:{"weui-loadmore_line":!t.showLoading,"weui-loadmore_dot":!t.showLoading&&!t.tip}},[t.showLoading?n("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.tip||!t.showLoading,expression:"tip || !showLoading"}],staticClass:"weui-loadmore__tips",style:t.getStyle()},[t._v(t._s(t.tip))])])},staticRenderFns:[]}},69:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(2),a=o(i),s=n(1),r=o(s),l=n(52),u=o(l),c=n(3);e.default={name:"load",data:function(){return{pn:0,nonedata:!1,commentBottomMsg:"点击，立即加载更多",loadmore:!0,islazyload:!0,allload:!1}},props:{url:String,pid:String,datalist:Array,params:String,id:String},components:{LoadMore:u.default},created:function(){var t=this;window.onscroll=function(){var e=(0,c.getClient)(),n=(0,c.getBody)();n.top+e.height>=n.height-10&&t.islazyload&&(this.islazyload=!1,t.dataLoad())}},methods:{dataLoad:function(){this.allload||(this.loadmore=!1,this.fetchData(++this.pn))},fetchData:function(t){var e=this,n=this;a.default.httpGet(r.default,HOST+this.url+"?pn="+t,{pid:this.pid,id:this.id},function(t){0==t.status?(n.islazyload=!0,n.loadmore=!0,t.has_next||(n.allload=!0,n.commentBottomMsg="- 到底啦 -"),n.params||(n.params="articles"),e.$emit("getData",t[n.params])):n.loadmore=!0},function(t){console.log(t),n.loadmore=!0})}}}},70:function(t,e){},71:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"load"}},[t.nonedata?t._e():n("div",{staticClass:"comment-bottom"},[t.loadmore?n("p",{staticClass:"clickload",on:{click:t.dataLoad}},[t._v(t._s(t.commentBottomMsg))]):n("load-more",{attrs:{tip:"正在加载"}},[t._v("正在加载")])],1)])},staticRenderFns:[]}},72:function(t,e,n){var o,i;n(70),o=n(69);var a=n(71);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=o},164:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(50);e.default={name:"audiolist",props:{audiolist:Array},data:function(){return{}},components:{},mounted:function(){},methods:{todetail:function(t){window.location.href="/m/detail.html?id="+t}},filters:{formatDate:o.formatedDate}}},199:function(t,e){},202:function(t,e){t.exports="data:image/png;base64,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"},218:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"audiolist"}},[o("ul",t._l(t.audiolist,function(e){return o("li",{staticClass:"vux-1px-t vux-1px-b",on:{click:function(n){t.todetail(e.item)}}},[o("div",{staticClass:"left"},[o("img",{staticClass:"play",attrs:{src:n(202),alt:"播放"}}),t._v(" "),o("img",{staticClass:"bg",attrs:{src:e.picture,alt:"picture",onerror:'this.src="http://m.kofuf.com/static/img/default.png"'}})]),t._v(" "),o("div",{staticClass:"right"},[o("p",{domProps:{innerHTML:t._s(e.title)}}),t._v(" "),o("p",{staticClass:"author",domProps:{innerHTML:t._s(e.author_name)}}),t._v(" "),o("p",[o("span",[t._v(t._s(t._f("formatDate")(e.postd)))]),o("span",{staticClass:"view_count"},[t._v(t._s(e.view_count)+"听过")])])])])}))])},staticRenderFns:[]}},225:function(t,e,n){var o,i;n(199),o=n(164);var a=n(218);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=o},340:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),n(6),n(4);var i=n(3),a=n(2),s=o(a),r=n(225),l=o(r),u=n(72),c=o(u),d=n(48),f=o(d),p=n(1),h=o(p),m=n(13),g=o(m),v=n(16),w=o(v),x=n(26),y=o(x),S=n(29),A=o(S),M=n(40),R=o(M),T=n(39),b=o(T);h.default.use(w.default),e.default={name:"goods",data:function(){return{loadingshow:!0,loadtext:"loading...",showContent:!1,failedshow:!1,failedmsg:"服务请求失败，请刷新重试",datalist:[]}},components:{Group:y.default,Cell:A.default,Loading:g.default,Failed:f.default,AudioLists:l.default,LazyLoadingMore:c.default},beforeCreate:function(){(0,i.isWeiXin)()&&getAuth(b.default,R.default)},created:function(){this.fetchData()},mounted:function(){},methods:{fetchData:function(t){var e=this,n=this;s.default.httpGet(h.default,HOST+"/api/articles/goods_list.json?pn=0",{},function(t){n.loadingshow=!1,n.showContent=!0,0==t.status?e.datalist=t.items:console.log(t.error)},function(t){console.log(t),n.loadingshow=!1,n.failedshow=!0}),setTimeout(function(){n.loadingshow=!1},1e4)},loadList:function(t){this.datalist=this.datalist.concat(t)}}}},472:function(t,e){},572:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"goods"}},[t.showContent?n("div",[n("AudioLists",{attrs:{audiolist:t.datalist}}),t._v(" "),n("div",{staticClass:"load"},[n("LazyLoadingMore",{attrs:{url:"/api/articles/daily_audio_list.json",params:"items"},on:{getData:t.loadList}})],1)],1):t._e(),t._v(" "),t.failedshow?n("Failed",{attrs:{msg:t.failedmsg}}):t._e(),t._v(" "),n("Loading",{attrs:{text:t.loadtext},model:{value:t.loadingshow,callback:function(e){t.loadingshow=e},expression:"loadingshow"}})],1)},staticRenderFns:[]}},625:function(t,e,n){var o,i;n(472),o=n(340);var a=n(572);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=o}});