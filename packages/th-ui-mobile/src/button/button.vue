<template>
  <van-button
    v-bind="$attrs"
    :class="cls"
  >    
    <slot></slot>
  </van-button>
</template>

<script setup lang='ts'>
import { computed,defineOptions,defineProps } from 'vue'
import {useName} from "../hook/useName"
import { Button as VanButton } from 'vant'


defineOptions({
  name:'ThmButton'
})
defineProps({
  mytext: {
      type:String,
      required: false
  },
})

import { useAttrs } from 'vue'
const attrs:any = useAttrs()
const ns = useName('button')

const cls = computed(() => [
  ns.base(),
  ns.is(attrs.type??''),
  ns.is(attrs.size??'default'),
])


</script>