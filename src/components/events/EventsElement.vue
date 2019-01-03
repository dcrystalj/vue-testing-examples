<template>
  <div><Button @click="onClick">Click me</Button></div>
</template>

<script>
import { Button } from 'element-ui';

export default {
  components: {
    Button,
  },
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
