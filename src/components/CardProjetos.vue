<template>
<div class='card'>
  <img @click="visualizarProjeto()" :src='this.src' alt>
  <h6>{{this.titulo}}</h6>
  <p>{{this.descricao}}</p>
  <h5 class='autor'>Por: {{this.autor}}</h5>
</div>
</template>

<script>
export default {
  name: 'cardProjeto',
  props: {
    src: String,
    titulo: String,
    descricao: String,
    autor: String
  },
  methods: {
    visualizarProjeto () {
      this.$router.push({
        name: 'Projeto',
        params: {
          // id: this.projetoSelecionado.id,
          projeto: this.projetoSelecionado.projeto
        }
      })
    }
  }
}
</script>

<style lang='scss'>
#cardContainer {
    max-width: 100%;
    height: 600px;
    // display: flex;
    // justify-content: space-around;
    // margin-left: 20px;
    // margin-right: 20px;
    // margin-bottom: 0;
    // @media(max-width: 800px) {
    //   width: 35%;
    //   height: 600px;
    // }
}
.card {
    background-color: white;
    border-radius: 30px;
    max-width: 370px;
    height: 500px;
    /* border-style: groove */
    -webkit-box-shadow: 0 3px 4px -1px rgba(158, 158, 158, 1);
    -moz-box-shadow: 0 3px 4px -1px rgba(158, 158, 158, 1);
    box-shadow: 0 3px 4px -1px rgba(158, 158, 158, 1);
    cursor: pointer;
}
.card h6 {
    font-size: 25px;
    text-transform: uppercase;
    font-weight: lighter;
    letter-spacing: 0.2rem;
    margin: 15px 20px 2px 15px;
}
.card h5 {
    font-size: 15px;
    color: #ed4054;
    margin: 20px 20px 2px 15px;
    line-height: 0.6;
    text-transform: uppercase;
    font-weight: lighter !important;
}
.card p {
    font-size: 15px;
    color: black;
    letter-spacing: 0.4rem;
    margin: 20px 20px 2px 15px;
    text-align: justify;
}
.card img {
    width: 370px;
    height: 250px;
    border-radius: 30px 30px 0 0;
}
</style>
