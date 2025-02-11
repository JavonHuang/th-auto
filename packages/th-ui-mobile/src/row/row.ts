import { withInstall } from "../withInstall"
import Row from "./row.vue"
import { Row as VanRow } from 'vant'
export const ThmRow = withInstall(Row)
export type ThmRowProps =  typeof VanRow & typeof ThmRow
export default ThmRow
