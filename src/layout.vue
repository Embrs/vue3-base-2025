<script setup lang="ts">
// Layout
const count =ref('123');
</script>

<template lang="pug">
.Layout
  header
    BbCc
    div(class="wrapper")
      button(@click="count++") Add
      p {{count}}
      nav.nav-row
        RouterLink(to="/home")
          button Home
        RouterLink(to="/about")
          button About
        RouterLink(to="/user")
          button User
        RouterLink(to="/user/123")
          button UserId
  slot
  
</template>

<style lang="scss" scoped>
// 佈局 ----
.Layout {
 .nav-row {
    @include row(10px);
  }
}
// 組件 ----
</style>
