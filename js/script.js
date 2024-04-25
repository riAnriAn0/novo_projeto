let sistemaEntrada = document.querySelector('#sistemaEntrada')
let sistemaSaiada = document.querySelector('#sistemaSaida')
let numeroEntrada = document.querySelector('#numeroEntrada')

// CONVERSOR D > B 
function transformarDB() {
    
    let decimal = numeroEntrada.value
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
            numeroSaida.value = numberBinario.join('')
        }
    }
}

// CONVERSOR  B > D 
function transformarBD() {
    
    let binario = String(numeroEntrada.value)
    arrayNumberBinario = Array.from(binario)
    arrayNumberBinario = arrayNumberBinario.reverse()
    
    let cont = 0
    let numeroDecimal = ''
    
    arrayNumberBinario.forEach(element => {

        let result = element * 2 ** cont

        numeroDecimal = Number(numeroDecimal) + Number(result)       
        cont++
    });  
    numeroSaida.value = numeroDecimal
}

// CONVERSOR D > H

// FUNÇÃO PARA NUMEROS MENORES QUE 16
     
function transformarDH() {
    let arrayHexadecimal = []

    function menor16(numero) {
        switch (numero) {
            case 10:
                arrayHexadecimal.unshift("A")    
                break;
            case 11:
                arrayHexadecimal.unshift("B")    
                break;
            case 12:
                arrayHexadecimal.unshift("C")    
                break;
            case 13 :
                arrayHexadecimal.unshift("D")    
                break;
            case 14 :
                arrayHexadecimal.unshift("E")    
                break;
            case 15 :
                arrayHexadecimal.unshift("F")    
                break;
            default:
                arrayHexadecimal.unshift(numero)    
                break;
        }
    }

    let numberDecimal = numeroEntrada.value

    if ( numberDecimal < 16) {        
        menor16(numberDecimal)
    } else {    
        let cont = 0
        do {
            let resto = numberDecimal % 16
            numberDecimal = Math.floor(numberDecimal/16)
            menor16(resto)

            if ( numberDecimal < 16) {
                menor16(numberDecimal)
                cont = 1
            }
        } while (cont == 0)
    }
    numeroSaida.value = arrayHexadecimal.join('')
}

// CONVERDOR H > D
  
function transformarHD() {
    let Hexadecimal = numeroEntrada.value
    let numberHexadecimal = [] 
    let numeroDecimal = ''
       
    numberHexadecimal = String(Hexadecimal)

    numberHexadecimal = Array.from(numberHexadecimal)
    numberHexadecimal = numberHexadecimal.reverse()    
    let expt = 0
    
    numberHexadecimal.forEach(element => {
        element = element.toUpperCase()

        switch (element) {
            case 'A':
                element = 10    
                break;
            case 'B':
                element = 11 
                break;
            case 'C':
                element = 12
                break;
            case 'D' :
                element = 13
                break;
            case 'E' :
                element = 14
                break;
            case 'F' :
                element = 15
                break;
            default:
                    element = element    
                break;
       }
       
        let result = element * 16 ** expt
        numeroDecimal = Number(numeroDecimal) + Number(result)
        expt++
    });

    numeroSaida.value = numeroDecimal
}
//  CONVERSOR OCTAL 

function transformarOD() {
    let octal = numeroEntrada.value
    let arrayNumberOctal = Array.from(octal)
    arrayNumberOctal = arrayNumberOctal.reverse()

    let cont = 0
    let numeroDecimal = ''
    
    arrayNumberOctal.forEach(element => {

        let result = element * 8 ** cont

        numeroDecimal = Number(numeroDecimal) + Number(result)       
        cont++
    });  
    numeroSaida.value = numeroDecimal
}

   // CONVERSOR D > O    
function transformarDO(){
       
    let decimalO = numeroEntrada.value
    let numeroOctal = []
    let cont = 0
    do {
        let resto = decimalO % 8
        numeroOctal.unshift(resto)
        decimalO = Math.floor(decimalO/8)
        
        if (decimalO < 8 ) {
            numeroOctal.unshift(decimalO)
            cont = 1
        }

    } while (cont == 0);

    numeroSaida.value = numeroOctal.join('')
} 

    // OPIÇÕES DE TRANSFORMAÇÃO
    
let optionsTranformacao = []

function mudancaOptions(){

    let indiceEntrada = sistemaEntrada.selectedIndex
    let option_01 = sistemaEntrada.options[indiceEntrada].value

    let indiceSaida = sistemaSaiada.selectedIndex
    let option_02 = sistemaSaiada.options[indiceSaida].value

    optionsTranformacao = [option_01,option_02]
    optionsTranformacao = optionsTranformacao.join('')
}

sistemaEntrada.addEventListener('change',()=>{
    
    mudancaOptions()
    numeroEntrada.focus()
    numeroEntrada.value = ''
    numeroSaida.value = ''
    
    if (optionsTranformacao == 41 || optionsTranformacao == 42 || optionsTranformacao == 43) {
        inputs[0].setAttribute("type","text")
    }else{
        inputs[0].setAttribute("type","number")    
    }
})
sistemaSaiada.addEventListener('change',()=>{
    
    mudancaOptions()
    numeroEntrada.focus()
    numeroEntrada.value = ''
    numeroSaida.value = ''

    if (optionsTranformacao == 14 || optionsTranformacao == 24 || optionsTranformacao == 34) {
        inputs[1].setAttribute("type","text")
    } else{
        inputs[1].setAttribute("type","number")    
    }
})

    // CONVERSORES

let numeroSaida = document.querySelector('#numeroSaida')
let inputs = document.querySelectorAll('input')
let buttonConverter = document.querySelector("#buttonConverter")

buttonConverter.addEventListener('click',()=>{
    if (optionsTranformacao == 12) {
        transformarDB()
    } else if (optionsTranformacao == 13) {
        transformarDO()
    } else if (optionsTranformacao == 14) {
        transformarDH()
    } else if (optionsTranformacao == 21) {
        transformarBD()
    } else if (optionsTranformacao == 23) {
        console.log("TESTE");
    } else if (optionsTranformacao == 24) {
        console.log("TESTE");
    } else if (optionsTranformacao == 31) {
        transformarOD()
    } else if (optionsTranformacao == 32) {
        console.log("TESTE");
    } else if (optionsTranformacao == 34) {
        console.log("TESTE");
    } else if (optionsTranformacao == 41) {
        transformarHD()
    } else if (optionsTranformacao == 42) {
        console.log("TESTE");
    } else if (optionsTranformacao == 43) {
        console.log("TESTE");
    }
})
