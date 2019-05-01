<template>
<div id='home'>
  <navbar :ativo='true'></navbar>
  <div id="header-home"></div>
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

<style lang="scss" scoped>
/* @import "../assets/variables.css"; */

#home {
    width: 1348px;
    display: block;
    @media(max-width: 800px) {
        width: 100%;
    }
}

#header-home {
    background-image: url("../images/header.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 750px;
    padding-top: 90px;

    @media(max-width: 800px) {
        background-image: url("../images/headerSmall.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 100%;
        height: 900px;
        padding-top: 90px;
    }
}
</style>
