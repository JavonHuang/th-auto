import { ComponentSetProps } from "./interface"
import {commonProps,commonStyle} from "./commonSet"

const ThDatePicker=():ComponentSetProps=>{
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
        componentType:'AutoSelect',
        propsName:'类型',
        props:'type',
        value:'date',
        controlProps:{
          options:[
            {label:'year',value:'year'},
            {label:'years',value:'years'},
            {label:'month',value:'month'},
            {label:'months',value:'months'},
            {label:'date',value:'date'},
            {label:'dates',value:'dates'},
            {label:'datetime',value:'datetime'},
            {label:'week',value:'week'},
            {label:'datetimerange',value:'datetimerange'},
            {label:'daterange',value:'daterange'},
            {label:'monthrange',value:'monthrange'},
            {label:'yearrange',value:'yearrange'},
          ]
        }
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
export default ThDatePicker