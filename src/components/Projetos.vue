<template>
<div id='container'>
  <h2>Projetos</h2>
  <!-- <Carousel :perPageCustom='[800, 1]' :paginationEnabled='true' :centerMode='true'>
    <slide> -->
    <div class="container-card-projetos">
      <cardProjetos v-for='(i, index) in cardConteudo' :key='index' :src='i.src' :titulo='i.titulo' :descricao='i.descricao' :autor='i.autor'>
      </cardProjetos>
    </div>
    <!-- </slide>
  </Carousel> -->
  <botao-ver-mais></botao-ver-mais>
</div>
</template>

<script>
import cardProjetos from '@/components/CardProjetos'
import BotaoVerMais from '@/components/BotaoVerMais'
import {
  Carousel,
  Slide
} from 'vue-carousel'

export default {
  name: 'Projetos',
  components: {
    cardProjetos,
    BotaoVerMais,
    Carousel,
    Slide
  },
  data () {
    return {
      cardConteudo: [{
        src: require('@/assets/images/Cards/ex3.jpg'),
        titulo: 'Teatro Negro',
        descricao: 'Placeat voluptate temporibus animi, a rem voluptas odio possimus.',
        autor: 'Nome do Autor'
      }, {
        src: require('@/assets/images/Cards/ex2.jpg'),
        titulo: 'Estética Periférica',
        descricao: 'Placeat voluptate temporibus animi, a rem voluptas odio possimus.',
        autor: 'Nome do Autor'
      }, {
        src: require('@/assets/images/Cards/ex4.jpeg'),
        titulo: 'Constelação Familiar',
        descricao: 'Placeat voluptate temporibus animi, a rem voluptas odio possimus.',
        autor: 'Nome do Autor'
      }, {
        src: require('@/assets/images/Cards/ex1.jpg'),
        titulo: 'Título do Card',
        descricao: 'Placeat voluptate temporibus animi, a rem voluptas odio possimus.',
        autor: 'Nome do Autor'
      }, {
        src: require('@/assets/images/Cards/ex1.jpg'),
        titulo: 'Estética Periférica',
        descricao: 'Placeat voluptate temporibus animi, a rem voluptas odio possimus.',
        autor: 'Nome do Autor'
      }]
    }
  },
  props: {
    perPageCustom: Array,
    paginationEnabled: Boolean,
    centerMode: Boolean
  }
}
</script>

<style lang='scss' scoped>
#container {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media(max-width: 800px) {
        width: 100%;
        height: auto;
    }
}
#container h2 {
    display: flex;
    text-transform: uppercase;
    margin: 30px 0 30px 40px;
    text-align: left;
    font-size: 60px;
    color: #556dff;
    margin-right: 760px;
    letter-spacing: 15px;
    @media(max-width: 500px) {
        margin-right: 200px;
    }
    @media(max-width: 800px) {
        width: 50%;
        margin-right: 305px;
        font-size: 40px;
    }
    @media(max-width: 900px) {
        margin-right: 330px;
    }
}
#container h2::after {
    content: '_';
    border-radius: 10px;
    @media(max-width: 800px) {
        width: 50%;
    }
}
.container-card-projetos {
  display: flex;
  flex-flow: row wrap !important;
  width: 90%;
  justify-content: space-around
}
</style>
