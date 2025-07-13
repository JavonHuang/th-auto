<template>
  <div v-bind="$attrs" v-on:contextmenu.prevent="rightClick">
    <slot></slot>
  </div>
</template>
<script setup lang='ts'>
import { ref } from 'vue';

const dom =ref()
interface IQuery{
  menu?:Array<{name:string,type:string}>,
}
const props = withDefaults(defineProps<IQuery>(), {
  menu:()=>[],
})

const emits = defineEmits<{
  (e:'click',val:any):null
}>()

const rightClick = (e) => {
  if(dom.value){
    hideMenu()
  }
  if (props.menu && props.menu.length === 0) {
    return 
  }
  const ul = document.createElement("ul");
  ul.classList.add("custom-context-menu");

  for (let menu of props.menu) {
    const li = document.createElement("li");
    li.textContent = menu.name;
    li.onclick = function(){
      emits("click", menu)
    };
    ul.appendChild(li);
  }
  
  const body = document.querySelector("body");
  ul.style.top = `${e.clientY}px`;
  ul.style.left = `${e.clientX}px`;
  body!.appendChild(ul);
  dom.value = ul
  document.addEventListener("click", hideMenu);
}

const hideMenu = () => {
  document.removeEventListener("click", hideMenu);
  dom.value .remove();
  dom.value = null
}
</script>

<style lang='scss'>
  .custom-context-menu{
    position: fixed;
    background: #fff;
    border-radius: 4px;
    padding: 8px 8px;
    box-shadow: 0px 12px 32px 4px rgba(0, 0, 0, .04), 0px 8px 20px rgba(0, 0, 0, .08);
    li{
      border-bottom: 1px solid #dcdfe6;
      padding: 8px 4px;
      cursor: pointer;
      font-size: 12px;
    }
  }
</style>