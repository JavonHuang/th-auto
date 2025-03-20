<template>
  <div>567890登录{{isLogin}}</div>
  <th-button type="primary" v-on:click="test">testpa:{{testpa}}</th-button>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useGlobalStore } from "@/store/useGlobalStore"
import { storeToRefs } from "pinia";
import { useThDialog } from 'th-ui-plus';

const globalStore = useGlobalStore()
const used=useThDialog({
  component:()=>import('./createDialog2.vue')
})

const { isLogin } = storeToRefs(globalStore) // 把仓库中的数据变成响应式
const testpa=ref('56767887')
const test=()=>{
  globalStore.update(false)
  testpa.value="点击了"
  used.open()
}
defineExpose({test })

</script>