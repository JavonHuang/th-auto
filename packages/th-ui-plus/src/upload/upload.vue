<template>
  <el-upload
    v-bind="$attrs"
    :class="cls"
  ></el-upload>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElUpload } from 'element-plus'


defineOptions({
  name:'ThUpload'
})
defineProps()

const ns = useName('upload')
const cls = computed(() => [
  ns.base(),
])
</script>
