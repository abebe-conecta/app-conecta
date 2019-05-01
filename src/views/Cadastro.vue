<template>
    <div id='cadastro'>
        <navbar :ativo='true'></navbar>
    <h2>Cadastro</h2>

    <button id='botao-cadastrar'>Cadastrar</button>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'cadastro',
  components: {
    Navbar
  }
}
</script>

<style scoped>
#cadastro {
  font-family: 'Comfortaa', cursive;
  width: 100%;
  height: auto
}
form {
    width: 100%;
    height: auto;
    display: flex;
    flex-flow: column wrap
}
#botao-cadastrar {
  font-family: 'Comfortaa', cursive;
  width: 181px;
  height: 35px;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 0px;
  border-radius: 90px;
  background-color: #ed4054;
  color: white;
  text-transform: uppercase;
  letter-spacing: 4px;
}
</style>
