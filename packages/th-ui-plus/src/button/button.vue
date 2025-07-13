<template>
  <el-button 
    v-bind="$attrs"
    :class="cls"
  > 
  {{context}}
    <slot></slot>
  </el-button>
</template>

<script setup lang='ts'>
import { computed,defineOptions,defineProps } from 'vue'
import {useName} from "../hook/useName"
import { ElButton } from 'element-plus'


defineOptions({
  name:'ThButton'
})
defineProps({
  context: {
      type:String,
      required: false
  },
})

import { useAttrs } from 'vue'
const attrs:any = useAttrs()
const ns = useName('button')

const cls = computed(() => [
  ns.base(),
  ns.is(`type-${attrs.type}`),
  ns.is(attrs.size??''),
])

</script>