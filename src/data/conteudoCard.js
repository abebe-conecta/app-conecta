const images = require.context('./img', true, /\.svg$/)

const conteudoCard = {
  images: [
    {
      src: images('./img/ex1.svg'),
      titulo: 'Espaço do negro no teatro',
      descricao: 'Placeat voluptate temporibus animi, a rem voluptas odio possimus.',
      autor: 'Nome do Autor'
    },
    {
      src: images('./img/ex2.svg'),
      titulo: 'Estética Periférica',
      descricao: 'Placeat voluptate temporibus animi, a rem voluptas odio possimus.',
      autor: 'Nome do Autor'
    },
    {
      src: images('./img/ex3.svg'),
      titulo: 'Constelação Familiar',
      descricao: 'Placeat voluptate temporibus animi, a rem voluptas odio possimus.',
      autor: 'Nome do Autor'
    },
    {
      src: images('./img/ex4.svg'),
      titulo: 'Inserir Título do Card',
      descricao: 'Placeat voluptate temporibus animi, a rem voluptas odio possimus.',
      autor: 'Nome do Autor'
    }
  ]
}

export default conteudoCard
