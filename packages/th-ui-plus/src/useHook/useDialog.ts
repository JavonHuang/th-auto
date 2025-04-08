import { ref,h,defineComponent, Component,provide, Plugin, createApp, Directive, defineAsyncComponent, InjectionKey } from 'vue';
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
interface IParams {
  component:() => Promise<Component>,
  keeplive?:boolean,
  fullscreen?:boolean,
  beforeClose?:()=>Promise<boolean>,
  ref?:any,
  title:any,
  draggable?:boolean,
  overflow?:boolean,
  width?:string|number,
  top?:string,
  modal?:boolean,
  callback?:()=>void, // 
  params?:any
}

interface DialogContext {
  close:()=>void,
  callback?:()=>void
}

export const dialogContextKey: InjectionKey<DialogContext> =
  Symbol('dialogContextKey')

export const useThDialog =(params:IParams)=>{
  let loadingInstance=null
  let rootDom = null
  let vm = null
  let extraParams = {}
  let isInit = false
  const visible=ref(false)
  const asyncComp = defineAsyncComponent(params.component)
  const elLoadingComponent = defineComponent({
    components:{
      component:params.component
    },
    setup(_, { expose }) {

      const close =()=>{
        visible.value = false
      }

      provide(dialogContextKey,{
        close:close,
        callback:params.callback
      })

      return () => {
        return h(ThDialog,{
          modelValue:visible.value,
          fullscreen:params.fullscreen,
          title:params.title,
          draggable:params.draggable,
          overflow:params.overflow,
          width:params.width,
          top:params.top,
          modal:params.modal,
          onClose:()=>{
            remove()
          },
          beforeClose:async (done: () => any)=>{
            if(params.beforeClose){
              const reslut = await params.beforeClose()
              if(reslut){
                done()
              }
            }else{
              done()
            }
          }
        },{
          default:()=>h(asyncComp,{ref:params.ref,params:{...params.params,...extraParams}})
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

  const open=(e:Object={})=>{
    extraParams = e
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