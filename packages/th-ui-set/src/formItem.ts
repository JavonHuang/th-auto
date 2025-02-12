import { ComponentSetProps } from "./interface"
import {commonStyle} from "./commonSet"

const ThFormItemSet=():ComponentSetProps=>{
  return {
    style:[
            ...commonStyle
    ],
    props:[
      {
        componentType:'AutoCheckbox',
        propsName:'水平布局',
        props:'inline',
        value:false
      },
      {
        componentType:'AutoInput',
        propsName:'描述',
        props:'label',
        value:'描述'
      }
    ],
    extra:[]
  }
}
export default ThFormItemSet