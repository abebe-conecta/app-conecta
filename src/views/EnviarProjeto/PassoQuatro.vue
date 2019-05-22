<template>
<div id='passo-um'>
  <router-link to='/'> <img src='@/assets/images/Navbar/logo-conecta-branco.png' style='align-self: normal; width: 200px; height: auto; margin-top: 20px; margin-left: 20px;' alt='logo conecta'></router-link>
  <h4>Passo 1 de 4</h4>

  <form>
    <div class='container-inputs tags'>
      <label for>Tags</label>
      <textarea v-model='tags' cols='30' rows='10' placeholder='Insira até 5 palavras-chaves que tem a ver com seu projeto, assim fica mais fácil de aparecer na busca' required></textarea>
    </div>

    <div class='container-inputs imagem'>
      <label for>Adicionar Foto</label>
      <vue-cropper v-model='imagem' ref='cropper' :src='imgSrc' alt='Source Image' :cropmove='cropImage' required>
      </vue-cropper>
    </div>
  </form>

  <router-link to='/projeto-enviado'>
    <button id='botao-passo-um' v-on:click='salvarCardProjeto'>Enviar Projeto</button>
  </router-link>
</div>
</template>

<script>
import VueCropper from 'vue-cropperjs'

export default {
  name: 'passo-quatro',
  components: {
    VueCropper
  },
  computed: {
    camposPreenchidos () {
      return this.tags !== '' && this.imagem !== ''
    }
  }
  //   tags: {
  //     get() {
  //       return this.$store.state.projeto.tags
  //     },
  //     set(value) {
  //       this.$store.commit('setProjetoTags', value)
  //     }
  //   },
  //   imagem: {
  //     get() {
  //       return this.$store.state.projeto.imagem
  //     },
  //     set(value) {
  //       this.$store.commit('setProjetoImagem', value)
  //     }
  //   }
  // },
  // methods: {
  //   salvarCardProjeto() {
  //     const projeto = this.projetoInserido
  //     this.$store.commit('salvarProjeto', Object.assign({}, projeto))
  //       .catch(() => {
  //         alert('Algo deu errado. Por favor, tente salvar novamente')
  //       })
  //   }
  // }
  // methods: {
  //   adicionarProjeto() {
  //     const projeto = this.
  //   }
  // }
  // methods: {
  //   setImage (e) {
  //     const file = e.target.files[0];
  //     if (!file.type.includes('image/')) {
  //       alert('Please select an image file');
  //       return;
  //     }
  //     if (typeof FileReader === 'function') {
  //       const reader = new FileReader();
  //       reader.onload = (event) => {
  //         this.imgSrc = event.target.result;
  //         // rebuild cropperjs with the updated source
  //         this.$refs.cropper.replace(event.target.result);
  //       };
  //       reader.readAsDataURL(file);
  //     } else {
  //       alert('Sorry, FileReader API not supported');
  //     }
  //   },
  //   cropImage() {
  //     // get image data for post processing, e.g. upload or setting image src
  //     this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
  //   },
  //   rotate() {
  //     // guess what this does :)
  //     this.$refs.cropper.rotate(90);
  //   },
  // },
}
</script>

<style scoped>
#passo-um {
  font-family: 'Comfortaa', cursive;
  margin: 0;
  width: 100%;
  height: 656px;
  display: flex;
  background-color: #556dff;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h4 {
  font-size: 20pt;
  font-weight: normal;
  letter-spacing: 4px;
}

form {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  outline: none;
}

.container-inputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #511cf6;
  border-radius: 20px;
  width: 350px;
  height: 400px;
}

.container-inputs .tags {
  margin-left: 100px;
}

label {
  align-self: baseline;
  margin: 1em 0 0.5em 1rem;
  font-size: 20px;
  font-weight: normal;
  letter-spacing: 4px;
}

textarea {
  width: 85%;
  height: 110px;
  border-radius: 10px;
  margin: 0 25px 30px 15px;
  outline: none;
}

textarea::placeholder {
  font-family: 'Comfortaa', cursive;
  color: #b4b4b4;
  text-align: left;
  font-size: 8pt;
  letter-spacing: 4px;
  line-height: 17px;
  padding: 8px 0 0 10px;
}

#botao-passo-um {
  font-family: 'Comfortaa', cursive;
  width: 181px;
  height: 35px;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 0px;
  border-radius: 90px;
  background-color: #ed4054;
  color: white;
  text-transform: uppercase;
  letter-spacing: 4px;
}
</style>
