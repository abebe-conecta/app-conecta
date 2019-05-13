<template>
  <div id='container-primeira-tela'>
    <navbar :ativo='false'></navbar>
    <img class='home-enviar-um' src='@/assets/images/EnviarProjeto/Home_Enviar-01.jpg' alt>
    <router-link to='/titulo-rascunho'>
      <button id='botao-iniciar-envio'>Vamo lá!</button>
    </router-link>
    <rodape :ativo='false'></rodape>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Rodape from '@/components/Rodape'

export default {
  name: 'enviar-tela-um',
  components: {
    Navbar,
    Rodape
  }
}
</script>

<style scoped>
#container-primeira-tela {
  margin: 0;
  width: 100%;
  height: auto;
  display: flex;
  background-color: #556dff;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home-enviar-um {
  width: 100%;
  height: auto;
}
#botao-iniciar-envio {
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
