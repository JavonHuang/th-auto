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
import userApi from "@/api/userApi"

const parentDialogContextKey = inject(dialogContextKey, undefined)
const formRef=ref<ThFormAutoInstance>()

const queryModel=ref({
  userName:'',
  password:'',
})

const emits = defineEmits<{
  (e:'Query',val:any):null
}>()

const columns=ref<Array<FormAutoColumnsProps>>([
  {
    component:'ThInput',
    label:"用户名",
    prop:'userName',
    span:24,
    props:{
      clearable:true
    }
  },
  {
    component:'ThInput',
    label:"用户密码",
    prop:'password',
    span:24,
  },
])

const formAuto=useFormAuto(columns)

const rules=reactive({
  userName: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入用户密码', trigger: 'blur' },
  ],
})

const addUser = () => {
  userApi.addUser([queryModel.value]).then(()=>{
    parentDialogContextKey?.close()
    emits('Query',{})
  })
}

</script>

<style lang='scss' scoped>

</style>