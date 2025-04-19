<template>
  <th-drawer v-model="isCatalog" direction="ltr" size="300">
    <div>567890-</div>
  </th-drawer>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { useUIEditorStore } from "@/store/useUIEditorStore"
import { storeToRefs } from 'pinia'
const uiEditorStore = useUIEditorStore()
const { isCatalog } = storeToRefs(uiEditorStore)
</script>

<style lang='scss' scoped>

</style>