<template>
  <component 
    :class="colKls(item)"
    v-for="item in props.nodeList" 
    :key="item.id" 
    :id="item.id" 
    :is="item.component?.code" 
    v-on:click.stop="click(item)"
    v-bind="item.component?.props"
    :style="item.component?.style"
    v-on="item.component?.event"
    v-model="modelValue[item.id]"
    >
    {{renderText(item)}}
    <DesignTree :node-list="item.children"></DesignTree>
  </component>
</template>

<script setup lang="ts">
import { ILibTreeNode } from "@/tool/interface";
import { useDesignStore } from "@/store/useDesignStore";
import { storeToRefs } from "pinia";
const store = useDesignStore()
const { modelValue } = storeToRefs(store)

const props = defineProps<{
  nodeList:Array<ILibTreeNode>
}>()

const click = (e:ILibTreeNode) => { 
  store.setSelectNode(e)
}

const colKls = (e:ILibTreeNode) => {
  const classes: string[] = []
  if (store.selectNode?.id == e.id) { 
    classes.push('is-select')
  }
  return classes
}

const renderText=(e:ILibTreeNode)=>{
  if(e.component && e.component.extra && e.component.extra.text){
    return e.component.extra.text
  }
  return 
}

</script>
<style lang="scss" scoped>
.is-select{
  border:1px dashed #f89898!important;
}
.is-trage{
  border-color: #409EFF;
  background: #d5eaff;
}
</style>