<template>
  <div>
    <h1>{{ inputString }} {{ inputNumber }}</h1>
    <div>Hello world</div>
  </div>
</template>

<script>
export default {
  props: ["inputString", "inputNumber"],
  name: "Props"
};
</script>
