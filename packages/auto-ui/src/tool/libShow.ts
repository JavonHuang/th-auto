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
        isModel:false,
      },
      {
        name: "列",
        code: "ThCol",
        targetDragalble: true,
        isInit:false,
        isModel:false,
      },
      {
        name: "Flex容器",
        code: "ThFlex",
        targetDragalble: true,
        isInit:false,
        isModel:false,
      }
    ]
  },
  {
    group: "2",
    groupName: "Basic 基础组件",
    components: [
      {
        name: "链接​",
        code: "ThLink",
        targetDragalble: false,
        isInit:false,
        isModel:false,
      },
      {
        name: "按钮",
        code: "ThButton",
        targetDragalble: false,
        isInit:false,
        isModel:false,
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
        isModel:false,
      },
      {
        name: "表单项",
        code: "ThFormItem",
        targetDragalble: true,
        isInit:false,
        isModel:false,
      },
      {
        name: "级联选择器",
        code: "ThCascader",
        targetDragalble: false,
        isInit:false,
        isModel:true,
      },
      {
        name: "勾选框",
        code: "ThCheckbox",
        targetDragalble: false,
        isInit:false,
        isModel:true,
      },
      {
        name: "颜色选择器",
        code: "ThColorPicker",
        targetDragalble: false,
        isInit:false,
        isModel:true,
      },
      {
        name: "日期选择器",
        code: "ThDatePicker",
        targetDragalble: false,
        isInit:false,
        isModel:true,
      },
      {
        name: "输入框",
        code: "ThInput",
        targetDragalble: false,
        isInit:false,
        isModel:true,
      },
      {
        name: "数字输入框",
        code: "ThInputNumber",
        targetDragalble: false,
        isInit:false,
        isModel:true,
      },
    ]
  },
  {
    group: "4",
    groupName: "data 数据展示",
    components:[
      {
        name: "表格",
        code: "ThQueryTable",
        targetDragalble: true,
        isInit:false,
        isModel:false,
        props: {

        }
      },
    ]
  }
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