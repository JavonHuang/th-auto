<template>
  <th-form-auto 
    ref="formRef" 
    :label-width="120" 
    :show-operation="true" 
    v-model="modelValue" 
    :columns="columns" 
    :rules="rules"
    v-on:onSubmit="addUser"
    >
  </th-form-auto>
</template>

<script setup lang='ts'>
import { dialogContextKey, FormAutoColumnsProps, ThFormAutoInstance } from 'th-ui-plus';
import {useFormAuto} from 'th-ui-plus'
import { ref,reactive ,inject, onMounted } from 'vue';
import projectApi from "@/api/projectApi"

const parentDialogContextKey = inject(dialogContextKey, undefined)
const formRef=ref<ThFormAutoInstance>()

const props = defineProps({
  params: {
    type: Object,
    default: () => ({})
  },
})

const modelValue=ref({
  name:'',
})

const oldValue=ref()

const columns=ref<Array<FormAutoColumnsProps>>([
  {
    component:'ThInput',
    label:"项目名",
    prop:'name',
    span:24,
    props:{
      clearable:true
    }
  },
])

const formAuto=useFormAuto(columns)

const rules=reactive({
  name: [
    { required: true, message: '请输入项目名', trigger: 'blur' },
  ],
})

onMounted(()=>{
  if(props.params.id){
    projectApi.getDetail({id:props.params.id}).then(res=>{
      modelValue.value.name = res.data.name
      oldValue.value = res.data
    })
  }
})

const addUser = () => {
  if(props.params.id){
    projectApi.updateProject({...oldValue.value,...modelValue.value}).then(()=>{
      parentDialogContextKey?.close()
      parentDialogContextKey?.callback!()
    })
  }else{
    projectApi.addProject([modelValue.value]).then(()=>{
      parentDialogContextKey?.close()
      parentDialogContextKey?.callback!()
    })
  }
}

</script>

<style lang='scss' scoped>

</style>