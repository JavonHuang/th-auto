<template>
  <div class="ui-shop">
    <div v-for="category in modelValue">
      <span class="ui-category">{{category.categoryName}}</span>
      <div class="ui-component">
        <span v-for="component in category.children" v-drag:target="true" v-on:mousedown="onclick(component.code)" :code="component.code" v-bind="component?.props">{{component.name}}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive,onMounted } from 'vue'
import shopApi from "@/api/shopApi"
import { useDesignStore } from '@/store/useDesignStore'

const store = useDesignStore()
const {setDragNode,removeNode,setShopComponents }=store
const modelValue=ref()

const props =defineProps({
  params:{}
})

const emits = defineEmits<{
  (e:'Click',val:any):null
}>()


onMounted(()=>{
  shopApi.getComponentShowTool({}).then(res=>{
    modelValue.value = res.data
    setShopComponents(res.data)
  })
})

const onclick = (e:string) => { 
  console.log(props)
  setDragNode(e)
  emits("Click", {code:e,...props.params!})
}
</script>

<style lang="scss" scoped>
.ui-shop{
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
</style>