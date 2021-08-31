'use strict' 

const perritos=["Whisky","Tequila","Kahlua","Ron"];

//usando una función anonima
perritos.forEach(function(p){ 
	console.log(p)
});

//usando una función flecha
perritos.forEach((p,i) => console.log(p));

perritos.forEach((element,index,original) => {
    console.log(element,"en el index",index);
	console.log(original);
});
