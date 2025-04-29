<template>
  <th-tree class="dom-tree" 
    :expand-on-click-node="false"
    :default-expand-all="true" 
    :data="[pageDomTree]"
    :indent="8"
    :props='treeprops'>
    <template #default="{ node, data }">
      <span class="dom-tree-node" v-drag:target="data.component.hasSlot" :id="data.id" >
        <span v-on:click="selectNode(data)">{{data.component?data.component.name:''}}</span>
        <th-icon v-on:click="remove(data)">
          <DeleteFilled/>
        </th-icon>
      </span>
    </template>
  </th-tree>
</template>

<script setup lang='ts'>
import { DeleteFilled } from '@element-plus/icons-vue'
import { ILibTreeNode } from "@/tool/interface";
import { useDesignStore } from '@/store/useDesignStore'
import { storeToRefs } from 'pinia'
const treeprops={
  label:'component.name'
}
const store = useDesignStore()
const {setDragNode,removeNode }=store
const { pageDomTree } = storeToRefs(store)

const onclick = (e:string) => { 
  setDragNode(e)
}

const selectNode = (e:ILibTreeNode) => { 
  store.setSelectNode(e)
}

const remove =(n:ILibTreeNode)=>{
  removeNode(n.id)
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