import { ref,h,defineComponent, Component, Plugin,resolveComponent, createApp, Directive, defineAsyncComponent } from 'vue';
import ThDialog from '../dialog/dialog';

export const SingletonAPP:{
    pluginList:Array<Plugin>,
    directiveList:Array<{name: string, directive: Directive<any, any, string, string>}>,
    addPlugin:(plugin:Plugin)=>void,
    getPlugin:()=>Array<Plugin>,
    addDirective:(name: string, directive: Directive<any, any, string, string>)=>void,
    getDirective:()=>Array<{name: string, directive: Directive<any, any, string, string>}>,
  }={
  pluginList:[],
  directiveList:[],
  addPlugin(plugin:Plugin){
    this.pluginList.push(plugin)
  },
  getPlugin(){
    return this.pluginList
  },
  addDirective(name: string, directive: Directive<any, any, string, string>){
    this.directiveList.push({
      name:name,
      directive:directive
    })
  },
  getDirective(){
    return this.directiveList
  },
}


// function useThDialog<T extends ComponentType>(componentPromise: Promise<T>): ReturnType {  
//   // 实现  
// }

export const useThDialog =(component:  () => Promise<Component>)=>{
  let loadingInstance=null
  let rootDom = null
  let vm = null
  let isInit = false

  const visible=ref(false)
  const asyncComp = defineAsyncComponent(component)
  const elLoadingComponent = defineComponent({
    components:{
      component
    },
    setup(_, { expose }) {
      return () => {
        return h(ThDialog,{
          modelValue:visible.value,
          onClose:()=>{
            remove()
          }
        },{
          default:()=>h(asyncComp)
        })
      }
    },
    
  })
  
  const init =()=>{
    loadingInstance = createApp(elLoadingComponent)
    SingletonAPP.pluginList.forEach((plugin) => {
      loadingInstance!.use(plugin)
    })
    SingletonAPP.directiveList.forEach((directiveMap) => {
      loadingInstance!.directive(directiveMap.name,directiveMap.directive)
    })
    rootDom=document.createElement('div')
    document.body.appendChild(rootDom!)
    vm= loadingInstance.mount(rootDom!)
  }

  const remove =()=>{
    isInit=false
    visible.value=false
    loadingInstance!.unmount()
    rootDom!.remove()
    loadingInstance = null
  }

  const open=()=>{
    if(!isInit){
      init()
    }
    visible.value=true
  }

  return {
    open,
    get $el(): HTMLElement {
      return vm!.$el
    },
  }
}