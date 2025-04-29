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
      :api="shopApi.queryShopComponent" 
      :columns="tableColumns"
      :create="create"
      :delete="deleteUser"
      :show-index="true"
      :selection-change="selectionChange"
    >
     <template #isModel="scope">{{ scope.row.isModel?'是':'否' }}</template>
     <template #hasSlot="scope">{{ scope.row.hasSlot?'是':'否' }}</template>
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

const componentsDialog=useThDialog({
  component:()=>import('./dialog/componentsDialog.vue'),
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
    prop:'categoryName',
    label:'类别名称',
  },
  {
    columnType:'text',
    prop:'name',
    label:'组件名称',
  },
  {
    columnType:'text',
    prop:'code',
    label:'组件代码',
  },
  {
    columnType:'text',
    prop:'props',
    label:'组件属性',
  },
  {
    columnType:'text',
    prop:'isModel',
    label:'是否表单组件',
    isSlot:true,
  },
  {
    columnType:'text',
    prop:'hasSlot',
    label:'是否可以插入节点',
    isSlot:true,
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
    prop:'componentId',
    label:'操作',
    fixed:'right',
    width:200,
    actionList:[
      {
        onClick:({cellValue})=>{
          title.value = '编辑'
          componentsDialog.open({componentId:cellValue})
        },
        type:'edit'
      },
      {
        onClick:({cellValue})=>{
          shopApi.delShopComponent([cellValue]).then(()=>{
            onQuery(queryModel)
          })
        },
        type:'delete'
      }
    ]
  }
])
const queryModel=ref({
  categoryName:null,
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
  componentsDialog.open()
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