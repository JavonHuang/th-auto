import { ComponentSetProps } from "./interface"
import {commonStyle} from "./commonSet"

const ThRowSet=():ComponentSetProps=>{
  return {
    style:[
      ...commonStyle,
    ],
    props:[
    ],
    extra:[]
  }
}
export default ThRowSet