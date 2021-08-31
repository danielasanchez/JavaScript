'use strict' 

const perritos1=["Whisky","Tequila","Kahlua","Ron","Papi"];

//regresara un false o true
const encontro = perritos1.some(function(element){
	return element=="Tequila";
});

//const encontro = perritos1.some(element=>element=="Tequila");

perritos1.some(element=>element=="Tequila");

console.log(encontro);


//los metodos para los arreglos de igual forma
//se pueden utilizar en un arreglo de objetos
//solo tendriamos que indicar la propiedad

const perritosR=[
	{nombre:"Whisky",edad:8, raza:"Chihuahua Mix"},
	{nombre:"Tequila",edad:8, raza:"Chihuahua Mix"},
	{nombre:"Ron",edad:10, raza:"Chihuahua Mix"},
	{nombre:"Akira",edad:8, raza:"Mestiza"}
];

// Regresa solo el primero
const datos = perritosR.find(p=> p.nombre=="Akira");

console.log(datos);

const Familia=[
	{nombre:"Hal",edad:40, sueldo:15000},
	{nombre:"Lois",edad:38, sueldo:10000},
	{nombre:"Francis",edad:18, sueldo:3000},
	{nombre:"Reese",edad:16, sueldo:2500},
	{nombre:"Malcolm",edad:14, sueldo:2000},
	{nombre:"Dewey",edad:10, sueldo:500}
];

//const sueldos = Familia.reduce((sueldoT,persona)=>sueldoT+persona.sueldo,0)
const sueldos = Familia.reduce((sueldoT,p)=>{return sueldoT+p.sueldo},0)
console.log(sueldos)

//operador ternario
//condicion ? accion_verdadera : accion_falsa
encontro==true ? console.log("se encontro!!!!") : console.log("no se encontro");

const respuesta = encontro==true ? 
				"se encontro" 
				: 
				"no se encontro"
				;

//condicion && accion_verdadera 
encontro==true  && console.log("si se encontro &&");

console.log(respuesta);
