<template>
  <div id="channels-small">
    <div class="content vux-1px-b vux-1px-t" v-if="showContent">
      <Channels :subs="channels_small" type="small"></Channels>
    </div>
    <BackHome></BackHome>
    <Loading v-model="loadingshow" :text="loadtext"></Loading>
  </div>
</template>

<script>
  import 'common/css/reset.css';
  import 'common/js/config.js';
  import BackHome from "components/BackHome/BackHome"
  import {isWeiXin} from 'common/js/common.js';
  import AjaxServer from 'common/js/ajaxServer.js';
  import geturlpara from 'common/js/geturlpara.js';
  import Channels from "components/Channels/Channels"
  import Vue from 'vue'
  import {Loading,Icon} from 'vux'
  import VueResource from 'vue-resource'
  import { AlertPlugin,querystring,cookie} from 'vux'
  Vue.use(AlertPlugin)
  Vue.use(VueResource)
  Vue.prototype.$geturlpara=geturlpara

  export default {
    data () {
      return {
        loadingshow: true,
        loadtext: 'loading...',
        showContent:false,
        channels_small:[],
        failedshow:false,
        failedmsg:"服务请求失败，请刷新重试"
      }
    },
    components: {
      BackHome,
      Icon,
      Loading,
      Channels
    },
    beforeCreate(){
      //授权
      if(isWeiXin()){
        getAuth(cookie,querystring);
      }
    },
    created () {
      this.fetchData();
    },
    methods: {
      //获取专栏数据数据
      fetchData(){
        var url=HOST+'/api/channels/small_channel_list.json';
        var data={};
        AjaxServer.httpGet(Vue,url,data,this.fetchResult);
      },
      fetchResult(res){
        var self=this;
        if (res.status!=0&&isWeiXin()) {
          localStorage.setItem("gid","");
          localStorage.clear();
          clearcookie(cookie);
          getAuth(cookie,querystring);
        }else{
          self.channels_small=res.items;
          self.loadingshow =false;
          self.showContent =true;
        }
      },
      logErr(err){
        this.$vux.alert.show({
          title: '提示',
          content: err,
          dialogTransition:"",
          maskTransition:"",
          onShow () {},
          onHide () {}
        })
      },
      loginout(){
        localStorage.clear();
        cookie.set('gid', 0,{
            domain: '.kofuf.com',
            path: '/',
            expires: -1
          });
        cookie.set('token', 0,{
            domain: '.kofuf.com',
            path: '/',
            expires: -1
          });
        WeixinJSBridge.invoke('closeWindow',{},function(res){});
      }
    }
  }
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
body{
  background-color: #eee;
}
#channels-small{
  padding: .3rem 0 .5rem;
  .content{
    background-color: #fff;
  }
}
</style>
