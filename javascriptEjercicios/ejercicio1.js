
const numeros = [];

for(i=0;i<3;i++){

   
let pedir = parseInt(prompt(`Ingrese el numero ${i+1}`));

numeros.push(pedir)



}
console.log(numeros)

numeros.forEach( e =>{
    if(e < 10){
        alert("EL NUMERO INGRESADO ES MENOR A 10")
    }
} )