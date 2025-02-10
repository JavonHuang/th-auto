import { ComponentSetProps } from "./interface"
import commonProps from "./commonProps"

const ThInputSet=():ComponentSetProps=>{
  return {
    style:[],
    props:[
      {
        componentType:'Input',
        propsName:'占位文本',
        props:'placeholder',
        value:'请输入内容'
      },
      {
        componentType:'Checkbox',
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
