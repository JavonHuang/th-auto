import { ComponentSetProps } from "./interface"
import {commonStyle} from "./commonSet"

const ThLinkSet=():ComponentSetProps=>{
  return {
    style:[
      ...commonStyle,
    ],
    props:[
      {
        componentType:'AutoSelect',
        propsName:'类型',
        props:'type',
        value:'default',
        controlProps:{
          options:[
            {label:'default',value:'default'},
            {label:'primary',value:'primary'},
            {label:'success',value:'success'},
            {label:'info',value:'info'},
            {label:'warning',value:'warning'},
            {label:'danger',value:'danger'},
          ]
        }
      },
    ],
    extra:[
      {
        componentType:'AutoInput',
        propsName:'文本',
        props:'text',
        value:'超链接'
      },
    ]
  }
}
export default ThLinkSet
