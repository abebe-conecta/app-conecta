<template>
<div id='mais'>
  <img class='big' src="@/assets/images/SaibaMais/Home-3.jpg" alt="">
  <img class='small' src="@/assets/images/SaibaMais/saibaMaisSmall.jpg" alt="">
  <router-link to='/sobre'><button class='botao-saiba-mais'>Saiba Mais</button></router-link>
</div>
</template>

<script>
export default {
  name: 'saibaMais'
}
</script>

<style lang='scss' scoped>
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
.botao-saiba-mais {
    font-family: 'Comfortaa', cursive;
    background-color: #ff3864;
    border-style: none;
    border-radius: 75px;
    width: 240px;
    height: 45px;
    margin-top: 45px;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin: 55px 0;
    font-size: 20px;
    color: white;
}
a {
    margin-top: -100px;
}
.big {
    width: 100%;
    height: auto;
    @media(max-width: 800px) {
        display: none;
    }
}
.small {
    display: none;
    @media(max-width: 800px) {
        display: inline;
        width: 100%;
        height: auto;
    }
}
</style>
