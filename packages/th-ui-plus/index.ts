import components from './src/index.ts'
import componentSets from './config/index.ts'

// 插件声明：声明所有插件
// 插件注册：在 Vue 项目的入口文件中，通过 ( app.use(插件) ) 进行注册
const installComponents: any = (app: App) => {
  // components.forEach((comp: any) => {
  //   app.component(comp.name as string, comp)
  // })
  //   app.use(ElementPlus, {
  //     locale // 语言设置
  //   // size: Cookies.get('size') || 'medium' // 设置默认尺寸
  // })
  let obj = {...components,...componentSets}
  for (const key in obj) {
    app.component(key, obj[key])
  }
}
// vue插件
// - install：每个插件都有一个 install 方法
// - 参数：是通过 Vue.createApp() 创建的 app 实例
const install: any = (app: any, _router?: any) => {
  // !router && installRouter(app);
  installComponents(app)
}
// @ts-ignore
if (typeof window !== "undefined" && window.Vue) {
  // @ts-ignore
  install(window.Vue)
}
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install
}

export {generateID} from './src/tool/index.ts'

export {useFormAuto} from './src/hook/useFormAuto.ts'

export type {ThRef} from "./src/common.ts"
export type {QueryColumnsProps} from "./src/query/query.ts"
export type {IQueryTableColumn,QueryTableInstance} from './src/queryTable/queryTable.ts'
export type {FormAutoColumnsProps,ThFormAutoInstance} from './src/formAuto/formAuto.ts'

export {useThDialog,dialogContextKey} from './src/useHook/useDialog.ts'
export * from './src/install.ts'
export {ThMessage} from "./src/message/message.ts"
export { ThExcel } from './src/excel/excel.ts'