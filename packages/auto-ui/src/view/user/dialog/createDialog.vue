<template>
  <div>567890登录{{isLogin}}</div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useGlobalStore } from "@/store/useGlobalStore"
import { storeToRefs } from "pinia";
const globalStore = useGlobalStore()

const { isLogin } = storeToRefs(globalStore) // 把仓库中的数据变成响应式


</script>

<style lang='scss' scoped>

</style>