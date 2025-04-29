import { defineStore } from "pinia";
import { ref } from "vue";

export const useUIEditorStore = defineStore('uiEditor', () => {
  const isCatalog = ref<boolean>(false) // 打开目录
  const categoryObj = ref<any>({}) // 当前编辑的页面

  const setCatalog = (data: boolean): void=> {
    isCatalog.value = data
  }

  const setCategoryObj = (data: any): void=> {
    categoryObj.value = data
  }

  return { 
    isCatalog,
    categoryObj,
    setCatalog,
    setCategoryObj,
   }
}, {
  // persist: {
  //   pick: ['isCatalog']
  // }
})