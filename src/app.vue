<script setup lang="ts">

const aa =ref('123');

</script>

<template lang="pug">
  header
    BbCc
    div(class="wrapper")
      HelloWorld(msg="aaaa!")
      button(@click="aa++") Add
      p {{aa}}
      nav
        RouterLink(to="/home") Home
        RouterLink(to="/about") About

  RouterView(v-slot="{ Component }")
    Transition(name="layout" mode="out-in")
      component(:is="Component")
</template>

<style scoped>

</style>
