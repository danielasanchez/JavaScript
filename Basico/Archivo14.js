'use strict' 

const perritos1=["Whisky","Tequila","Kahlua","Ron","Papi"];

const perritos2= new Array("Yoko","Mitsuki","Akira","Solovino");

//const mis_perros= [perritos1,perritos2];

const mis_perros=[...perritos1,...perritos2];

console.log(mis_perros)

console.log(mis_perros[0][1]);
