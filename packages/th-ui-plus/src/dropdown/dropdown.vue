<template>
  <el-dropdown
  :class="cls"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name v-bind="slotData || {}"></slot>
    </template>
  </el-dropdown>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElDropdown} from 'element-plus'


defineOptions({
  name:'ThDropdown'
})
defineProps()
const ns = useName('dropdown')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>