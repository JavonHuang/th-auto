<template>
  <el-row
    v-bind="$attrs"
    :class="cls"
  > 
   <el-input></el-input>
  </el-row>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElRow,ElInput } from 'element-plus'


defineOptions({
  name:'ThRowSet'
})
defineProps()
const ns = useName('row')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>