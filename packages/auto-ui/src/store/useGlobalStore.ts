import { defineStore } from "pinia";
import { computed, ref } from "vue";
import request from '@/api/commonApi';
import menuAPI from '@/api/menuApi';

import { router } from '@/router/index'

export const useGlobalStore = defineStore('global', () => {
  const isLogin = ref<boolean>(false)
  const menuList = ref<Array<any>>([])

  const login = (data: { name: string, passworld: string }): Promise<any> => {
    return new Promise(async (resolve) => {
      await request.login(data).then((e) => {
        isLogin.value = true;
        resolve(e)
      });
      await menu();
    })
  }

  const menu = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (!isLogin.value) {
        router.push({
          path: "/login",
        })
        resolve(false)
      } else {
        menuAPI.queryMenu().then((e) => {
          const rootNodes:any[] = [];
          const idMapping:any = {};
          const rootId = null;
          // 构建 id 映射表
          e.data.forEach((b:any) => {
            const key:string =b.menuId as string
            idMapping[key] = { ...b, children: [] }
          })
          // 构建树形结构
          e.data.forEach((item: any) => {
            if(item.menuURL){
              router.addRoute('portal', {
                path: item.menuRouter,
                name: item.menuName,
                component: () => import(item.menuURL)
              });
            }
            const parentId = item.parentId === rootId ? null : item.parentId;
            if (parentId === null) {
                // 根节点
                rootNodes.push(idMapping[item.menuId]);
            } else {
                // 子节点
                if (idMapping[parentId]) {
                    idMapping[parentId].children.push(idMapping[item.menuId]);
                }
            }
          })
          menuList.value = rootNodes
          console.log( menuList.value )
          resolve(true)
        });
      }
    })
  }

  const systemMenu = computed(() => menuList.value)

  const update=()=>{
    isLogin.value = false;
  }

  return { isLogin, login, menu, systemMenu ,update}
}, {
  persist: {
    pick: ['isLogin']
  }
})