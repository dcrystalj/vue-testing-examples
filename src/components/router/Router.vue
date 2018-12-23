<template>
  <div>
    <span>{{ $route.params.id }}</span>
    <button @click="$router.replace('/about')"></button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
