import { withInstall } from "../withInstall"
import RadioGroup from "./radioGroup.vue"
import { ElRadioGroup } from 'element-plus'
export const ThRadioGroup = withInstall(RadioGroup)
export type ThRadioGroupProps =  typeof ElRadioGroup & typeof ThRadioGroup
export default ThRadioGroup
