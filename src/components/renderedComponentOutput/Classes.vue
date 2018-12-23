<template>
  <div class="classes">
    <div
      class="classes__title"
      :class="{
        'classes__title--primary': inputNumber === 1, 
        'classes__title--warning': inputNumber === 2 
      }"
    >This is title</div>
  </div>
</template>

<script>
export default {
  name: "Classes",
  props: ["inputNumber"]
};
</script>

<style>
</style>
