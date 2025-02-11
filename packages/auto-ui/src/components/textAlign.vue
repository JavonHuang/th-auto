<template>
  <th-select :options="options" controls-position="right" v-model="textAlign"></th-select>
</template>

<script setup lang='ts'>
import {defineOptions,ref,watch } from 'vue'
const textAlign = ref<any>(null)
const options=[{
  label:'left',
  value:'left'
},{
  label:'right',
  value:'right'
},{
  label:'center',
  value:'center'
},{
  label:'justify',
  value:'justify'
},{
  label:'start',
  value:'start'
},{
  label:'end',
  value:'end'
}]
defineOptions({
  name:'AutoTextAlign'
})

const props = withDefaults(defineProps<{
  modelValue?: any,
}>(), {
  modelValue: {},
})

watch(() => textAlign.value, (newVal) => {
  emits("update:modelValue", newVal?`${newVal}px`:null)
}, { deep: true })

watch(() => props.modelValue, (newVal) => {
  textAlign.value = newVal
}, { deep: true })

const emits = defineEmits<{
  (e: 'update:modelValue', val: any): void
}>()
</script>

<style lang='scss' scoped>

</style>