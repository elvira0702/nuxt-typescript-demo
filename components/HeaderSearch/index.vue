<template>
  <div id="header-search" class="header-search show">
    <el-input
      v-model="search"
      prefix-icon="el-icon-search"
      placeholder="搜索"
      class="header-search-input"
    >
    </el-input>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'HeaderSearch'
})
export default class extends Vue {
  private search: string = ''
}
</script>

<style lang="scss" scoped>
.header-search {
  font-size: 0 !important;

  .header-search-input {
    font-size: 14px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    .el-input__inner {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }

  &.show {
    .header-search-input {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
