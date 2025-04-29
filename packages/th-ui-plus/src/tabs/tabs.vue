<template>
  <el-tabs
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
    <th-tab-pane v-for="item in props.options" :label="item.label" :name="item.value">
      <slot :name="item.value"></slot>
    </th-tab-pane>
  </el-tabs>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElTabs } from 'element-plus'

interface Ioptions{label:string,value:string | number | boolean | Record<string, any>}
defineOptions({
  name:'ThTabs'
})

const props=defineProps({
  options:{
    type:Array<Ioptions>
  }
})

const ns = useName('tabs')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>