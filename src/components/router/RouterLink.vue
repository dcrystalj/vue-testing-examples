<template>
  <div>
    <router-link v-if="name === 'home'" :to="{name}">link to {{ name }}</router-link>
    <router-link v-else :to="{name: 'about'}">about</router-link>
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style>
</style>
