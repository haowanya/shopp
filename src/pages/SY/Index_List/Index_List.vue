<template>
  <div>
    <div class="Swipe_nav">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Swipe, SwipeItem } from 'vant';
  Vue.use(Swipe);
  Vue.use(SwipeItem);
  export default {
    name: 'Index_List',
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">   //scoped
   .my-swipe
    .van-swipe-item 
      color: #fff;
      font-size: 20px;
      line-height: 150px;
      text-align: center;
      background-color: #39a9ed;
  
</style>

