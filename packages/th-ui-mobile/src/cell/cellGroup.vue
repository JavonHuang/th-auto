<template>
  <van-cell-group
    v-bind="$attrs"
    :class="cls"
  >    
    <slot></slot>
  </van-cell-group>
</template>

<script setup lang='ts'>
import { computed,defineOptions } from 'vue'
import {useName} from "../hook/useName"
import { CellGroup as VanCellGroup } from 'vant'


defineOptions({
  name:'ThmCellGroup'
})

import { useAttrs } from 'vue'
const attrs:any = useAttrs()
const ns = useName('cell-group')

const cls = computed(() => [
  ns.base(),
  ns.is(attrs.type??''),
  ns.is(attrs.size??'default'),
])


</script>