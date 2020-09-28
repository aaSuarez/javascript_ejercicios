const numeros= []
let suma = 0 
for (i=0 ; i < 10 ; i++){

let pedir = parseInt(prompt(`Ingrese el numero ${i+1}`))

numeros.push(pedir)

if(i >= 5){

    suma = suma + pedir
    
}

}
let container = document.querySelector('div')
let p = document.createElement('p')
p.innerText = `la suma de los ultimos 5 valores es ${suma}`

container.appendChild(p)