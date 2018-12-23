<template>
  <div>
    <h3>radio buttons</h3>
    <input type="radio" v-model="color" value="0">red
    <input type="radio" v-model="color" value="1">blue
    <input type="radio" v-model="color" value="2">yellow
    <button @click="onSubmit">submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: 0
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submitted", this.color);
    }
  }
};
</script>

<style>
</style>
