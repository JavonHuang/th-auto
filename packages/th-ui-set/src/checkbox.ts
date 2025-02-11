import { ComponentSetProps } from "./interface"
import {commonProps,commonStyle} from "./commonSet"

const ThCheckboxSet=():ComponentSetProps=>{
  return {
    style:[],
    props:[
      ...commonProps
    ],
    extra:[]
  }
}
export default ThCheckboxSet
