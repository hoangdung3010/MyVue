<template>
  <table class="ms-table">
    <thead>
      <slot name="table-header"></slot>
    </thead>
    <tbody>
      <slot name="table-body"></slot>
    </tbody>
  </table>
</template>
<script>
export default {
    name: "MISATable",
};
</script>
<style></style>
