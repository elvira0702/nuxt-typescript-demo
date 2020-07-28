import { $axios } from '@/utils/api'

// 获取页面内容
export const getPageContent = (params: { type: number }) =>
  $axios({
    url: '/module/content',
    method: 'get',
    params
  })
