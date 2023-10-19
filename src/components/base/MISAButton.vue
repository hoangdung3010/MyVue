<template>
  <button
    class="btn"
    :class="{
      'btn--primary': type == 'primary',
      'btn--secondary': type == 'secondary',
    }"
  >
    <span class="btn__text">{{ text }}</span>
  </button>
</template>
<script>
export default {
  name: "MISAButton",
  /**
   * type = ['primary', 'secondary']
   */
  props: ["text", "type"],
};
</script>
<style></style>
