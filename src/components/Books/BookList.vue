<template>
  <div id="book-list">
    <group>
      <li v-for="(item,index) in dataList" @click="todetail(item)" :key="index" v-bind:class="{'vux-1px-b':(dataList.lenght-1)!=index}">
        <img :src="item.thumb" alt="">
        <div class="right">
          <p class="name ell-2"> {{item.name}}</p>
          <p class="author-name"> {{item.author_name}}</p>
          <p class="brief ell-3">{{item.rate}}</p>
        </div>
      </li>
    </group>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { toast } from 'common/js/assembly'
  import { Group } from 'vux'
  export default {
    props: {
      dataList:{
        type: Array,
        default: []
      },
    },
    data () {
      return {
      }
    },
    components: { Group },
    mounted(){
    },
    methods: {
      todetail(data){
        if (data.finished) {
          if (data.article_id&&data.article_id>0) {
            window.location.href="/m/detail.html?id="+data.article_id;
          }else{
            window.location.href="/m/book-detail.html?id="+data.id;
          }
        }else{
          toast("请完结后查看")
        }
      }
    }
  }
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
#book-list{
  background: #fff;
  height: auto;
  .weui-cells{
    padding-left: .3rem;
  }
  li{
    padding: .3rem .3rem .3rem 0;
    box-sizing: border-box;
    height: 3rem;
    img{
      width: 1.76rem;
      height: 2.4rem;
      display: block;
      float: left;
    }
    .right{
      height: 2.4rem;
      margin-left: 2.06rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: justify;
    }
    .name{
      font-size: 16px;
      flex-grow:1;
      color: #000;
    }
    .author-name{
      flex-grow:3;
      font-size: 12px;
      color: #999;
    }
    .brief{
      font-size: 12px;
      color: #999;
      position: relative;
      line-height: 1.28em;
      max-height: 3.6em;
      overflow: hidden;
      span{
        background: #fff;
        display: block;
        position: absolute;
        right: 0;
        bottom: 0;
        width: 1em;
        overflow: hidden;
      }
    }
  }
}
</style>
