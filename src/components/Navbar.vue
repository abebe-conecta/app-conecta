<template>
    <nav>
      <img src="images/logo-conecta.png" alt="" />
      <ul>
        <router-link>Projetos</router-link>
        <router-link>Enviar</router-link>
        <router-link>Login</router-link>
        <router-link>Sobre</router-link>
      </ul>
    </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
nav{
    grid-area: nav;
    width: 100vw;
    height: 90px;
    position: fixed;
    background: white;
    display: flex;
    justify-content: center;
}

nav img{
    width: 20%;
    height: auto;
}

nav ul{
    display: flex;
    width: 100%;
    list-style: none;
    align-items: center;
    justify-content: space-around;
}
nav ul router-link{
    color: black;
    font-size: 14pt;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold
}
nav ul router-link:hover{
    opacity: 0.8;
    color: gray;
}
</style>

