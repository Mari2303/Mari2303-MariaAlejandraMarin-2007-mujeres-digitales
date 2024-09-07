function resul(pnumero) {
    let numero = pnumero;
    let resultado
    if (numero %2==0) {
        resultado = "numero es par"
    }
    else {
        resultado = "numero es inpar"
    } 
    return resultado
}
console.log(resul(3));


/* funcion que solo sume los numeros pares */

function resul(pnumero) {
    let numero = pnumero;
    numero = 50;
    let sumaPares = 0;
    for (let contador = 0; contador <= numero; contador++) {              
    } 
    if (contador %2==0) {
        sumaPares = sumaPares + contador 
    }
    console.log(sumaPares)
}
