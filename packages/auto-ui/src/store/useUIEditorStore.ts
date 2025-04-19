import { defineStore } from "pinia";
import { ref } from "vue";

export const useUIEditorStore = defineStore('uiEditor', () => {
  const isCatalog = ref<boolean>(false) // 打开目录

  const setCatalog = (data: boolean): void=> {
    isCatalog.value = data
  }

  return { isCatalog,setCatalog }
}, {
  persist: {
    pick: ['isCatalog']
  }
})