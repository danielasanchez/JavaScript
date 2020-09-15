'use strict' //
/*
  C i c l o s
*/


for(var a=0;a<10;a++)
{   
    console.log("la variable vale: "+a);
}


var index=2020;
var mi_nombre= "Daniela Sanchez";

for (let index = 0; index < mi_nombre.length; index++) 
{
    console.log(mi_nombre[index]);
}

console.log(index);
console.log("Fin");

const perritos=["Whisky","Tequila","Ron"];

for (var p of perritos) {
	console.log(p);
}
for (var i in perritos) {
	console.log(perritos[i]);
}
