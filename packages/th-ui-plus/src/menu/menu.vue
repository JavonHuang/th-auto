<template>
  <el-menu v-bind="$attrs" :class="cls">
    <slot></slot>
  </el-menu>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import { ElMenu } from 'element-plus'
import {useName} from "../hook/useName"

defineOptions({
  name:'ThMenu'
})
defineProps()

const ns = useName('row')
const cls = computed(() => [
  ns.base(),
])
</script>