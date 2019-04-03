<template>
  <div id='home'>
    <img src='@/images/header.jpg' alt class='header'>
    <projects></projects>
    <saibaMais></saibaMais>
  </div>
</template>

<script>
import projects from '@/components/Projects.vue';
import saibaMais from '@/components/SaibaMais.vue';

export default {
  name: 'home',
  components: {
    projects,
    saibaMais
  }
}
</script>

<style scoped>
#home {
  width: 100%;
  display: block;
  /* flex-wrap: wrap; */
}
.header {
  width: 100%;
}
</style>
