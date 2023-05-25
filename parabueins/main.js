
const tecla = document.querySelector('div.container');

const audio1 = document.querySelector('#som_inicial');

tecla.addEventListener('click', function(e) {
    e.preventDefault(); 
    audio1.play();
    setTimeout(function() {
        window.location.href = 'https://github.com/Gramand/tere/blob/main/parabueins/negocio.html';
      }, 3000);
  });
  
