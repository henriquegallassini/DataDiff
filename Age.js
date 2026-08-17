const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    //#2 Capturar os inputs e convertelos em numeros
    const inputDia_atual = e.target.querySelector('#dia_atual');
    const inputDia_Nascimento = e.target.querySelector('#dia_nascimento');

    const inputMes_atual = e.target.querySelector('#mes_atual');
    const inputMes_Nascimento = e.target.querySelector('#mes_nascimento');

    const inputAno_atual = e.target.querySelector('#ano_atual');
    const inputAno_Nascimento = e.target.querySelector('#ano_nascimento');


    const diaAtual = Number(inputDia_atual.value);
    const diaNasci = Number(inputDia_Nascimento.value);
    const mesAtual = Number(inputMes_atual.value);
    const mestNasci = Number(inputMes_Nascimento.value);
    const anoAtual = Number(inputAno_atual.value);
    const anoNasci = Number(inputAno_Nascimento.value);

    console.log(diaAtual, diaNasci, mesAtual, mestNasci, anoAtual, anoNasci);

    if(!diaAtual) {
        Set_Result('Data Atual inválida', false);
        return;
    }

    if(!diaNasci) {
        Set_Result('Data Nascimento inválida', false);
        return;
    }

    if(!mesAtual) {
        Set_Result('Mês Atual inválido', false);
        return;
    }

    if(!mestNasci) {
        Set_Result('Mês Nascimento inválido', false);
        return;
    }

    if(!anoAtual) {
        Set_Result('Ano Atual inválido', false);
        return;
    }

    if(!anoNasci) {
        Set_Result('Ano Nascimento inválido', false);
        return;
    }

    let Dia = getDia(diaAtual, diaNasci, mesAtual, anoAtual);
    let Mes = getMes(mesAtual, mestNasci, diaAtual, diaNasci);
    let Ano = getAno(anoAtual, anoNasci, mesAtual, mestNasci, diaAtual, diaNasci);

    const msg = `Voce tem ${Ano} anos, ${Mes} meses e ${Dia} dias`;
    Set_Result(msg, true);
});

function getDia(diaA, diaN, mesA, anoA) {
    let dia = diaA - diaN;
    if (dia < 0) {
        // dias do mês anterior ao mês atual
        const diasMesAnterior = new Date(anoA, mesA - 1, 0).getDate();
        dia += diasMesAnterior;
    }
    return dia;
}

function getMes(mesA, mesN, diaA, diaN) {
    let mes = mesA - mesN;
    if (diaA - diaN < 0) {
        mes -= 1; // empresta 1 mês pro cálculo de dias
    }
    if (mes < 0) {
        mes += 12;
    }
    return mes;
}

function getAno(anoA, anoN, mesA, mesN, diaA, diaN) {
    let ano = anoA - anoN;
    let mes = mesA - mesN;
    if (diaA - diaN < 0) mes -= 1;
    if (mes < 0) {
        ano -= 1; // empresta 1 ano pro cálculo de meses
    }
    return ano;
}

function CreateP () {
    const p = document.createElement('p');
    return p;
}

function Set_Result (msg, isValid) {
    const resultado = document.querySelector('.result');
    resultado.innerHTML = '';

    const p = CreateP();

    if(isValid){
        p.classList.add('paragrafo-concluido');
    } else {
        p.classList.add('paragrafo-error');
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}