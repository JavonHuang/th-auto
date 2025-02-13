<template>
  <el-dialog
    v-bind="$attrs"
    :class="cls"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name v-bind="slotData || {}"></slot>
    </template>
  </el-dialog>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElDialog } from 'element-plus'


defineOptions({
  name:'ThDialog'
})
defineProps()

const ns = useName('dialog')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>