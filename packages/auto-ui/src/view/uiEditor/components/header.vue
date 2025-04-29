<template>
  <div class="ui-edit-header">
    <div class="ui-edit-header-left">
      <span v-on:click="savePage">保存</span>
      <span v-on:click="openCatalog">项目</span>
    </div>
    <div></div>
  </div>
</template>

<script setup lang='ts'>
import { useUIEditorStore } from "@/store/useUIEditorStore"
import { useDesignStore } from '@/store/useDesignStore'

import catalogApi from "@/api/catalogApi"
import { storeToRefs } from "pinia"

const designStore = useDesignStore()
const { pageDomTree } = storeToRefs(designStore)

const uiEditorStore = useUIEditorStore()
const { categoryObj } = storeToRefs(uiEditorStore)

const openCatalog = ()=>{
  uiEditorStore.setCatalog(true)
}
const savePage = ()=>{
  catalogApi.saveCatalogFile({
    projectId:categoryObj.value.projectId,
    catalogId:categoryObj.value.id,
    data:JSON.stringify(pageDomTree.value)
  })
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
    cursor: pointer;
    font-size: 14px;
    margin: 0 4px;
  }
 }
}
</style>