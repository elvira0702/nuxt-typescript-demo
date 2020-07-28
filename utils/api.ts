import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { NuxtCookies } from 'cookie-universal-nuxt'

// eslint-disable-next-line import/no-mutable-exports
let $axios: NuxtAxiosInstance

export function initializeAxios (axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance
}

// eslint-disable-next-line import/no-mutable-exports
let $cookies: NuxtCookies

export function initializeCookies (cookiesInstance: NuxtCookies) {
  $cookies = cookiesInstance
}

export { $axios, $cookies }
