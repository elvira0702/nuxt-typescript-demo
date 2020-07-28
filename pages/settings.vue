<template>
  <div>
    <el-calendar v-model="value"></el-calendar>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  meta: {
    title: '设置',
    url: '/settings'
  }
})
export default class extends Vue {
  private value = new Date()
}
</script>

<style>
</style>
