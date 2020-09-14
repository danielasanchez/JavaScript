//'use strict' 

function mifuncion1(name="Pedro",edad=16) {
    console.log("Hello "+name+" tienes "+edad+" años");
    return edad*12;
}

x=2020;

function mifuncion2() {
    y=x;
    console.log(x);
    
}

mifuncion1();
mifuncion2();
