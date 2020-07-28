<template>
  <div class="sidebar">
    <logo-icon :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="$nuxt.$route.path"
        :router="true"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :active-text-color="variables.menuActiveText"
        :unique-opened="true"
        :collapse-transition="false"
        :collapse="isCollapse"
        mode="vertical"
      >
        <el-menu-item index="/">
          <i class="el-icon-discover"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-submenu index="/moduleA">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>模块A</span>
          </template>
          <el-menu-item-group>
            <template slot="title">分组一</template>
            <el-menu-item index="/moduleA/page1">页面1</el-menu-item>
            <el-menu-item index="/moduleA/page2">页面2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="/moduleA/page3">页面3</el-menu-item>
            <el-menu-item index="/moduleA/page4">页面4</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/settings">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import LogoIcon from './LogoIcon.vue'
import { AppModule } from '@/store'

const variables = require('@/assets/styles/base-variables.scss')

@Component({
  name: 'Sidebar',
  components: {
    LogoIcon
  }
})
export default class extends Vue {
  private variables = variables
  private get isCollapse () {
    return !AppModule.sidebar.opened
  }

  private routes = [
    {
      title: '首页',
      path: '/'
    }, {
      title: '模块A',
      path: '/moduleA',
      children: [
        {
          title: '页面一',
          path: '/moduleA/page1'
        }, {
          title: '页面二',
          path: '/moduleA/page2'
        }, {
          title: '页面三',
          path: '/moduleA/page3'
        }, {
          title: '页面四',
          path: '/moduleA/page4'
        }
      ]
    }, {
      title: '设置',
      path: '/settings'
    }
  ]

  mounted () {
    // eslint-disable-next-line no-console
    console.log(this.$nuxt.context.route)
  }
}
</script>

<style lang="scss">
.sidebar {
  .scrollbar-wrapper {
    height: calc(100vh - 50px);
    background-color: $theme-color-light;
  }

  .el-submenu>.el-submenu__title,
  .el-submenu .el-menu-item {
    min-width: 64px !important;

    &:hover {
      background-color: $subMenuHover !important;
      color: $menuActiveText !important;
    }
  }
  .el-submenu__title, .el-menu-item {
    i{
      color: $menuText;
    }
    &:hover {
      background-color: $subMenuHover !important;
      color: $menuActiveText !important;
      i {
        color: $menuActiveText !important;
      }
    }
  }
  .el-menu-item.is-active i {
    color: $menuActiveText;
  }

  .el-menu-item.is-active {
    color: $menuActiveText;
  }

}
</style>
