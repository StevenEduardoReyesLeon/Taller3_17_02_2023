
alert("Abrir la consola o presione F12")

let num1 = 1;
let num2 = 0;
let num3 = 1;
let continuar = true;
let numActual;

let numPares = "Los números pares son: ";
let numImpares = "Los números impares son: ";

while(continuar){
    numActual = Number(prompt("Ingrese un número"));

    if(numActual % 2 == 0){
        num2 += numActual;
        numPares += `${numActual} `
    }else{
        num3 = num3 * numActual;
        numImpares += `${numActual} `
    }
    continuar = Number(prompt("Para continuar presione 1 o presione 0 para cancelar"));
}

alert(`${numPares} y su suma es = ${num2}`);
alert(`${numImpares} y su multiplicación es = ${num3}`);
