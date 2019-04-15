<template>
  <div id='home'>
    <navbar :ativo='true'></navbar>
    <img src='@/images/header.jpg' class='header'>
    <projects></projects>
    <saiba-mais></saiba-mais>
    <rodape :ativo='true'></rodape>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Rodape from '@/components/Rodape'
import projects from '@/components/Projects'
import SaibaMais from '@/components/SaibaMais'

export default {
  name: 'home',
  components: {
    Navbar,
    Rodape,
    projects,
    SaibaMais
  }
}
</script>

<style scoped>
#home {
  width: 100%;
  display: block;
}

.header {
  max-width: 100%;
  height: auto;
  margin-top: 90px;
  /* background: url(header.jpg) repeat;
  /* opacity: 0.5;
  filter: alpha(opacity=50); */
}

/* @media (min-width: 768px){
  .header{
    background
  }
} */
</style>
