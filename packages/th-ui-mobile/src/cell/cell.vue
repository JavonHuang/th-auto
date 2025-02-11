<template>
  <van-cell v-bind="$attrs" :class="cls"></van-cell>
</template>

<script setup lang='ts'>
import { computed,defineOptions } from 'vue'
import {useName} from "../hook/useName"
import { Cell as VanCell } from 'vant'


defineOptions({
  name:'ThmCell'
})

import { useAttrs } from 'vue'
const attrs:any = useAttrs()
const ns = useName('cell')

const cls = computed(() => [
  ns.base(),
  ns.is(attrs.type??''),
  ns.is(attrs.size??'default'),
])


</script>