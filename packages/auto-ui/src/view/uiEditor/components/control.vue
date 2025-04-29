<template>
  <div class="ui-control">
    <th-form :model="propsModel">
      <span class="ui-control-tilte">属性</span>
      <div class="ui-control-item" v-for="item in propsList" :key="item.props">
        <span class="ui-control-label">{{item.propsName}}</span>
        <component :is="item.componentType" size="small" v-bind="item.controlProps" v-model="propsModel[item.props]"></component>
      </div>
      <div class="ui-control-item" v-for="item in extraList" :key="item.props">
        <span class="ui-control-label">{{item.propsName}}</span>
        <component :is="item.componentType" size="small" v-bind="item.controlProps" v-model="extraModel[item.props]"></component>
      </div>
      <span class="ui-control-tilte">样式</span>
      <div class="ui-control-item" v-for="item in styleList" :key="item.props">
        <span class="ui-control-label">{{item.propsName}}</span>
        <component :is="item.componentType" size="small" v-bind="item.controlProps" v-model="styleModel[item.props]"></component>
      </div>
    </th-form>
  </div>
</template>

<script setup lang="ts">
import AutoUISet, { ComponentSetProps } from 'th-ui-set'
import { useDesignStore } from "@/store/useDesignStore";
import { storeToRefs } from 'pinia'
import { watch,ref } from 'vue';
import { ILibTreeNode } from '@/tool/interface';
import _ from 'lodash'
import { SetProps } from 'th-ui-set/src/interface';
const store = useDesignStore()
const { selectNode } = storeToRefs(store)
const componentConfigList=ref<ComponentSetProps|null>()
const propsList=ref<Array<SetProps>|null>()
const extraList=ref<Array<SetProps>|null>()
const styleList=ref<Array<SetProps>|null>()

const propsModel:any=ref({})
const extraModel:any=ref({})
const styleModel:any=ref({})

const lastId=ref('')

watch(selectNode,()=>{
  if(!selectNode.value||lastId.value===selectNode.value?.id! ){
    return
  }
  if(selectNode.value){
    const fn=AutoUISet[selectNode?.value?.component?.code.replace('-','')+'Set']
    if(fn){
      componentConfigList.value= fn() as ComponentSetProps
    }else{
      componentConfigList.value = null
    }
  }else{
    componentConfigList.value = null
  }
  propsList.value=componentConfigList.value?.props
  extraList.value=componentConfigList.value?.extra
  styleList.value=componentConfigList.value?.style


  if(selectNode.value?.component!.isInit){
    propsModel.value = selectNode.value?.component?.props
    extraModel.value = selectNode.value?.component?.extra
    styleModel.value = selectNode.value?.component?.style
  }else{
    let props:any={}
    let props1:any={}
    let props2:any={}
    componentConfigList.value?.props.forEach((e)=>{
      props[e.props]=e.value
    })
    componentConfigList.value?.extra.forEach((e)=>{
      props1[e.props]=e.value
    })
    componentConfigList.value?.style.forEach((e)=>{
      props2[e.props]=e.value
    })
    propsModel.value= props
    extraModel.value= props1
    styleModel.value= props2
  }
  lastId.value=selectNode.value?.id!
})

watch(propsModel,()=>{
  let node:ILibTreeNode={...selectNode.value!}
  node.component!.props=propsModel.value
  node.component!.isInit=true
  store.updateNode(node.id,node)
},{
  deep:true
})

watch(extraModel,()=>{
  let node:ILibTreeNode={...selectNode.value!}
  node.component!.extra=extraModel.value
  node.component!.isInit=true
  store.updateNode(node.id,node)
},{
  deep:true
})

watch(styleModel,()=>{
  let node:ILibTreeNode={...selectNode.value!}
  node.component!.style=styleModel.value
  node.component!.isInit=true
  store.updateNode(node.id,node)
},{
  deep:true
})

</script>

<style lang="scss" scoped>
.ui-control{
  border-left: 1px solid #DCDFE6;
  padding: 4px 8px;
  // width: 200px;
  // box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);
  background:#ffffff;
  :deep(.ui-control-item){
    display: flex;
    margin-bottom: 8px;
    .el-input-number__increase,.el-input-number__decrease{
      width: 16px;
    }
  }
  .ui-control-tilte{
    font-size: 12px;
    font-weight: bold;
  }
  .ui-control-label{
    font-size: 12px;
    min-width: 50px;
    margin: auto 0;
  }
}
</style>