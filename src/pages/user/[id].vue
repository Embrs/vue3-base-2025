<script setup lang="ts">
// PageUserId 請填寫功能描述👈
const route = useRoute();
const id = computed(() => route.params.id);
</script>

<template lang="pug">
.PageUserId
  p PageUserId
  p ID:{{id}}
</template>

<style lang="scss" scoped>
// 佈局 ----
.PageUserId {
  // TODO
}

// 組件 ----
</style>
