<template>
  <div id='footer'>
    <img src='../images/logo-abebe.png' alt='logo abebé' id='logo-abebe'>
    <ul>
      <li>
        <a href>Projetos</a>
      </li>
      <li>
        <a href>Enviar</a>
      </li>
      <li>
        <a href>Login</a>
      </li>
      <li>
        <a href>Sobre</a>
      </li>
      <li>
        <a href>FAQ</a>
      </li>
    </ul>
    <img src='../images/logo-vaitec.png' alt='logo vaitec' id='logo-vaitec'>
    <!-- <h6>2019 - Produzido por Abebé Negócios de Impacto</h6> -->
  </div>
</template>

<script>
export default {
  name: 'rodape'
}
</script>

<style>
#footer{
  background-color: white;
  width: 100%;
  height: 200px;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* #footer img {
  width: 150px;
  margin-right: 10px;
  height: auto;
} */

#footer ul {
  display: flex;
  width: 100%;
  list-style: none;
  align-items: left;
  flex-flow: column wrap;
  align-self: left;
}
#footer ul a {
  color: black;
  font-size: 10pt;
  text-decoration: none;
  text-transform: uppercase;
}

#logo-abebe {
  width: 150px;
  height: auto;
  align-self: center;
  padding-left: 50px;
}

#logo-vaitec {
  width: 300px;
  height: auto;
  align-self: center;
}

h6{
  text-align: left;
  font-size: 10px;
}
</style>
