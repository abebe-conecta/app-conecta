<template>
<div id='container-titulo-projeto'>
  <img src='@/assets/images/Navbar/logo-conecta-branco.png' style='align-self: normal; width: 200px; height: auto; margin-top: 20px; margin-left: 20px;' alt=''>
  <h3>Conte mais sobre seu projeto</h3>

  <form action=''>
    <label for=''>Nome do projeto</label>
    <input type='text' v-model='nome' required>

    <label for=''>Categoria</label>

    <select name='opcoes' v-model='opcoes' required>
      <option value=''></option>
      <option value='saab'>Saab</option>
      <option value='fiat'>Fiat</option>
      <option value='audi'>Audi</option>
    </select>
  </form>

  <router-link to='/passo-um' :disabled='!camposPreenchidos'>
    <button id='botao-comecar-envio' :disabled='!camposPreenchidos'>Começar</button>
  </router-link>
</div>
</template>

<script>
export default {
  name: 'titulo-rascunho',
  computed: {
    camposPreenchidos () {
      return this.nome !== '' && this.opcoes !== ''
    }
  }
}
</script>

<style scoped>
#container-titulo-projeto {
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

h3 {
  font-size: 30pt;
  font-weight: normal;
  letter-spacing: 4px;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #511CF6;
  border-radius: 20px;
  width: 50%;
  height: 50%;
  outline: none;
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

input {
  width: 90%;
  height: 40px;
  border-radius: 10px;
  margin-top: 0px;
  margin-bottom: 50px;
  outline: none;
}

select {
  width: 90%;
  height: 45px;
  border-radius: 10px;
  margin-bottom: 80px;
  outline: none;
}

#botao-comecar-envio {
  font-family: 'Comfortaa', cursive;
  width: 181px;
  height: 35px;
  margin-top: 50px;
  margin-bottom: 30px;
  border: 0px;
  border-radius: 90px;
  background-color: #ed4054;
  color: white;
  text-transform: uppercase;
  letter-spacing: 4px;
  cursor: pointer;
}

#botao-comecar-envio:disabled {
  background-color: gray;
  cursor: default;
}
</style>
