<template>
  <th-form-auto 
    ref="formRef" 
    :label-width="120" 
    :show-operation="true" 
    v-model="modelValue" 
    :columns="columns" 
    :rules="rules"
    v-on:onSubmit="addCatalog"
    >
  </th-form-auto>
</template>

<script setup lang='ts'>
import { dialogContextKey, FormAutoColumnsProps, ThFormAutoInstance } from 'th-ui-plus';
import {useFormAuto} from 'th-ui-plus'
import { ref,reactive ,inject, onMounted } from 'vue';
import catalogApi from "@/api/catalogApi"

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
  {
    component:'ThRadioGroup',
    label:"类型",
    prop:'type',
    span:24,
    props:{
      clearable:true,
      options:[
        {label:'目录',value:'1'},
        {label:'文件',value:'0'},
      ]
    }
  },
])

const formAuto=useFormAuto(columns)

const rules=reactive({
  name: [
    { required: true, message: '请输入名称', trigger: 'blur' },
  ],
  type:{ required: true, message: '请输入名称', trigger: 'blur' },
})

onMounted(()=>{
  if(props.params.id){
    // catalogApi.getDetail({id:props.params.id}).then(res=>{
    //   modelValue.value.name = res.data.name
    //   oldValue.value = res.data
    // })
  }
})

const addCatalog = () => {
  if(props.params.oparate==='edit'){
    // catalogApi.updateProject({...oldValue.value,...modelValue.value}).then(()=>{
    //   parentDialogContextKey?.close()
    //   parentDialogContextKey?.callback!()
    // })
  }else{
    catalogApi.addCatalog([{...modelValue.value,parentId:props.params.id,projectId:props.params.projectId}]).then(()=>{
      parentDialogContextKey?.close()
      parentDialogContextKey?.callback!()
    })
  }
}

</script>

<style lang='scss' scoped>

</style>