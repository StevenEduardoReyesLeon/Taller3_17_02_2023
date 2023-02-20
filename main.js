
alert("Abrir la consola o presione F12")

let continuar = true;
let numMayor = 0 
let numActual;
let mensaje = "Sus números son: ";

while(continuar){
    numActual = Number(prompt("Ingrese un número"));

    if(numActual>numMayor){
        numMayor = numActual;
    }
    mensaje += `${numActual}`
    continuar = Number(prompt("Si desea continuar presione 1, de lo contrario presione 0"));
}

alert(`${mensaje} el numero mayor es ${numMayor}`)