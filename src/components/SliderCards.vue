<template>
  <div class="slides">
    <div class="slides-inner">
      <card-projetos></card-projetos>
    </div>
    </div>
  </div>
</template>

<script>
import CardProjetos from '@/components/CardProjetos'

export default {
  name: 'SliderCards',
  components: {
    CardProjetos
  }
    data () {
      return {
        slides: [
          {src:}
        ]
      }
    }
}
</script>

<style lang="css" scoped>
</style>
