import { ComponentSetProps } from "./interface"
import commonProps from "./commonProps"

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
