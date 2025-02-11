import { ComponentSetProps } from "./interface"
import {commonStyle} from "./commonSet"

const ThButtonSet=():ComponentSetProps=>{
  return {
    style:[
      ...commonStyle,
    ],
    props:[
      {
        componentType:'Select',
        propsName:'类型',
        props:'type',
        value:'success',
        controlProps:{
          options:[
            {label:'Primary',value:'primary'},
            {label:'Success',value:'success'},
            {label:'Info',value:'info'},
            {label:'Warning',value:'warning'},
            {label:'Danger',value:'danger'},
          ]
        }
      },
    ],
    extra:[
      {
        componentType:'Input',
        propsName:'文本',
        props:'text',
        value:'默认按钮'
      },
    ]
  }
}
export default ThButtonSet
