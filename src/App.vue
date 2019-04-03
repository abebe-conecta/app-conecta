<template>
  <div id='app'>
    <Navbar></Navbar>
    <router-view/>
    <rodape></rodape>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import rodape from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    rodape
  }
}
</script>

<style>
body {
  margin: 0px;
  width: 100%;
  font-family: 'Comfortaa', cursive;
}
#app {
    display: block;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
}
</style>
