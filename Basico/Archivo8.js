'use strict' 

//parametros rest
//permite recibir un numero ilimitado de parametros
//creando una lista con el resto de ellos
function mifuncion2(animal1,animal2, ...animales) {
    console.log(animal1);
    console.log(animal2);
    console.log(animales);
}

mifuncion2("perro","gato","raton","perico","tortuga");

