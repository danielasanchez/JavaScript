'use strict' //
/*
  C i c l o s
*/
var a=0;

while(a<10)
{
    console.log("la variable 'a' vale:"+a);
    a++; //a=a+1  o  a+=1
    if(a===5)  //'5'==5 '5'===5
        break;   
}


console.log("Fin del While");


var a=0;


do{
    console.log("la variable 'a' vale:"+a);
    a++; //a=a+1  o  a+=1 
}while(a<10)


console.log("Fin del do-while");