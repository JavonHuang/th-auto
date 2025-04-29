<template>
  <th-drawer class="catalog" v-model="isCatalog" direction="ltr" size="300">
    <th-tree :data="treeData" :default-expand-all="true" :props="defaultProps" :indent="4" :expand-on-click-node="false">
      <template #default="{ node, data }">
        <th-icon v-if="node.data.type==='0'"><Document /></th-icon>
        <div class="catalog-node">
          <div class="catalog-node-label" v-on:click="getCatalogFile(node.data)">{{ node.label }}</div>
          <div>
            <th-icon v-on:click="addCatalog(node)"><Plus/></th-icon>
            <th-icon color="#F56C6C"  v-on:click="delCatalog(node)"><Delete /></th-icon>
          </div>
        </div>
      </template>
    </th-tree>
  </th-drawer>
</template>

<script setup lang='ts'>
import { ref,watch } from 'vue'
import { Plus,Delete,Document } from '@element-plus/icons-vue'
import { useUIEditorStore } from "@/store/useUIEditorStore"
import { useDesignStore } from '@/store/useDesignStore'
import catalogApi from "@/api/catalogApi"
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { useThDialog } from 'th-ui-plus'
const designStore = useDesignStore()

const addCatalogDialog=useThDialog({
  title:'新增',
  component:()=>import('./../dialog/catalogDialog.vue'),
  callback:()=>{
    queryCatalog()
  }
})
const route = useRoute()
const uiEditorStore = useUIEditorStore()
const { isCatalog } = storeToRefs(uiEditorStore)
const defaultProps = {
  children: 'children',
  label: 'name',
}
const treeData = ref([])
// 监听变化
watch(() => isCatalog.value, () => {
  if(isCatalog.value){
    queryCatalog()
  }
});

const queryCatalog = () => {
  const id:string = route.query.id as string
  catalogApi.queryCatalog({projectId:id}).then((res)=>{
    treeData.value = res.data
  })
}

const addCatalog = (e:any) => {
  addCatalogDialog.open({...e.data,oparate:'new'})
}

const delCatalog = (e:any)=>{
  catalogApi.deleteCatalog([e.data.id]).then((res)=>{
    queryCatalog()    
  })
}

const getCatalogFile = (e:any) => {
  if(e.type==='0'){
    uiEditorStore.setCategoryObj(e)
    catalogApi.getCatalogFile(e).then((res)=>{
      designStore.setPageDomTree(res.data)
      uiEditorStore.setCatalog(false)
    })
  }
}
</script>

<style lang="scss" scoped>
.catalog{
  &-node{
    display: flex;
    width: 100%;
    &-label{
      flex: 1;
    }
    i{
      margin: 0 4px;
    }
  }
}
</style>