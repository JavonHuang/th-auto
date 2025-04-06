import {LIB_NAME} from "../constants/lib"

export const useName = (componentName: string,)=>{
  const libName = ()=>`${LIB_NAME}`
  const base = () =>`${LIB_NAME}-${componentName}`
  const m = (cls:string) =>cls!=''?`${LIB_NAME}-${componentName}-${cls}`:''
  const is = (cls:string) =>cls!=''?`${LIB_NAME}-is-${cls}`:''
  const cis = (cls:string) =>cls!=''?`${LIB_NAME}-${componentName}-is-${cls}`:''

  return {libName,base,m,is,cis}
}