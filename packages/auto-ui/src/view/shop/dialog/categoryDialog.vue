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
import { ref,reactive ,inject, onMounted } from 'vue';
import shopApi from "@/api/shopApi"

const parentDialogContextKey = inject(dialogContextKey, undefined)
const formRef=ref<ThFormAutoInstance>()
  const emits = defineEmits<{
  (e:'Query',val:any):null
}>()
const modelValue=ref({
  categoryName:'',
})
const oldValue=ref()

const columns=ref<Array<FormAutoColumnsProps>>([
  {
    component:'ThInput',
    label:"类别名称",
    prop:'categoryName',
    span:24,
    props:{
      clearable:true
    }
  },
])

const rules=reactive({
  userName: [
    { required: true, message: '请输入类别名称', trigger: 'blur' },
  ],
})

const props = defineProps({
  params: {
    type: Object,
    default: () => ({})
  },
})

onMounted(()=>{
  if(props.params.categoryId){
    shopApi.getDetailShopCategory({categoryId:props.params.categoryId}).then(res=>{
      modelValue.value.categoryName = res.data.categoryName
      oldValue.value = res.data
    })
  }
})

const addUser = () => {
  if(props.params.categoryId){
    shopApi.updateShopCategory({...oldValue.value,...modelValue.value}).then(()=>{
      parentDialogContextKey?.close()
      emits('Query',{})
    })
  }else{
    shopApi.addShopCategory([modelValue.value]).then(()=>{
      parentDialogContextKey?.close()
      emits('Query',{})
    })
  }
}

</script>
