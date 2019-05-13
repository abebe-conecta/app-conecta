<template>
<Slide noOverlay right width='800'>
  <ul class='lista-menu-burguer'>
    <router-link to="/projetos">
      <li>Projetos</li>
    </router-link>
    <router-link to="/enviar-projeto">
      <li>Enviar</li>
    </router-link>
    <router-link to="/login">
      <li>Login</li>
    </router-link>
    <router-link to="/sobre">
      <li>Como Funciona</li>
    </router-link>
  </ul>
</Slide>
</template>

<script>
import {
  Slide
} from 'vue-burger-menu'

export default {
  name: 'menu-hamburguer',
  components: {
    Slide
  },
  props: {
    right: Boolean,
    width: '800px'
  }
}
</script>

<style lang='scss'>
.bm-burger-button {
    position: fixed;
    width: 46px;
    height: 30px;
    // left: auto;
    top: 36px;
    cursor: pointer;
    margin: 12px 80px;
    @media(max-width: 900px) {
        margin: 12px 60px;
    }
    @media(max-width: 500px) {
        margin: 12px 20px;
    }
    @media(max-width: 400px) {
        margin: 12px 20px;
    }
}
.bm-burger-bars {
    background-color: #556DFF;
}
.line-style {
    position: absolute;
    height: 20%;
    left: 0;
    right: 0;
}
.cross-style {
    position: absolute;
    top: 12px;
    right: 0 !important;
    cursor: pointer;
}
.bm-cross {
    background: #FFFFFF;
}
.bm-cross-button {
    height: 100px;
    width: 100px;
    @media(max-width: 900px) {
        height: 100px;
        width: 100px;
        padding: 60px 70px 0 0;
    }
    @media(max-width: 600px) {
        height: 100px;
        width: 100px;
        padding: 60px 70px 0 0;
    }
}
.bm-menu {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1000;
    top: 0;
    left: 0;
    background-color: #556dff;
    overflow-x: hidden;
    transition: 0.5s;
}
.bm-item-list {
    color: #000000;
    font-size: 40px;
}
.lista-menu-burguer {
    display: flex;
    text-decoration: none;
    padding: 0.7em;
    list-style-type: none;
    color: black;
    text-transform: uppercase;
    text-decoration: none;
    flex-flow: wrap column;
    @media(max-width: 600px) {
        width: 100vw;
        max-width: 100%;
        margin-left: 100px;
    }
}
.lista-menu-burguer li {
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 0.2em;
    padding-bottom: 130px;
}
.lista-menu-burguer li:hover {
    color: white;
}
.lista-menu-burguer a {
    text-decoration: none;
    color: black;
}
.bm-cross {
    width: 73px !important;
    height: 4px !important;
}
</style>
