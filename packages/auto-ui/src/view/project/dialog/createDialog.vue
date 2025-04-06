<template>
  <th-form-auto 
    ref="formRef" 
    :label-width="120" 
    :show-operation="true" 
    v-model="queryModel" 
    :columns="columns" 
    :rules="rules"
    v-on:onSubmit="addUser"
    >
  </th-form-auto>
</template>

<script setup lang='ts'>
import { dialogContextKey, FormAutoColumnsProps, ThFormAutoInstance } from 'th-ui-plus';
import {useFormAuto} from 'th-ui-plus'
import { ref,reactive ,inject } from 'vue';
import projectApi from "@/api/projectApi"

const parentDialogContextKey = inject(dialogContextKey, undefined)
const formRef=ref<ThFormAutoInstance>()

const queryModel=ref({
  name:'',
})

const columns=ref<Array<FormAutoColumnsProps>>([
  {
    component:'ThInput',
    label:"项目名",
    prop:'name',
    span:24,
  },
])

const formAuto=useFormAuto(columns)

const rules=reactive({
  name: [
    { required: true, message: '请输入项目名', trigger: 'blur' },
  ],
})

const addUser = () => {
  projectApi.addProject([queryModel.value]).then(()=>{
    parentDialogContextKey?.close()
    parentDialogContextKey?.callback!()
  })
}

</script>

<style lang='scss' scoped>

</style>