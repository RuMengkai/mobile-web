webpackJsonp([19,0],{0:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var o=n(1),a=i(o),s=n(621),r=i(s),c=n(16),u=i(c);a.default.use(u.default),new a.default({el:"#gift-card-buy",template:"<App/>",components:{App:r.default}})},2:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);i(o);e.default={ajaxPost:function(t,e,n,i){$.ajax({url:t,type:"POST",data:e,success:function(t){n(t)},error:function(t){i(t)}})},ajaxGet:function(){},httpPost:function(t,e,n,i,o){t.http.options.emulateJSON=!0,t.http.options.headers={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},t.http.interceptors.push(function(t,e){t.headers.set("from",config().from),t.headers.set("gid",config().gid),t.headers.set("token",config().token),t.headers.set("version",VERSION),e()}),t.http.post(e,n).then(function(t){return t.bodyText}).then(function(t){var t=JSON.parse(t);i(t)},function(t){o(t)||console.log(t)})},httpGet:function(t,e,n,i,o){t.http.options.emulateJSON=!0,t.http.options.headers={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},t.http.interceptors.push(function(t,e){t.headers.set("from",config().from),t.headers.set("gid",config().gid),t.headers.set("token",config().token),t.headers.set("version",VERSION),e()}),t.http.get(e,{params:n}).then(function(t){return t.bodyText}).then(function(t){var t=JSON.parse(t);i(t)},function(t){o(t)||console.log(t)})}}},3:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(){var t=window.navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)}function a(){var t,e,n,i;return t=document.documentElement.scrollLeft||document.body.scrollLeft,e=document.documentElement.scrollTop||document.body.scrollTop,n=document.documentElement.clientWidth,i=document.documentElement.clientHeight,{left:t,top:e,width:n,height:i}}function s(){var t,e;return t=document.body.clientHeight,e=document.body.scrollTop,{top:e,height:t}}function r(t,e){var n=HOST+"/api/session/share_weixin_config?url="+encodeURIComponent(window.location.href.split("#")[0]);(0,f.default)({url:n,method:"get",params:{}}).then(function(t){wx.config({debug:!1,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareWeibo"]})}),wx.ready(function(){var t=shareData.title,e=shareData.link,n=shareData.imgUrl,i=shareData.desc;wx.onMenuShareTimeline({title:t,link:e,imgUrl:n,success:function(){},cancel:function(){}}),wx.onMenuShareAppMessage({title:t,desc:i,link:e,imgUrl:n,type:"link",success:function(){},cancel:function(){}}),wx.onMenuShareQZone({title:t,desc:i,link:e,imgUrl:n,success:function(){},cancel:function(){}}),wx.onMenuShareQQ({title:t,desc:i,link:e,imgUrl:n,success:function(){},cancel:function(){}})})}function c(){var t=navigator.userAgent,e=t.indexOf("Android")>-1||t.indexOf("Adr")>-1,n=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);return!(!e&&!n)}function u(){var t=navigator.userAgent,e=t.indexOf("Android")>-1||t.indexOf("Adr")>-1;return!!e}function l(){var t=navigator.userAgent,e=!!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);return!!e}Object.defineProperty(e,"__esModule",{value:!0}),e.isWeiXin=o,e.getClient=a,e.getBody=s,e.weixinShare=r,e.isMobile=c,e.isAndroid=u,e.isiOS=l;var d=n(5),f=i(d)},4:function(t,e,n){"use strict";!function(){var t=document.documentElement.clientWidth||document.body.clientWidth;t=t>640?640:t;var e=t/750*100;e=e<60?e:60,document.documentElement.style.fontSize=e+"px",t<350?window.phonetype="small":window.phonetype="large"}(),document.write('<script src="https://s19.cnzz.com/z_stat.php?id=1262435637&web_id=1262435637" language="JavaScript"></script>'),document.write('<script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js" charset="utf-8"></script>'),window.base="pro","pro"==base?(window.VERSION="0.1",window.HOST="http://api.51xy8.com",window.HOSTM="http://m.51xy8.com",window.HOSTA="http://api.51xy8.com",window.appid="wx05e842991e5fa0b2",localStorage.setItem("from","3"),window.config=function(){return{paytype:"JSAPI",from:localStorage.getItem("from"),gid:localStorage.getItem("gid"),token:localStorage.getItem("token")}}):(window.VERSION="0.1",window.HOST="http://123.57.35.40",window.HOSTM="http://dev.kofuf.com",window.HOSTA="http://123.57.35.40",window.appid="wx0a542ef9d4d41cef",localStorage.setItem("from","3"),localStorage.setItem("gid","1047501566"),localStorage.setItem("token","f32cd7de15144e2b931214730e6ed9f4"),window.config=function(){return{paytype:"JSAPI",from:localStorage.getItem("from"),gid:localStorage.getItem("gid"),token:localStorage.getItem("token")}}),window.shareData={title:"功夫财经",link:HOSTM+"/m/home.html",imgUrl:"http://m.kofuf.com/static/img_h5/h5_logo.png",desc:"功夫财经致力于联动最出色的财经学者，提供最优质的原创内容，打造中国规模最大的、粘性最高的财富命运共同体，以新型金融服务平台为终极己任，解决中产焦虑，提升国民财商。 "};var i=n(35);i.attach(document.body),window.getAuthLink=function(t){return"https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appid+"&redirect_uri="+HOSTA+"%2Fapi%2Fsession%2Fauth_weixin&response_type=code&scope=snsapi_userinfo&state="+t+"#wechat_redirect"},window.getAuth=function(t,e,n,i){var o=t.get("gid"),a=e.parse();if(!localStorage.getItem("gid")||""==localStorage.getItem("gid"))if("undefined"!=typeof a.gid)localStorage.setItem("gid",a.gid),localStorage.setItem("token",a.token);else if("undefined"!=typeof o)localStorage.setItem("gid",t.get("gid")),localStorage.setItem("token",t.get("token"));else{var s;s=void 0!=i&&""!=i?n+"_"+i:n,s=s?s:"",window.location.href=getAuthLink(s)}},window.clearcookie=function(t){localStorage.clear(),t.set("gid",0,{domain:".kofuf.com",path:"/",expires:-1}),t.set("token",0,{domain:".kofuf.com",path:"/",expires:-1})}},5:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(43),a=i(o),s=n(42),r=i(s),c=n(14),u=n(28),l=i(u),d=n(1),f=i(d);f.default.use(l.default);var p=r.default.create({baseURL:"https://api.kofuf.com",timeout:15e3,headers:{"Content-Type":"application/x-www-form-urlencoded"}});p.interceptors.request.use(function(t){return t.headers.token=(0,c.getToken)(),t.headers.gid=(0,c.getGid)(),t.headers.from=(0,c.getFrom)(),t},function(t){console.log(t),a.default.reject(t)}),p.interceptors.response.use(function(t){var e=t.data;return 0!==e.status?(f.default.$vux.toast.show({text:e.error,time:3e3,width:"auto",type:"text",position:"bottom"}),a.default.reject({error:e})):e},function(t){return console.log("err"+t),f.default.$vux.toast.show({text:t.message,time:3e3,width:"auto",type:"warn"}),a.default.reject(t)}),e.default=p},6:function(t,e){},7:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:{type:Boolean,default:!1},text:String,position:String},created:function(){this.show=this.value},data:function(){return{show:!1}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)}}}},8:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(38),a=i(o);e.default={mixins:[a.default],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}},9:function(t,e){},10:function(t,e){},11:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"vux-mask"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},staticRenderFns:[]}},12:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-toast"},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),n("transition",{attrs:{name:t.currentTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?n("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):n("p",{staticClass:"weui-toast__content"},[t._t("default")],2)])])],1)},staticRenderFns:[]}},13:function(t,e,n){var i,o;n(9),i=n(7);var a=n(11);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},14:function(t,e){"use strict";function n(){return localStorage.getItem(f)}function i(t){return localStorage.setItem(f,t)}function o(){return localStorage.removeItem(f)}function a(){return localStorage.getItem(p)}function s(t){return localStorage.setItem(p,t)}function r(){return localStorage.removeItem(p)}function c(){return localStorage.getItem(g)||3}function u(t){return localStorage.setItem(g,t)}function l(){return localStorage.removeItem(g)}function d(){return localStorage.getItem(h)}Object.defineProperty(e,"__esModule",{value:!0}),e.getToken=n,e.setToken=i,e.removeToken=o,e.getGid=a,e.setGid=s,e.removeGid=r,e.getFrom=c,e.setFrom=u,e.removeFrom=l,e.getVersion=d;var f="token",p="gid",g="from",h="version"},15:function(t,e,n){var i,o;n(19),i=n(18);var a=n(21);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},17:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:String}}},18:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,default:!0}},created:function(){"undefined"!=typeof this.value&&(this.currentValue=this.value)},watch:{value:{handler:function(t){this.currentValue=t},immediate:!0},currentValue:function(t){this.$emit(t?"on-show":"on-hide"),this.$emit("input",t)}},data:function(){return{currentValue:!1}},methods:{onTouchMove:function(t){!this.scroll&&t.preventDefault()}}}},19:function(t,e){},20:function(t,e){},21:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-dialog",on:{touchmove:t.onTouchMove}},[n("transition",{attrs:{name:t.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-mask",on:{click:function(e){t.hideOnBlur&&(t.currentValue=!1)}}})]),t._v(" "),n("transition",{attrs:{name:t.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-dialog"},[t._t("default")],2)])],1)},staticRenderFns:[]}},22:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.title?n("div",{staticClass:"weui-cells__title",style:{color:t.titleColor},domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),n("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!t.title},style:{marginTop:t.gutter}},[t._t("after-title"),t._v(" "),t._t("default")],2)])},staticRenderFns:[]}},23:function(t,e,n){var i,o;n(20),i=n(17);var a=n(22);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},24:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(15),a=i(o);e.default={components:{XDialog:a.default},created:function(){"undefined"!=typeof this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"}},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}},25:function(t,e){},26:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-alert"},[n("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]}},27:function(t,e,n){var i,o;n(31);var a=n(33);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},29:function(t,e,n){var i,o;n(32),i=n(30);var a=n(34);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},30:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(27),a=i(o),s=n(55),r=n(63),c=i(r);e.default={components:{InlineDesc:a.default},props:(0,c.default)(),computed:{valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}}},methods:{getLabelStyles:function(){return{width:this.$parent.labelWidth||this.$parent.$parent.labelWidth,textAlign:this.$parent.labelAlign||this.$parent.$parent.labelAlign,marginRight:this.$parent.labelMarginRight||this.$parent.$parent.labelMarginRight}},onClick:function(){(0,s.go)(this.link,this.$router)}}}},31:function(t,e){},32:function(t,e){},33:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},staticRenderFns:[]}},34:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link,"vux-cell-no-border-intent":!t.borderIntent},on:{click:t.onClick}},[n("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),n("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[n("p",[t.title?n("label",{staticClass:"vux-label",style:t.getLabelStyles()},[t._v(t._s(t.title))]):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),n("inline-desc",[t._t("inline-desc",[t._v(t._s(t.inlineDesc))])],2)],1),t._v(" "),n("div",{staticClass:"weui-cell__ft",class:t.valueClass},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?n("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},staticRenderFns:[]}},36:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={getUrlKey:function(t){if("type"==t){var e=decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||["",""])[1].replace(/\+/g,"%20"))||null;return e}if("code"==t){var e=decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||["",""])[1].replace(/\+/g,"%20"))||null;return e}if("id"==t){var e=decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||["",""])[1].replace(/\+/g,"%20"))||/\/\d{1,8}/.exec(location.href)[0].replace("/","")||null;return e}}}},37:function(t,e,n){var i,o;n(10),i=n(8);var a=n(12);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},41:function(t,e){},49:function(t,e){"use strict";function n(t,e,n){console.log("发起微信支付"),"undefined"==typeof WeixinJSBridge?(document.addEventListener?document.addEventListener("WeixinJSBridgeReady",i,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",i),document.attachEvent("onWeixinJSBridgeReady",i)),n.$vux.alert.show({title:"提示",content:"请在微信中打开",dialogTransition:"",maskTransition:"",onShow:function(){},onHide:function(){}}),n.disable=!0):i(t,e,n)}function i(t,e,n){WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:t.app_id,timeStamp:t.timestamp,nonceStr:t.nonce_str,package:"prepay_id="+t.prepay_id,signType:"MD5",paySign:t.sign},function(i){console.log(i),"get_brand_wcpay_request:ok"==i.err_msg?e(t):"get_brand_wcpay_request:fail"==i.err_msg?(n.disable=!0,n.$vux.alert.show({title:"",content:"由于跨号支付，请关注'功夫财经'公众号'，下载APP购买",dialogTransition:"",maskTransition:""})):(n.disable=!0,n.$vux.alert.show({title:"",content:"支付取消",dialogTransition:"",maskTransition:""}))})}Object.defineProperty(e,"__esModule",{value:!0}),e.toPay=n},54:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);i(o);e.default={name:"backhome",props:{},data:function(){return{}},components:{},mounted:function(){},methods:{tohome:function(){window.location.href="/m/home.html"}}}},57:function(t,e){},58:function(t,e){t.exports="data:image/png;base64,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"},60:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"backhome"}},[n("div",{staticClass:"btn",on:{click:t.tohome}},[t._m(0),t._v(" "),n("span",{staticClass:"back"},[t._v("回到首页")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"img"},[i("img",{attrs:{src:n(58),alt:""}})])}]}},61:function(t,e,n){var i,o;n(25),i=n(24);var a=n(26);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},62:function(t,e,n){var i,o;n(57),i=n(54);var a=n(60);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},74:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean},computed:{classes:function(){return[{"weui-btn_disabled":this.disabled,"weui-btn_mini":this.mini},"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}},77:function(t,e){},80:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"weui-btn",class:t.classes,attrs:{disabled:t.disabled,type:t.actionType}},[t.showLoading?n("i",{staticClass:"weui-loading"}):t._e(),t._t("default",[t._v(t._s(t.text))])],2)},staticRenderFns:[]}},83:function(t,e,n){var i,o;n(77),i=n(74);var a=n(80);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},336:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),n(6),n(4);var o=n(62),a=i(o),s=n(1),r=i(s),c=n(2),u=i(c),l=n(36),d=i(l),f=n(3),p=n(49),g=n(23),h=i(g),m=n(29),v=i(m),w=n(13),y=i(w),_=n(51),I=i(_),C=n(39),x=i(C),S=n(40),k=i(S),A=n(83),b=i(A),E=n(28),M=i(E);r.default.prototype.$geturlpara=d.default,r.default.use(I.default),r.default.use(M.default),e.default={data:function(){return{id:0,state:0,showContent:!0,loadingshow:!1,loadtext:"加载中...",dataInfo:{}}},components:{Group:h.default,Cell:v.default,Loading:y.default,XButton:b.default,BackHome:a.default},beforeCreate:function(){},created:function(){try{this.id=this.$geturlpara.getUrlKey("id")}catch(t){this.id=0}this.id&&this.fetchData(this.id)},methods:{fetchData:function(t){var e=this;u.default.httpGet(r.default,HOST+"/api/channels/gift_info",{id:this.id},function(t){if(0==t.status)e.dataInfo=t,e.showContent=!0,e.loadingshow=!1;else if(5==t.status&&(0,f.isWeiXin)()){localStorage.setItem("gid",""),localStorage.clear(),clearcookie(x.default);e.$geturlpara.getUrlKey("id");getAuth(x.default,k.default,"gift-card-exchange.html?id="+e.id+"&code="+e.codevalue)}},function(t){console.log(t)})},buyBtn:function(){var t=this,e=this;if(localStorage.getItem("gid")){e.loadtext="加载中...",e.loadingshow=!0;var n="/pay/weixin/create_order";u.default.httpPost(r.default,HOST+n,{type:config().paytype,items:e.id,order_type:10},function(n){e.loadingshow=!1,0!=n.status?t.$vux.alert.show({title:"提示",content:n.error,dialogTransition:"",maskTransition:"",onHide:function(){console.log("订单创建失败"),5==n.status&&(localStorage.clear(),clearcookie(x.default),getAuth(x.default,k.default,"channel",id))}}):(e.loadingshow=!1,console.log("订单创建成功。。"),e.orderInfo=n,(0,p.toPay)(n,e.callback,e))},function(n){console.log(n),console.log("订单创建失败"),t.$vux.alert.show({title:"提示",content:"网络异常，请稍后重试",dialogTransition:"",maskTransition:""}),e.loadingshow=!1})}else getAuth(x.default,k.default,"channel",this.id)},callback:function(t){var e=this;u.default.httpPost(r.default,HOST+"/pay/weixin/check",{id:t.id},function(t){0!=t.status?e.$vux.alert.show({title:"提示",content:"服务器维护中，您的订单已支付成功，请勿重复支付。如有疑问请联系客服：400-966-7718",dialogTransition:"",maskTransition:""}):location.href="/m/gift-card-list.html"})}}}},433:function(t,e){},529:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"gift-card-buy"}},[t.showContent?n("div",{staticClass:"content"},[n("div",{staticClass:"card"},[n("div",{staticClass:"name"},[t._v("\n        "+t._s(t.dataInfo.name)+"\n      ")]),t._v(" "),n("p",{staticClass:"price"},[t._v("¥ "+t._s(t.dataInfo.price))])]),t._v(" "),n("x-button",{nativeOn:{click:function(e){t.buyBtn(e)}}},[t._v("点击购买礼品卡")]),t._v(" "),t._m(0)],1):t._e(),t._v(" "),n("BackHome"),t._v(" "),n("Loading",{attrs:{text:t.loadtext},model:{value:t.loadingshow,callback:function(e){t.loadingshow=e},expression:"loadingshow"}})],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"readme vux-1px-t"},[n("p",{staticClass:"title"},[t._v("礼品卡说明")]),t._v("\n      1、您可以通过点击上方按钮购买礼品卡"),n("br"),t._v("\n      2、礼品卡只适用于当前专栏的兑换"),n("br"),t._v("\n      3、购买成功后您可以把礼品卡通过微信分享的方式赠送给好友"),n("br"),t._v("\n      4、购买成功后无法退款"),n("br")])}]}},621:function(t,e,n){var i,o;n(433),i=n(336);var a=n(529);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i}});