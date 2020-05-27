


let botao = document.querySelector('.hamburguer');
let lista = document.querySelector('.lista-escondida');


botao.addEventListener('click', function(evento) {
    console.log('oie');
    
    
    lista.classList.toggle('fadeIn');

    setTimeout(function() {
        lista.classList.toggle('lista-escondida');
    }, 300);
});

