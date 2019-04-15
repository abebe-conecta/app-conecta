<template>
  <div id='passo-um'>
    <img
      src='../images/logo-conecta-branco.png'
      style='align-self: normal; width: 200px; height: auto; margin-top: 20px; margin-left: 20px;'
      alt
    >
    <h4>Passo 2 de 4</h4>

    <form action>
      <label for>Formato do projeto</label>
      <select name='cars'>
        <option value></option>
        <option value='saab'>Exposição</option>
        <option value='fiat'>Intervenção</option>
        <option value='audi'>Produção</option>
        <option value='audi'>Roda de Conversa</option>
        <option value='audi'>Ofcina</option>
        <option value='audi'>Show</option>
      </select>

      <label for>Faça uma lista com itens que você precisa no seu projeto</label>
      <div id='radio-button-lista'>
        <input type='RADIO' name='OPCAO' value='op1'> Opção 1
        <input type='RADIO' name='OPCAO' value='op2'> Opção 2
        <input type='RADIO' name='OPCAO' value='op2'> Adicionar opção
      </div>
    </form>

    <router-link to='/passo-tres'>
      <button id='botao-passo-dois'>Próximo</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'passo-dois'
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
  border-radius: 70px;
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
select {
  width: 90%;
  height: 65px;
  border-radius: 10px;
  margin-bottom: 0px;
}
#radio-button-lista {
  display: flex;
  flex-flow: column wrap;
  align-self: self-start;
  padding-left: 30px;
  font-size: 9pt;
  letter-spacing: 2px;
}
#radio-button-lista input::after {
  content: '           _____________________';
  color: white;
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
#botao-passo-dois {
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
}
</style>
