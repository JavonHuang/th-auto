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
      :api="projectApi.pageList" 
      :columns="tableColumns"
      :create="create"
      :delete="deleteProject"
      :show-index="true"
      :selection-change="selectionChange"
    >
      <template #name="scope">我的名字：{{ scope.row.name }}</template>
      <template #age="scope">我的年龄：{{ scope.row.age }}</template>
    </th-query-table>
  </th-page-layout>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import projectApi from "@/api/projectApi"
import { IQueryTableColumn, QueryTableInstance } from 'th-ui-plus';
import { QueryColumnsProps, useThDialog } from 'th-ui-plus';
import { router } from '@/router/index'

const addDialogRef=ref()
const title = ref('新增')
const proojectDialog=useThDialog({
  component:()=>import('./dialog/createDialog.vue'),
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
    columnType:'link',
    prop:'name',
    label:'项目名称',
    width:180,
    onClick:(e)=>{
      const url = router.resolve({path:'/uiEditor',query:{
        id:e.row.id
      }})
      window.open(url.href, '_blank')
    }
  },
  {
    columnType:'text',
    prop:'id',
    label:'项目Id',
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
    prop:'id',
    label:'操作',
    fixed:'right',
    width:200,
    actionList:[
      {
        onClick:({cellValue})=>{
          title.value = '编辑'
          proojectDialog.open({id:cellValue})
        },
        type:'edit'
      },
      {
        onClick:({cellValue})=>{
          projectApi.deleteProject([cellValue]).then(()=>{
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
    label:"项目名称",
    prop:'name',
    props:{
      clearable:true
    }
  },
])

const onQuery=(e:any)=>{
  queryTableRef.value?.reflesh()
}

const create =async ()=>{
  title.value = '新增'
  proojectDialog.open()
  onQuery(queryModel)
}

const deleteProject = () => {
  projectApi.deleteProject(multipleSelection.value).then(()=>{
    onQuery(queryModel)
  })
}

const selectionChange=(e:any[])=>{
  multipleSelection.value =e.map((row)=>row.id)
}
</script>

<style lang='scss' scoped>

</style>