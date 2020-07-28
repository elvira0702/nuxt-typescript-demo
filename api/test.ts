import { $axios } from '@/utils/api'

export const getErrorStatus = (params: { code: number }) =>
  $axios({
    url: '/test/error',
    method: 'get',
    params
  })
