<template>
  <th-drawer class="catalog" v-model="isCatalog" direction="ltr" size="300">
    <th-tree :data="treeData" :props="defaultProps" :indent="4" :expand-on-click-node="false">
      <template #default="{ node, data }">
        <div class="catalog-node">
          <div class="catalog-node-label">{{ node.label }}</div>
          <div>
            <th-icon v-on:click="addCatalog(node)"><Plus/></th-icon>
            <th-icon color="#F56C6C"><Delete /></th-icon>
          </div>
        </div>
      </template>
    </th-tree>
  </th-drawer>
</template>

<script setup lang='ts'>
import { ref,watch } from 'vue'
import { Plus,Delete } from '@element-plus/icons-vue'
import { useUIEditorStore } from "@/store/useUIEditorStore"
import catalogApi from "@/api/catalogApi"
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import { useThDialog } from 'th-ui-plus'

const addCatalogDialog=useThDialog({
  title:'新增',
  component:()=>import('./../dialog/catalogDialog.vue'),
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