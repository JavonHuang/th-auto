<template>
  <th-form :model="propsValue">
    <th-form-item label="类型">
      <th-input v-model="propsValue.context"></th-input>
    </th-form-item>
    <th-form-item label="类型">
      <th-select v-model="propsValue.type" :options="optionsType">
      </th-select>
    </th-form-item>
    <th-form-item label="类型">
      <th-select v-model="propsValue.size" :options="optionsSize">
      </th-select>
    </th-form-item>
    <th-form-item label="素按钮">
      <th-radio-group v-model="propsValue.plain">
        <th-radio :value="true">是</th-radio>
        <th-radio :value="false">否</th-radio>
      </th-radio-group>
    </th-form-item>
    <th-form-item label="文字按钮">
      <th-radio-group v-model="propsValue.text">
        <th-radio :value="true">是</th-radio>
        <th-radio :value="false">否</th-radio>
      </th-radio-group>
    </th-form-item>
    <th-form-item label="文字按钮背景颜色">
      <th-radio-group v-model="propsValue.bg">
        <th-radio :value="true">是</th-radio>
        <th-radio :value="false">否</th-radio>
      </th-radio-group>
    </th-form-item>
    <th-form-item label="链接按钮">
      <th-radio-group v-model="propsValue.link">
        <th-radio :value="true">是</th-radio>
        <th-radio :value="false">否</th-radio>
      </th-radio-group>
    </th-form-item>
    <th-form-item label="圆角按钮">
      <th-radio-group v-model="propsValue.round">
        <th-radio :value="true">是</th-radio>
        <th-radio :value="false">否</th-radio>
      </th-radio-group>
    </th-form-item>
    <th-form-item label="圆形按钮">
      <th-radio-group v-model="propsValue.circle">
        <th-radio :value="true">是</th-radio>
        <th-radio :value="false">否</th-radio>
      </th-radio-group>
    </th-form-item>
    <th-form-item label="加载中状态">
      <th-radio-group v-model="propsValue.loading">
        <th-radio :value="true">是</th-radio>
        <th-radio :value="false">否</th-radio>
      </th-radio-group>
    </th-form-item>
     <th-form-item label="加载中状态图标组件">
      <th-input v-model="propsValue.loadingIcon">
      </th-input>
    </th-form-item>
  </th-form>
</template>

<script setup lang='ts'>
import {optionsType,optionsSize} from './config'
import { ref, watch,onMounted } from 'vue'
import _ from 'lodash'
interface IModelValue {
  context?: string 
  type?: string // Changed from mytype to type
  size?:string
  plain?:boolean
  text?:boolean
  bg?:boolean
  link?:boolean
  round?:boolean
  circle?:boolean
  loading?:boolean
  loadingIcon?: string
}
 
interface IProps {
  modelValue: IModelValue;
}
 
const props = withDefaults(defineProps<IProps>(), {
  modelValue: () => ({
    context:'按钮',
    type: 'default',
    size:'default',
    plain:false,
    text:false,
    bg:false,
    link:false,
    round:false,
    circle:false,
    loading:false,
    loadingIcon:'Loading'
  })
});

const propsValue = ref<IModelValue>({
    context:'按钮',
    type: 'default',
    size:'default',
    plain:false,
    text:false,
    bg:false,
    link:false,
    round:false,
    circle:false,
    loading:false,
    loadingIcon:'Loading'
})

console.log(props)
const emit = defineEmits<{
(e:'update:modelValue',value: typeof props.modelValue):void,
}>()


onMounted(()=>{
  propsValue.value={
    ...propsValue.value, 
    ...props.modelValue,
  }
  emit("update:modelValue", {
     ...propsValue.value, 
  });
})


watch(propsValue,()=>{
  if(propsValue.value!=props.modelValue){
    emit("update:modelValue", {
      ...propsValue.value, 
    });
  }
},{
  deep:true
})

watch(props.modelValue,()=>{
  propsValue.value=_.cloneDeep(props.modelValue)
},{
  deep:true
})


</script>

<style lang='scss' scoped>

</style>