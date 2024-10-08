// funciones

// son herramientas que nos permiten ejecutar código que puede ser repetitivo
// tienen un scope local

console.log(typeof function() {})

// sintaxis
// camelCase
// function nombreDeLaFuncion() {}

// invocar
// nombreDeLaFuncion()

// Ejemplo
// crear la funcion saluda
// lanzar un alert que diga hola

function saluda() {
    alert("Hola!");
}

// las funciones pueden o no regresar valores
// function suma() {
//     console.log(4+5)
//     console.log(4+5)
//     return 'hola'
//     return 9+6
//     console.log(4+5)
// }


// const valor = suma();

// console.log(valor)
// suma(valor);

// const valor1 = suma();
// console.log(valor1)

// ejercicio
// crear 4 funciones, suma, resta, multiplicacion y division
// preguntar al usuario que operacion quiere realizar
// se tendrá que retornar el valor de la operación
// imprimir en un alert o en un console el valor retornado

// function suma() {
//     return 4 + 5
// }
// function resta() {
//     return 4 - 6
// }
// function multiplicacion() {
//     return 4 * 7
// }
// function division() {
//     return 4 / 8
// }

// const operacion = prompt(`
//     Operacion a realizar: 
//     1) suma
//     2) resta
//     3) multiplicacion
//     4) división
//     Opcion: `);

// switch(operacion) {
//     case "1":
//         console.log(suma())
//         break;
//     case "2":
//         console.log(resta())
//         break;
//     case "3":
//         console.log(multiplicacion())
//         break;
//     case "4":
//         console.log(division())
//         break;
// }

// parametros
// son valores que ingreso a la función, los parametros se registran en forma de lista
// sintaxis
// parametro1,parametro2,parametro3,...,parametron

//              10     undefined   5
function suma(numero1, numero2, numero3 = 5) {
    return numero1+numero2+numero3
}

console.log(suma(10,5)) // 20
console.log(suma(4,5,10)) // 10
console.log(suma(4,5,'30')) // 930
console.log(suma(10)) // NaN

// opcionales
// que no son requeridos al momento de invocar la funcion
// todos los valores por defecto deben ir al final de la lista de parametros

console.log(suma2valores(5)); // 9
console.log(suma2valores(5,10)) // 15

function suma2valores(n1, n2 = 4, n3 = 0, n5 = 89) {
    if (n1 === undefined) {
        alert("el numero es obligatorio")
    }
    return n1 + n2 // 4+ undefined
}

// funciones anonimas
// son funciones que se declaran sin un nombre
// sintaxis
// function() {}

const restaCualquierCosa = function(num, num2) {
    return num - num2
}

restaCualquierCosa();


// IIFE

// scope
// scope local
// scope global

// scope global no tiene acceso a modificar el scope local
// scope local si tiene acceso a modificar el scope global


let nombre = "";

function cambiaNombre(nom) {  // Pedro
    let nombre = nom // Pedro
    return nombre // Pedro
}
 

 
console.log(cambiaNombre("Mauricio")) // "Mauricio" 
console.log(nombre) // "Mauricio" 