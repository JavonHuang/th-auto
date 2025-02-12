<template>
  <th-input-number controls-position="right" v-model="size"></th-input-number>
  <th-select :options="options" v-model="type"></th-select>
  <th-color-picker v-model="color"></th-color-picker>
</template>

<script setup lang='ts'>
import {defineOptions,ref,watch } from 'vue'
const options=[{
  label:'solid',
  value:'solid'
}]
const size = ref<any>(null)
const type = ref<any>(null)
const color = ref<any>(null)

defineOptions({
  name:'AutoBorder'
})

const props = withDefaults(defineProps<{
  modelValue?: any,
}>(), {
  modelValue: null,
})

watch([size,type,color],()=>{
  let sizeNum:number|string =0
  let typeStr:string|null =null
  let colorStr:string|null =null
  if(size.value){
    sizeNum =`${size.value}px`
  }
  if(type.value){
    typeStr =type.value
  }
  if(color.value){
    colorStr  =color.value
  }
  if(!sizeNum || !typeStr || !colorStr){
    emits("update:modelValue", null)
  }else{
    emits("update:modelValue", `${sizeNum} ${typeStr} ${colorStr}`)
  }
})


watch(() => props.modelValue, (newVal) => {
  if(newVal){
    const list =newVal.split(' ')
    size.value =Number(list[0].replace('px',''))
    const sizeNum = Number(list[0].replace('px',''))
    if( sizeNum !==size.value ){
      size.value  = sizeNum
    }
    const typeStr = list[1]
    if( typeStr !==type.value ){
      type.value  = typeStr
    }
    const colorStr = list[2]
    if( colorStr !==color.value ){
      color.value  = colorStr
    }
  }else{
    size.value  = null
    type.value  = null
    color.value  = null
  }
}, { deep: true ,immediate: true})

const emits = defineEmits<{
  (e: 'update:modelValue', val: any): void
}>()
</script>

<style lang='scss' scoped>

</style>