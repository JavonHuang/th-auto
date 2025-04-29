<template>
  <th-color-picker size="small" controls-position="right" v-model="color"></th-color-picker>
</template>

<script setup lang='ts'>
import {defineOptions,ref,watch } from 'vue'
const color = ref<any>(null)

defineOptions({
  name:'AutoColorPicker'
})

const props = withDefaults(defineProps<{
  modelValue?: any,
}>(), {
  modelValue: null,
})

watch(() => color.value, (newVal) => {
  emits("update:modelValue", newVal?`${newVal}`:null)
}, { deep: true })

watch(() => props.modelValue, (newVal) => {
  color.value = newVal
}, { deep: true ,immediate: true})

const emits = defineEmits<{
  (e: 'update:modelValue', val: any): void
}>()
</script>

<style lang='scss' scoped>

</style>