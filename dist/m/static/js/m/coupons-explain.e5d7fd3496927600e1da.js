webpackJsonp([43,0],{0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=n(1),a=o(i),s=n(616),r=o(s),c=n(16),l=o(c);a.default.use(l.default),new a.default({el:"#coupons-explain",template:"<App/>",components:{App:r.default}})},2:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(1);o(i);e.default={ajaxPost:function(t,e,n,o){$.ajax({url:t,type:"POST",data:e,success:function(t){n(t)},error:function(t){o(t)}})},ajaxGet:function(){},httpPost:function(t,e,n,o,i){t.http.options.emulateJSON=!0,t.http.options.headers={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},t.http.interceptors.push(function(t,e){t.headers.set("from",config().from),t.headers.set("gid",config().gid),t.headers.set("token",config().token),t.headers.set("version",VERSION),e()}),t.http.post(e,n).then(function(t){return t.bodyText}).then(function(t){var t=JSON.parse(t);o(t)},function(t){i(t)||console.log(t)})},httpGet:function(t,e,n,o,i){t.http.options.emulateJSON=!0,t.http.options.headers={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},t.http.interceptors.push(function(t,e){t.headers.set("from",config().from),t.headers.set("gid",config().gid),t.headers.set("token",config().token),t.headers.set("version",VERSION),e()}),t.http.get(e,{params:n}).then(function(t){return t.bodyText}).then(function(t){var t=JSON.parse(t);o(t)},function(t){i(t)||console.log(t)})}}},4:function(t,e,n){"use strict";!function(){var t=document.documentElement.clientWidth||document.body.clientWidth;t=t>640?640:t;var e=t/750*100;e=e<60?e:60,document.documentElement.style.fontSize=e+"px",t<350?window.phonetype="small":window.phonetype="large"}(),document.write('<script src="https://s19.cnzz.com/z_stat.php?id=1262435637&web_id=1262435637" language="JavaScript"></script>'),document.write('<script src="http://res.wx.qq.com/open/js/jweixin-1.2.0.js" charset="utf-8"></script>'),window.base="pro","pro"==base?(window.VERSION="0.1",window.HOST="http://api.51xy8.com",window.HOSTM="http://m.51xy8.com",window.HOSTA="http://api.51xy8.com",window.appid="wx05e842991e5fa0b2",localStorage.setItem("from","3"),window.config=function(){return{paytype:"JSAPI",from:localStorage.getItem("from"),gid:localStorage.getItem("gid"),token:localStorage.getItem("token")}}):(window.VERSION="0.1",window.HOST="http://123.57.35.40",window.HOSTM="http://dev.kofuf.com",window.HOSTA="http://123.57.35.40",window.appid="wx0a542ef9d4d41cef",localStorage.setItem("from","3"),localStorage.setItem("gid","1047501566"),localStorage.setItem("token","f32cd7de15144e2b931214730e6ed9f4"),window.config=function(){return{paytype:"JSAPI",from:localStorage.getItem("from"),gid:localStorage.getItem("gid"),token:localStorage.getItem("token")}}),window.shareData={title:"功夫财经",link:HOSTM+"/m/home.html",imgUrl:"http://m.kofuf.com/static/img_h5/h5_logo.png",desc:"功夫财经致力于联动最出色的财经学者，提供最优质的原创内容，打造中国规模最大的、粘性最高的财富命运共同体，以新型金融服务平台为终极己任，解决中产焦虑，提升国民财商。 "};var o=n(35);o.attach(document.body),window.getAuthLink=function(t){return"https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appid+"&redirect_uri="+HOSTA+"%2Fapi%2Fsession%2Fauth_weixin&response_type=code&scope=snsapi_userinfo&state="+t+"#wechat_redirect"},window.getAuth=function(t,e,n,o){var i=t.get("gid"),a=e.parse();if(!localStorage.getItem("gid")||""==localStorage.getItem("gid"))if("undefined"!=typeof a.gid)localStorage.setItem("gid",a.gid),localStorage.setItem("token",a.token);else if("undefined"!=typeof i)localStorage.setItem("gid",t.get("gid")),localStorage.setItem("token",t.get("token"));else{var s;s=void 0!=o&&""!=o?n+"_"+o:n,s=s?s:"",window.location.href=getAuthLink(s)}},window.clearcookie=function(t){localStorage.clear(),t.set("gid",0,{domain:".kofuf.com",path:"/",expires:-1}),t.set("token",0,{domain:".kofuf.com",path:"/",expires:-1})}},6:function(t,e){},41:function(t,e){},331:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),n(6),n(4);var i=n(2),a=o(i),s=n(1),r=o(s);e.default={name:"coupons-explain",data:function(){return{content:'<p style="white-space: normal; line-height: 2em;"><span style="font-family: 微软雅黑; color: rgb(227, 108, 9);"><strong><span style="line-height: inherit;">1.什么是优惠券？</span></strong></span><span style="font-family: 微软雅黑;"><strong><span style="line-height: inherit; color: rgb(51, 51, 51);"></span></strong><span style="line-height: inherit; color: rgb(51, 51, 51);"><br/></span></span></p><p style="white-space: normal; line-height: 2em;"><span style="color: rgb(51, 51, 51); font-family: 微软雅黑;">优惠券是功夫财经发行和认可的购物抵用券，可以在功夫财经购买商品或付费订阅内容时使用，使用时可抵扣对应金额或享受对应折扣。</span></p><p style="white-space: normal; line-height: 2em;"><span style="color: rgb(227, 108, 9);"><strong><span style="font-family: 微软雅黑;">2.如何获得优惠券？</span></strong></span></p><p style="white-space: normal; line-height: 2em;"><span style="color: rgb(51, 51, 51); font-family: 微软雅黑;">功夫财经客户端与公众号会不定期推出优惠券领取活动，参与活动即可免费领取。</span></p><p style="white-space: normal; line-height: 2em;"><span style="color: rgb(227, 108, 9);"><strong><span style="line-height: inherit; font-family: 微软雅黑;">3.如何使用优惠券？</span></strong></span></p><p style="white-space: normal; line-height: 2em;"><span style="color: rgb(51, 51, 51); font-family: 微软雅黑;">在购买商品或订阅付费内容时，系统会自动为您选择可使用的优惠券，您也可以手动更换优惠券或选择暂时不使用优惠券。</span></p><p style="white-space: normal; line-height: 2em;"><strong><span style="line-height: inherit; font-family: 微软雅黑; color: rgb(227, 108, 9);">4.优惠券可找零或兑现么？</span></strong></p><p style="white-space: normal; line-height: 2em;"><span style="color: rgb(51, 51, 51); font-family: 微软雅黑;">优惠券不支持找零或兑换现金。</span></p><p style="white-space: normal; line-height: 2em;"><strong><span style="line-height: inherit; font-family: 微软雅黑; color: rgb(227, 108, 9);">5.如您有任何疑问请联系我们</span></strong><span style="line-height: inherit; color: rgb(51, 51, 51); font-family: 微软雅黑;">：400-966-7718</span></p>'}},components:{},created:function(){this.fetchData()},methods:{fetchData:function(t){var e=this;a.default.httpGet(r.default,HOST+"/api/coupons/intro.json",{},function(t){0==t.status&&(e.content=t.content)}),function(t){console.log(t)}}}}},424:function(t,e){},518:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"coupons-explain"}},[n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.content)}})])},staticRenderFns:[]}},616:function(t,e,n){var o,i;n(424),o=n(331);var a=n(518);i=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(i=o=o.default),"function"==typeof i&&(i=i.options),i.render=a.render,i.staticRenderFns=a.staticRenderFns,t.exports=o}});