<template>
  <div
    :class="[{'is-active': isActive}]"
    @click="toggleClick"
  >
    <el-button class="hamburger" type="text" icon="el-icon-s-unfold"></el-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'Hamburger'
})
export default class extends Vue {
  @Prop({ default: false }) private isActive!: boolean

  private toggleClick () {
    this.$emit('toggleClick')
  }
}
</script>

<style lang="scss" scoped>
.hamburger {
  font-size: 24px;
}

.is-active {
  transform: rotate(180deg);
}
</style>
