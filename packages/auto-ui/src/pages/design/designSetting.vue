<template>
  <div class="design-setting">
    <th-form :model="propsModel">
      <th-form-item v-for="item in componentConfigList" :key="item.props" :label="item.propsName">
        <component :is="'Th'+item.componentType" v-model="propsModel[item.props]"></component>
      </th-form-item>
    </th-form>
  </div>
</template>

<script setup lang="ts">
import AutoUISet, { ComponentSetProps } from 'auto-ui-set'
import { useDesignStore } from "@/store/useDesignStore";
import { storeToRefs } from 'pinia'
import { watch,ref } from 'vue';
import { ILibTreeNode } from '@/tool/interface';
import _ from 'lodash'
const store = useDesignStore()
const { selectNode } = storeToRefs(store)
let componentConfigList=ref<Array<ComponentSetProps>>([])
const propsModel:any=ref({})
const lastId=ref('')

watch(selectNode,()=>{
  if(!selectNode.value||lastId.value===selectNode.value?.id! ){
    return
  }
  if(selectNode.value){
    const fn=AutoUISet[selectNode?.value?.component?.code.replace('-','')+'Set']
    if(fn){
      componentConfigList.value= fn() as Array<ComponentSetProps>
    }else{
      componentConfigList.value = []
    }
  }else{
    componentConfigList.value = []
  }
  if(selectNode.value?.component!.isInit){
    propsModel.value = selectNode.value?.component?.props
  }else{
    let props:any={}
    componentConfigList.value.forEach((e)=>{
      props[e.props]=e.value
    })
    propsModel.value= props
  }
  lastId.value=selectNode.value?.id!
})

watch(propsModel,()=>{
  let node:ILibTreeNode={...selectNode.value!}
  // if(!_.isEqual( node.component!.props,propsModel.value)){
    node.component!.props=propsModel.value
    node.component!.isInit=true
    store.updateNode(node.id,node)
  // }
},{
  deep:true
})


</script>

<style lang="scss" scoped>
.design-setting{
  border-left: 1px solid #DCDFE6;
  padding: 4px 8px;
  width: 200px;
  // box-shadow: 0px 0px 12px rgba(0, 0, 0, .12);
  background:#ffffff;
  .group{
    text-align: left;
    font-weight: bold;
    border-bottom: 1px solid #DCDFE6;
    margin-bottom: 8px;
  }
}
</style>