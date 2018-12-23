<template>
  <div>
    <span>{{ $store.getters['user/fullName'] }}</span>
    <button @click="$store.dispatch('user/updateName', 'abc')">Update user name</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
