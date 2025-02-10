import { withInstall } from "../withInstall"
import CheckboxGroup from "./checkboxGroup.vue"
import { ElCheckboxGroup } from 'element-plus'
export const ThCheckboxGroup = withInstall(CheckboxGroup)
export type ThCheckboxGroupProps =  typeof ElCheckboxGroup & typeof ThCheckboxGroup
export default ThCheckboxGroup
