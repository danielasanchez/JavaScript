'use strict' 

var a, b, c, d, e, f; 

a = [1,2,3]; 
b = "perro"; 
c = [42, "gato"];
 
// usando el metodo concat. 
d = a.concat(b, c); 

// usando el operador spread. 
e = [...a, b, ...c]; 

// sin usar el operador spread. 
f = [a, b, c]; 

console.log(d); 
console.log(e); 
console.log(f); 



//objeto
const perro = {
    nombre:"Whisky",
    raza:"Chihuahua",
    edad:5
}

//forma incorrecta de clonar el objeto
const perro2 = perro;

perro2.nombre = "Tequila"

console.log(perro);
//console.log(perro2);

//forma correcta de clonar el objeto
const perro3 = {...perro}


perro3.nombre = "Ron"
console.log(perro);
console.log(perro3);

//destructuracion {propiedades}
const {nombre:nombre2, raza, edad} = perro3;
console.log(nombre2);

//destructuracion [ valores ]
//const [ v1, v2, v3] = a;
const [ ,,v3] = a;

console.log(`el valor es ${v3}`);