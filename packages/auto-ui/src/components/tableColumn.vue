<template>
  <th-tree ref="treeRef" :data="columns" :props="defaultProps" node-key="id"></th-tree>
</template>

<script setup lang='ts'>
import {defineOptions,watch,ref } from 'vue'
const defaultProps = {
  children: 'children',
  label: 'label',
}
defineOptions({
  name:'AutoTableColumn'
})

const columns = ref<Array<any>>([])

const props = withDefaults(defineProps<{
  modelValue?: any,
}>(), {
  modelValue: null,
})

watch(() => props.modelValue, (newVal) => {
  if(newVal !== columns.value){
    columns.value = newVal
  }
}, { deep: true ,immediate: true})


</script>

<style lang='scss' scoped>

</style>