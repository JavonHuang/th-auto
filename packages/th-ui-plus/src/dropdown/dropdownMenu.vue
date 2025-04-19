<template>
  <el-dropdown-menu
  :class="cls"
  >
    <slot></slot>
  </el-dropdown-menu>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElDropdownMenu} from 'element-plus'


defineOptions({
  name:'ThDropdownMenu'
})
defineProps()
const ns = useName('dropdown-menu')
const cls = computed(() => [
  ns.base(),
])
</script>