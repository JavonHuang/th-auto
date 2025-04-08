import { request } from '@/service';
export default {
  pageList(data: { name: string }) {
    return request({
      url: '/api/project/pageList',
      type: 'post',
      data
    })
  },
  queryMenu(data={}) {
    return request({
      url: '/api/project/queryProjectList',
      type: 'post',
      data
    })
  },
  addProject(data: Array<{ name: string}>) {
    return request({
      url: '/api/project/addProject',
      type: 'post',
      data
    })
  },
  deleteProject(data: Array<string>) {
    return request({
      url: '/api/project/deleteProject',
      type: 'post',
      data
    })
  },
  updateProject(data: any) {
    return request({
      url: '/api/project/updateProject',
      type: 'post',
      data
    })
  },
  getDetail(data: any) {
    return request({
      url: '/api/project/getDetail',
      type: 'post',
      data
    })
  },
}