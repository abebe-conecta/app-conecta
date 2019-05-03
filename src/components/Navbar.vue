<template>
<div id='navbar' v-if='ativo'>
  <router-link to='/'>
    <img src='../images/logo-conecta-azul.png' alt>
  </router-link>
  <div class='menu-desktop'>
    <ul>
      <router-link to='/projetos'>
        <li class='text-nav'>Projetos</li>
      </router-link>

      <router-link to='/enviar-projeto'>
        <li class='text-nav'>Enviar</li>
      </router-link>

      <router-link to='/login'>
        <li class='text-nav'>Login</li>
      </router-link>

      <router-link to='/login'>
        <li class='text-nav'>Sobre</li>
      </router-link>
    </ul>
  </div>

  <menu-hamburguer class='m-burguer'></menu-hamburguer>
</div>
</template>

<script>
import MenuHamburguer from '@/components/MenuHamburguer'

export default {
  name: 'navbar',
  components: {
    MenuHamburguer
  },
  props: {
    ativo: Boolean
  }
}
</script>

<style lang="scss" scoped>
#navbar {
    margin: 0;
    width: 100vw;
    max-width: 100%;
    height: 90px;
    position: fixed;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 900px) {
        width: 100vw;
        max-width: 100%;
        height: 130px;
        position: fixed;
    }
}
img {
    width: 200px;
    height: auto;
    padding-left: 40px !important;
    @media(max-width: 900px) {
        width: 220px;
        height: auto;
    }
}
.menu-desktop {
    display: inline;
    margin-right: 60px;
    width: 40%;
}
ul {
    display: flex;
    width: 100%;
    list-style: none;
    text-decoration: none;
    justify-content: space-around;
    @media(max-width: 900px) {
        display: none;
    }
}
li {
    color: black;
    font-size: 20px;
    text-transform: uppercase;
}
li:hover {
    width: 140px;
    height: 28px;
    background-color: #556dff;
    border-radius: 50px;
    text-align: center;
    color: white;
}
a:-webkit-any-link {
    text-decoration: none;
}
.m-burguer {
    display: none;
    @media(max-width: 900px) {
        display: inline;
        width: 6%;
        height: 70px;
        margin-right: 40px;
    }
}
</style>
