<template>
  <th-input-number controls-position="right" v-model="numberTop"></th-input-number>
  <th-input-number controls-position="right" v-model="numberRight"></th-input-number>
  <th-input-number controls-position="right" v-model="numberBottom"></th-input-number>
  <th-input-number controls-position="right" v-model="numberLeft"></th-input-number>
</template>

<script setup lang='ts'>
import {defineOptions,ref,watch } from 'vue'
const numberTop = ref<any>(null)
const numberRight = ref<any>(null)
const numberBottom = ref<any>(null)
const numberLeft = ref<any>(null)

defineOptions({
  name:'AutoBoxSize'
})

const props = withDefaults(defineProps<{
  modelValue?: any,
}>(), {
  modelValue: {},
})

watch([numberTop,numberRight,numberBottom,numberLeft],()=>{
  let top:number|string =0
  let right:number|string =0
  let bottom:number|string =0
  let left:number|string=0
  if(numberTop.value){
    top =`${numberTop.value}px`
  }
  if(numberRight.value){
    right =`${numberRight.value}px`
  }
  if(numberBottom.value){
    bottom  =`${numberBottom.value}px`
  }
  if(numberLeft.value){
    left =`${numberLeft.value}px`
  }
  let result = null
  if(!top && !right && !bottom && !left){
    result = null
  }else{
    result = `${top} ${right} ${bottom} ${left}`
  }
  if(result!=props.modelValue){
    emits("update:modelValue", result)
  }
})


watch(() => props.modelValue, (newVal) => {
  if(newVal){
    const list =newVal.split(' ')
    numberTop.value =Number(list[0].replace('px',''))
    const top = Number(list[0].replace('px',''))
    if( top !==numberTop.value ){
      numberTop.value  = top
    }
    const right = Number(list[1].replace('px',''))
    if( right !==numberRight.value ){
      numberRight.value  = right
    }
    const bottom = Number(list[2].replace('px',''))
    if( bottom !==numberBottom.value ){
      numberBottom.value  = bottom
    }
    const left = Number(list[3].replace('px',''))
    if( left !==numberLeft.value ){
      numberLeft.value  = left
    }
  }else{
    numberTop.value  = null
    numberRight.value  = null
    numberBottom.value  = null
    numberLeft.value  = null
  }
}, { deep: true })

const emits = defineEmits<{
  (e: 'update:modelValue', val: any): void
}>()
</script>

<style lang='scss' scoped>

</style>