<template>
  <div>
    <h3>radio buttons</h3>
    <input v-model="color" type="radio" value="0" />red
    <input v-model="color" type="radio" value="1" />blue
    <input v-model="color" type="radio" value="2" />yellow
    <button @click="onSubmit">submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: 0,
    };
  },
  methods: {
    onSubmit() {
      this.$emit('submitted', this.color);
    },
  },
};
</script>

<style></style>
