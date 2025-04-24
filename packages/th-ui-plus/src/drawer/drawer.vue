<template>
  <el-drawer
    v-bind="$attrs"
    :class="cls"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name v-bind="slotData || {}"></slot>
    </template>
  </el-drawer>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElDrawer } from 'element-plus'


defineOptions({
  name:'ThDrawer'
})
defineProps()

const ns = useName('drawer')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>