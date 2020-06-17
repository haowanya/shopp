<template>
  <div>
    <div class="title">
      <a href="##" class="logo"></a>
      <div class="input_nav">
        <i class="icon"></i>
        <input type="text" placeholder="搜索商品"   placeholder-class="placeholder">
        <!-- <van-search v-model="value" placeholder="搜索商品" placeholder-class="placeholder" /> -->
      </div>
      <button>登录</button>
    </div>
    <div>
      <van-tabs v-model="active" >
        <van-tab title="标签 1">内容 1</van-tab>
      </van-tabs>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  import { Search,Tab, Tabs} from 'vant';
  import request from '@/utils/request'

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Search);
  export default {
    name: 'Title',
    data() {
      return {
          IndexList:[],
          IndexId:'',
          active:0
        }
      },
    mounted(){
      this.getIndexListDatas()
    },
    methods:{
          getIndexListDatas(){
            this.IndexList= request('/GetindexCateModule')
          
        }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">   //scoped
  .title
    display flex
    padding 16px 30px
    .logo
      display block
      height 40px
      width 138px
      margin-top 5px
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp) 
      background-repeat: no-repeat
      background-size 100% 100%
      margin-right 40px
    .input_nav
      position relative
      height 52px
      width 442px
      background rgba(237,237,237,1)
      border-radius 10px
      input   
        margin-left 88px
        margin-top 12px
        border: 0;  // 去除未选中状态边框
        outline: none; // 去除选中状态边框
        background-color: rgba(0, 0, 0, 0);// 透明背景
      .placeholder
        font-size 26px
        text-align center
      .icon 
        position absolute
        left 40px
        top 16px
        display block
        height 20px
        width 20px
        background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp)
        background-size 100% 100%
    button 
      float right
      margin-top 5px
      height 40px
      width 100px
      margin-left 16px
      color red
      border 1px solid red
      border-radius 10px

</style>


