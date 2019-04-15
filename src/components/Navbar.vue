<template>
  <div id='navbar' v-if='ativo'>
    <router-link to='/'>
      <img src='../images/logo-conecta-azul.png' alt>
    </router-link>

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

    <!-- <router-link to='/projetos' class='text-nav'></router-link>
    <router-link to='/enviar-projeto' class='text-nav'>Enviar</router-link>
    <router-link to='/login' class='text-nav'>Login</router-link>
    <router-link to='/sobre' class='text-nav'>Sobre</router-link>-->
  </div>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    ativo: Boolean
  }
}
</script>

<style scoped>
#navbar {
  width: 100%;
  height: 90px;
  position: fixed;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
}
img {
  width: 200px;
  height: auto;
  padding-left: 40px !important;
  /* padding-top: 30px !important;
  padding-bottom: 30px !important */
}
ul {
  display: flex;
  width: 100%;
  list-style: none;
  text-decoration: none;
  justify-content: space-around;
  padding-left: 500px !important;
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
</style>
