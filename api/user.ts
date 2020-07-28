import { $axios } from '@/utils/api'

// 用户登录
export const login = (data: any) =>
  $axios({
    url: '/user/login',
    method: 'post',
    data
  })

// 用户登出
export const logout = () =>
  $axios({
    url: '/user/logout',
    method: 'get'
  })

// 获取用户信息
export const getUserInfo = () =>
  $axios({
    url: '/user/query',
    method: 'get'
  })
