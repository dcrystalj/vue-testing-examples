<template>
  <div>
    <h1>{{ inputString }} {{ inputNumber }}</h1>
    <Classes :inputNumber="inputNumber"/>
  </div>
</template>

<script>
import Classes from '@/components/renderedComponentOutput/Classes';

export default {
  name: 'Props',
  props: {
    inputString: String,
    inputNumber: Number,
  },
  components: {
    Classes,
  },
};
</script>
