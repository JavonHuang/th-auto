<template>
  <div :class="cls">
    <th-button v-for="item in props.queryColumn.actionList" link :type="getText(item).type" v-on:click="onClick(item)">{{getText(item).text}}</th-button>
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
import { useName } from '../../hook/useName';
import { IAction, IQueryTableColumn } from '../queryTable';

defineOptions({
  name: 'ThQueryActionColumn'
})
//样式处理
const ns = useName('query-table-action-column')
const cls = computed(() => [
  ns.base(),
])

const getText = (action:IAction):{type:'primary'|'danger'|'info'|'warning',text:string} =>{
  switch(action.type){
    case 'delete':
      return {
        type:'danger',
        text:'删除'
      }
    case 'create':
      return {
        type:'primary',
        text:'新增'
      }
    case 'edit':
      return {
        type:'info',
        text:'编辑'
      }
    default:
      return {
        type:'warning',
        text:'配置错误'
      }
  }
}

const props = withDefaults(defineProps<{row: any, column: any, cellValue: any, index: number,queryColumn:IQueryTableColumn}>(), {

})

const onClick=(e:IAction)=>{
  e.onClick(props)
}

</script>

<style lang='scss' scoped>

</style>