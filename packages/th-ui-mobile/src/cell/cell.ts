import { withInstall } from "../withInstall"
import Cell from "./cell.vue"
import { Cell as VanCell } from 'vant'
export const ThmCell = withInstall(Cell)
export type ThmCellProps =  typeof VanCell & typeof ThmCell
export default ThmCell
