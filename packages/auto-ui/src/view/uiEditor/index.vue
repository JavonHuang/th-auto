<template>
  <div class="ui-edit">
    <Header></Header>
    <Catalog></Catalog>
  </div>
</template>

<script setup lang='ts'>
import Header from '@/view/uiEditor/components/header.vue'
import Catalog from '@/view/uiEditor/components/catalog.vue'

import { ref, reactive } from 'vue'

</script>

<style lang='scss' scoped>
.ui-edit{
  background-color: rgb(0 0 0 / 60%);
  height: 100%;
}
</style>