<template lang="html">
  <div class="cadastro">
      <navbar :ativo='true'></navbar>
      <div class="cadastro-container">
          <h2 class='cadastro-titulo'>Cadastro</h2>
      </div>
        <form class='form-cadastro'>
          <label for="">Nome*</label>
          <input type="text">

          <label for="">E-mail*</label>
          <input type="email">

          <label for="">Senha*</label>
          <input type="password" placeholder="Crie uma senha com 7 caracteres">

          <label for="">Confirme sua senha*</label>
          <input type="password">

          <label for="">Data de Nascimento*</label>
          <input type="password" placeholder="DD/MM/AAAA">

          <label for="">Gênero*</label>
          <input type="password">

          <label for="">Etnia*</label>
          <input type="password">

          <label for="">Estado*</label>
          <input type="password">

          <label for="">Cidade*</label>
          <input type="password">

          <label for="">Área de atuação*</label>
          <input type="password" placeholder="Qual sua profissão atualmente?">

          <label for="">Tem MEI/CNPJ?*</label>
          <!-- <input type="radio">sim
          <input type="radio">não -->
        </form>
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

<style lang="scss" scoped>
#cadastro {
    font-family: 'Comfortaa', cursive;
    max-width: 100%;
    margin: 0 auto;
    display: block;
}
.cadastro-container {
    padding-top: 90px;
    // border-top: #556dff 2px solid;
}
.cadastro-titulo {
    text-transform: uppercase;
    color: #ED4054;

    &::after {
        content: ' _';
        border-radius: 10px;
        @media(max-width: 800px) {
            width: 50%;
        }
    }
}

.form-cadastro {
    width: 95%;
    height: auto;
    display: flex;
    flex-flow: column wrap;
    border: lightgray 2px solid;
    border-radius: 20px;
    align-self: center;
    padding: 40px 0 0 30px;

    > label {
        width: 270px;
        color: #556dff;
        letter-spacing: 2px;
        margin-bottom: 20px;
        font-size: 15pt;
    }
}

#botao-cadastrar {
    font-family: 'Comfortaa', cursive;
    width: 181px;
    height: 35px;
    margin-top: 30px;
    margin-bottom: 30px;
    border: 0;
    border-radius: 90px;
    background-color: #ed4054;
    color: white;
    text-transform: uppercase;
    letter-spacing: 4px;
}
input {
    width: 860px;
    height: 45px;
    // margin-left: 505px;
    // margin-right: 505px;
    margin-bottom: 40px;
    border-radius: 10px;
    border: lightgray 1px solid;
}
input::placeholder {
    font-family: 'Comfortaa', cursive;
    color: gray;
    text-align: left;
    font-size: 10pt;
    letter-spacing: 4px;
}
</style>
