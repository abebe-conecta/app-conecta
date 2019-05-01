<template>
  <Slide right width='800'>
    <a href='#'>
      <ul>
        <router-link to="/projetos"><li>Projetos</li></router-link>
        <router-link to="/enviar-projeto"><li>Enviar</li></router-link>
        <router-link to="/login"><li>Login</li></router-link>
        <router-link to="/sobre"><li>Sobre</li></router-link>

      </ul>
    </a>
  </Slide>
</template>

<script>
import { Slide } from 'vue-burger-menu'

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

<style>
.bm-burger-button {
  position: fixed;
  width: 46px;
  height: 30px;
  left: auto;
  top: 36px;
  cursor: pointer;
  margin: 12px 80px;
  cursor: pointer;
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
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  background: #FFFFFF;
}
.bm-cross-button {
  height: 40px;
  width: 40px;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #556dff; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}

/* .bm-overlay {
  background: rgba(0, 0, 0, 0.3);
} */
.bm-item-list {
  color: #000000;
  margin-left: 10%;
  font-size: 40px;
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > ul{
  list-style-type: none;
  color: black;
  text-transform: uppercase;
}
.bm-item-list > * > li{
  text-decoration: none;
}
.bm-item-list > * > li:hover{
  color: white;
}
.bm-item-list > * > li {
  margin-left: 10px;
  font-weight: 700;
}
</style>
