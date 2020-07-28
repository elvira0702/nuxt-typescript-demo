<template>
  <div>
    <nuxt-child />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  meta: {
    title: '模块A',
    url: '/moduleA'
  }
})
export default class extends Vue {

}
</script>
