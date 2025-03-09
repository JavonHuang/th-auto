<template>
  <th-link :class="cls" type="primary">{{props.cellValue}}</th-link>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
import { useName } from '../../hook/useName';

defineOptions({
  name: 'ThQueryLinkColumn'
})
//样式处理
const ns = useName('query-table-link-column')
const cls = computed(() => [
  ns.base(),
])

const props = withDefaults(defineProps<{row: any, column: any, cellValue: any, index: number}>(), {

})

</script>

<style lang='scss' scoped>

</style>