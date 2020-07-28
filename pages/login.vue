<template>
  <div class="login">
    <div>
      <Logo />
    </div>
    <div class="login-box">
      <h1 class="title">用户登录</h1>
      <el-form :model="loginModel" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="loginModel.username" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密 码">
          <el-input v-model="loginModel.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width:100%" type="primary" @click="login">登 录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { Route } from 'vue-router'
import { Dictionary } from 'vue-router/types/router'
import { UserModule } from '~/store'

@Component({
  layout: 'auth',
  meta: {
    title: '登录',
    url: '/login'
  }
})
export default class extends Vue {
  private loginModel: any = {
    username: '',
    password: ''
  }

  private redirect?: string
  private otherQuery: Dictionary<string> = {}

  @Watch('$route', { immediate: true })
  private onRouteChange (route: Route) {
    const query = route.query as Dictionary<string>
    if (query) {
      this.redirect = query.redirect
      this.otherQuery = this.getOtherQuery(query)
    }
  }

  private getOtherQuery (query: Dictionary<string>) {
    return Object.keys(query).reduce((acc, cur) => {
      if (cur !== 'redirect') {
        acc[cur] = query[cur]
      }
      return acc
    }, {} as Dictionary<string>)
  }

  private async login () {
    try {
      const params = { ...this.loginModel }
      await UserModule.Login(params)
      this.$router.push({
        path: this.redirect || '/',
        query: this.otherQuery
      })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e.message)
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  margin: 0 auto;
  min-height: calc(100vh - 100px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 20px;
  color: #35495e;
  letter-spacing: 1px;
  padding: 10px 0;
}

.login-box {
  width: 400px;
  padding: 10px;
  border: 1px solid $theme-color-light;
}
</style>
