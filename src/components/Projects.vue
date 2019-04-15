<template>
  <div id='container'>
    <h2>Projetos</h2>
    <cardProjetos></cardProjetos>
    <buttonVerMais></buttonVerMais>
  </div>
</template>

<script>
import cardProjetos from '@/components/CardProjetos'
import buttonVerMais from '@/components/buttonVerMais'

export default {
  name: 'projects',
  components: {
    cardProjetos,
    buttonVerMais
  }
}
</script>

<style scoped>
#container {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
#container h2 {
  display: flex;
  text-transform: uppercase;
  margin: 30px 0 30px 40px;
  text-align: left;
  font-size: 60px;
  color: #556dff;
  margin-right: 780px;
  letter-spacing: 15px;
}
#container h2::after {
  content: '_';
  border-radius: 10px;
}
</style>
