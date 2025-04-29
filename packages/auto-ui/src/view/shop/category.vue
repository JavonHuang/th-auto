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
      :api="shopApi.queryShopCategory" 
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
import shopApi from "@/api/shopApi"
import { IQueryTableColumn, QueryTableInstance } from 'th-ui-plus';
import { QueryColumnsProps, useThDialog } from 'th-ui-plus';

const addDialogRef=ref()
const title =ref('新增')

const categoryDialog=useThDialog({
  component:()=>import('./dialog/categoryDialog.vue'),
  beforeClose:()=>{
    // d.value.test()
    return Promise.resolve(true)
  },
  title:title,
  ref:addDialogRef,
  callback:()=>{
    onQuery({})
  }
})

const multipleSelection = ref<any[]>([])
const tableColumns=ref<Array<IQueryTableColumn>>([
  {
    columnType:'text',
    prop:'categoryId',
    label:'类别名称ID',
  },
  {
    columnType:'text',
    prop:'categoryName',
    label:'类别名称',
  },
  {
    columnType:'dateTime',
    prop:'createTime',
    label:'创建时间',
  },
  {
    columnType:'dateTime',
    prop:'updateTime',
    label:'更新时间',
  },
  {
    columnType:'action',
    prop:'categoryId',
    label:'操作',
    fixed:'right',
    width:200,
    actionList:[
      {
        onClick:({cellValue})=>{
          title.value = '编辑'
          categoryDialog.open({categoryId:cellValue})
        },
        type:'edit'
      },
      {
        onClick:({cellValue})=>{
          shopApi.delShopCategory([cellValue]).then(()=>{
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
    label:"类别名称",
    prop:'categoryName',
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
  categoryDialog.open()
  onQuery(queryModel)
}

const deleteUser = () => {
  shopApi.delShopCategory(multipleSelection.value).then(()=>{
    onQuery(queryModel)
  })
}

const selectionChange=(e:any[])=>{
  multipleSelection.value =e.map((row)=>row.userId)
}
</script>