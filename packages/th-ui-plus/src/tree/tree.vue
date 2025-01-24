<template>
  <el-tree
    v-bind="$attrs"
    :class="cls"
    ref="treeRef"
  >
  <template v-for="(_, name) in $slots" #[name]="slotData">
    <slot :name v-bind="slotData || {}"></slot>
  </template>
    <!-- <slot></slot> -->
  </el-tree>
</template>

<script setup lang='ts'>
import {defineOptions,computed, ref } from 'vue'
import {useName} from "../hook/useName"
import { ElTree } from 'element-plus'


defineOptions({
  name:'ThTree'
})
defineProps()

const ns = useName('tree')
const cls = computed(() => [
  ns.base(),
])
const treeRef = ref<InstanceType<typeof ElTree>>()
defineExpose({
  getRef:()=>treeRef.value
});
</script>

<style lang='scss' scoped>

</style>