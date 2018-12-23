<template>
  <div class="attributes">
    <TextContent v-for="i in numberOfRenderedComponents" :key="i"/>
  </div>
</template>

<script>
import TextContent from "@/components/renderedComponentOutput/TextContent";

export default {
  name: "Style",
  props: ["numberOfRenderedComponents"],
  components: {
    TextContent
  }
};
</script>

<style>
</style>
