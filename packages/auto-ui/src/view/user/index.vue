<template>
  <th-page-layout>
    <th-query v-model="queryModel" :columns="columns" :inline="true" v-on:onQuery="onQuery">
      <template #num2="{data,formData}">
        <th-input v-model="formData[data.prop]"></th-input>
      </template>
    </th-query>
    <th-query-table ref="queryTableRef" :queryModel="queryModel" :border="true" :selectable="true" :api="userApi.pageList" :columns="tableColumns">
      <template #name="scope">我的名字：{{ scope.row.name }}</template>
      <template #age="scope">我的年龄：{{ scope.row.age }}</template>
    </th-query-table>
  </th-page-layout>
</template>

<script setup lang='ts'>
import { QueryColumnsProps } from 'th-ui-plus';
import { ref,reactive } from 'vue';
import userApi from "@/api/userApi"

import { IQueryTableColumn, QueryTableInstance } from 'th-ui-plus';

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
  },
  {
    component:'ThDatePicker',
    label:"创建时间",
    prop:'createTime',
  }
])

const onQuery=(e:any)=>{
  queryTableRef.value?.reflesh()
}

</script>

<style lang='scss' scoped>

</style>