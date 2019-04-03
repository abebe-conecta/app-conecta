<template>
  <div id='mais'>
    <p>Quer tirar seu projeto do papel e ainda rceber uma grana pra isso?</p>
    <p>Conheça a Abebé Conecta, uma plataforma para apoiar iniciativas culturais, de diversidade e impacto social.</p>
    <router-link to='/sobre'><button>Saiba Mais</button></router-link>
  </div>
</template>

<script>
export default {
  name: 'saibaMais'
}
</script>

<style>
#mais {
  margin: 0;
  width: 100%;
  background-color: #55abff;
  width: 100%;
  height: 500px;
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  text-align: center;
}
p {
  color: white;
  font-size: 16px;
  align-self: center;
}
button {
  background-color: #ff3864;
  border-radius: 15px;
  color: white;
  align-self: center;
}
</style>
