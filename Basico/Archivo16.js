'use strict' 

const perritos1=["Whisky","Tequila","Kahlua","Ron","Papi"];


//convierte un arreglo en string
const perritus= perritos1.join();

console.log(perritus);

//convierte una string en sub string

var lenguajes= "C#, Java, JavaScript, Python"

var lenguajes2= lenguajes.split(", ");

console.log(lenguajes2);

perritos1.sort();
perritos1.reverse();

var numbers=[6,34,33,22,33,11]

//sort y reverse no funciona con numeros
console.log(numbers.sort());

var arregloNum= numbers.sort((a,b) => a-b);

console.log(arregloNum)

numbers.forEach(n => console.log(n));
//numbers=[6,34,33,22,33,11]
var arreglo= numbers.filter(n => n!=33);
//arreglo=[6,34,22,11]
console.log(arreglo);
