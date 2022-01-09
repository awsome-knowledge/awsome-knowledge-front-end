<template>
  <h2>AsyncAddress组件</h2>
  <h3>{{ data }}</h3>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
// 引入axios
import axios from 'axios'
export default defineComponent({
  name: 'AsyncAddress',
  // setup() {
  //   // return axios.get('/data/address.json').then((response) => {
  //   //   return {
  //   //     data: response.data,
  //   //   }
  //   // })
  // },

  async setup() {
    const result = await axios.get('/data/address.json')
    return {
      data: result.data,
    }
  },
})
</script>