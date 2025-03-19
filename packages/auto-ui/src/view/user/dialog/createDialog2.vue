<template>
  <div>567890登录{{isLogin}}</div>
  <th-button type="primary" v-on:click="test">testpa:{{testpa}}</th-button>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useGlobalStore } from "@/store/useGlobalStore"
import { storeToRefs } from "pinia";
const globalStore = useGlobalStore()

const { isLogin } = storeToRefs(globalStore) // 把仓库中的数据变成响应式
const testpa=ref('56767887')
const test=()=>{
  testpa.value="点击了"
}
</script>

<style lang='scss' scoped>

</style>