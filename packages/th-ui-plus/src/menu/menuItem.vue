<template>
  <el-menu-item v-bind="$attrs" :class="cls">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name v-bind="slotData || {}"></slot>
    </template>
  </el-menu-item>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElMenuItem } from 'element-plus'

defineOptions({
  name:'ThMenuItem'
})
const ns = useName('row')
const cls = computed(() => [
  ns.base(),
])
</script>