<template>
  <el-breadcrumb separator="/">
    <template v-if="breadCrumbs && breadCrumbs.length > 0">
      <el-breadcrumb-item v-for="(item, i) in breadCrumbs" :key="i">{{ item.title }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'

@Component({
  name: 'BreadCrumb'
})
export default class extends Vue {
  private breadCrumbs: any = []

  @Watch('$route', { immediate: true })
  private getBreadCrumbs () {
    // eslint-disable-next-line no-console
    this.breadCrumbs = this.$nuxt.context.route.meta
  }
}
</script>

<style>
</style>
