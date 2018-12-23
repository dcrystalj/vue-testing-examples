<template>
  <div>{{ date }}</div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date()
    };
  },
  mounted() {
    setTimeout(() => {
      this.date = new Date(this.date.getTime() + 1000);
    }, 1000);
  }
};
</script>

<style>
</style>
