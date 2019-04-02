<template>
  <div id="form-login">
    <h3>Login</h3>
    <button id="login-fb">Entrar com Facebook</button>

    <form>
      <label for>E-mail</label>
      <input type="email" placeholder="exemplo@email.com">
      <label for>Senha</label>
      <input type="password" placeholder="Senha">
      <button>Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "login"
};
</script>

<style>
body {
  margin: 0;
  font-family: "Montserrat", sans-serif;
}

#form-login {
  display: flex;
  justify-content: center;
  align-content: center;
}

#form-login {
  align-items: center;
  flex-flow: column wrap;
  max-width: 600px;
  height: 300px;
  background-color: rgb(238, 238, 238);
}

button {
  max-width: 300px;
}
</style>


