import { ComponentSetProps } from "./interface"
import {commonProps,commonStyle} from "./commonSet"

const ThColorPickerSet=():ComponentSetProps=>{
  return {
    style:[
      ...commonStyle
    ],
    props:[
      ...commonProps
    ],
    extra:[]
  }
}
export default ThColorPickerSet
