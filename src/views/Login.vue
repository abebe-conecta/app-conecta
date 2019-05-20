<template>
  <div id='container-form-login'>
    <navbar :ativo='false'></navbar>
    <img class='logo-login' src='@/assets/images/Navbar/logo-conecta-azul.png'>
    <form>
      <input type='email' placeholder='e-mail'>
      <input type='password' placeholder='senha'>
      <router-link to='/passo-um'>
        <button class='button-login'>Entrar</button>
      </router-link>
    </form>
    <img src='@/assets/images/Rodape/ou-linha.jpg'>
    <router-link to='/cadastro'>
      <button id='botao-cadastro'>Cadastre-se</button>
    </router-link>
    <rodape :ativo='false'></rodape>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Rodape from '@/components/Rodape'

export default {
  name: 'login',
  components: {
    Navbar,
    Rodape
  }
}
</script>

<style scoped>
#container-form-login {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 91px;
  height: 500px;
  background-color: rgb(290, 290, 290);
}
.logo-login {
  width: 250px;
  height: 40px;
}
form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
input {
  width: 410px;
  height: 45px;
  margin-left: 505px;
  margin-right: 505px;
  margin-bottom: 30px;
  border-radius: 10px;
}
input::placeholder {
  font-family: 'Comfortaa', cursive;
  color: lightgray;
  text-align: center;
  font-size: 15pt;
  letter-spacing: 4px;
}
.button-login {
  font-family: 'Comfortaa', cursive;
  background-color: #556dff;
  border-style: none;
  border-radius: 70px;
  width: 190px;
  height: 35px;
  padding-bottom: 0;
  text-transform: uppercase;
  margin: 55px 0 55px 0;
  font-size: 16px;
  color: white;
  letter-spacing: 2px;
}
#botao-cadastro {
  font-family: 'Comfortaa', cursive;
  font-size: 8.5pt;
  width: 190px;
  height: 35px;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-top: 5px;
  border-radius: 90px;
  border-style: none;
  background-color: #ed4054;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
}
img {
  width: 25em;
  height: 1.3em;
  margin-left: 25em;
  margin-right: 25em;
}
</style>
