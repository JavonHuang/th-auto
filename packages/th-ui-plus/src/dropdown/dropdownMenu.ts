import { withInstall } from "../withInstall"
import DropdownMenu from "./dropdownMenu.vue"
import { ElDropdownMenu } from 'element-plus'
export const ThDropdownMenu = withInstall(DropdownMenu)
export type ThDropdownMenuProps =  typeof ElDropdownMenu & typeof ThDropdownMenu
export default ThDropdownMenu
