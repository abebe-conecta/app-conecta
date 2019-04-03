<template>
  <div id='container'>
    <h2>Projetos_</h2>
    <cardProjetos></cardProjetos>
  </div>
</template>

<script>
import cardProjetos from '@/components/CardProjetos'

export default {
  name: 'projects',
  components: {
    cardProjetos
  }
}
</script>

<style scoped>
#container{
    display: flex;
    flex-wrap: wrap
}

h2{
  align-self: center
}
</style>
