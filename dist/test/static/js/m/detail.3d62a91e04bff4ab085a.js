webpackJsonp([2,0],[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var a=n(4),s=i(a),o=n(185),r=i(o),u=n(9),l=i(u);s.default.use(l.default),new s.default({el:"#detail",template:"<App/>",components:{App:r.default}})},,,function(t,e){},,function(t,e){"use strict";!function(){var t=document.documentElement.clientWidth||document.body.clientWidth;t=t>640?640:t;var e=t/750*100;document.documentElement.style.fontSize=e+"px"}(),window.HOST="http://123.57.35.40:8000"},,,,,,,,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={getUrlKey:function(t){return decodeURIComponent((new RegExp("[?|&]"+t+"=([^&;]+?)(&|#|;|$)").exec(location.href)||["",""])[1].replace(/\+/g,"%20"))||null}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(31),s=i(a);e.default={components:{XDialog:s.default},created:function(){"undefined"!=typeof this.value&&(this.showValue=this.value)},props:{value:Boolean,title:String,content:String,buttonText:String,maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"}},data:function(){return{showValue:!1}},methods:{_onHide:function(){this.showValue=!1}},watch:{value:function(t){this.showValue=t},showValue:function(t){this.$emit("input",t)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:{type:Boolean,default:!1},text:String,position:String},created:function(){this.show=this.value},data:function(){return{show:!1}},watch:{value:function(t){this.show=t},show:function(t){this.$emit("input",t)}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:{type:Boolean,default:!1},maskTransition:{type:String,default:"vux-mask"},dialogTransition:{type:String,default:"vux-dialog"},hideOnBlur:Boolean,scroll:{type:Boolean,default:!0}},created:function(){"undefined"!=typeof this.value&&(this.currentValue=this.value)},watch:{value:{handler:function(t){this.currentValue=t},immediate:!0},currentValue:function(t){this.$emit(t?"on-show":"on-hide"),this.$emit("input",t)}},data:function(){return{currentValue:!1}},methods:{onTouchMove:function(t){!this.scroll&&t.preventDefault()}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"failed",data:function(){return{}},props:{msg:String},components:{},created:function(){},methods:{}}},,function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){t.exports=n.p+"m/static/img/failed.01f7b48.png"},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"vux-mask"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-loading_toast"},[n("div",{staticClass:"weui-mask_transparent"}),t._v(" "),n("div",{staticClass:"weui-toast",style:{position:t.position}},[n("i",{staticClass:"weui-loading weui-icon_toast"}),t._v(" "),n("p",{staticClass:"weui-toast__content"},[t._v(t._s(t.text||"加载中")),t._t("default")],2)])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-x-dialog",on:{touchmove:t.onTouchMove}},[n("transition",{attrs:{name:t.maskTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-mask",on:{click:function(e){t.hideOnBlur&&(t.currentValue=!1)}}})]),t._v(" "),n("transition",{attrs:{name:t.dialogTransition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.currentValue,expression:"currentValue"}],staticClass:"weui-dialog"},[t._t("default")],2)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-alert"},[n("x-dialog",{attrs:{"mask-transition":t.maskTransition,"dialog-transition":t.dialogTransition},on:{"on-hide":function(e){t.$emit("on-hide")},"on-show":function(e){t.$emit("on-show")}},model:{value:t.showValue,callback:function(e){t.showValue=e},expression:"showValue"}},[n("div",{staticClass:"weui-dialog__hd"},[n("strong",{staticClass:"weui-dialog__title"},[t._v(t._s(t.title))])]),t._v(" "),n("div",{staticClass:"weui-dialog__bd"},[t._t("default",[n("div",{domProps:{innerHTML:t._s(t.content)}})])],2),t._v(" "),n("div",{staticClass:"weui-dialog__ft"},[n("a",{staticClass:"weui-dialog__btn weui-dialog__btn_primary",attrs:{href:"javascript:;"},on:{click:t._onHide}},[t._v(t._s(t.buttonText||"确定"))])])])],1)},staticRenderFns:[]}},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"failed"}},[i("img",{attrs:{src:n(25),alt:""}}),t._v(" "),i("p",[t._v(t._s(t.msg))])])},staticRenderFns:[]}},function(t,e,n){var i,a;n(20),i=n(16);var s=n(26);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e,n){var i,a;n(21),i=n(17);var s=n(27);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e,n){var i,a;n(23),i=n(18);var s=n(29);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,t.exports=i},,function(t,e){"use strict";function n(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in n)if(new RegExp("("+i+")").test(e)){var s=(n[i]+"").replace(/^0/,"");e=e.replace(RegExp.$1,1===RegExp.$1.length?s:a(s))}return e}function i(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in n)if(new RegExp("("+i+")").test(e)){var a=(n[i]+"").replace(/^0/,"");e=e.replace(RegExp.$1,1===RegExp.$1.length?a:s(a))}return e}function a(t){return("00"+t).substr(t.length)}function s(t){return t}Object.defineProperty(e,"__esModule",{value:!0}),e.formatDate=n,e.formatDate2=i},,,,,,,function(t,e){},,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var i,a;n(22),i=n(15);var s=n(28);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,t.exports=i},,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(109),s=i(a);e.default={props:{decimal:Boolean,value:{default:0,type:Number},min:{type:Number,default:0},minHTML:String,maxHTML:String,max:{type:Number,default:100},step:{type:Number,default:0},disabled:Boolean,disabledOpacity:Number,rangeBarHeight:{type:Number,default:1},rangeHandleHeight:{type:Number,default:30}},created:function(){this.currentValue=this.value},mounted:function(){var t=this,e=this;this.$nextTick(function(){var n={callback:function(t){e.currentValue=t},decimal:t.decimal,start:t.currentValue,min:t.min,max:t.max,minHTML:t.minHTML,maxHTML:t.maxHTML,disable:t.disabled,disabledOpacity:t.disabledOpacity,initialBarWidth:window.getComputedStyle(t.$el.parentNode).width.replace("px","")-80};0!==t.step&&(n.step=t.step),t.range=new s.default(t.$el.querySelector(".vux-range-input"),n);var i=(t.rangeHandleHeight-t.rangeBarHeight)/2;t.$el.querySelector(".range-handle").style.top="-"+i+"px",t.$el.querySelector(".range-bar").style.height=t.rangeBarHeight+"px"})},methods:{update:function(){var t=this.currentValue;t<this.min&&(t=this.min),t>this.max&&(t=this.max),this.range.reInit({min:this.min,max:this.max,value:t}),this.currentValue=t,this.range.setStart(this.currentValue)}},data:function(){return{currentValue:0}},watch:{currentValue:function(t){this.range&&this.range.setStart(t),this.$emit("input",t)},value:function(t){this.currentValue=t},min:function(){this.update()},max:function(){this.update()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(3),n(5),e.default={name:"app-download",data:function(){return{}},components:{},created:function(){},methods:{BrowserType:function(){window.location.href="https://a.mlinks.cc/AK8k"}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(176),s=i(a);e.default={name:"audiobox",props:{music:String},data:function(){return{musicplay:this.$refs.musicplay,duration:0,current:0,max:0,value:0}},components:{Range:s.default},mounted:function(){this.inits(),console.log(this)},methods:{inits:function(){var t=this,e=setInterval(function(){isNaN(t.$refs.musicplay.duration)||(t.duration=t.$refs.musicplay.duration,t.$refs.totalTime.textContent=t.formatTime(t.duration),console.log(t.duration),clearTimeout(e))},20)},play:function(){this.$refs.musicplay.addEventListener("timeupdate",this.updateProgress),this.$refs.musicplay.paused?(this.$refs.musicplay.play(),pButton.className="",pButton.className="pause"):(this.$refs.musicplay.pause(),pButton.className="",pButton.className="play")},clickslider:function(t){var e=t.offsetX,n=t.srcElement.clientWidth;this.$refs.musicplay.currentTime=this.$refs.musicplay.duration*e/n},updateProgress:function(){var t=this.$refs.musicplay.currentTime,e=t/this.$refs.musicplay.duration*100;this.$refs.progress.style.width=e+"%",this.$refs.currentTime.textContent=this.formatTime(t),this.$refs.musicplay.currentTime==this.$refs.musicplay.duration&&(this.$refs.musicplay.pause(),pButton.className="",pButton.className="play",this.$refs.musicplay.currentTime=0)},onchange:function(){var t=document.getElementsByClassName("range-handle")[0];t.touchend=this.change,t.onmouseup=this.change},change:function(){var t=document.getElementsByClassName("vux-range-input")[0];console.log(t.value),this.$refs.musicplay.currentTime=t.value},formatTime:function(t){var e=Math.floor(t/60),n=Math.floor(t%60);return e+":"+(n<10?"0"+n:n)}}}},,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(34),s=n(4),o=i(s),r=n(45),u=i(r);o.default.use(u.default),e.default={name:"comments",props:{title:String,commentlist:Array},components:{},filters:{formatDate:function(t){var e=new Date(t);return(0,a.formatDate)(e,"yyyy-MM-dd")}},methods:{showPlugin:function(){this.$vux.alert.show({title:"小提示",content:"打开APP，参与互动，<br/> 获取优质内容。",dialogTransition:"",maskTransition:"",onShow:function(){console.log("Plugin: I'm showing")},onHide:function(){console.log("Plugin: I'm hiding now")}})},showPluginAuto:function(){this.showPlugin()}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vediobox",props:{video:String,poster:String},data:function(){return{showplay:!0}},components:{},methods:{play:function(){this.$refs.vdo.paused?(this.$refs.vdo.play(),this.showplay=!1):(this.$refs.vdo.pause(),this.showplay=!0)}}}},,,,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),n(3),n(5);var a=n(14),s=i(a),o=n(34),r=n(180),u=i(r),l=n(178),c=i(l),d=n(181),f=i(d),p=n(177),m=i(p),A=n(32),v=i(A),h=n(4),g=i(h),w=n(30),y=i(w),C=n(9),x=i(C);g.default.use(x.default),g.default.prototype.$geturlpara=s.default,e.default={name:"detail",data:function(){return{showContent:!1,paly:0,showplay:!0,title:"评论",commentlist:{items:[]},articles:{},loadingshow:!0,loadtext:"loading...",appdownloadshow:!1,failedshow:!1,failedmsg:"请在网络环境下访问"}},components:{Loading:y.default,Comment:u.default,Audiobox:c.default,Videobox:f.default,AppDownload:m.default,Failed:v.default},created:function(){var t=this.$geturlpara.getUrlKey("id")||"1482";this.fetchData(t)},methods:{openApp:function(){console.log("open"),console.log(HOST),this.getPhoneType()},fetchData:function(t){var e=this;this.$http.get(HOST+"/api/articles/"+t+".json",[]).then(function(n){e.loadingshow=!1,e.articles=JSON.parse(n.bodyText),e.fetchCommentData(t),0!=e.articles.status?4==e.articles.status?e.appdownloadshow=!0:(e.failedmsg=e.articles.error,e.failedshow=!0):e.showContent=!0},function(t){e.loadingshow=!1,e.failedshow=!0,console.log(t)});var n=this;setTimeout(function(){n.loadingshow=!1},1e4)},fetchCommentData:function(t){var e=this;this.$http.get(HOST+"/api/articles/comments.json?id="+t,[]).then(function(t){e.loadingshow=!1,e.commentlist.items=JSON.parse(t.bodyText).items},function(t){e.loadingshow=!1,console.log(t)})},logErr:function(t){this.$vux.alert.show({title:"提示",content:t,dialogTransition:"",maskTransition:"",onShow:function(){},onHide:function(){}})},getPhoneType:function(){var t=navigator.userAgent;t.indexOf("Android")>-1||t.indexOf("Linux")>-1?(console.log("Android"),window.location.href="https://a.mlinks.cc/AK8f?id=1340&mw_ck=h5"):t.indexOf("iPhone")>-1?(console.log("apple"),window.location.href="https://a.mlinks.cc/AK8f?id=1340&mw_ck=h5"):t.indexOf("Windows Phone")>-1?(console.log("Windows"),window.location.href="https://a.mlinks.cc/AK8f?id=1340&mw_ck=h5"):window.location.href="https://a.mlinks.cc/AK8f?id=1340&mw_ck=h5"}},filters:{formatDate:function(t){var e=new Date(t);return(0,o.formatDate)(e,"MM月dd日")}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},,,,function(t,e){},function(t,e){},,function(t,e){},function(t,e){},,function(t,e){},,function(t,e,n){t.exports=n.p+"m/static/img/logo.0e82203.png"},,function(t,e){t.exports="data:image/png;base64,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"},function(t,e){t.exports="data:image/png;base64,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"},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"comments"}},[n("p",{staticClass:"comment-title vux-1px-b"},[t._v(t._s(t.title||"评论"))]),t._v(" "),void 0!=t.commentlist?n("ul",{attrs:{id:"comment"}},t._l(t.commentlist,function(e){return n("li",{staticClass:"vux-1px-b"},[n("img",{attrs:{src:e.author.photo,alt:"",onerror:"this.src='http://182.92.99.123:8080/privilege/uploadedFile/default.png'"}}),t._v(" "),n("div",{staticClass:"comment-box"},[n("p",{staticClass:"username"},[t._v(t._s(e.author.name))]),t._v(" "),n("p",{staticClass:"date"},[t._v(t._s(t._f("formatDate")(e.postd)))]),t._v(" "),n("p",{staticClass:"comment-con"},[t._v(t._s(e.content))]),t._v(" "),n("div",{staticClass:"zan",on:{click:t.showPluginAuto}},[t._m(0,!0),t._v(" "),n("span",{staticClass:"count"},[t._v(" "+t._s(e.support_count))])])])])})):n("ul",[n("li",{staticClass:"comment-none"},[t._v("\n      暂无评论\n    ")])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"icon"},[i("img",{attrs:{src:n(162),alt:""}})])}]}},,,,function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"vediobox"}},[n("video",{ref:"vdo",attrs:{src:t.video,poster:t.poster}},[t._v("\n    您的浏览器不支持video\n  ")]),t._v(" "),n("div",{staticClass:"vdo-control",on:{click:t.play}},[t.showplay?n("span",{staticClass:"vdo-play"}):t._e()])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-1px",attrs:{id:"audiobox"}},[n("audio",{ref:"musicplay",attrs:{src:t.music}},[t._v("\n    您的浏览器不支持audio\n  ")]),t._v(" "),n("div",{attrs:{id:"audioplayer"}},[n("button",{staticClass:"play",attrs:{id:"pButton"},on:{click:t.play}}),t._v(" "),n("div",{staticClass:"controls"},[n("span",{ref:"currentTime",staticClass:"current-time"},[t._v("0:00")]),t._v(" "),n("div",{staticClass:"slider",attrs:{"data-direction":"horizontal"},on:{click:t.clickslider}},[n("div",{ref:"progress",staticClass:"progress"},[n("div",{staticClass:"pin",attrs:{id:"progress-pin","data-method":"rewind"}})])]),t._v(" "),n("span",{ref:"totalTime",staticClass:"total-time"},[t._v("0:00")])])])])},staticRenderFns:[]}},,function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app-download"}},[t._m(0),t._v(" "),n("button",{staticClass:"load",on:{click:t.BrowserType}},[t._v("打开APP阅读")])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contentapp"},[i("img",{staticClass:"logo",attrs:{src:n(159)}}),t._v(" "),i("div",{staticClass:"one"},[t._v("\n      中国财经新媒体第一平台，以最具人格化的财经大咖和最具表现力的财经小V，构筑最具公信力和活跃度的财经社群。帮助中国的中产阶层，实现全球资产的优化配置。\n    ")]),t._v(" "),i("div",{staticClass:"two"},[t._v("\n      平台集结了时寒冰、王福重、马光远、李大霄、琢磨先生、黄生、闫肖峰、胡润等各路财经大侠，以视频、音频、图文、公开课、线下社交、海外游学等方式提供最具价值的财经知识产品，和您共同缔造财富的光荣与梦想。\n    ")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-range-input-box",staticStyle:{position:"relative","margin-right":"30px","margin-left":"50px"}},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentValue,expression:"currentValue",modifiers:{number:!0}}],staticClass:"vux-range-input",domProps:{value:t.currentValue},on:{input:function(e){e.target.composing||(t.currentValue=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])},staticRenderFns:[]}},,function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"detail"}},[t.failedshow?n("Failed",{attrs:{msg:t.failedmsg}}):t._e(),t._v(" "),n("Loading",{attrs:{text:t.loadtext},model:{value:t.loadingshow,callback:function(e){t.loadingshow=e},expression:"loadingshow"}}),t._v(" "),t.showContent?n("div",{staticClass:"content"},["V"==t.articles.sub_type?n("div",[n("Videobox",{attrs:{video:t.articles.banner,poster:t.articles.thumb}})],1):t._e(),t._v(" "),"R"===t.articles.sub_type?n("div",[n("Audiobox",{attrs:{music:t.articles.banner}})],1):t._e(),t._v(" "),"A"==t.articles.sub_type?n("div",{staticClass:"banner"},[n("img",{attrs:{src:t.articles.banner,alt:""}})]):t._e(),t._v(" "),n("div",{staticClass:"articles"},[n("p",{staticClass:"title"},[t._v(t._s(t.articles.name))]),t._v(" "),n("div",{staticClass:"info vux-1px-b"},[n("img",{attrs:{src:t.articles.author_pic,alt:""}}),t._v(" "),n("span",{staticClass:"author"},[t._v("作者："+t._s(t.articles.author_name))]),t._v(" "),n("span",{staticClass:"created"},[t._v(t._s(t._f("formatDate")(t.articles.created)))])]),t._v(" "),n("span",{staticClass:"content",domProps:{innerHTML:t._s(t.articles.content)}})]),t._v(" "),n("comment",{attrs:{title:t.title,commentlist:t.commentlist.items}})],1):t._e(),t._v(" "),t.showContent?n("footer",[t._m(0),t._v(" "),n("div",{staticClass:"download"},[n("a",{on:{click:t.openApp}},[t._v("打开APP")])])]):t._e(),t._v(" "),t.appdownloadshow?n("app-download"):t._e()],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"gfcj"},[i("img",{attrs:{src:n(161),alt:""}}),t._v(" "),i("span",[t._v("功夫财经")])])}]}},,,function(t,e,n){var i,a;n(155),i=n(85);var s=n(171);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e,n){var i,a;n(154),i=n(86);var s=n(170);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e,n){
var i,a;n(152),i=n(87);var s=n(168);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,t.exports=i},,function(t,e,n){var i,a;n(147),i=n(89);var s=n(163);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e,n){var i,a;n(151),i=n(90);var s=n(167);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,t.exports=i},,,,function(t,e,n){var i,a;n(157),i=n(94);var s=n(173);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=s.render,a.staticRenderFns=s.staticRenderFns,t.exports=i}]);