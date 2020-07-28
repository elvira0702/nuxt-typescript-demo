import { Plugin } from '@nuxt/types'
import { AxiosResponse, AxiosRequestConfig, AxiosError } from 'axios'
import { initializeAxios, initializeCookies } from '~/utils/api'
import { UserModule } from '@/store'

const accessor: Plugin = ({ error, app: { $axios, $cookies } }) => {
  initializeAxios($axios)
  initializeCookies($cookies)

  $axios.onRequest((config: AxiosRequestConfig) => {
    if (UserModule.token) {
      config.headers.Token = UserModule.token
    }
    return config
  })
  $axios.onError((err: AxiosError<any>) => {
    // eslint-disable-next-line no-console
    console.log(err.message)
  })
  // response拦截器，数据返回后，你可以先在这里进行一个简单的判断
  $axios.interceptors.response.use((response: AxiosResponse<any>) => {
    const res = response
    if (res.status === 200) {
      return res
    } else {
      error({ statusCode: res.status, message: res.data.msg })
      return Promise.reject(res)
    }
  },
  (err: any) => {
    const { status, data } = err.response
    error({ statusCode: status, message: data.msg })
    return Promise.reject(err)
  })
}

export default accessor
