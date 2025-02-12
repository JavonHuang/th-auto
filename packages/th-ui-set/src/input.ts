import { ComponentSetProps } from "./interface"
import {commonProps,commonStyle} from "./commonSet"

const ThInputSet=():ComponentSetProps=>{
  return {
    style:[
      ...commonStyle
    ],
    props:[
      {
        componentType:'AutoInput',
        propsName:'占位文本',
        props:'placeholder',
        value:'请输入内容'
      },
      {
        componentType:'AutoCheckbox',
        propsName:'清除按钮',
        props:'clearable',
        value:true
      },
      ...commonProps
    ],
    extra:[]
  }
}
export default ThInputSet
