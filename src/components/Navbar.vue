<template>
  <div id="navbar">
    <router-link to="/">
      <img src="../images/logo-conecta.png" alt>
    </router-link>

    <ul>
      <router-link to="/projetos">
        <li class="text-nav">Projetos</li>
      </router-link>

      <router-link to="/enviar-projetos">
        <li class="text-nav">Enviar</li>
      </router-link>

      <router-link to="/login">
        <li class="text-nav">Login</li>
      </router-link>

      <router-link to="/login">
        <li class="text-nav">Sobre</li>
      </router-link>
    </ul>

    <!-- <router-link to="/projetos" class="text-nav"></router-link>
    <router-link to="/enviar-projeto" class="text-nav">Enviar</router-link>
    <router-link to="/login" class="text-nav">Login</router-link>
    <router-link to="/sobre" class="text-nav">Sobre</router-link>-->
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
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
  padding-left: 20px !important;
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
  font-size: 12pt;
  text-transform: uppercase;
}
li:hover {
  width: auto;
  height: 25px;
  background-color: #556dff;
  border-radius: 10px;
}
</style>
