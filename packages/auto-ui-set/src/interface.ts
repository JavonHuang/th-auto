/**
 * getRef 获取原elementplus组件Ref
 */
interface ThRef<T>{
  getRef:()=>T
}
interface IComponentProps{
  [key: string]: any;
}

interface IComponentEvent{
  /**
   * @change Function 值变更触发
   */
  change?:(...argms:Array<any>)=>void,
  /**
   * @focus Function 在组件 Input 获得焦点时触发
   */
  focus?:(e: FocusEvent)=>void,
  /**
   * @blur Function 在组件 Input 获得焦点时触发
  */
  blur?:(e: FocusEvent)=>void,
  /**
   * @clear Function 在组件 Input 获得焦点时触发
  */
  clear?:()=>void,
  /**
   * @visibleChange Function 下拉列表出现/消失时触发
  */
  visibleChange?:(visibility: boolean) => void,
  [key: string]: any;
}

type columnType=''|'ThInput'|'ThDatePicker'|'ThSelect';

export type{
  ThRef,
  IComponentProps,
  IComponentEvent,
  columnType
}

type componentType='Input'|'InputNumber';
export  interface SetProps{
  //输入类型
  componentType:componentType,
  //对应组件的属性描述
  propsName:string,
  //对应组件的属性key
  props:string,
  //对应组件的属性的值
  value:any
}

export interface ComponentSetProps{
  style:Array<SetProps>,
  props:Array<SetProps>,
  extra:Array<SetProps>
}