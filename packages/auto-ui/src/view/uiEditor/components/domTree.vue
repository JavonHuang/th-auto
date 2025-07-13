<template>
  <th-tree class="dom-tree" 
    :expand-on-click-node="false"
    :default-expand-all="true" 
    :data="[pageDomTree]"
    :indent="8"
    :props='treeprops'>
    <template #default="{ node, data }">
      <contextmenu v-on:click="(e)=>onSelectMenu(e,data)" :menu="menus" class="dom-tree-node" v-drag:target="data.component.hasSlot" :id="data.id">
        <span v-on:click="selectNode(data)">{{data.component?data.component.name:''}}</span>
        <th-icon v-on:click="remove(data)">
          <DeleteFilled/>
        </th-icon>
      </contextmenu>
    </template>
  </th-tree>
</template>

<script setup lang='ts'>
import contextmenu from "./contextmenu.vue";
import { generateID, useThDialog } from 'th-ui-plus';
import { DeleteFilled } from '@element-plus/icons-vue'
import { ILibTreeNode } from "@/tool/interface";
import { useDesignStore } from '@/store/useDesignStore'
import { storeToRefs } from 'pinia'
import { ref } from "vue";

const treeprops={
  label:'component.name'
}
const store = useDesignStore()
const {setDragNode,removeNode, insertChildNode,findLib }=store
const { pageDomTree } = storeToRefs(store)
const selectMenus = ref()
const menus = [
  {
    name:'插入子节点',
    type:'1'
  },
  {
    name:'上方插入节点',
    type:'2'
  },
  {
    name:'下方插入节点',
    type:'3'
  }
]

const shopDialog=useThDialog({
  width:'80%',
  component:()=>import('./shop.vue'),
  beforeClose:()=>{
    // d.value.test()
    return Promise.resolve(true)
  },
  title:'新增',
  events:{
    onClick:(e)=>{
      // let component=findLib(e)
      // const fn=AutoUISet[component?.code.replace('-','')+'Set']
      // if(fn){
      //   const config=fn()
      //   component!.props=getProps(config.props)
      //   component!.style=getProps(config.style)
      //   component!.extra=getProps(config.extra)
      // }

      // insertChildNode(selectMenus.value.id, {
      //   id: generateID(),
      //   component: component,
      //   children: [],
      // },'down')
      // shopDialog.close()
    }
  }
})

const onclick = (e:string) => { 
  setDragNode(e)
}

const selectNode = (e:ILibTreeNode) => { 
  store.setSelectNode(e)
}

const remove =(n:ILibTreeNode)=>{
  removeNode(n.id)
}

const onSelectMenu= (e,node) => {
  selectMenus.value = node
  shopDialog.open(e)
}
</script>

<style lang='scss' scoped>
.dom-tree{
  .dom-tree-node{
    flex: 1;
    display: flex;
    span{
      flex: 1;
    }
    .is-trage{
      border-color: #409EFF!important;
      background: #d5eaff;
    }
    i{
      margin: auto 10px;
    }
  }
}
</style>