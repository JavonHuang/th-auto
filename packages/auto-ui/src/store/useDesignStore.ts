import { defineStore } from "pinia";
import { ref } from "vue";
import { componentProps, Direction, ILibTreeNode } from "@/tool/interface";

interface IlibSHow { 
  categoryId: string,
  categoryName: string,
  children: Array<componentProps>
}

export const useDesignStore = defineStore('libStore', () => {
  //组件商城-组件集合
  const shopComponents=ref<Array<IlibSHow>>([])
  const dragNodeCode=ref<string|null>(null)
  const pageDomTree = ref<ILibTreeNode>({
    id: 'rootTree',
    component: { 
      targetDragalble: true,
      isInit:true,
      isModel:0,
      hasSlot:1,
      code: 'div', 
      name: "根节点", 
      props: {}, 
      style: {width:'100%',height:'100%'} 
    },
    children: [],
  })
  const modelValue=ref<any>({})
  const selectNode=ref<ILibTreeNode|null>()

  /**
   * 设置组件集合
   * @param e 组件集合
   */
  function setShopComponents(e:Array<IlibSHow>) {
    shopComponents.value=e
  }

  /**
   * 设置正在拖动的节点类型
   * @param code 组件code
   */
  function setDragNode(e:string|null) { 
    dragNodeCode.value = e
  }

    /**
   * 初始化当前编辑页面
   * @param e 组件集合
   */
    function setPageDomTree(e:ILibTreeNode) {
      pageDomTree.value=e
    }
  
  /**
   * 插入新节点
   * @param nodeId 父节点
   * @param childrenNode 新节点
   * @param d 方向
   */
  function insertChildNode(nodeId: string, childrenNode: ILibTreeNode,d:Direction) {
    let node:ILibTreeNode=findNode(pageDomTree.value,nodeId,()=>{})!
    if (node.children) {
      // if (d == 'right' || d == 'down') {
      //   node.children.push(childrenNode);
      // } else { 
      //   node.children.unshift(childrenNode);
      // }
      node.children.push(childrenNode);
    } else {
        node.children = [childrenNode];
    }
  }
  /**
   * 根据ID查找指定节点
   * @param node 根节点
   * @param id 指定id
   * @returns 目标节点
   */
  function findNode(node:ILibTreeNode, id:string,callBack:(n:ILibTreeNode)=>void):ILibTreeNode|undefined|null {
    if (node.id === id) {
      callBack(node)
      return node;
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        var found = findNode(node.children[i], id,callBack);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }

  /**
   * 保存选中的节点
   * @param node 
   */
  function setSelectNode(node:ILibTreeNode) {
    selectNode.value=node
  }

  /**
   * 更细指定节点
   * @param nodeId 
   * @param childrenNode 
   */
  function updateNode(nodeId: string, childrenNode: ILibTreeNode) { 
    findNode(pageDomTree.value,nodeId,(n)=>{
      n=childrenNode
    })
  }

  /**
   * 删除指定ID节点
   * @param id 
   */
  function removeNode(id: string) {
    if (selectNode.value!=null &&selectNode.value.id == id) { 
      selectNode.value=null
    }
    function findAndRemove(node:ILibTreeNode, id:string) {
      if (node.id === id) {
        // 如果找到了节点，返回null表示删除
        return null;
      }
      if (node.children) {
        node.children = node.children.filter((child:ILibTreeNode) => findAndRemove(child, id));
      }
      // 如果没有删除节点，返回当前节点
      return node;
    }
    findAndRemove(pageDomTree.value, id);
  }
    
  function findLib  (code:string):componentProps|undefined  { 
    for (let i = 0; i < shopComponents.value.length; i++) { 
      for (let j = 0; j < shopComponents.value[i].children.length; j++) { 
        if (shopComponents.value[i].children[j].code == code) { 
          return JSON.parse(JSON.stringify(shopComponents.value[i].children[j]));
        }
      }
    }
  }
  
  return { 
    dragNodeCode,
    pageDomTree,
    shopComponents,
    modelValue,
    selectNode,
    insertChildNode,
    findNode,
    setDragNode,
    setSelectNode,
    updateNode,
    removeNode,
    findLib,
    setShopComponents,
    setPageDomTree,
  } 
}, 
// {
//   persist: {
//     pick: ['pageDomTree']
//   }
// }
)