<script setup lang="ts">

const count =ref('123');

</script>

<template lang="pug">
  header
    BbCc
    div(class="wrapper")
      button(@click="count++") Add
      p {{count}}
      nav.row
        RouterLink(to="/home")
          button Home
        RouterLink(to="/about")
          button About
        RouterLink(to="/user")
          button User
        RouterLink(to="/user/123")
          button UserId

  RouterView(v-slot="{ Component }")
    Transition(name="layout" mode="out-in")
      component(:is="Component")
</template>

<style scoped lang="scss">
.row {
  @include row(10px);
}
</style>
