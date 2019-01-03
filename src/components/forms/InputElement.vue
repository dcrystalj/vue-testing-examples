<template>
  <div>
    <Input v-model="textInputData" />
    <button @click="onSubmit">submit</button>
  </div>
</template>

<script>
import { Input } from 'element-ui';

export default {
  components: {
    Input,
  },
  data() {
    return {
      textInputData: '',
    };
  },
  methods: {
    onSubmit() {
      this.$emit('submitted', this.textInputData);
    },
  },
};
</script>

<style></style>
