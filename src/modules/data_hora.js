data = new Date();
const diaSemana = data.getDay();
const diaSemanaTexto = converteDiaTexto(diaSemana);

const diaMes = data.getDate();
const mes = converteMesTexto(data);
const ano = data.getFullYear();

const hora = zeroEsquerda(data.getHours());
const minuto =zeroEsquerda(data.getMinutes());

setResultado(diaSemanaTexto, mes, ano, diaMes, hora, minuto);

function converteDiaTexto (diaSemana){
let diaSemanaTexto;

    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda-Feira';
        return diaSemanaTexto;
    case 2:
        diaSemanaTexto = 'Terça-Feira';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta-Feira';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta-Feira';
        return diaSemanaTexto;
    case 5:
        diaSemanaTexto = 'Sexta-Feira';
        return diaSemanaTexto;
    case 6:
        diaSemanaTexto = 'Sabado';
        return diaSemanaTexto;
    default:
        diaSemanaTexto = '';
    }
}

function converteMesTexto (data) {
    let mes = data.getMonth() + 1;
    const todosMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    if (mes == 12) return todosMes[11];
    if (mes == 11) return todosMes[10];
    if (mes == 10) return todosMes[9];
    if (mes == 9) return todosMes[8];
    if (mes == 8) return todosMes[7];
    if (mes == 7) return todosMes[6];
    if (mes == 6) return todosMes[5];
    if (mes == 5) return todosMes[4];
    if (mes == 4) return todosMes[3];
    if (mes == 3) return todosMes[2];
    if (mes == 2) return todosMes[1];
    if (mes == 1) return todosMes[0];
}

function setResultado (diaSemanaTexto, mes, ano, diaMes, hora, minuto) {
    const textoResultado = document.querySelector('.data-hora');
    let mensagemResultado;
    mensagemResultado = `${diaSemanaTexto}, ${diaMes} de ${mes} de ${ano} ${hora}:${minuto}`;
    textoResultado.innerHTML = mensagemResultado;
}

function zeroEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}


/*
const textoResultado = document.querySelector('.container h1');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    timeStyle: 'short'
};

textoResultado.innerHTML = data.toLocateDataString('pt-BR', opcoes);
*/