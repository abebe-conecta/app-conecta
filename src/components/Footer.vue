<template>
  <div>
    <img src="../images/logo-abebe.png" alt="logo abebé" id="logo-abebe">
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
    <img src="../images/logo-vaitec.png" alt="logo vaitec" id="logo-vaitec">
  </div>
</template>

<script>
export default {
  name: "footer"
};
</script>

<style>
footer {
  background-color :white;
  width: 100%;
  height: auto;
  position: fixed;
  left: 0;
  bottom: 0;
}

footer div {
  display: flex;
  justify-content: center;
  align-items: center;
}

footer img {
  width: 40px;
  margin-right: 10px;
  height: auto;
}

footer ul {
  display: flex;
  width: 100%;
  list-style: none;
  align-items: center;
  flex-flow: column wrap;
  align-self: center;
}
footer ul a {
  color: white;
  font-size: 14pt;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
}

#logo-abebe {
  width: 150px;
  height: 150px;
  align-self: center;
}

#logo-vaitec {
  width: 150px;
  height: 150px;
  align-self: center;
}
</style>


