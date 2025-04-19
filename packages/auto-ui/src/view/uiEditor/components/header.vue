<template>
  <div class="ui-edit-header">
    <div class="ui-edit-header-left">
      <th-dropdown>
        <span>文件</span>
        <template #dropdown>
          <th-dropdown-menu>
            <th-dropdown-item v-on:click="openCatalog">保存</th-dropdown-item>
          </th-dropdown-menu>
        </template>
      </th-dropdown>
    </div>
    <div></div>
  </div>
</template>

<script setup lang='ts'>
import { useUIEditorStore } from "@/store/useUIEditorStore"
import { ref, reactive } from 'vue'
const uiEditorStore = useUIEditorStore()

const openCatalog = ()=>{
  uiEditorStore.setCatalog(true)
}

</script>

<style lang='scss' scoped>
.ui-edit-header{
 height: 32px;
 line-height: 32px;
 background-color: #000;
 color: #fff;
 padding: 0 8px;
 :deep(#{&}-left){
  span{
    color: #fff;
    height: 100%;
    line-height: 32px;
    outline: none;
  }
 }
}
</style>