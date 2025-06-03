<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';

const aa =ref('123');

</script>

<template lang="pug">
  header
    img(alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125")

    div(class="wrapper")
      HelloWorld(msg="You did it!")
      p {{aa}}
      nav
        RouterLink(to="/") Home
        RouterLink(to="/about") About

  RouterView
</template>

<style scoped>

</style>
