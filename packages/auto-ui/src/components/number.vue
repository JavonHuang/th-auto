<template>
  <th-input-number controls-position="right" v-model="number"></th-input-number>
</template>

<script setup lang='ts'>
import {defineOptions,ref,watch } from 'vue'
const number = ref<any>(null)

defineOptions({
  name:'AutoNumber'
})

const props = withDefaults(defineProps<{
  modelValue?: any,
}>(), {
  modelValue: {},
})

watch(() => number.value, (newVal) => {
  emits("update:modelValue", newVal?`${newVal}px`:null)
}, { deep: true })

watch(() => props.modelValue, (newVal) => {
  if(newVal){
    const num =Number(newVal.replace('px',''))
    if(num !==number.value){
      number.value = num
    }
  }else{
    number.value=null
  }
}, { deep: true })

const emits = defineEmits<{
  (e: 'update:modelValue', val: any): void
}>()
</script>

<style lang='scss' scoped>

</style>