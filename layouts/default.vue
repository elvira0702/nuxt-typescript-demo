<template>
  <el-container>
    <el-aside :width="sidebarWidth">
      <sidebar class="sidebar-container" />
    </el-aside>
    <el-container>
      <el-header style="padding: 0">
        <header-view />
      </el-header>
      <el-main>
        <app-main />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { mixins } from 'vue-class-component'
import AppMain from './components/Main/index.vue'
import HeaderView from './components/Header/index.vue'
import Sidebar from './components/Sidebar/index.vue'
import ResizeMixin from './mixin/resize'

@Component({
  components: {
    HeaderView,
    AppMain,
    Sidebar
  },
  meta: {
    title: '首页'
  }
})
export default class extends mixins(ResizeMixin) {
  private get sidebarWidth () {
    return this.sidebar.opened ? '200px' : '64px'
  }
}
</script>

<style lang="scss">
.sidebar-container {
  transition: width 0.28s;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
