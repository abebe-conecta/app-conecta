<template>
<router-link to='/projetos'>
  <button class='botao-ver-mais'>Ver Mais</button>
</router-link>
</template>

<script>
export default {
  name: 'BotaoVerMais'
}
</script>

<style>
.botao-ver-mais {
  font-family: 'Comfortaa', cursive;
  background-color: #556DFF;
  border-style: none;
  border-radius: 95px;
  width: 210px;
  height: 45px;
  margin-top: 45px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 55px 0 55px 0;
  font-size: 20px;
  color: white;
}
</style>
