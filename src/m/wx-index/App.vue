<template>
  <div id="wx-index">
    <div v-if="contentshow">
      <div class="content">
        <div class="header">
          <img class="header-img" src="http://static1.kofuf.com/1512377216800.png"/>
        </div>
        <div class="con-list">
          <li class="con-item position-relative" v-for="(item, index) in links" :key="index" v-if="item.linkurl != ''">
            <div class="item-content border-bottom"  v-on:click='linkIndex(item.linkurl)' >
              <div class="item-left">
                <img class="item-img" v-if="item.url != '' " :src="item.url"/>
                <img class="item-img" v-else :src="defaultimg"/>
              </div>
              <div class="item-right">
                <div class="item-name">
                  {{item.name}}
                </div>
                <div class="item-brief" style="-webkit-box-orient: vertical;">
                  {{item.brief}}
                </div>
              </div>
            </div>
          </li>
        </div>
      </div>
    </div>
  </div>
    <!-- <loading v-model="loadingshow" :text="loadtext"></loading> -->
</template>

<script>
  import 'common/js/config.js';
  import { isWeiXin ,weixinShare} from 'common/js/common.js';
  import Vue from 'vue'
  import { message ,shareData} from 'common/js/assembly'
  export default {
    data () {
      return {
        sc: false,
        loadingshow: false,
        loadtext: '加载中...',
        contentshow: true,
        defaultimg: 'http://static1.kofuf.com/1496311047717.jpg',
        links:[
          {
            url: "http://static1.kofuf.com/1512374382984.png",
            name: "李大霄",
            brief: "英大证券研究所所长",
            linkurl: "http://mp.weixin.qq.com/mp/homepage?__biz=MzIzOTA3NTA5Mg==&hid=7&sn=9b8fb0eb2ae55c94fcbfa4d35fa0163a#wechat_redirect"
          },
          {
            url: "http://static1.kofuf.com/1512374404618.png",
            name: "马光远",
            brief: "扑腾话最标肿的正经经济学家",
            linkurl: "http://mp.weixin.qq.com/mp/homepage?__biz=MzIzOTA3NTA5Mg==&hid=8&sn=f782f88adb4ee970e54ef2e4172e4114#wechat_redirect"
          },
          {
            url: "http://static1.kofuf.com/1512374444167.png",
            name: "王福重",
            brief: "经济学教授",
            linkurl: "http://mp.weixin.qq.com/mp/homepage?__biz=MzIzOTA3NTA5Mg==&hid=9&sn=6d9bc945a051daed46fae0aff963d65c#wechat_redirect"
          },
          {
            url: "http://static1.kofuf.com/1512374461282.png",
            name: "时寒冰",
            brief: "趋势经济学鬼谷子",
            linkurl: "http://mp.weixin.qq.com/mp/homepage?__biz=MzIzOTA3NTA5Mg==&hid=10&sn=0d3aec740f57ea6e042b279c5c4b82d4#wechat_redirect"
          },
          {
            url: "http://static1.kofuf.com/1512374483854.png",
            name: "琢磨先生",
            brief: "新锐经济学者，中产阶级代言人",
            linkurl: "http://mp.weixin.qq.com/mp/homepage?__biz=MzIzOTA3NTA5Mg==&hid=11&sn=e8e592f09b96d2253bcc15a27b514c87#wechat_redirect"
          },
          {
            url: "http://static1.kofuf.com/1512374510391.png",
            name: "肖峰",
            brief: "社会趋势观察家，前《新周刊》总主笔",
            linkurl: "http://mp.weixin.qq.com/mp/homepage?__biz=MzIzOTA3NTA5Mg==&hid=12&sn=0fd6d21b055abcf21079fcd5cccf5895#wechat_redirect"
          },
          {
            url: "http://static1.kofuf.com/1512374527173.png",
            name: "胡润",
            brief: "跟土豪讲Engliese的琅琊榜榜爷",
            linkurl: "http://mp.weixin.qq.com/mp/homepage?__biz=MzIzOTA3NTA5Mg==&hid=17&sn=abccc94c53daa9fd299ae199174348b1#wechat_redirect"
          }
        ]
      }
    },
    components: {
    },
    beforeCreate(){
      //授权
      if(!isWeiXin()){
        message("请关注'功夫财经'公众号")
      }
    },
    created () {
      shareData("大咖论道",location.href)
      weixinShare();
    },
    methods: {
      linkIndex: function (linkurl) {
        window.location.href = linkurl
      }
    }
  }
</script>
<style lang="less">
@import '../../common/css/reset.css';
@import '~vux/src/styles/1px.less';
@import "../index/App.less";
@import './App.less';
</style>
