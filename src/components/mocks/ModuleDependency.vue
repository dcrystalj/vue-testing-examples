<template>
  <div>{{ message }}</div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: '',
    };
  },
  mounted() {
    axios.post('/abcd').then(response => {
      this.message = response;
    });
  },
};
</script>

<style></style>
