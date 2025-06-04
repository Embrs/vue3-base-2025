<script setup lang="ts">

const aa =ref('123');

</script>

<template lang="pug">
  header
    //- img(alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125")

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
