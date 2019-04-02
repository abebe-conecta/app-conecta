<template>
  <div id="app">
    <Navbar></Navbar>
    <img src="./images/header.jpg">
    <projects></projects>
    <saibaMais></saibaMais>
    <footer></footer>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import projects from '@/views/Projects.vue'
import saibaMais from '@/views/SaibaMais.vue'
import footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    projects,
    saibaMais,
    footer
  }
}
</script>

<style>
#app {
  margin: 0;
  width: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

img{
  width: 100%;
  height: auto
}

img:hover{
  opacity: 0.5
}

</style>
