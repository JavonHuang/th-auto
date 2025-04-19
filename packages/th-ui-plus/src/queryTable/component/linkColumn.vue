<template>
  <th-link :class="cls" v-on:click="onClick" type="primary">{{props.cellValue}}</th-link>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
import { useName } from '../../hook/useName';
import { IQueryTableColumn } from '../queryTable';

defineOptions({
  name: 'ThQueryLinkColumn'
})
//样式处理
const ns = useName('query-table-link-column')
const cls = computed(() => [
  ns.base(),
])

const props = withDefaults(defineProps<{row: any, column: any, cellValue: any, index: number,queryColumn:IQueryTableColumn}>(), {

})

const onClick=()=>{
  console.log(props.queryColumn)
  if(typeof props.queryColumn.onClick !='undefined'){
    props.queryColumn.onClick(props)
  }
}

</script>

<style lang='scss' scoped>

</style>