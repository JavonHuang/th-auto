import { withInstall } from "../withInstall"
import Button from "./button.vue"
import { Button as VanButton } from 'vant'
export const ThmButton = withInstall(Button)
export type ThmButtonProps =  typeof VanButton & typeof ThmButton
export default ThmButton
