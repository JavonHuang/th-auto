import { ComponentSetProps } from "./interface"

const ThFormItemSet=():ComponentSetProps=>{
  return {
    style:[],
    props:[
      {
        componentType:'Checkbox',
        propsName:'描述',
        props:'inline',
        value:true
      },
      {
        componentType:'Input',
        propsName:'描述',
        props:'label',
        value:'描述'
      }
    ],
    extra:[]
  }
}
export default ThFormItemSet