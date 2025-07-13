import { createApp,Component,Plugin, Directive } from 'vue'
import { SingletonAPP } from './useHook/useDialog'

export function thCreateApp(rootComponent: Component){
  const app = createApp(rootComponent)
  const methods = {
    use(plugin: Plugin<[]>){
      app.use(plugin)
      SingletonAPP.addPlugin(plugin)
      return this
    },
    directive(name: string, directive: Directive<any, any, string, string>){
      app.directive(name,directive)
      SingletonAPP.addDirective(name,directive)
      return this
    },
    mount(rootContainer: HTMLElement | string){
      app.mount(rootContainer)
    },
    component:app.component
  }
  return {
   ...methods
  }
}