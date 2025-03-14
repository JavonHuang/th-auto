<template>
  <div>567890登录{{isLogin}}</div>
  <el-button type="primary" v-on:click="test">testpa:{{testpa}}</el-button>
</template>

<script setup lang='ts'>
import { ElButton } from 'element-plus';
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