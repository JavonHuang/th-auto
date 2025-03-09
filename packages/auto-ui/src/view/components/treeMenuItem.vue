<template>
  <th-sub-menu v-if="props.children.length!=0" :index="props.menuId">
    <template #title>
      <th-icon>
        <Document />
      </th-icon>
      <span>{{ props.menuName}}</span>
    </template>
    <th-tree-menu  v-for="item in props.children" v-bind="item" :index="item.name">
    </th-tree-menu>
  </th-sub-menu>
  <th-menu-item v-bind="$attrs" :class="cls" v-on:click="goPage(props)" v-else>
    <th-icon>
      <Document />
    </th-icon>
    <span>{{ props.menuName }}</span>
  </th-menu-item>
</template>

<script setup lang='ts'>
import { ref, computed, onMounted } from 'vue'
import { Document } from '@element-plus/icons-vue'
import { router } from '@/router/index'

defineOptions({
  name: 'th-tree-menu'
})
const cls = computed(() => [])


const props = withDefaults(
  defineProps<{
    menuId:string,
    parentId:string|null,
    menuName:string,
    menuURL:string|null,
    menuIcon:string|null,
    menuRouter:string|null,
    children?: Array<any>,
  }>(),
  {
    children: ()=>[] as Array<any>,
  }
);

const goPage = (e: any) => {
  router.push({
    name: e.menuName,
  })
}

</script>

<style lang='scss' scoped>

</style>