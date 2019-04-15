<template>
  <router-link to='/projetos'>
    <button>Ver Mais</button>
  </router-link>
</template>

<script>
export default {
  name: 'buttonVerMais'
}
</script>

<style>
button {
  font-family: 'Comfortaa', cursive;
  background-color: #556dff;
  border-style: none;
  border-radius: 70px;
  width: 210px;
  height: 55px;
  margin-top: 45px;
  text-transform: uppercase;
  margin: 55px 0 55px 0;
  font-size: 20px;
  color: white;
}
</style>
