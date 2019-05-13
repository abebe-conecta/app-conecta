<template>
<div id='TodosProjetos'>
  <Navbar :ativo='true'></Navbar>
  <div id='busca'>
    <input type='search' placeholder='buscar projetos'>
  </div>
  <img src='@/assets/images/Projetos/ec3.jpg' alt class='header'>
  <projetos></projetos>
  <rodape :ativo='true'></rodape>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Rodape from '@/components/Rodape'
import Projetos from '@/components/Projetos'
import saibaMais from '@/components/SaibaMais'
import busca from '@/components/Busca'

export default {
  name: 'TodosProjetos',
  components: {
    Navbar,
    Rodape,
    Projetos,
    saibaMais,
    busca
  }
}
</script>

<style scoped>
#TodosProjetos {
  margin: 0;
  width: 100%;
  display: block
    /* flex-wrap: wrap; */
}

.header {
  width: 100vw;
  padding-top: 0px
}

#busca {
  width: 100%;
  height: 65px;
  padding-top: 115px;
  background-color: #ED4054;
  display: flex;
  justify-content: center;
}

input {
  width: 65%;
  height: 35px;
  border-radius: 60px;
  border-style: none;
  text-align: center;
  font-size: 22px
}

input::placeholder {
  color: lightgray;
}
</style>
