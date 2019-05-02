'<template>
<div id='home'>
  <navbar :ativo='true'></navbar>
  <div id='header-home'></div>
  <img src='@/images/header.jpg' class='header-image' alt=''>
  <img src='@/images/headerSmall.jpg' class='header-image-small' alt=''>
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

<style lang='scss' scoped>
#home {
    width: 1348px;
    display: block;
    @media(max-width: 800px) {
        width: 100%;
    }
}
#header-home {
    width: 100%;
    height: auto;
}
.header-image {
    width: 100vw;
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
        height: auto;
        padding-top: 90px;
    }
}
</style>
