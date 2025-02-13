<template>
  <th-tree 
    class="view-tree"
    ref="treeRef" 
    :data="columns" 
    :expand-on-click-node="false"
    :default-expand-all="true" 
    :indent="8"
    :props="defaultProps" node-key="id">
      <template #default="{ node, data }">
          <div class="custom-tree-node">
            <span class="label">{{ node.label }}</span>
            <span>
              <th-icon @click="append(data)"> 
                <Plus />
              </th-icon>
              <th-icon v-on:click="remove(data)">
                <DeleteFilled/>
              </th-icon>
            </span>
          </div>
      </template>
  </th-tree>
  <th-button :style="{'width':'100%'}"  v-on:click="append(null)">
    <th-icon> 
      <Plus />
    </th-icon>
  </th-button>
  <th-dialog v-model="showDialog">
    <th-form-auto ref="formRef" :label-width="100" :show-operation="false" v-model="nodeModel" :columns="columnsForm" :rules="rules">
    </th-form-auto>
    <th-row>
      <th-col :offset="21">
        <th-button type="primary" v-on:click=addNode()>保存</th-button>
        <th-button v-on:click="cancel">取消</th-button>
      </th-col>
    </th-row>
  </th-dialog>
</template>

<script setup lang='ts'>
import { Plus,DeleteFilled } from '@element-plus/icons-vue'
import { FormAutoColumnsProps,ThFormAutoInstance } from 'th-ui-plus'
import { removeNode,insertChildNode, generateID } from '@/tool/treeTool'
import {defineOptions,watch,ref, reactive } from 'vue'
import _ from 'lodash'
const formRef=ref<ThFormAutoInstance>()
const defaultProps = {
  children: 'children',
  label: 'label',
}
defineOptions({
  name:'AutoTableColumn'
})

const columnTypeList=[
  {
    label:'文本',
    value:'text'
  },
  {
    label:'数字',
    value:'number'
  },
  {
    label:'千分位',
    value:'thousands'
  },
  {
    label:'年',
    value:'year'
  },
  {
    label:'月',
    value:'month'
  },
  {
    label:'日',
    value:'date'
  },
  {
    label:'日期',
    value:'dateTime'
  },
  {
    label:'时间',
    value:'time'
  },
  {
    label:'日期',
    value:'dateTime'
  },
  {
    label:'时间',
    value:'time'
  },
  {
    label:'链接',
    value:'link'
  },
]
const fixedList=[
{
    label:'左悬浮',
    value:''
  },
  {
    label:'右悬浮',
    value:'right'
  },
]
const columnsForm=ref<Array<FormAutoColumnsProps>>([
  {
    component:'ThSelect',
    label:"类型",
    prop:'columnType',
    props:{
      options:columnTypeList
    },
  },
  {
    component:'ThInput',
    label:"属性",
    prop:'prop',
  },
  {
    component:'ThInput',
    label:"列名",
    prop:'label',
  },
  {
    component:'ThInputNumber',
    label:"列宽",
    prop:'width',
  },
  {
    component:'ThInputNumber',
    label:"最小列宽",
    prop:'minWidth',
  },
  {
    component:'ThSelect',
    label:"悬浮",
    prop:'fixed',
    props:{
      options:fixedList
    },
  },
  {
    component:'ThCheckbox',
    label:"默认显示",
    prop:'show',
  },
])
const rules=reactive({
  columnType: [
    { required: true, message: '请选择类型', trigger: 'blur' },
  ],
  prop: [
    { required: true, message: '请输入绑定属性名', trigger: 'blur' },
  ],
  label: [
    { required: true, message: '请输入列名', trigger: 'blur' },
  ]
})

const columns = ref<Array<any>>([])
const showDialog = ref<boolean>(false)
const nodeModel = ref<any>({
  columnType:null,
  prop:null,
  label:null,
  width:null,
  minWidth:null,
  fixed:null,
  show:true,
  children:[],
  id:generateID()
})
const chosenNode=ref<any>(null)


const props = withDefaults(defineProps<{
  modelValue?: any,
}>(), {
  modelValue: null,
})

watch(() => props.modelValue, (newVal) => {
  if(newVal !== columns.value){
    columns.value = newVal
  }
}, { deep: true ,immediate: true})

const append=(data:any)=>{
  nodeModel.value.id=generateID()
  chosenNode.value=data
  showDialog.value=true
}
const remove=(data:any)=>{
  chosenNode.value=data
  let result = removeNode(columns.value,data.id)
  emits("update:modelValue",  result)
}

const cancel=()=>{
  showDialog.value=false
  chosenNode.value=null
  formRef.value?.resetForm()
}

const addNode=()=>{
  formRef.value?.submit().then((val)=>{
    if(val){
      const val =_.cloneDeep(nodeModel.value)
      if(chosenNode.value){
        insertChildNode(columns.value,chosenNode.value.id,val)
      }else{
        columns.value.push(val)
      }
      cancel()
      emits("update:modelValue",  columns.value)
    }
  })
}

const emits = defineEmits<{
  (e: 'update:modelValue', val: any): void
}>()
</script>

<style lang='scss' scoped>
.view-tree{
  .custom-tree-node{
    width:100%;
    display:flex;
    padding:0 4px;
    .label{
      flex: 1;
    }
    span{
      text-align: start;
    }
    i{
      margin: 0 4px;
    }
  }
  :deep(.el-tree-node__content){
    .el-tree-node__expand-icon{
      padding:0;
    }
  }
}
</style>