<template>
  <the-header />
  <the-sidebar />
  <the-main />
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheSidebar from './components/layout/TheSidebar.vue';
import TheMain from './components/layout/TheMain.vue';
export default {
  name: "App",
  components: {
    'the-header': TheHeader,
    'the-sidebar': TheSidebar,
    'the-main': TheMain
  },
};
</script>

<style>
@import url("./css/main.css");
</style>
