<template>
  <div class="home-page">
    <div>
      <Logo />
      <h1 class="title">nuxt-ts-template</h1>
      <h2 class="subtitle">欢迎进入！</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  meta: {
    title: '首页',
    url: '/'
  }
})
export default class extends Vue {

}
</script>

<style scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 60px auto;
}
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
