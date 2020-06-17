<template>
  <div>
    <!-- 首页  SY -->
    <Title/>
    <IndexList/>
  </div>
</template>

<script>
import Title from "./Title/Title"
import IndexList from "./Index_List/Index_List"
export default {
  name: 'SY',
  components:{
    Title,
    IndexList
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">   //scoped

</style>
