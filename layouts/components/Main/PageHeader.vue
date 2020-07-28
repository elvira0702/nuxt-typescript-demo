<template>
  <el-page-header :class="{ disabled: disabled }" @back="goBack">
    <div slot="content" class="page-header-content">
      <bread-crumb />
    </div>
  </el-page-header>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BreadCrumb from './BreadCrumb.vue'

@Component({
  name: 'PageHeader',
  components: {
    BreadCrumb
  }
})
export default class extends Vue {
  private get disabled () {
    return this.$route.path === '/'
  }

  private goBack () {
    if (this.disabled) { return }
    this.$router.go(-1)
  }
}
</script>

<style>
.page-header-content {
  height: 100%;
  display: flex;
  align-items: center;
}
.disabled {
  color: #999999;
}
</style>
