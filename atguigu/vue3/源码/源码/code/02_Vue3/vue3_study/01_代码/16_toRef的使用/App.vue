<template>
  <h2>toRef的使用及特点:</h2>
  <h3>state:{{ state }}</h3>
  <h3>age:{{ age }}</h3>
  <h3>money:{{ money }}</h3>
  <hr />
  <button @click="update">更新数据</button>

  <hr />
  <Child :age="age" />
</template>
<script lang="ts">
import { defineComponent, reactive, toRef, ref } from 'vue'
import Child from './components/Child.vue'
export default defineComponent({
  name: 'App',
  components: {
    Child,
  },
  setup() {
    const state = reactive({
      age: 5,
      money: 100,
    })
    // 把响应式数据state对象中的某个属性age变成了ref对象了
    const age = toRef(state, 'age')
    // 把响应式对象中的某个属性使用ref进行包装,变成了一个ref对象
    const money = ref(state.money)
    console.log(age)
    console.log(money)
    const update = () => {
      // 更新数据的
      // console.log('测试')
      state.age += 2
      // age.value += 3
      // money.value += 10
    }
    return {
      state,
      age,
      money,
      update,
    }
  },
})
</script>