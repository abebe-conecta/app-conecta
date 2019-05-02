<template>
<div id='mais'>
  <img class='big' src="@/images/Home-3.jpg" alt="">
  <img class='small' src="@/images/saibaMaisSmall.jpg" alt="">
  <router-link to='/sobre'><button>Saiba Mais</button></router-link>
</div>
</template>

<script>
export default {
  name: 'saibaMais'
}
</script>

<style lang='scss'>
#mais {
  margin: 0;
  width: 100%;
  background-color: #546DFE;
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  text-align: center;
}

p {
  color: white;
  font-size: 16px;
  align-self: center;
}

button {
  background-color: #ff3864;
  border-radius: 15px;
  color: white;
  align-self: center;
}

.big {
  width: 100%;
  height: auto;
  @media(max-width: 800px) {
    display: none
  }
}
.small {
  width: 100%;
  height: auto;
  display: none;
  @media(max-width: 800px) {
    display: inline;
  }
}
</style>
