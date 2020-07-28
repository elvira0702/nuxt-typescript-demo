<template>
  <div class="error-page">
    <nuxt-child />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { NuxtError } from '@nuxt/types'

// 可在这个页面中做错误状态码相关处理
@Component
export default class extends Vue {
  @Prop() private error!: any

  @Watch('error', { immediate: true })
  private handleError (error: NuxtError) {
    if (error.statusCode === 403) {
      return this.$router.push('/403')
    } else if (error.statusCode === 404) {
      return this.$router.push('/404')
    }
    try {
      this.$confirm(error.message || '', '出错啦！', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'error'
      }).then(() => {
        location.reload()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
    } catch {}
  }
}
</script>

<style lang="scss" scoped>
.error-page {
}
</style>
