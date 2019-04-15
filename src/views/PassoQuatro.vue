<template>
  <div id='passo-um'>
    <img
      src='../images/logo-conecta-branco.png'
      style='align-self: normal; width: 200px; height: auto; margin-top: 20px; margin-left: 20px;'
      alt
    >
    <h4>Passo 1 de 4</h4>

    <form>
      <div class='container-inputs tags'>
        <label for>Tags</label>
        <textarea
          name
          id
          cols='30'
          rows='10'
          placeholder='Insira até 5 palavras-chaves que tem a ver com seu projeto, assim fica mais fácil de aparecer na busca'
        ></textarea>
      </div>

      <div class='container-inputs imagem'>
        <label for>Adicionar Foto</label>
        <input
          name='valor'
          id=''
          rows='10'
          placeholder='R$ 0,00'
        >
      </div>
    </form>

    <router-link to='/projeto-enviado'>
      <button id='botao-passo-um'>Próximo</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'passo-quatro'
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
h4 {
  font-size: 20pt;
  font-weight: normal;
  letter-spacing: 4px;
}
form {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.container-inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #511cf6;
  border-radius: 20px;
  width: 350px;
  height: 400px;
}
.container-inputs .tags{
    margin-left: 100px;
}
label {
  align-self: baseline;
  margin: 1em 0 0.5em 1rem;
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 4px;
}
textarea {
  width: 85%;
  height: 110px;
  border-radius: 10px;
  margin: 0 25px 30px 15px
}
textarea::placeholder {
  font-family: 'Comfortaa', cursive;
  color: #b4b4b4;
  text-align: left;
  font-size: 8pt;
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
