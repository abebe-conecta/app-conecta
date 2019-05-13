<template lang="html">
  <div class="">
    <div class="">
      <img :src='this.src' alt>
      <h6>{{this.titulo}}</h6>
      <p>{{this.descricao}}</p>
      <h5 class='autor'>Por: {{this.autor}}</h5>
    </div>
  </div>
</template>

<script>
// import conteudoCard from '@/data/conteudoCard'

export default {
  name: 'VisualizarProjeto'
  // computed: {
  //   conteudoCard () {
  //     const {
  //       projeto,
  //       id
  //     } = this.$route.params
  //     return projetos[projeto].find(part => projeto.id === +id)
  //   }
  // }
}
</script>

<style lang="css" scoped>
</style>
