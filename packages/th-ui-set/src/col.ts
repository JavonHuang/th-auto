import { ComponentSetProps } from "./interface"
import {commonStyle} from "./commonSet"

const ThColSet=():ComponentSetProps=>{
  return {
    style:[
      ...commonStyle
    ],
    props:[
      {
        componentType:'AutoNumber',
        propsName:'列宽',
        props:'span',
        value:12
      }
    ],
    extra:[]
  }
}
export default ThColSet
