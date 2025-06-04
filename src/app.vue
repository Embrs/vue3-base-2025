<script setup lang="ts">
import Layout from './layout.vue';


</script>

<template lang="pug">
  Layout
    RouterView(v-slot="{ Component }")
      Transition(name="layout" mode="out-in")
        component(:is="Component")
</template>

<style scoped lang="scss">
.row {
  @include row(10px);
}
</style>
