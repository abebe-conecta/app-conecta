<template>
  <router-link to='/projetos'>
    <button class='botao-ver-mais'>Ver Mais</button>
  </router-link>
</template>

<script>
export default {
  name: 'buttonVerMais'
}
</script>

<style>
.botao-ver-mais {
  font-family: 'Comfortaa', cursive;
  background-color: #ff3864;
  border-style: none;
  border-radius: 15px;
  width: 210px;
  height: 55px;
  margin-top: 45px;
  text-transform: uppercase;
  margin: 55px 0 55px 0;
  font-size: 20px;
  color: white;
}
</style>
