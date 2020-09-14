'use strict' 

var numbers=[6,34,33,22,33,11]

numbers.sort((a,b) => a-b);

numbers.forEach(n => console.log(n));

var arreglo= numbers.filter(n => n!=33);

console.log(arreglo);
