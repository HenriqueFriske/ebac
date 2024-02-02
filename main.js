
const alerta = document.getElementById(`formulario`);

alerta.addEventListener(`submit`, function(e){
    e.preventDefault(); 
    validar();
    limpa();

})

function validar() {
    const valorA= document.getElementById(`numberA`).value;
    const valorB= document.getElementById(`numberB`).value;


    if (valorB > valorA){
        alert(`Valido: O valor B = `+ valorB +` é maior que o valor A = ` + valorA);
    }else if (valorA > valorB){
        alert(`invalido: O valor A = `+ valorA +` é maior que o valor B = ` + valorB);
    }else{
        alert("Invalido: Os valores são iguais");
    }
}

function limpa(){

    numberA.value = '';
    numberB.value = '';
}

