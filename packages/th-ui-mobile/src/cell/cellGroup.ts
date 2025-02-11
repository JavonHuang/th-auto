import { withInstall } from "../withInstall"
import CellGroup from "./cellGroup.vue"
import { CellGroup as VanCellGroup } from 'vant'
export const ThmCellGroup = withInstall(CellGroup)
export type ThmCellGroupProps =  typeof VanCellGroup & typeof ThmCellGroup
export default ThmCellGroup
