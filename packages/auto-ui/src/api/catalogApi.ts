import { request } from '@/service';
export default {
  queryCatalog(data: { projectId: string }) {
    return request({
      url: '/api/catalog/queryCatalog',
      type: 'post',
      data
    })
  },
  addCatalog(data:any) {
    return request({
      url: '/api/catalog/addCatalog',
      type: 'post',
      data
    })
  },
  deleteCatalog(data: Array<string>) {
    return request({
      url: '/api/catalog/deleteCatalog',
      type: 'post',
      data
    })
  },
  getCatalogFile(data:any){
    return request({
      url: '/api/catalog/getCatalogFile',
      type: 'post',
      data
    })
  },
  saveCatalogFile(data:any){
    return request({
      url: '/api/catalog/saveCatalogFile',
      type: 'post',
      data
    },4)
  }
}