<template>
  <van-row v-bind="$attrs" :class="cls">
    <slot></slot>
  </van-row>
</template>

<script setup lang='ts'>
import { computed,defineOptions } from 'vue'
import {useName} from "../hook/useName"
import { Row as VanRow } from 'vant'


defineOptions({
  name:'ThmRow'
})

import { useAttrs } from 'vue'
const attrs:any = useAttrs()
const ns = useName('row')

const cls = computed(() => [
  ns.base(),
  ns.is(attrs.type??''),
  ns.is(attrs.size??'default'),
])


</script>