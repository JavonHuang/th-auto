import { ComponentSetProps } from "./interface"

const ThButtonSet=():ComponentSetProps=>{
  return {
    style:[
    ],
    props:[],
    extra:[
      {
        componentType:'Input',
        propsName:'文本',
        props:'text',
        value:'默认按钮'
      }
    ]
  }
}
export default ThButtonSet
