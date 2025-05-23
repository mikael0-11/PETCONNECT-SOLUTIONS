
  
  window.addEventListener('scroll', animarScroll);
  window.addEventListener('load', animarScroll);
  
  function mostrarModal() {
    const modal = document.querySelector(".modal");
    const mascara = document.querySelector(".mascara-modal");
    modal.style.left = "50%"; // move o modal para o centro
    mascara.style.visibility = "visible"; // mostra o fundo escuro
  }
  
  function esconderModal() {
    const modal = document.querySelector(".modal");
    const mascara = document.querySelector(".mascara-modal");
    modal.style.left = "-30%"; // esconde novamente
    mascara.style.visibility = "hidden"; // esconde o fundo escuro
  }
  