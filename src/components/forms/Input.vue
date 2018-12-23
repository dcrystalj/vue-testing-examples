<template>
  <div>
    <input type="text" v-model="textInputData">
    <button @click="onSubmit">submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textInputData: ""
    };
  },
  methods: {
    onSubmit() {
      this.$emit("submitted", this.textInputData);
    }
  }
};
</script>

<style>
</style>
