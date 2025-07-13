<template>
  <th-form :model="propsValue">
    <th-form-item label="类型">
      <th-select v-on:change="(e)=>handleChange('type',e)" v-model="propsValue.type" :options="optionsType">
      </th-select>
    </th-form-item>
    <th-form-item label="类型">
      <th-select v-on:change="(e)=>handleChange('size',e)" v-model="propsValue.size" :options="optionsSize">
      </th-select>
    </th-form-item>
    <th-form-item label="素按钮">
      <th-radio-group v-on:change="(e)=>handleChange('plain',e)" v-model="propsValue.plain">
        <th-radio :value="true">是</th-radio>
        <th-radio :value="false">否</th-radio>
      </th-radio-group>
    </th-form-item>
    <th-form-item label="文字按钮">
      <th-radio-group v-on:change="(e)=>handleChange('text',e)" v-model="propsValue.text">
        <th-radio :value="true">是</th-radio>
        <th-radio :value="false">否</th-radio>
      </th-radio-group>
    </th-form-item>
    <th-form-item label="文字按钮背景颜色">
      <th-radio-group v-on:change="(e)=>handleChange('bg',e)" v-model="propsValue.bg">
        <th-radio :value="true">是</th-radio>
        <th-radio :value="false">否</th-radio>
      </th-radio-group>
    </th-form-item>
  </th-form>
</template>

<script setup lang='ts'>
import {optionsType,optionsSize} from './config'
import { ref, watch,onMounted } from 'vue'
import _ from 'lodash'
interface IModelValue {
  type?: string; // Changed from mytype to type
  size?:string
  plain?:boolean
  text?:boolean
  bg?:boolean
}
 
interface IProps {
  modelValue: IModelValue;
}
 
const props = withDefaults(defineProps<IProps>(), {
  modelValue: () => ({
    type: 'default',
    size:'default',
    plain:false,
    text:false,
    bg:false,
  })
});

const propsValue = ref<IModelValue>({
  type:'default',
  size:'default' ,
  plain:false,
  text:false,
  bg:false,
})

console.log(props)
const emit = defineEmits<{
(e:'update:modelValue',value: typeof props.modelValue):void,
}>()

const handleChange = (key: keyof typeof props.modelValue, value: any) => {
  emit("update:modelValue", {
     ...propsValue.value, 
  });
};

onMounted(()=>{
    emit("update:modelValue", {
     ...propsValue.value, 
    ...props.modelValue,
  });
})


// watch(propsValue,()=>{
//   if(propsValue.value!=props.modelValue){
//     emit('update:modelValue', propsValue) 
//   }
// },{
//   deep:true
// })

watch(props.modelValue,()=>{
  propsValue.value=_.cloneDeep(props.modelValue)
},{
  deep:true
})


</script>

<style lang='scss' scoped>

</style>