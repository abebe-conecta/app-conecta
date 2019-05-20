<template>
<div>
  <div id='footer' v-if='ativo'>
    <div id='mapa-do-site'>
      <router-link to='/projetos'>Projetos</router-link>
      <router-link to='/enviar-projeto'>Enviar</router-link>
      <router-link to='/login'>Login</router-link>
      <router-link to='/como-funciona'>Como Funciona</router-link>
      <router-link to='/perguntas-frequentes'>Perguntas Frequentes</router-link>
    </div>
  </div>
  <div id='footerSmall' v-if='ativo'>
    <div id='mapa-do-site'>
      <router-link to='/projetos'>Projetos</router-link>
      <router-link to='/enviar-projeto'>Enviar</router-link>
      <router-link to='/login'>Login</router-link>
      <router-link to='/como-funciona'>Como Funciona</router-link>
      <router-link to='/perguntas-frequentes'>Perguntas Frequentes</router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'rodape',
  props: {
    ativo: Boolean
  }
}
</script>

<style lang='scss' scoped>
#footer {
    display: inline;
    font-family: 'Comfortaa', cursive;
    background-image: url("../assets/images/Rodape/footer.jpg");
    background-position: center;
    background-size: cover;
    width: 100vw;
    max-width: 100%;
    height: auto;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media(max-width: 900px) {
        display: none;
    }
}
#footerSmall {
    display: none;
    @media(max-width: 900px) {
        font-family: 'Comfortaa', cursive;
        background-image: url("../assets/images/Rodape/footerSmall.jpg");
        background-position: center;
        background-size: cover;
        width: 100vw;
        max-width: 100%;
        height: 1630px;
        left: 0;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    @media(max-width: 800px) {
        width: 100vw;
        max-width: 100%;
    }
    @media(max-width: 500px) {
        width: 100vw;
        max-width: 100%;
        height: 770px;
    }
    @media(max-width: 600px) {
        width: 100vw;
        max-width: 100%;
        height: 930px;
    }
    @media(max-width: 400px) {
        width: 100vw;
        max-width: 100%;
        height: 650px;
    }
}
#mapa-do-site {
    display: flex;
    width: 320px;
    height: 320px;
    flex-direction: column;
    margin: 40px 320px 0 0;
    @media(max-width: 900px) {
        margin: 0 0 1090px 500px;
    }
    @media(max-width: 800px) {
      margin: 0 0 340px 230px;
    }
    @media(max-width: 600px) {
          margin: 0 0 530px 400px;
    }
    @media(max-width: 500px) {
        margin: 0 0 450px 290px;
    }
    @media(max-width: 400px) {
        margin: 0 0 280px 210px;
    }
}
#mapa-do-site a {
    text-decoration: none;
    text-transform: uppercase;
    align-items: left;
    flex-flow: column wrap;
    align-self: left;
    color: black;
    font-size: 10pt;
    font-weight: bolder;
    line-height: 30px;
    padding-bottom: 20px;
    letter-spacing: 0.2em;
    @media(max-width: 900px) {
        font-size: 30pt;
        padding-bottom: 150px;
    }
    @media(max-width: 600px) {
        font-size: 18pt;
        padding-bottom: 50px;
    }
    @media(max-width: 400px) {
        font-size: 15pt;
        padding-bottom: 50px;
    }
}
#mapa-do-site h6 {
    text-align: left;
    font-weight: normal;
    font-size: 12pt;
    letter-spacing: 2px;
}
</style>
