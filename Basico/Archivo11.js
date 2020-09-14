'use strict' 

function suma1(){
	return 5+3;
}

const suma2 =()=> 5+3;

const suma3 =()=> {
    console.log('hola')
    return 5+3;
};

console.log(suma1());
console.log(suma2());
console.log(suma3());
