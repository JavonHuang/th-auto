<template>
  <th-checkbox v-model="checkbox"></th-checkbox>
</template>

<script setup lang='ts'>
import {defineOptions,ref,watch } from 'vue'
const checkbox = ref<any>(false)

defineOptions({
  name:'AutoCheckbox'
})

const props = withDefaults(defineProps<{
  modelValue?: any,
}>(), {
  modelValue: false,
})

watch(() => checkbox.value, (newVal) => {
  emits("update:modelValue", newVal)
}, { deep: true })

watch(() => props.modelValue, (newVal) => {
  if(newVal!==checkbox.value){
    checkbox.value = newVal
  }
}, { deep: true ,immediate: true})

const emits = defineEmits<{
  (e: 'update:modelValue', val: any): void
}>()
</script>

<style lang='scss' scoped>

</style>