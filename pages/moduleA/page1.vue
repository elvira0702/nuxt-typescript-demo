<template>
  <div class="app-container">
    <p>{{ content }}</p>
    <div class="error-test">
      <h3 class="text-title">请求状态错误模拟：</h3>
      <el-button type="primary" @click="getErrorStatus(400)">400</el-button>
      <el-button type="success" @click="getErrorStatus(401)">401</el-button>
      <el-button type="warning" @click="getErrorStatus(403)">403</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getPageContent, getErrorStatus } from '@/api'

@Component({
  meta: {
    title: '页面一',
    url: '/moduleA/page1'
  },
  async asyncData () {
    const res = await getPageContent({ type: 1 })
    return {
      content: res.data.content
    }
  }
})
export default class extends Vue {
  private content: string = ''

  private async getErrorStatus (code: number) {
    try {
      await getErrorStatus({ code })
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
    }
  }
}
</script>

<style lang="scss" scoped>
.error-test {
  padding: 20px 0;
  .text-title {
    padding: 10px 0;
  }
}
</style>
