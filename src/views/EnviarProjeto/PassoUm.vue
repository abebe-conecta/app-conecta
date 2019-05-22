<template>
<div id='passo-um'>
  <router-link to='/'> <img src='@/assets/images/Navbar/logo-conecta-branco.png' style='align-self: normal; width: 200px; height: auto; margin-top: 20px; margin-left: 20px;' alt='logo conecta'></router-link>

  <h4>Passo 1 de 4</h4>

  <form action>
    <label for>Descreve seu projeto</label>
    <textarea v-model='descricao' cols='30' rows='10' placeholder='Conta pra gente de maneira resumida o que é o seu projeto ou negócio' required></textarea>

    <label for>Objetivo</label>
    <textarea v-model='objetivo' cols='30' rows='10' placeholder='Qual problema o seu projeto ou negócio pretende resolver?' required>
    </textarea>
  </form>

  <router-link to='/passo-dois' :disabled='!camposPreenchidos'>
    <button id='botao-passo-um' :disabled='!camposPreenchidos'>Próximo</button>
  </router-link>
</div>
</template>

<script>
// import {
//   mapGetters
// } from 'vuex'

export default {
  name: 'passo-um',
  computed: {
    camposPreenchidos () {
      return this.descricao !== '' && this.objetivo !== ''
    },
    data () {
      return {
        descricao: null,
        objetivo: null
      }
    }
    //   descricao: {
    //     get() {
    //       return this.projeto.descricao
    //     },
    //     set(value) {
    //       this.$store.commit('setProjetoDescricao', value)
    //     }
    //   },
    //   objetivo: {
    //     get () {
    //       return this.projeto.objetivo
    //     },
    //     set (value) {
    //       this.$store.commit('setProjetoObjetivo', value)
    //     }
    //   },
    //   ...mapGetters (['projeto'])
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

textarea {
  width: 90%;
  height: 50px;
  border-radius: 10px;
  margin-top: 0;
  margin-bottom: 30px;
  outline: none;
}

textarea::placeholder {
  font-family: 'Comfortaa', cursive;
  color: #B4B4B4;
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
  border: 0;
  border-radius: 90px;
  background-color: #ed4054;
  color: white;
  text-transform: uppercase;
  letter-spacing: 4px;
  cursor: pointer;
}

#botao-passo-um:disabled {
  background-color: gray;
  cursor: default;
}
</style>
