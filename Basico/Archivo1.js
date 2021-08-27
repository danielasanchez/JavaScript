'use strict' //
/*
  C O M E N T A R I O
*/
// Tipos de variables
var numero=5;
console.log("numero: ", numero);

var nombre="Daniela";
console.log("Mi nombre: ", nombre);

var apellido="Sanchez";
var completo = nombre + " "+ apellido;
console.log("Mi nombre: ", completo);

var boleana=true;

//arreglo (¡Podemos guardar de diferentes tipos de datos!)
var arreglo = ["lunes",5,true,"Daniela"];
console.log("En este lugar guardamos: ", arreglo[3]);
console.log(arreglo[3][0]);

//objeto
var perro = {
  nombre:"Whisky",
  raza:"Chihuahua",
  edad:5
}
console.log("mi perro se llama:", perro.nombre);

perro.nombre= 'Tequila';

console.log("mi perro se llama "+perro.nombre);

var {nombre,raza,edad} = perro;
console.log("mi perro se llama:",nombre);
console.log("mi perro raza:",raza);
console.log("mi perro edad:",edad);
nombre="ron"
var {nombre:names} = perro;
console.log("mi perro se llama:",names);


