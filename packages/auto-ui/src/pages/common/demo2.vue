<template>
  <th-page-layout>
    <th-form-auto :label-width="120" :show-operation="false" v-model="queryModel" :columns="columns" :rules="rules">
    </th-form-auto>
  </th-page-layout>
  <th-button v-on:click="changeByhook">hook方式改变</th-button>
</template>

<script setup lang='ts'>
import { FormAutoColumnsProps, ThFormAutoInstance } from 'th-ui-plus';
import {useFormAuto} from 'th-ui-plus'

import { ref,reactive } from 'vue';
const formRef=ref<ThFormAutoInstance>()
const queryModel=ref({
  num:'2021-10-29',
  num2:20,
  num3:null,
  age:new Date().getTime(),
  age1:'2021-10-29',
  age2:'2021-10-29',
})
const disabled=ref(false)
const columns=ref<Array<FormAutoColumnsProps>>([
  {
    component:'ThInput',
    label:"数量",
    prop:'num',
    span:12,
    props:{
     disabled:disabled
    },
    event:{
      change:(e:any)=>{
        console.log('ThInput',e)
        rules.num[0].required=false
        disabled.value=true
        formAuto.setColumnProps('num3','disabled',true)
        console.log(queryModel)
      },
    }
  },
  {
    component:'ThInput',
    label:"插槽",
    prop:'num2',
    span:12,
  },
  {
    component:'ThSelect',
    label:"数量数量数量量",
    prop:'num3',
    span:6,
    props:{
      options:[{
        value:"676776",
        label:"那么"
      }]
    },
    event:{
      change:(e:any)=>{
        console.log('ThSelect',e)
      },
      focus:()=>{}
    }
  },
  {
    component:'ThDatePicker',
    label:"出生日期",
    prop:'age',
    span:6,
    event:{
      change:(e:any)=>{
        console.log('ThDatePicker',e)
      },
      visibleChange:(e)=>{
        console.log('ThDatePicker',e)
      }
    }
  },
  {
    component:'ThDatePicker',
    label:"毕业时间",
    prop:'age1',
    span:12,
  },
  {
    component:'ThDatePicker',
    label:"工作时间",
    prop:'age2',
    span:6,
    props:{
      placeholder:"请选择工作时间",
    }
  }
])

const formAuto=useFormAuto(columns)

const rules=reactive({
  num: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
  ],
})

const changeByhook=()=>{
  formAuto.setColumn('num','label','测试label')
}
</script>

<style lang='scss' scoped>

</style>