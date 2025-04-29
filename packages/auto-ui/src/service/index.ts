import { ThMessage } from "th-ui-plus";
import BaseRequest from "./baseRequest"
/**
 *none 增删查改
 */
type Ilevel=0|1|2|3|4
const baseRequest=new BaseRequest({
  withCredentials: true ,
  request:(e)=>{
    // console.log(e)
    return e;
  },
  requestError:(e)=>{
    // console.log(e)
    return Promise.reject(e);
  },
  response:(e)=>{
    // console.log(e)
    return e;
  },
  responseError:(e)=>{
    // console.log(e)
    return Promise.reject(e);
  },
})

const post = (url: string, data: any = {}, config: object = {},level:Ilevel=0): Promise<any> => {
  return new Promise((resolve, reject) => {
    baseRequest.post(url, data, config).then(res => { 
      if (res.data.code == 200) {
        showMsg(level)
        resolve(res.data)
      } else { 
        reject()
      }
    }).catch(err => { 
      console.log(err)
    });
  })
}

const get = (url: string, data: any = {}, config: object = {},level:Ilevel=0): Promise<any> => {
  return new Promise((resolve, reject) => {
    baseRequest.get(url,data,config).then(res => { 
      if (res.data.code == 200) {
        showMsg(level)
        resolve(res.data)
      } else { 
        reject()
      }
    });
  })
}

const request=(config: {url: string,data:any , type:'post'|'get'},level:Ilevel=0): Promise<any> =>{
  switch(config.type){
    case 'get':
      return get(config.url,config.data??{},{},level);
    case 'post':
      return post(config.url,config.data??{},{},level);
    default:
      return post(config.url,config.data??{},{},level);
  }
}

const showMsg =(level:Ilevel)=>{
  switch(level){
    case 0:
      break;
    case 1:
      ThMessage.success('保存成功')
      break;
    case 2:
      ThMessage.success('删除成功')
      break;
    case 3:
      break;
    case 4:
      ThMessage.success('修改成功')
    break;
  }
}

export  {request};