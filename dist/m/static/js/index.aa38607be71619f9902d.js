webpackJsonp([45,0],[function(e,t){"use strict";!function(){var e=new RegExp(".com/m/.*"),t=e.exec(location.href);if(t){var n=t[0].replace(/.com\/m\//g,""),i=n.split("/"),r=i[i.length-2],l=i[i.length-1];switch(r){case"article":r="detail";break;default:r=r}var c=function(){if(2==i.length)return"/m/"+r+".html?id="+l;if(i.length>2){for(var e="",t=0;t<i.length-2;t++)e+=i[t]+"/";return"/m/"+e+r+".html?id="+l}return"/m/index.html"}();window.location.href=c}}()}]);