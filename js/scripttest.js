// CONVERSOR DE NUMEROS EM DECIMAIL PARA BINÁRIO //
//
//
//

document.addEventListener('DOMContentLoaded',()=>{
        valordeEntrada.focus()
})

// ALTERAÇÃO DO CONVERSOR // 

let label = document.querySelectorAll('label')
let change = document.querySelector("#change")
let conversor = 0

change.addEventListener('click',()=>{
    
    valordeEntrada.focus()

    if( label[0].textContent == 'Decimal'){ 
        label[0].textContent = 'Binário'
    } else {
         label[0].textContent = 'Decimal'
    };

    if( label[1].textContent == 'Decimal'){ 
        label[1].textContent = 'Binário'
    } else {
        label[1].textContent = 'Decimal'
    };

    if (conversor == 0) { conversor = 1} else {conversor = 0 }

    valordeEntrada.value = ('')
    valordeSaida.value = ('')
});

function changeConersor() {
    switch (conversor) {
        case 0:
            transformarDB()
            break;
        case 1:
            transformarBD()
            break;
    }      
}


// CONVERSOR //

let valordeEntrada = document.querySelector('#valordeEntrada')
let valordeSaida = document.querySelector('#valordeSaida')
let transformer = document.querySelector('#transformer')

    // Validação // 

    transformer.addEventListener('click',()=>{
        if(valordeEntrada.value !== ''){
            changeConersor()
        } else {
            window.alert('Digite um número válido!!')
        }
    })
    
    document.addEventListener('keyup',(event)=>{
        if(event.key === 'Enter'){
            if( valordeEntrada.value !== ''){
                changeConersor()
            } else {
                window.alert('Digite um número válido!!')
            }
        }
    })

///////// Conversão D > B ////////////////

function transformarDB() {
    let decimal = valordeEntrada.value 
    let resto = ''
    let numberBinario = []
    let cont = 0

    while ( cont == 0){

        resto = decimal % 2
        numberBinario.unshift(resto)
        decimal = Math.floor(decimal / 2)

        if(decimal == 1 || decimal == 0){
            numberBinario.unshift(decimal)
            cont = 1
            valordeSaida.value = numberBinario.join('')
        }
    }
}

/////////// conversor de B > D /////////////

function transformarBD() {

    let binario = String(valordeEntrada.value)  
     
    // numero binario em string //
    
    arrayNumberBinario = Array.from(binario)
    arrayNumberBinario = arrayNumberBinario.reverse()

    // conversor //
    
    let cont = 0
    let numeroDecimal = ''
    
    arrayNumberBinario.forEach(element => {

        let result = element * 2 ** cont

        numeroDecimal = Number(numeroDecimal) + Number(result)       
        cont++
    });  

    valordeSaida.value = numeroDecimal
}

// LIMPAR AREA DE ENTRADA //

let limpar = document.querySelector('#limpar')

limpar.addEventListener('click',()=>{
    valordeEntrada.value = ''
    valordeSaida.value = ''
    valordeEntrada.focus()
})