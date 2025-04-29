<template>
  <div class="ui-edit">
    <Header></Header>
    <div class="ui-mian">
      <Left></Left>
      <View></View>
      <Right></Right>
    </div>
  </div>
  <Catalog></Catalog>
</template>

<script setup lang='ts'>
import Header from '@/view/uiEditor/components/header.vue'
import Catalog from '@/view/uiEditor/components/catalog.vue'
import View from '@/view/uiEditor/components/view.vue'
import Right from '@/view/uiEditor/components/right.vue'
import Left from '@/view/uiEditor/components/left.vue'

</script>

<style lang='scss' scoped>
.ui-edit{
  background-color: rgb(0 0 0 / 60%);
  height: 100%;
  .ui-mian{
    height: calc(100% - 32px);
    display: flex;
    .ui-left{
      width: 300px;
      background: #ececec;
      padding: 0px 8px;
    }
    .ui-view{
      flex: 1;
      padding: 0px 8px;
      :deep(.ui-page){
        background: #ececec;
        height: 100%;
        width: 100%;
      }
    }
    .ui-right{
      padding: 0px 8px;
      width: 300px;
      background: #ececec;
      :deep(.ui-shop){
        .ui-category{
          font-size: 14px;
          font-weight:bold;
        }
        .ui-component{
          display: flex;
          flex-wrap: wrap;
          span{
            font-size: 14px;
            margin: 8px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>