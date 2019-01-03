<template>
  <div class="attributes">
    <a :href="url">{{ urlText }}</a>
  </div>
</template>

<script>
export default {
  name: 'Style',
  props: ['url', 'urlText'],
};
</script>

<style></style>
