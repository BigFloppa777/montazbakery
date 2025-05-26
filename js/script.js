//barra de menu//

const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');

function abrirMenu() {
  navMenu.classList.add('active');
  overlay.classList.remove('hidden'); 
  overlay.classList.add('active');
}

function cerrarMenu() {
  navMenu.classList.remove('active');
  overlay.classList.remove('active');

  
  setTimeout(() => {
    overlay.classList.add('hidden');
  }, 300); 
}

menuBtn.addEventListener('click', () => {
  if (navMenu.classList.contains('active')) {
    cerrarMenu();
  } else {
    abrirMenu();
  }
});

overlay.addEventListener('click', cerrarMenu);

