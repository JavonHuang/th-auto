<template>
  <el-checkbox-group
    v-bind="$attrs"
    :class="cls"
  >
    <el-checkbox v-for="item in props.options" :label="item.label" :value="item.value"></el-checkbox>
    <slot></slot>
  </el-checkbox-group>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElCheckboxGroup,ElCheckbox } from 'element-plus'

interface Ioptions{label:string,value:string | number | boolean | Record<string, any>}

defineOptions({
  name:'ThCheckboxGroup'
})
const props=defineProps({
  options:{
    type:Array<Ioptions>
  }
})
const ns = useName('checkbox-group')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>