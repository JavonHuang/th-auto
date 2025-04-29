import { withInstall } from "../withInstall"
import TabPane from "./tabPane.vue"
import { ElTabPane } from 'element-plus'
export const ThTabPane = withInstall(TabPane)
export type ThTabPaneProps = typeof ElTabPane & typeof ThTabPane
export default ThTabPane   
