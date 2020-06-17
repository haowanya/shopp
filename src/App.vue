<template>
  <div id="app">
      <router-view />
      <van-tabbar router  class="tabbarAA"     v-model="active" active-color="#EE0A24" >
        <van-tabbar-item replace  to="/SY" icon="wap-home-o" class="active "  >
          首页
        </van-tabbar-item>
        <van-tabbar-item replace  to="/FL" icon="cluster-o"  >
          分类
        </van-tabbar-item>
        <van-tabbar-item replace  to="/ZDM" icon="gift-card-o"  >
          值得买
        </van-tabbar-item>
        <van-tabbar-item replace  to="/GWC" icon="shopping-cart-o" >
          购物车
        </van-tabbar-item>
        <van-tabbar-item replace  to="/GR" icon="friends-o" >
          个人
        </van-tabbar-item>
      </van-tabbar  >
  </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
import SY from "@/pages/SY/SY"
Vue.use(Tabbar);
Vue.use(TabbarItem);


export default {
  name: 'App',
  data() {
    return {
      active: 0,
    };
  },
  components:{
  }
}


</script>

<style lang="stylus" rel="stylesheet/stylus">
#app  
  width 100%
  height 100%
  background pink
  .Navs
    height 200px
    width 500px
    background yellow 
  .tabbarAA
    height 98px
</style>
