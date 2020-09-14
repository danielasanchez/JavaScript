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