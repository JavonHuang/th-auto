<template>
  <el-cascader
    v-bind="$attrs"
    :class="cls"
  >    
    <slot></slot>
  </el-cascader>
</template>

<script setup lang='ts'>
import { computed,defineOptions,defineProps } from 'vue'
import {useName} from "../hook/useName"
import { ElCascader} from 'element-plus'


defineOptions({
  name:'ThCascader'
})
defineProps()
const ns = useName('cascader')

const cls = computed(() => [
  ns.base(),
])


</script>