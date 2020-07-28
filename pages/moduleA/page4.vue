<template>
  <div class="app-container">{{ content }}</div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { getPageContent } from '@/api'

@Component({
  meta: {
    title: '页面四',
    url: '/moduleA/page4'
  },
  async asyncData () {
    const res = await getPageContent({ type: 4 })
    return {
      content: res.data.content
    }
  }
})
export default class extends Vue {
  private content: string = ''
}
</script>

<style>

</style>
