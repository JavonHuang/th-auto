<template>
  <el-radio-group
    v-bind="$attrs"
   :class="cls"
  >
    <th-radio v-for="item in props.options" :value="item.value">{{ item.label }}</th-radio>
    <slot></slot>
  </el-radio-group>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElRadioGroup } from 'element-plus'
import { IOptions } from '../common'


defineOptions({
  name:'ThRadioGroup'
})

const props=defineProps({
  options:{
    type:Array<IOptions>
  }
})

const ns = useName('radio-group')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>