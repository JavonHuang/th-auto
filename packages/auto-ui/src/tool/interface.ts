/**
 * id 树组件id
 * component 组件
 * children 子节点
 */
interface ILibTreeNode {
  id: string;
  component: componentProps|undefined;
  children?: ILibTreeNode[] | undefined;
}
 

/**
 * code 组件编码
 * name 组件名
 * text 默认子节点
 * dragalble 允许拖如入子节点
 * isInit 允许拖如入子节点
 * props 组件属性
 */
interface componentProps { 
  code: string
  name: string
  text?: string
  dragalble?:boolean
  isInit:boolean
  props: {
    [key:string]:any
  },
  style?: {
    [key:string]:any
  }
}

export type { ILibTreeNode, componentProps }

export type Direction='left'|'right'|'up'|'down'