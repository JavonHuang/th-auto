<template>
  <div class="design">
    <DesignTree :node-list="[pageDomTree]"></DesignTree>
  </div>
</template>

<script setup lang="ts">
import { useDesignStore } from "@/store/useDesignStore";
import DesignTree from "./designTree.vue"
import { storeToRefs } from 'pinia'
const store = useDesignStore()
const { pageDomTree } = storeToRefs(store)


</script>
<style lang="scss" scoped>
.design{
  display: flex;
  // border: 1px solid #DCDFE6;
  flex: 1;
  background: #fff;
  padding: 10px;
  overflow: hidden;
}
</style>