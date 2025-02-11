import { ComponentSetProps } from "./interface"
import {commonStyle} from "./commonSet"

const ThFormItemSet=():ComponentSetProps=>{
  return {
    style:[
            ...commonStyle
    ],
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