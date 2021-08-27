//'use strict' 

function mifuncion1(name="Pedro",edad=16) {
    console.log("Hello "+name+" tienes "+edad+" años");
    return edad*12;
}

var x=2020;

function mifuncion2() {
    var y=x;
    console.log(x);
    
}

var meses=mifuncion1("Pepe",10);
mifuncion2();

console.log("Los meses son: "+meses);