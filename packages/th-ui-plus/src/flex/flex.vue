<template>
  <div v-bind="$attrs" :class="cls">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"


defineOptions({
  name:'ThFlex'
})
defineProps()

const ns = useName('flex')
const cls = computed(() => [
  ns.base(),
])
</script>