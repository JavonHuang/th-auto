<template>
  <div class="portal">
    <div class="header">879</div>
    <div class="main">
      <div class="menu">
        <div class="group" v-for="item in libShow" :key="item.groupName">
          <div class="group-name">{{item.groupName}}</div>
          <div class="group-list">
            <div class="component" v-for="com in item.components" :key="com.name" >
              <div class="component-icon" v-drag:target="true" :code="com.code" v-on:mousedown="onclick(com.code)" v-bind="com?.props">
                <th-icon>
                  <Document/>
                </th-icon>
              </div>
              <div class="com-name">{{com.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <th-tree class="view-tree" 
        :expand-on-click-node="false"
        :default-expand-all="true" 
        :data="[libList]"
        :indent="8"
        :props='treeprops'>
        <template #default="{ node, data }">
          <span class="custom-tree-node" v-drag:target="data.component.targetDragalble??false" :id="data.id" >
            <span v-on:click="selectNode(data)">{{data.component?data.component.name:''}}</span>
            <th-icon v-on:click="remove(data)">
              <DeleteFilled/>
            </th-icon>
          </span>
        </template>
      </th-tree>
      <div class="contant">
        <RouterView ></RouterView>
      </div>
      <DesignSetting></DesignSetting>
    </div>
  </div>
</template>

<script setup lang='ts'>

import { Document,DeleteFilled } from '@element-plus/icons-vue'
import { libShow } from '@/tool/libShow'
import DesignSetting from '@/pages/design/designSetting.vue'
import { ILibTreeNode } from "@/tool/interface";
import { useDesignStore } from '@/store/useDesignStore'
import { storeToRefs } from 'pinia'
const treeprops={
  label:'component.name'
}
const store = useDesignStore()
const {setDragNode,removeNode }=store
const { libList } = storeToRefs(store)

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
.portal {
  height: 100%;
  width: 100%;
  background: #F2F3F5;
  display: flex;
  flex-direction: column;

  .header {
    height: 40px;
    border-bottom: 1px solid #DCDFE6;
    background-color: white;
  }

  .main {
    height: calc(100% - 40px);
    display: flex;
    flex-direction: row;

    .menu {
      width: 200px;
      border-right: 1px solid #DCDFE6;
      background-color: white;
      .group{
        padding: 8px 10px;
        .group-name{
          font-weight: bold;
          text-align: left;
          padding: 8px 10px;
        }
        .group-list{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          .component{
            width: 60px;
            cursor: pointer;
            margin: 2px;
            .component-icon{
              border: 1px solid #DCDFE6;
              border-radius: 4px;
              cursor: pointer;
              display: flex;
              height: 32px;
              i{
                margin: auto;
              }
            }
            .com-name{
              font-size: 12px;
            }
          }
        }
      }
    }
    .view-tree{
      width: 200px;
      .is-trage{
        border-color: #409EFF!important;
        background: #d5eaff;
      }
      .custom-tree-node{
        width:100%;
        display:flex;
        padding:0 4px;
        span{
          text-align: start;
          flex:1;
        }
        i{
          margin:auto;
        }
      }
      :deep(.el-tree-node__content){
        .el-tree-node__expand-icon{
          padding:0;
        }
      }
    }
    .contant{
      flex-grow: 1;
      flex: 1;
      padding: 12px 20px;
      overflow:hidden;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>