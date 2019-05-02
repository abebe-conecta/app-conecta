<template>
<div id='footer' v-if='ativo'>
  <img src='@/images/logo-abebe.png' alt='logo abebé' class='logo-abebe'>
  <div id='mapa-do-site'>
    <router-link to='/projetos'>Projetos</router-link>
    <router-link to='/enviar-projeto'>Enviar</router-link>
    <router-link to='/login'>Login</router-link>
    <router-link to='/sobre'>Sobre</router-link>
    <router-link to='/faq'>FAQ</router-link>
    <img src='@/images/logo-vaitec.png' class='logo-vaitec' alt='logo vai tec'>
    <img class='rodape-frase' src='@/images/rodape.png' alt=''>
    <!-- <h6>2019 - Produzido por Abebé Negócios de Impacto</h6> -->
  </div>

  <!-- <img src='../images/logo-vaitec.png' alt='logo vaitec' id='logo-vaitec'> -->
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

<style scoped>
#footer {
  font-family: 'Comfortaa', cursive;
  background-color: white;
  width: 100%;
  height: 260px;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

#mapa-do-site {
  display: flex;
  width: 320px;
  height: 320px;
  flex-direction: column;
  margin: 100px 720px 0 0;
  /* padding-top: 130px;
  padding-left: 50px */
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
  padding-bottom: 30px;
  letter-spacing: 0.2em;
}

#mapa-do-site h6 {
  text-align: left;
  font-weight: normal;
  font-size: 12pt;
  letter-spacing: 2px;
}

.logo-abebe {
  width: 200px;
  height: auto;
  /* margin: 70px 5px 15px 107px; */
}

.logo-vaitec {
  width: 300px;
  height: auto;
  margin: 100px 0 0 720px;
}

.rodape-frase {
  width: 1000px;
}
</style>
