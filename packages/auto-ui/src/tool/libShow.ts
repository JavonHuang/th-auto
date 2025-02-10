import { componentProps } from "./interface";

export const libShow:Array<IlibSHow>=  [
  {
    group: "1",
    groupName: "布局",
    components: [
      {
        name: "行",
        code: "ThRow",
        targetDragalble: true,
        isInit:false,
        props: {
        }
      },
      {
        name: "列",
        code: "ThCol",
        targetDragalble: true,
        isInit:false,
        props: {
          span:24
        }
      }
    ]
  },
  {
    group: "2",
    groupName: "Basic 基础组件",
    components: [
      {
        name: "按钮",
        code: "ThButton",
        targetDragalble: false,
        isInit:false,
        props: {
          type:'primary'
        }
      },
    ]
  },
  {
    group: "3",
    groupName: "Form 表单组件",
    components: [
      {
        name: "表单",
        code: "ThForm",
        targetDragalble: true,
        isInit:false,
        props: {
        }
      },
      {
        name: "表单项",
        code: "ThFormItem",
        targetDragalble: true,
        isInit:false,
        props: {
        }
      },
      {
        name: "输入框",
        code: "ThInput",
        targetDragalble: false,
        isInit:false,
        props: {
          value:'输入框'
        }
      },
      {
        name: "勾选框",
        code: "ThCheckbox",
        targetDragalble: false,
        isInit:false,
        props: {
          value:false
        }
      },
    ]
  },
]

interface IlibSHow { 
  group: string,
  groupName: string,
  components: Array<componentProps>
}

export const findLib = (code:string):componentProps|undefined => { 
  for (let i = 0; i < libShow.length; i++) { 
    for (let j = 0; j < libShow[i].components.length; j++) { 
      if (libShow[i].components[j].code == code) { 
        return JSON.parse(JSON.stringify(libShow[i].components[j]));
      }
    }
  }
}