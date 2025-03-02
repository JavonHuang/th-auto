import { withInstall } from "../withInstall"
import Cascader from "./cascader.vue"
import { ElCascader } from 'element-plus'
export const ThCascader = withInstall(Cascader)
export type ThCascaderProps =  typeof ElCascader & typeof ThCascader
export default ThCascader
