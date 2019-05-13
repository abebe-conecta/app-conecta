'<template>
<div id='home'>
  <navbar :ativo='true'></navbar>
  <div id='header-home'></div>
  <img src='@/assets/images/Home/header.jpg' class='header-image' alt=''>
  <img src='@/assets/images/Home/headerSmall.jpg' class='header-image-small' alt=''>
  <projetos></projetos>
  <saiba-mais></saiba-mais>
  <rodape :ativo='true'></rodape>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Rodape from '@/components/Rodape'
import Projetos from '@/components/Projetos'
import SaibaMais from '@/components/SaibaMais'

export default {
  name: 'home',
  components: {
    Navbar,
    Rodape,
    Projetos,
    SaibaMais
  }
}
</script>

<style lang='scss' scoped>
#home {
    margin: 0;
    max-width: 100%;
    display: block;
    @media(max-width: 800px) {
        width: 100%;
    }
}
#header-home {
    max-width: 100%;
    height: auto;
}
.header-image {
    width: 100vw;
    max-width: 100%;
    height: auto;
    padding-top: 90px;
    @media(max-width: 900px) {
        display: none;
    }
}
.header-image-small {
    display: none;
    @media(max-width: 900px) {
        display: inline;
        width: 100vw;
        max-width: 100%;
        height: auto;
        padding-top: 90px;
    }
}
</style>
