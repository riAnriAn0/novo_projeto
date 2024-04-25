let sistemaEntrada = document.querySelector('#sistemaEntrada')
let sistemaSaiada = document.querySelector('#sistemaSaida')
let numeroEntrada = document.querySelector('#numeroEntrada')

// CONVERSOR D > B 
function transformarDB(numero) {
    
    let Decimal = numero
    let resto = ''
    let numberBinario = []
    let cont = 0

    while ( cont == 0){

        resto = Decimal % 2
        numberBinario.unshift(resto)
        Decimal = Math.floor(Decimal / 2)

        if(Decimal == 1 || Decimal == 0){
            numberBinario.unshift(Decimal)
            cont = 1
        }
    }

    numberBinario = numberBinario.join('')
    return numberBinario ;
}

// CONVERSOR  B > D 
function transformarBD(numero) {
    let Binario = numero
    Binario = String(Binario)
    arrayNumberBinario = Array.from(Binario)
    arrayNumberBinario = arrayNumberBinario.reverse()
    
    let cont = 0
    let numeroDecimal = ''
    
    arrayNumberBinario.forEach(element => {

        let result = element * 2 ** cont

        numeroDecimal = Number(numeroDecimal) + Number(result)       
        cont++
    });  
    return numeroDecimal;
}

// CONVERSOR D > H

// FUNÇÃO PARA NUMEROS MENORES QUE 16
     
function transformarDH(numero) {
    let arrayHexadecimal = []

    function menor16(element) {
        switch (element) {
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
                arrayHexadecimal.unshift(element)    
                break;
        }
    }

    let numberDecimal = Number(numero)
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
    arrayHexadecimal = arrayHexadecimal.join('')
    return arrayHexadecimal;
}

// CONVERDOR H > D
  
function transformarHD(numero) {
    let Hexadecimal = numero
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

    return numeroDecimal;
}
//  CONVERSOR OCTAL 

function transformarOD(numero) {
    let Octal = numero
    let arrayNumberOctal = Array.from(Octal)
    arrayNumberOctal = arrayNumberOctal.reverse()

    let cont = 0
    let numeroDecimal = ''
    
    arrayNumberOctal.forEach(element => {

        let result = element * 8 ** cont

        numeroDecimal = Number(numeroDecimal) + Number(result)       
        cont++
    }); 

    return numeroDecimal;
}

   // CONVERSOR D > O    
function transformarDO(numero){
       
    let decimalO = numero
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

    return numeroOctal.join('');
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

    return [indiceEntrada,indiceSaida];
}


sistemaEntrada.addEventListener('change',()=>{
    let index = mudancaOptions()
    let sistemaNumerico0_01 = sistemaEntrada.options[index[0]].innerText

    numeroEntrada.focus()
    numeroEntrada.value = ''
    numeroSaida.value = ''
    
    if (sistemaNumerico0_01 == 'Hexadecimal') {
        inputs[0].setAttribute("type","text")
    }else{
        inputs[0].setAttribute("type","number")    
    }
})

sistemaSaiada.addEventListener('change',()=>{
    index = mudancaOptions()
    let sistemaNumerico0_02 = sistemaEntrada.options[index[1]].innerText

    numeroEntrada.focus()
    numeroEntrada.value = ''
    numeroSaida.value = ''

    if (sistemaNumerico0_02 == 'Hexadecimal') {
        inputs[1].setAttribute("type","text")
    } else{
        inputs[1].setAttribute("type","number")    
    }
})

    // CONVERSORES

let numeroSaida = document.querySelector('#numeroSaida')
let inputs = document.querySelectorAll('input')
let buttonConverter = document.querySelector("#buttonConverter")

let decimal
let binario
let octal
let hexadecimal

buttonConverter.addEventListener('click',()=>{
    if (optionsTranformacao == 12) {
        binario = transformarDB(numeroEntrada.value)
        numeroSaida.value = binario
    } else if (optionsTranformacao == 13) {
        octal = transformarDO(numeroEntrada.value)
        numeroSaida.value = octal
    } else if (optionsTranformacao == 14) {
        hexadecimal = transformarDH(numeroEntrada.value)
        numeroSaida.value = hexadecimal
    } else if (optionsTranformacao == 21) {
        decimal = transformarBD(numeroEntrada.value)
        numeroSaida.value = decimal
    } else if (optionsTranformacao == 23) {
        decimal = transformarBD(numeroEntrada.value)
        octal = transformarDO(decimal)
        numeroSaida.value = octal
    } else if (optionsTranformacao == 24) {
        decimal = transformarBD(numeroEntrada.value)
        hexadecimal = transformarDH(decimal)
        numeroSaida.value = hexadecimal
    } else if (optionsTranformacao == 31) {
        decimal = transformarOD(numeroEntrada.value)
        numeroSaida.value = decimal
    } else if (optionsTranformacao == 32) {
        decimal = transformarOD(numeroEntrada.value)
        binario = transformarDB(decimal)
        numeroSaida.value = binario
    } else if (optionsTranformacao == 34) {
        decimal = transformarOD(numeroEntrada.value)
        hexadecimal = transformarDH(decimal)
        numeroSaida.value = hexadecimal
    } else if (optionsTranformacao == 41) {
        decimal = transformarHD(numeroEntrada.value)
        numeroSaida.value = decimal
    } else if (optionsTranformacao == 42) {
        decimal = transformarHD(numeroEntrada.value)
        binario = transformarDB(decimal)
        numeroSaida.value = binario
    } else if (optionsTranformacao == 43) {
        decimal = transformarHD(numeroEntrada.value)
        octal = transformarDO(decimal)
        numeroSaida.value = octal
    }
})
