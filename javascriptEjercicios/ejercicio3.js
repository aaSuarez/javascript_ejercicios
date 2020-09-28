let input = document.querySelector('#input')
let boton = document.querySelector('button')
let container = document.querySelector('.container')

let numeros = [];
let numerosPositivos = 0;
let numerosNegativos = 0;
let par = [];
let suma =0;
let multiplo = 0;

let p = document.createElement('p')
container.appendChild(p)

boton.addEventListener('click',()=>{
    let valor = parseInt(input.value)
    console.log(valor)
    input.value =""
    numeros.push(valor)




    
     if(valor < 0 ){numerosNegativos++}
     else{numerosPositivos++ }
    
     if(valor> 0 && valor %2 ==0 ){par.push(valor)

      suma = suma + valor
      console.log(suma)}

      if(valor %15 ==0){
         multiplo++
      }
    
           
           p.innerText = `los numeros NEGATIVOS son ${numerosNegativos} 
            los numeros POSITIVOS son ${numerosPositivos} 
            la suma de pares  es ${suma}
            los multiplos son ${multiplo}`

            for(j=0; j <= 5 ; j++){

               let numero = 0;
               console.log(numero[j])
             }
            
              
})

     
    

