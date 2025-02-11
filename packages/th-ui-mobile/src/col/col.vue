<template>
  <van-col v-bind="$attrs" :class="cls">
    <slot></slot>
  </van-col>
</template>

<script setup lang='ts'>
import { computed,defineOptions } from 'vue'
import {useName} from "../hook/useName"
import { Col as VanCol } from 'vant'


defineOptions({
  name:'ThmCol'
})

import { useAttrs } from 'vue'
const attrs:any = useAttrs()
const ns = useName('col')

const cls = computed(() => [
  ns.base(),
  ns.is(attrs.type??''),
  ns.is(attrs.size??'default'),
])


</script>