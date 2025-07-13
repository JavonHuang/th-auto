<template>
  <div class="ui-right">
    <th-tabs :options="tabs">
      <template #zj>
        <Shop></Shop>
      </template>
      <template #xpz>
        <Control></Control>
      </template>
    </th-tabs>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import Shop from '@/view/uiEditor/components/shop.vue'
import Control from '@/view/uiEditor/components/control.vue'

const tabs=ref([{label:'组件',value:'zj'},{label:'新配置',value:'xpz'}])
</script>