<template>
  <div>
    <h1>{{ inputString }} {{ inputNumber }}</h1>
    <Classes :input-number="inputNumber" />
  </div>
</template>

<script>
import Classes from '@/components/renderedComponentOutput/Classes';

export default {
  name: 'Props',
  components: {
    Classes,
  },
  props: {
    inputString: String,
    inputNumber: Number,
  },
};
</script>
