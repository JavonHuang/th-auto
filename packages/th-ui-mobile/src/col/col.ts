import { withInstall } from "../withInstall"
import Col from "./col.vue"
import { Col as VanCol } from 'vant'
export const ThmCol = withInstall(Col)
export type ThmColProps =  typeof VanCol & typeof ThmCol
export default ThmCol