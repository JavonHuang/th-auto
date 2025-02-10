<template>
  <div class="design">
    <PreviewTree :node-list="[libList]"></PreviewTree>
  </div>
</template>

<script setup lang="ts">
import { useDesignStore } from "@/store/useDesignStore";
import PreviewTree from "./previewTree.vue"
import { storeToRefs } from 'pinia'
const store = useDesignStore()
const { libList } = storeToRefs(store)


</script>
<style lang="scss" scoped>
.design{
  border: 1px solid #DCDFE6;
  flex: 1;
  background: #fff;
  padding: 10px;
}
</style>