import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { Notification } from 'element-ui'
import { login, logout, getUserInfo } from '@/api'
import { getToken, setToken, removeToken } from '@/utils/cookies'

@Module({
  name: 'user',
  namespaced: true,
  stateFactory: true
})
export default class App extends VuexModule {
  public token: string = ''
  public userInfo: any = ''

  public get username () {
    return this.userInfo.username || ''
  }

  public get avatar () {
    return this.userInfo.avatar || ''
  }

  @Mutation
  private SET_TOKEN (token: string) {
    this.token = token
    setToken(token)
  }

  @Mutation
  private SET_USERINFO (userInfo: any) {
    this.userInfo = userInfo
  }

  @Action
  public SetToken () {
    this.SET_TOKEN(getToken() || '')
  }

  @Action
  public ResetToken () {
    removeToken()
    this.SET_TOKEN('')
  }

  @Action
  public async Login (loginInfo: any) {
    try {
      const { data } = await login(loginInfo)
      this.SET_TOKEN(data.token)
      Notification.success({
        title: '成功',
        message: '登录成功！'
      })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }

  @Action
  public async GetUserInfo () {
    try {
      const { data } = await getUserInfo()
      this.SET_USERINFO(data)
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }

  @Action
  public async LogOut () {
    try {
      await logout()
      Notification.success({
        title: '成功',
        message: '登出成功！'
      })
      removeToken()
      this.SET_TOKEN('')
      this.SET_USERINFO('')
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(3)
    }
  }
}
