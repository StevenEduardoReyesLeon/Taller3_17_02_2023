
alert("Abrir la consola o presione F12")

let num= Number(prompt("Ingrese un número"));
let suma=0;
    for (let i = 1; i < num; i++) 
    {
        if (num%i==0) 
        {
         suma +=i;   
        }
    }
    (suma==num)?alert("Es un numero perfecto"):alert("No es un numero perfecto");

