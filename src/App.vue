<template>
  <div id='app'>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
body {
  margin: 0;
  max-width: 100%;
  font-family: 'Comfortaa', cursive;
}
</style>
