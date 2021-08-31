'use strict' 

const perritos1=["Whisky","Tequila","Kahlua","Ron","Papi"];

//agregar
perritos1.push("Brandy");
console.log(perritos1);

//borrar ultimo
perritos1.pop();
console.log(perritos1);

// posición, acción(0 insertar, 1 reemplazar), elemento
perritos1.splice(0, 0, 'Brandy');
console.log(perritos1);

// posición, acción(0 insertar, 1 reemplazar), elemento
perritos1.splice(2, 1, 'Tekila');
console.log(perritos1);

perritos1.splice(0, 1);
// cuando omites “elemento” elimina al que esta en esa posición
console.log(perritos1);

                //posicion,cantidad
perritos1.splice(1, 3);
// elimina partiendo de una posicion una cantidad de elementos
console.log(perritos1);
