# nuxt-typescript-demo

nuxt.js + typescript + vuex，最近从零到一开发了一个门户网站，因对seo有要求，所以选择nuxt.js搭配typescript，期间遇到不少问题，最终都一一解决了，留下一个demo供参考，希望能帮到有需要的人。
附上我的原创总结：https://segmentfault.com/a/1190000023403163

# $axios

使用nuxt.js的axios模块，并在plugins中对axios拦截逻辑中初始化$axios对象供全局使用

# cookie-universal-nuxt

使用cookie-universal-nuxt，解决服务端获取不到cookie导致服务端渲染时拿不到cookie中缓存的token问题

# middleware/auth.ts

使用路由中间件实现路由鉴权逻辑

...

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
