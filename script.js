function calcularFactorial(num){
    let total = 1;
    for (i = 1; i <= num; i++){
        total = total * i;
    }
    return total;
}

function recargarPagina(){
    location.reload();
}

function calcular() {
    let num = document.getElementById('inputNumero').value;

    while(isNaN(num)){
        alert('Error, ingresa números');
        recargarPagina();
        return;
    }
    
    const numero = parseFloat(num);
    const multi = calcularFactorial(numero);

    const resultado = document.getElementById('resultado');
    resultado.innerText = `El factorial es ${multi}`;
}