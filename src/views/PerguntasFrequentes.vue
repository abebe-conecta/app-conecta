<template lang='html'>
  <div id='perguntas-frequentes'>
          <navbar :ativo='true'></navbar>
    <div class='container-perguntas-frequentes'>

  <h1 class='-titulo'>Tem alguma dúvida?</h1>
  <div class='-conecta'>
    <h2 class='-subtitulo'>Conecta</h2>
  <CardExpansivo v-for='(i, index) in conteudoConecta' :key='index' :titulo='i.titulo' :conteudo='i.conteudo'></CardExpansivo>
  </div>
  <div class='-projetos'>
  <h2 class='-subtitulo'>Enviar Projetos</h2>
  <CardExpansivo v-for='(i, index) in conteudoProjetos' :key='index' :titulo='i.titulo' :conteudo='i.conteudo'></CardExpansivo>
  </div>
  <div class='-empresas'>
  <h2 class='-subtitulo'>Empresas</h2>
  <CardExpansivo v-for='(i, index) in conteudoEmpresas' :key='index' :titulo='i.titulo' :conteudo='i.conteudo'></CardExpansivo>
  </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import CardExpansivo from '@/components/CardExpansivo'

export default {
  name: 'PerguntasFrequentes',
  components: {
    Navbar,
    CardExpansivo
  },
  data () {
    return {
      conteudoConecta: [{
        titulo: 'O que é o Conecta?',
        conteudo: 'O Conecta foi criado com o objetivo de dar visibilidade para projetos socio-culturais e de impacto criados na periferia.'
      }, {
        titulo: 'Como funciona?',
        conteudo: 'Insira aqui o conteúdo'
      }],
      conteudoProjetos: [{
        titulo: 'Quais projetos podem estar na plataforma?',
        conteudo: 'Insira aqui o conteúdo'
      }, {
        titulo: 'Meu projeto vai receber algum investimento?',
        conteudo: 'Insira aqui o conteúdo'
      }, {
        titulo: 'Posso enviar mais de um projeto?',
        conteudo: 'Insira aqui o conteúdo'
      }, {
        titulo: 'Quanto tempo posso deixar meu projeto?',
        conteudo: 'Insira aqui o conteúdo'
      }, {
        titulo: 'Meu projeto vai receber um investimento e agora?',
        conteudo: 'Insira aqui o conteúdo'
      }],
      conteudoEmpresas: [{
        titulo: 'Como apoiar os projetos do Conecta?',
        conteudo: 'Insira aqui o conteúdo'
      }, {
        titulo: 'Que tipo de empresa pode contribuir?',
        conteudo: 'Insira aqui o conteudo'
      }, {
        titulo: 'Quais benefícios para as empresas apoiadoras?',
        conteudo: 'Para as empresas é possível obter, através da lei de incetivo à cultura, abatimento fiscal do valor total investido nos projetos'
      }, {
        titulo: 'É possível escolher quais projetos apoiar?',
        conteudo: 'Insira aqui o conteúdo'
      }]
    }
  }
}
</script>

<style lang='scss' scoped>
#perguntas-frequentes {
    margin: 0;
    max-width: 100%;
    display: block;
}
.container-perguntas-frequentes {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 100%;
    height: auto;
    padding-top: 90px;

    > .-titulo {
        color: #ED4054;
        letter-spacing: 3px;
        text-align: left;
    }

    > .-conecta {
        width: 80%;
    }

    > .-projetos {
        width: 80%;
    }

    > .-empresas {
        width: 80%;
    }
}
.-subtitulo {
    text-transform: uppercase;
    color: #ED4054;
    margin-left: -90px;
    font-size: 36px;
    padding-bottom: 40px;

    &::after {
        content: ' _';
        border-radius: 10px;
        @media(max-width: 800px) {
            width: 50%;
        }
    }
}
</style>
