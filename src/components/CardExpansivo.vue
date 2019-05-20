<template>
<div :class='this.componentClasses' @click='this.expand'>
  <div class='icon'>
  </div>
  <div class='title-container'>
    <h4 class='title'>{{this.titulo}}</h4>
  </div>
  <div class='content'>
    <p>{{this.conteudo}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'CardExpansivo',
  props: {
    titulo: '',
    conteudo: ''
  },
  data () {
    return {
      expanded: false
    }
  },
  computed: {
    componentClasses () {
      let currentClasses = 'card -topic-expandable '
      return this.expanded ? currentClasses + '-expanded' : currentClasses
    }
  },
  methods: {
    expand () {
      this.expanded = !this.expanded
    }
  }
}
</script>

<style lang='scss'>
.card.-topic-expandable {
    background-color: white;
    color: #5B72FF;
    margin-bottom: 80px;
    box-shadow: none;
    border: #5B72FF 2px solid;
    border-radius: 11px;
    width: 80%;
    transition: max-height 0.2s ease-in;
    overflow: hidden;
    max-height: 50px;
    cursor: pointer;
    text-align: left;

    @media(max-width: 800px) {
        padding: 0 16px;
        margin-left: 0;
        width: 100%;
        max-width: 300px;
    }

    &.-expanded {
        max-height: 250px;
        transition: max-height 0.2s ease-out;

        @media(max-width: 800px) {
            max-height: 370px;
        }

        > .content {
            opacity: 1;
        }

        > .icon {
            border-radius: 12px;
            height: 5px;
            background-image: url("../assets/icons/minus-symbol.png");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            // transform: rotate(180deg);
        }
    }

    > .title-container {
        padding-left: 2%;
    }

    .title {
        font-size: 22px;
        letter-spacing: 4px;
        padding: 0;
        margin-top: 11px;

        @media(max-width: 800px) {
            margin-top: 14px;
            padding-right: 35px;
        }
    }

    > .content {
        margin-top: 52px;
        opacity: 0;
        padding-left: 0;
        transition: all 0.3s ease-in-out;
        width: 100%;

        p {
            padding-bottom: 0;
        }
    }

    > .icon {
        height: 27px;
        width: 31px;
        background-image: url("../assets/icons/plus-symbol.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        // top: 18px;
        // right: 20px;
        transition: transform 0.3s ease-in-out;
        padding: 0;
    }
}
</style>
