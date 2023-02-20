
alert("Abrir la consola o presione F12")

let num1 = Number(prompt("Ingrese un número"))
let num2 = Number(prompt("Ingrese un nuevo número"))

if(num1 > num2){
    console.log(`El número ${num1} es mayor que ${num2}`)
}else{
    if(num1 == num2){
        console.error("Intentelo nuevamente números iguales")
    }else if( num1 < num2 ){
        console.log(`El número ${num2} es mayor que ${num1}`)
    }
}