'use strict' 

var numbers=[1,2,3,4,5,6];

numbers.map(function(num){
    //console.log(num*2);
    return num*2;
});

var arreglo3 = numbers.map((num)=> num*0.5);

numbers.map((num)=> {
    return num*2;
})

var arreglo1 = numbers.map((num)=> num*2)

var arreglo2 = numbers.map((num,index,original)=> { return num*3;})


console.log(arreglo1);
console.log(arreglo2);
console.log(arreglo3);