<template>
  <div id="allProjects">
    <div id="busca">
      <!-- <input placeholder="Buscar Projetos"> -->
    </div>
    <img src="@/images/ec3.jpg" alt class="header">
    <projects></projects>
  </div>
</template>

<script>
import projects from "@/components/Projects.vue";
import saibaMais from "@/components/SaibaMais.vue";
import busca from "@/components/Busca.vue";

export default {
  name: "allProjects",
  components: {
    projects,
    saibaMais
  }
};
</script>

<style scoped>
#allProjects {
  width: 100%;
  display: block;
  /* flex-wrap: wrap; */
}
.header {
  width: 100%;
}
#busca {
  width: 100%;
  height: 100px;
  padding-bottom: 91px;
  background-color: #ED4054;
  /* display: flex;
  align-items: flex-start */
}
    input{
        width: 80%;
        padding-bottom: 500px;
        height: 5px;
        }
</style>
