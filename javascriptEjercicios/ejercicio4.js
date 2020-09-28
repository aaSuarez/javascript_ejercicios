let btn = document.getElementById('btn')
let input = document.querySelector('#input')
let container = document.querySelector('div')

btn.addEventListener("click",()=>{

  
    for(let i =0 ; i<=1500;i++){
         if(i %10 ==0){
            let p = document.createElement('p')
            p.innerText= `${i}`
               container.appendChild(p)        
         }
    }

})

let p = document.createElement('p')
