<template>
  <div class="app-main">
    <page-header />
    <nuxt />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import PageHeader from './PageHeader.vue'

@Component({
  name: 'AppMain',
  components: {
    PageHeader
  }
})
export default class extends Vue {

}
</script>

<style scoped>
.app-main {
  min-height: calc(100vh - 100px);
}
</style>
