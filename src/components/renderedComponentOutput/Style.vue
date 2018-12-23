<template>
  <div class="style" :style="{
    color: `rgb(${redness}, 255, 255)`
  }">Styled text here</div>
</template>

<script>
export default {
  name: "Style",
  props: ["redness"]
};
</script>

<style>
</style>
