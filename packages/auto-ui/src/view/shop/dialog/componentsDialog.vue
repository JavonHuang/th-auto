<template>
  <th-form-auto 
    ref="formRef" 
    :label-width="140" 
    :show-operation="true" 
    v-model="modelValue" 
    :columns="columns" 
    :rules="rules"
    v-on:onSubmit="addShopComponent"
    >
  </th-form-auto>
</template>

<script setup lang='ts'>
import { dialogContextKey, FormAutoColumnsProps, ThFormAutoInstance, useFormAuto } from 'th-ui-plus';
import { ref,reactive ,inject, onMounted } from 'vue';
import shopApi from "@/api/shopApi"

const parentDialogContextKey = inject(dialogContextKey, undefined)
const formRef=ref<ThFormAutoInstance>()
const shopCategoryList = ref([])
const modelValue=ref({
  categoryId:null,
  name:null,
  code:null,
  isModel:0,
})
const oldValue=ref()
const emits = defineEmits<{
  (e:'Query',val:any):null
}>()
const columns=ref<Array<FormAutoColumnsProps>>([
  {
    component:'ThSelect',
    label:"类别名称",
    prop:'categoryId',
    span:24,
    props:{
      clearable:true,
      options:[]
    }
  },
  {
    component:'ThInput',
    label:"组件名称",
    prop:'name',
    span:24,
    props:{
      clearable:true,
    }
  },
  {
    component:'ThInput',
    label:"组件代码",
    prop:'code',
    span:24,
    props:{
      clearable:true,
    }
  },
  {
    component:'ThCheckbox',
    label:"是否可以插入节点",
    prop:'hasSlot',
    span:24,
    props:{
      trueValue:1,
      falseValue:0
    }
  },
  {
    component:'ThCheckbox',
    label:"是否表单类型",
    prop:'isModel',
    span:24,
    props:{
      trueValue:1,
      falseValue:0
    }
  },
])
const formAuto=useFormAuto(columns)
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
  shopApi.shopCategoryList({}).then(res=>{
    shopCategoryList.value = res.data.map((item:any) => ({
        label: item.categoryName,
        value: item.categoryId
    }))
    formAuto.setColumnProps('categoryId','options',shopCategoryList.value)
  })
  if(props.params.componentId){
    shopApi.getDetailShopComponent({componentId:props.params.componentId}).then(res=>{
      modelValue.value = {...res.data}
      oldValue.value = {...res.data}
    })
  }
})

const addShopComponent = () => {
  if(props.params.componentId){
    shopApi.updateShopComponent({...oldValue.value,...modelValue.value}).then(()=>{
      parentDialogContextKey?.close()
      emits('Query',{})
    })
  }else{
    shopApi.addShopComponent([modelValue.value]).then(()=>{
      parentDialogContextKey?.close()
      emits('Query',{})
    })
  }
}

</script>