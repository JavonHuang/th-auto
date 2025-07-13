<template>
  <div class="ui-control">
    <component :is="componentName" v-model="propsObj"></component>
  </div>
</template>

<script setup lang='ts'>
import { useDesignStore } from '@/store/useDesignStore';
import { ILibTreeNode } from '@/tool/interface';
import _ from 'lodash';
import { storeToRefs } from 'pinia';
import { ref,  watch } from 'vue'
const store = useDesignStore()
const { selectNode } = storeToRefs(store)
const componentName=ref()
const propsObj =ref()

watch(selectNode,()=>{
  componentName.value=`${selectNode?.value?.component?.code}Set`
  propsObj.value=selectNode?.value?.component?.props
})

watch(propsObj,()=>{
  let node:ILibTreeNode={...selectNode.value!}
  node.component!.props=_.cloneDeep(propsObj.value)
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
  background:#ffffff;
  
}
</style> 