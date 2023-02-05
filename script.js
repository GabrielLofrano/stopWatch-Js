

let segundos = 00;
let milisec = 00;
let adicionarMiliSec = document.getElementById('milisec')
let adicionarSegundo = document.getElementById("segundos");
let intervalo;



function startWatch() {

    clearInterval(intervalo);
     intervalo = setInterval(startCont, 10);

}


function startCont() {
    milisec++;

    if(milisec <= 9) {
        adicionarMiliSec.innerHTML = '0' + milisec;
    }

    if(milisec > 9) {
        adicionarMiliSec.innerHTML = milisec;
    }

    if(milisec > 99) {
        segundos++;
        adicionarSegundo.innerHTML = '0' + segundos
        milisec = 0;
        adicionarMiliSec.innerHTML = '0' + milisec;
    }

    if (segundos > 9) {
        adicionarSegundo.innerHTML = segundos
    }
}


function stopWatch() {
    clearInterval(intervalo);
     intervalo = setInterval(stopCont, 10);
}

function stopCont() {
    if (milisec < 9) {
        adicionarMiliSec.innerHTML = "0" + milisec;
    }else{
        adicionarMiliSec.innerHTML = milisec;
    }

    if (segundos < 9) {
        adicionarSegundo.innerHTML =  "0" + segundos;
    }else{
        adicionarSegundo.innerHTML = segundos;
    }

}


function resetWatch() {
    clearInterval(intervalo);
     intervalo = setInterval(resetCount, 10);
}


function resetCount() {
    adicionarSegundo.innerHTML = '00';
    adicionarMiliSec.innerHTML = '00';
    milisec=0;
    segundos=0;
}