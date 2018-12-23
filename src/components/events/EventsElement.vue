<template>
  <div>
    <Button @click="onClick">Click me</Button>
  </div>
</template>

<script>
import { Button } from "element-ui";

export default {
  data() {
    return {
      cnt: 0
    };
  },
  props: ["callPropFn"],
  methods: {
    onClick() {
      this.cnt++;
      this.$emit("onEmittedEvent", this.cnt);
      this.cnt++;
      this.callPropFn(this.cnt);
    }
  },
  components: {
    Button
  }
};
</script>

<style>
</style>
