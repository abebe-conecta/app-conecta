<template>
<div id='passo-um'>
  <router-link to='/'> <img src='@/assets/images/Navbar/logo-conecta-branco.png' style='align-self: normal; width: 200px; height: auto; margin-top: 20px; margin-left: 20px;' alt='logo conecta'></router-link>
  <h4>Passo 1 de 4</h4>

  <form action>
    <label for>Local</label>
    <textarea v-model='local' name id cols='30' rows='10' placeholder='Bairro, cidade e estado onde o seu projeto já foi ou será realizado'></textarea>

    <label for>Valor estimado</label>
    <input v-model='valor' name='valor' id='' rows='10' placeholder='R$ 0,00'>
  </form>

  <router-link to='/passo-quatro'>
    <button id='botao-passo-um'>Próximo</button>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'passo-tres',
  data () {
    return {
      local: '',
      valor: ''
    }
  }
}
</script>

<style scoped>
#passo-um {
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
}

img {
  width: 200px;
}

h4 {
  font-size: 20pt;
  font-weight: normal;
  letter-spacing: 4px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #511cf6;
  border-radius: 20px;
  width: 50%;
  height: 50%;
}

label {
  align-self: baseline;
  margin-top: 30px;
  margin-left: 2rem;
  margin-bottom: 0.5em;
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 4px;
}

textarea {
  width: 90%;
  height: 50px;
  border-radius: 10px;
  margin-top: 0px;
  margin-bottom: 30px;
}

textarea::placeholder {
  font-family: 'Comfortaa', cursive;
  color: #b4b4b4;
  text-align: left;
  font-size: 10pt;
  letter-spacing: 4px;
  line-height: 17px;
  padding: 8px 0 0 10px;
}

#botao-passo-um {
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
