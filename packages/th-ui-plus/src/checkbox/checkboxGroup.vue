<template>
  <el-checkbox-group
    v-bind="$attrs"
    :class="cls"
  >
    <th-checkbox v-for="item in props.options" :label="item.label" :value="item.value"></th-checkbox>
    <slot></slot>
  </el-checkbox-group>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElCheckboxGroup,ElCheckbox } from 'element-plus'
import { IOptions } from '../common'


defineOptions({
  name:'ThCheckboxGroup'
})
const props=defineProps({
  options:{
    type:Array<IOptions>
  }
})
const ns = useName('checkbox-group')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>