import { ref,h,defineComponent, Component, render, resolveComponent } from 'vue';
import ThDialog from '../dialog/dialog';

export const useThDialog =(component: Component,instance)=>{
  const visible=ref(false)
  const elLoadingComponent = defineComponent({
    components:{
      component
    },
    setup(_, { expose }) {
      return () => {
        return h(ThDialog,{
          modelValue:visible.value,
          onClose:()=>{
            visible.value=false
          }
        },{
          default:()=>h(component)
        })
      }
    }
  })

  // const loadingInstance = createApp(elLoadingComponent)
  // const dom=document.createElement('div')
  // document.body.appendChild(dom)
  // const vm = loadingInstance.mount(dom)
  const init=()=>{
    render(h(elLoadingComponent),instance.ctx.$el)
  }

  const open=()=>{
    visible.value=true
  }

  return {
    init,
    open,
    get $el(): HTMLElement {
      return vm.$el
    },
  }
}