<template>
  <div id='projeto-enviado'>
    <img
      src='../images/logo-conecta-branco.png'
      style='align-self: normal; width: 200px; height: auto; margin-top: 20px; margin-left: 20px;'
      alt
    >
    <div id='texto'>
      <h1>Seu projeto foi enviado!!!</h1>
      <h2>:)</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'projeto-enviado'
}
</script>

<style scoped>
#projeto-enviado {
  font-family: 'Comfortaa', cursive;
  margin: 0;
  width: 100%;
  height: 656px;
  display: flex;
  background-color: #556dff;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20pt;
  text-align: center
}
</style>
