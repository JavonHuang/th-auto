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
      <template #name="scope">我的名字：{{ scope.row.name }}</template>
      <template #age="scope">我的年龄：{{ scope.row.age }}</template>
    </th-query-table>
  </th-page-layout>
</template>

<script setup lang='ts'>
import { ref,h,render,getCurrentInstance, onMounted } from 'vue';
import userApi from "@/api/userApi"
import { IQueryTableColumn, QueryTableInstance } from 'th-ui-plus';
import { QueryColumnsProps, useThDialog } from 'th-ui-plus';
import moment from 'moment'
import { useGlobalStore } from "@/store/useGlobalStore"
const globalStore = useGlobalStore()


import myDialog from './dialog/createDialog.vue';
const instance = getCurrentInstance();
console.log(instance)

const used=useThDialog(myDialog,instance!)

onMounted(()=>{
  // render(h(myDialog,{}),instance?.ctx.$el)
  used.init()
  moment.updateLocale('zh', {
      week: {
          dow: 1, // dow: day of week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
          doy: 3  // doy: day of year (starting at 1; 4 means the first week starts on the first Tuesday)
      }
  });
  const startOfWeek = moment().year(2030).week(1).startOf('week');
  const endOfWeek = moment().year(2030).week(1).endOf('week');
  
  console.log('开始日期:', startOfWeek.format('YYYY-MM-DD'));
  console.log('结束日期:', endOfWeek.format('YYYY-MM-DD'));
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

const create =async ()=>{
  // globalStore.update()
  used.open()
 await userApi.addUser([
    {
      userName:'javon',
      password:'6789'
    }
  ])
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