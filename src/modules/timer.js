const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;


document.addEventListener('click', function(e){
    const elemento = e.target;

    //iniciar.addEventListener('click', function(evento)){};
    if (elemento.classList.contains('iniciar')){
        relogio.classList.remove('pausado');
        clearInterval(timer);
        inicializa();
    }

    if (elemento.classList.contains('pausar')) {
        relogio.classList.add('pausado');
        clearInterval(timer);
    }

    if (elemento.classList.contains('zerar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
})

function inicializa(){
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaHora(segundos);
    }, 1000)
}

function criaHora(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}
