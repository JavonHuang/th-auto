<template>
  <div class="ui-left">
    <DomTree></DomTree>
  </div>
</template>

<script setup lang='ts'>
import DomTree from '@/view/uiEditor/components/domTree.vue'

</script>

<style lang='scss' scoped>
:deep(.ui-left){
  .is-trage{
      border-color: #409EFF!important;
      background: #d5eaff;
    }
}
</style>