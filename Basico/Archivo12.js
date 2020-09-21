'use strict' 

const perritos=["Whisky","Tequila","Kahlua","Ron"];

//usando una función anonima
perritos.forEach(function(e){ 
	console.log(e)
});

//usando una función flecha
perritos.forEach(p => {
	console.log(p)
});

perritos.forEach((element,index,original) => {
    console.log(element,"en el index",index);
});
