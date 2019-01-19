<template>
  <div>
    <Input v-model="textInputData"/>
    <Button @click="onSubmit">submit</Button>
  </div>
</template>

<script>
import { Input, Button } from 'element-ui';

export default {
  components: {
    Input,
    Button,
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
