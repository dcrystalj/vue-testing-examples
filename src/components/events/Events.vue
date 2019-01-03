<template>
  <div><button @click="onClick">Click me</button></div>
</template>

<script>
export default {
  props: ['callPropFn'],
  data() {
    return {
      cnt: 0,
    };
  },
  methods: {
    onClick() {
      this.cnt++;
      this.$emit('onEmittedEvent', this.cnt);
      this.cnt++;
      this.callPropFn(this.cnt);
    },
  },
};
</script>

<style></style>
