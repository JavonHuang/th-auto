<template>
  <th-page-layout>
    <th-query v-model="queryModel" :columns="columns" :inline="true" v-on:onQuery="onQuery">
      <template #num2="{data,formData}">
        <th-input v-model="formData[data.prop]"></th-input>
      </template>
    </th-query>
    <th-query-table 
      ref="queryTableRef" 
      :queryModel="queryModel" 
      :selectable="true" 
      :api="userApi.pageList" 
      :columns="tableColumns"
      :create="create"
      :delete="deleteUser"
      :show-index="true"
      :selection-change="selectionChange"
    >
    </th-query-table>
  </th-page-layout>
</template>

<script setup lang='ts'>
import { ref,getCurrentInstance } from 'vue';
import userApi from "@/api/userApi"
import { IQueryTableColumn, QueryTableInstance } from 'th-ui-plus';
import { QueryColumnsProps, useThDialog } from 'th-ui-plus';

const addDialogRef=ref()
const instance = getCurrentInstance();
console.log(instance)

const used=useThDialog({
  component:()=>import('./dialog/createDialog.vue'),
  beforeClose:()=>{
    // d.value.test()
    return Promise.resolve(true)
  },
  title:'新增',
  ref:addDialogRef,
  events:{
    onQuery:()=>{
      onQuery({})
    }
  }
})

const multipleSelection = ref<any[]>([])
const tableColumns=ref<Array<IQueryTableColumn>>([
  {
    columnType:'link',
    prop:'userName',
    label:'用户名',
    width:180,
  },
  {
    columnType:'text',
    prop:'userId',
    label:'用户Id',
  },
  {
    columnType:'text',
    prop:'password',
    label:'用户密码',
  },
  {
    columnType:'action',
    prop:'userId',
    label:'操作',
    fixed:'right',
    width:200,
    actionList:[
      {
        onClick:({})=>{},
        type:'create'
      },
      {
        onClick:({})=>{},
        type:'edit'
      },
      {
        onClick:({cellValue})=>{
          userApi.deleteUser([cellValue]).then(()=>{
            onQuery(queryModel)
          })
        },
        type:'delete'
      }
    ]
  }
])
const queryModel=ref({
  userName:null,
  createTime:null
})
const queryTableRef=ref<QueryTableInstance>()
const columns=ref<Array<QueryColumnsProps>>([
  {
    component:'ThInput',
    label:"用户名",
    prop:'userName',
    props:{
      clearable:true
    }
  },
  {
    component:'ThDatePicker',
    label:"创建时间",
    prop:'createTime',
    props:{
      clearable:true
    }
  }
])

const onQuery=(e:any)=>{
  queryTableRef.value?.reflesh()
}

const create =async ()=>{
  used.open()
  onQuery(queryModel)
}

const deleteUser = () => {
  userApi.deleteUser(multipleSelection.value).then(()=>{
    onQuery(queryModel)
  })
}

const selectionChange=(e:any[])=>{
  multipleSelection.value =e.map((row)=>row.userId)
}
</script>

<style lang='scss' scoped>

</style>