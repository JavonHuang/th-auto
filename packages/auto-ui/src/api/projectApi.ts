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
}