<template>
<div class="como-funciona">
  <Navbar :ativo='true'></Navbar>
  <!-- <div class="text-primeira-sessao">
    <h1>Seu projeto fora do papel!</h1>
    <h2>Conheça o Abebé Conecta, uma plataforma para apoiar iniciativas culturais, de diversidade e Impacto social.</h2>
  </div> -->
  <div class="img-primeira-sessao">
    <img src="@/assets/images/ComoFunciona/ComoFunciona-1.png" alt="">
  </div>
  <div class="img-segunda-sessao">
    <img src="@/assets/images/ComoFunciona/ComoFunciona-2.png" alt="">
  </div>
  <div class="img-terceira-sessao">
    <img src="@/assets/images/ComoFunciona/ComoFunciona-3.png" alt="">
  </div>
  <div class="img-quarta-sessao">
    <img src="@/assets/images/ComoFunciona/ComoFunciona-4.png" alt="">
  </div>
  <rodape :ativo='true'></rodape>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Rodape from '@/components/Rodape'

export default {
  name: 'ComoFunciona',
  components: {
    Navbar,
    Rodape
  }
}
</script>

<style lang="scss" scoped>
#como-funciona {
    max-width: 100%;
    width: 100vw;
    margin: 0;
}

img {
    width: 100vw;
    height: auto;
}
</style>
