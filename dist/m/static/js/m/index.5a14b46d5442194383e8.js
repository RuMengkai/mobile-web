webpackJsonp([6,0],{0:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var r=n(4),a=o(r),u=n(194),f=o(u);new a.default({el:"#app",template:"<App/>",components:{App:f.default}})},3:function(t,e){},96:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r,a=n(116),u=o(a);n(3),e.default=(r={name:"index",components:{},data:function(){return{showContent:!1}}},(0,u.default)(r,"components",{}),(0,u.default)(r,"created",function(){console.log(0)}),(0,u.default)(r,"methods",{fetchData:function(t){this.$http.get(HOST+"/api/articles/"+t+".json",[]).then(function(t){console.log(t)},function(t){console.log(t)})}}),(0,u.default)(r,"filters",{formatDate:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){var e=new Date(t),n=new Date,o=n-e;return console.log(formatDate(e,"yyyy")-formatDate(n,"yyyy")),o>31536e3?formatDate(e,"yyyy年MM月dd日"):formatDate(e,"MM月dd日")})}),r)},158:function(t,e){},175:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"index"}},[t._v("\n  index\n")])},staticRenderFns:[]}},194:function(t,e,n){var o,r;n(158),o=n(96);var a=n(175);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(r=o=o.default),"function"==typeof r&&(r=r.options),r.render=a.render,r.staticRenderFns=a.staticRenderFns,t.exports=o}});