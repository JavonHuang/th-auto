<template>
  <component 
    v-for="item in props.nodeList" 
    :key="item.id" 
    :id="item.id" 
    :is="item.component?.code" 
    v-bind="item.component?.props"
    :style="item.component?.style"
    >
    {{renderText(item)}}
    <PreviewTree :node-list="item.children"></PreviewTree>
  </component>
</template>

<script setup lang="ts">
import { ILibTreeNode } from "@/tool/interface";

const props = defineProps<{
  nodeList:Array<ILibTreeNode>
}>()

const renderText=(e:ILibTreeNode)=>{
  if(e.component && e.component.extra && e.component.extra.text){
    return e.component.extra.text
  }
  return 
}

</script>
<style lang="scss" scoped>
#rootTree{
  height: 100%;
  display:flex;
  flex-direction:column;
  
}
</style>