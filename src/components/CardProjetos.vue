<template>
  <div id="cardContainer">
    <div class="card">
      <img src="../images/ex1.jpg" alt>
      <h6>Título do Card</h6>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat voluptate temporibus animi, a rem voluptas odio possimus. Tempore ducimus assumenda iusto voluptatibus commodi at, dolore, velit, quaerat nobis sit impedit?</p>
      <h6 class="autor">Por: Nome do Autor</h6>
    </div>
    <div class="card">
      <img src="../images/ex1.jpg" alt>
      <h6>Título do Card</h6>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat voluptate temporibus animi, a rem voluptas odio possimus. Tempore ducimus assumenda iusto voluptatibus commodi at, dolore, velit, quaerat nobis sit impedit?</p>
      <h6 class="autor">Por: Nome do Autor</h6>
    </div>
    <div class="card">
      <img src="../images/ex1.jpg" alt>
      <h6>Título do Card</h6>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat voluptate temporibus animi, a rem voluptas odio possimus. Tempore ducimus assumenda iusto voluptatibus commodi at, dolore, velit, quaerat nobis sit impedit?</p>
      <h6 class="autor">Por: Nome do Autor</h6>
    </div>
    <div class="card">
      <img src="../images/ex1.jpg" alt>
      <h6>Título do Card</h6>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat voluptate temporibus animi, a rem voluptas odio possimus. Tempore ducimus assumenda iusto voluptatibus commodi at, dolore, velit, quaerat nobis sit impedit?</p>
      <h6 class="autor">Por: Nome do Autor</h6>
    </div>
    <div class="card">
      <img src="../images/ex1.jpg" alt>
      <h6>Título do Card</h6>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat voluptate temporibus animi, a rem voluptas odio possimus. Tempore ducimus assumenda iusto voluptatibus commodi at, dolore, velit, quaerat nobis sit impedit?</p>
      <h6 class="autor">Por: Nome do Autor</h6>
    </div>
    <button>Ver Mais</button>
  </div>
</template>

<script>
export default {
  name: "cardProjeto"
};
</script>

<style>
#cardContainer {
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  background-color: lightgray;
  border-radius: 10px;
  width: 250px;
  height: 500px;
}

button {
  background-color: lightblue;
  border-radius: 10px;
  width: 90px;
  height: 35px;
  margin-top: 15px;
}
</style>


