<template>
  <div>哈哈,我又变帅了</div>
  <!-- <h1>{{number}}</h1> -->
</template>

<script lang="ts">
// defineComponent函数,目的是定义一个组件,内部可以传入一个配置对象
import { defineComponent } from 'vue'

// 暴露出去一个定义好的组件
export default defineComponent({
  // 当前组件的名字是App
  name: 'App',
  // 测试代码 setup是组合API中第一个要使用的函数
  // setup(){
  //   const number =10
  //   return {
  //     number
  //   }
  // }
})
</script>
