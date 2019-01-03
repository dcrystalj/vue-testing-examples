<template>
  <div>
    <RouterLink v-if="name === 'home'" :to="{ name }"
      >link to {{ name }}</RouterLink
    >
    <RouterLink v-else :to="{ name: 'about' }">about</RouterLink>
  </div>
</template>

<script>
export default {
  props: ['name'],
};
</script>

<style></style>
