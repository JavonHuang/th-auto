import { ComponentSetProps } from "./interface"
import {commonStyle} from "./commonSet"

const ThFormSet=():ComponentSetProps=>{
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
        componentType:'AutoNumberSize',
        propsName:'描述',
        props:'labelWidth',
        value:null
      },
      {
        componentType:'AutoInput',
        propsName:'描述',
        props:'labelSuffix',
        value:'：'
      }
    ],
    extra:[]
  }
}
export default ThFormSet