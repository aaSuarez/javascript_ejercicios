let btn = document.getElementById('btn')
let input = document.querySelector('#input')
let container = document.querySelector('div')
let p = document.createElement('p')


let pares = 0;
let impares = 0;



btn.addEventListener('click',()=>{

    let valor = parseInt(input.value)
    if(valor %2==0){
    input.value = ""
    pares++
        
    }else{
        input.value = ""
        impares++
    }
    
    p.innerText= ` la cantidad de numeros pares es ${pares}
                    la catidad de numeros impares es ${impares}`
                    container.appendChild(p)
})
