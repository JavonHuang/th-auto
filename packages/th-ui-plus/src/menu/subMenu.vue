<template>
  <el-sub-menu v-bind="$attrs" :class="cls" :index="props.index">
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name v-bind="slotData || {}"></slot>
    </template>
  </el-sub-menu>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElSubMenu } from 'element-plus'

defineOptions({
  name:'ThSubMenu'
})
const ns = useName('sub-menu')
const cls = computed(() => [
  ns.base(),
])
const props = withDefaults(
  defineProps<{
    index: string
  }>(),{}
);
</script>