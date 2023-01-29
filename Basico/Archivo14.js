'use strict' 

const perritos1=["Whisky","Tequila","Kahlua","Ron","Papi"];

const perritos2= new Array("Yoko","Mitsuki","Akira","Solovino");

//const mis_perros= [perritos1,perritos2];

let mis_perros=[...perritos1,...perritos2];

mis_perros=[...mis_perros,"Sakura"];

console.log(mis_perros)

console.log(mis_perros[0][1]);
