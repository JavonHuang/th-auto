import { ComponentSetProps } from "./interface"
import {commonStyle} from "./commonSet"

const ThRowSet=():ComponentSetProps=>{
  return {
    style:[
      ...commonStyle,
      {
        componentType:'Input',
        propsName:'背景色',
        props:'backgroundColor',
        value:'#fff'
      }
    ],
    props:[
    ],
    extra:[]
  }
}
export default ThRowSet