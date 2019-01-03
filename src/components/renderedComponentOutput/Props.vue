<template>
  <div>
    <h1>{{ inputString }} {{ inputNumber }}</h1>
    <div>Hello world</div>
  </div>
</template>

<script>
export default {
  name: 'Props',
  props: ['inputString', 'inputNumber'],
};
</script>
