<template>
  <div id='cardContainer'>
    <div class='card'>
      <img src='../images/ex1.jpg' alt>
      <h6>Espaço do negro no teatro</h6>
      <p>Placeat voluptate temporibus animi, a rem voluptas odio possimus.</p>
      <h5 class='autor'>Por: Nome do Autor</h5>
    </div>
    <div class='card'>
      <img src='../images/ex3.jpg' alt>
      <h6>Estética Periférica</h6>
      <p>Placeat voluptate temporibus animi, a rem voluptas odio possimus.</p>
      <h5 class='autor'>Por: Nome do Autor</h5>
    </div>
    <div class='card'>
      <img src='../images/ex2.jpg' alt>
      <h6>Constelação Familiar</h6>
      <p>Placeat voluptate temporibus animi, a rem voluptas odio possimus.</p>
      <h5 class='autor'>Por: Nome do Autor</h5>
    </div>
    <!-- <div class='card'>
      <img src='../images/ex4.jpeg' alt>
      <h6>Inserir Título do Card</h6>
      <p>Placeat voluptate temporibus animi, a rem voluptas odio possimus.</p>
      <h5 class='autor'>Por: Nome do Autor</h5>
    </div> -->
    <!-- <div class='card'>
      <img src='../images/ex1.jpg' alt>
      <h6>Título do Card</h6>
      <p>Placeat voluptate temporibus animi, a rem voluptas odio possimus.</p>
      <h5 class='autor'>Por: Nome do Autor</h5>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'cardProjeto'
}
</script>

<style>
#cardContainer {
  width: 100%;
  height: 600px;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-around;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 0;
}
.card {
  background-color: white;
  border-radius: 30px;
  width: 370px;
  height: 500px;
  /* border-style: groove */
  -webkit-box-shadow: 0px 3px 4px -1px rgba(158, 158, 158, 1);
  -moz-box-shadow: 0px 3px 4px -1px rgba(158, 158, 158, 1);
  box-shadow: 0px 3px 4px -1px rgba(158, 158, 158, 1);
}
.card h6 {
  font-size: 25px;
  text-transform: uppercase;
  font-weight: lighter;
  letter-spacing: 0.2rem;
  margin: 15px 20px 2px 15px;
}
.card h5 {
  font-size: 15px;
  color: #ed4054;
  margin: 20px 20px 2px 15px;
  line-height: 0.6;
  text-transform: uppercase;
  font-weight: lighter !important;
}
.card p {
  font-size: 15px;
  color: black;
  letter-spacing: 0.4rem;
  margin: 20px 20px 2px 15px;
  text-align: justify;
}
.card img {
  width: 370px;
  height: 250px;
  border-radius: 30px 30px 0 0;
}
</style>
