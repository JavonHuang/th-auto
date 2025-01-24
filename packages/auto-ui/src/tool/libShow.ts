import { componentProps } from "./interface";

export const libShow:Array<IlibSHow>=  [
  {
    group: "1",
    groupName: "布局",
    components: [
      {
        name: "行",
        code: "ThRow",
        dragalble: true,
        isInit:false,
        props: {
        }
      },
      {
        name: "列",
        code: "ThCol",
        dragalble: true,
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
        text: "Default",
        dragalble: false,
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
        text: "",
        dragalble: true,
        isInit:false,
        props: {
        }
      },
      {
        name: "表单项",
        code: "ThFormItem",
        text: "",
        dragalble: true,
        isInit:false,
        props: {
        }
      },
      {
        name: "输入框",
        code: "ThInput",
        text: "",
        dragalble: false,
        isInit:false,
        props: {
          value:'输入框'
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