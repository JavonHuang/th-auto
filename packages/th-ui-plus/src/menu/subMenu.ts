import { withInstall } from "../withInstall"
import SubMenu from "./subMenu.vue"
import { ElSubMenu } from 'element-plus'
export const ThSubMenu = withInstall(SubMenu)
export type ThSubMenuProps =  typeof ElSubMenu & typeof ThSubMenu
export default ThSubMenu
