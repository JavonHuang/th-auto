<template>
  <el-tab-pane
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-tab-pane>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import {ElTabPane} from 'element-plus'

defineOptions({
  name:'ThTabPane'
})

const ns = useName('tab-pane')
const cls = computed(() => [
  ns.base(),
])
</script>