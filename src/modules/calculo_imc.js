const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso) {
        setResultadoIMC('Peso inválido', false);
        return
    }

    if (!altura) {
        setResultadoIMC('Altura inválida', false);
        return
    }

    // CALCULO DO IMC
    const imc = calculaImc(peso, altura);
    const nivelImc = condicionaNivel(imc);
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;

    setResultadoIMC(msg, true);

    
});

function criaParagrafo () {
    const p = document.createElement('p');
    return p;
}
function setResultadoIMC (msg, isValid) {
    const textoResultadoIMC = document.querySelector('#resultado-imc')
    textoResultadoIMC.innerHTML = '';

    const p = criaParagrafo(msg);
    if (isValid){ 
        p.classList.add('paragrafo-resultado')
    } else { 
        p.classList.add('bad');
    }

    p.innerHTML = msg
    textoResultadoIMC.appendChild(p);
}

function calculaImc (peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function condicionaNivel (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso','Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];
}