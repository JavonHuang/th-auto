import { ComponentSetProps } from "./interface"

const ThColSet=():ComponentSetProps=>{
  return {
    style:[],
    props:[
      {
        componentType:'InputNumber',
        propsName:'列宽',
        props:'span',
        value:12
      }
    ],
    extra:[]
  }
}
export default ThColSet
