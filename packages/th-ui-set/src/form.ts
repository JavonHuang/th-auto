import { ComponentSetProps } from "./interface"
import {commonStyle} from "./commonSet"

const ThFormSet=():ComponentSetProps=>{
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
        componentType:'InputNumber',
        propsName:'描述',
        props:'labelWidth',
        value:100
      },
      {
        componentType:'Input',
        propsName:'描述',
        props:'labelSuffix',
        value:'：'
      }
    ],
    extra:[]
  }
}
export default ThFormSet