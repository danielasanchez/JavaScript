'use strict' 

const perritos=["Whisky","Tequila","Kahlua","Ron"];

//usando una función anonima
perritos.forEach(function(element){ 
	console.log(element)
});

//usando una función flecha
perritos.forEach(element => {
	console.log(element)
});

perritos.forEach((element,index,original) => {
    console.log(element,"en el index",index,);
});
