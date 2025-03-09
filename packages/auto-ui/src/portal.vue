<template>
  <div class="portal">
    <div class="header">879</div>
    <div class="main">
      <div class="menu">
        <th-menu default-active="2" class="th-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <ThTreeMenu  v-for="item in systemMenu" v-bind="item" :index="item.menuId">
          </ThTreeMenu>
        </th-menu>
      </div>
      <div class="contant">
        <RouterView ></RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { useGlobalStore } from "@/store/useGlobalStore"
import { storeToRefs } from "pinia";
import ThTreeMenu from '@/view/components/treeMenuItem.vue'

const globalStore = useGlobalStore()
const { systemMenu } = storeToRefs(globalStore) // 把仓库中的数据变成响应式

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
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
      .th-menu {
        border: none;
      }
    }
    .contant{
      flex-grow: 1;
      flex: 1;
      padding: 12px 20px;
      overflow: auto;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>