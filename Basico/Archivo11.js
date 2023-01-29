// 'use strict' 

function suma1(){
	return 5+3;
}
console.log(suma1());


const suma2 =()=> 5+3;
console.log(suma2());


const suma3 =()=> {
    console.log('hola')
    return 5+3;
};
console.log(suma3());


const otrafuncion1 =()=> ({
    numcontrol:2017083,
    nombre:'Daniela',
});
console.log(otrafuncion1());

const otrafuncion2 =()=> {
    return {
        numcontrol:2017083,
        nombre:'Daniela',
    }
};
console.log(otrafuncion2());

const otrafuncion3 =(num,nombre)=> ({
    numcontrol:num,
    nombre,//nombre:nombre
});
console.log(otrafuncion3(2017083,"Adriana"));


//objeto
const perro = {
    nombre:"Whisky",
    raza:"Chihuahua",
    edad:5
}

//Destructuracion
const mascota = ({nombre,raza}) => console.log(`${nombre} es ${raza}`);

mascota(perro);


