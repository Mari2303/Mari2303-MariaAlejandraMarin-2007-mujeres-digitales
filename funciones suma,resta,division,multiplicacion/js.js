/* 1. crear una funcion donde le definimos un nombre 
   2. entre los parentecis escribimos los parametros ( es lo que usamos para definir ) 
   3. agregamos una vareable donde (nombre = a parametro)
   4. agregamos otra vareable que se va a utilizar para que nos de el resultado 
   5. agregamos la vareable que va a hacer igual a la operacion ( a = b + c)
   por ultimo retornamos la operacion con (return)
   */

function suma(pnumero1,pnumero2) {
    let numero1 = pnumero1;
    let numero2 = pnumero2;
    let sumar
   sumar = numero1 + numero2 ;
    return sumar 

}


function resta(pnumero1,pnumero2){
    let numero1 = pnumero1;
    let numero2 = pnumero2;
    let restas
    restas = numero1 - numero2;
    return restas
}

function multipli(pnumero1,pnumero2){
    let numero1 = pnumero1;
    let numero2 = pnumero2;
    let resultado
    resultado = numero1 * numero2;
    return resultado
}

function division(pnumero1,pnumero2) {
    let numero1=pnumero1;
    let numero2=pnumero2;
    let divisiones
    divisiones = numero1 / numero2;
    return divisiones
    
}