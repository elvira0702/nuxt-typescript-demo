import { Middleware } from '@nuxt/types'
import { UserModule } from '@/store'

// 权限相关逻辑
const auth: Middleware = ({ route, redirect }) => {
  if (UserModule.token) {
    if (route.path === '/login') {
      return redirect('/')
    }
    if (UserModule.userInfo === '') {
      try {
        return UserModule.GetUserInfo()
      } catch {}
    }
  } else if (route.path !== '/login') {
    return redirect({
      path: '/login',
      query: { redirect: route.fullPath }
    })
  }
}

export default auth
