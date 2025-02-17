const catalogo = document.getElementById('catalogo');

const livros = [
  {
    titulo: 'O Moço loiro',
    imagem: 'O Moço Loiro.jpeg',
    descricao: 'Autor: Joaquim Manuel de Macedo',
    url: "https://www.amazon.com.br/dp/B0DVKK3G87"
  },
  {
    titulo: 'O Rosário',
    imagem: 'o Rosario livro.jpg',
    descricao: 'Autor: Florence L. Barclay',
    url: "https://www.amazon.com.br/dp/B0DS2SCGBS"
  }

  // Adicione 
];

livros.forEach(livro => {
  const livroDiv = document.createElement('div');
  livroDiv.classList.add('livro');

  livroDiv.innerHTML = `
    <a href="${livro.url}" target="_blank"> 
      <img src="${livro.imagem}" alt="${livro.titulo}">
    </a>
    <h4>${livro.titulo}</h4>
    <p>${livro.descricao}</p>
  `;

  catalogo.appendChild(livroDiv);
});



document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
  
      if (targetElement) {
        const targetPosition = targetElement.offsetTop;
        const windowHeight = window.innerHeight;
        const scrollToPosition = targetPosition - (windowHeight / 2) + (targetElement.offsetHeight / 2);
  
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth' // Para adicionar a animação de rolagem suave
        });
      }
    });
  });


  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('fixed');
    } else {
      navbar.classList.remove('fixed');
    }
  });


  const menuToggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  
  menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
  });


