///////// Conversão D > B ////////////////

let numero_teste = 123

let decimal = numero_teste

function transformarDB() {
    // let decimal = valordeEntrada.value 
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
            // valordeSaida.value = numberBinario.join('')
            console.log(numberBinario.join(''),'binario');
        }
    }
}

if (decimal == '') {
    console.log("digite um numero válido");
} else{
    transformarDB()
}

//
//
//
//
/////////// conversor de B > D /////////////

let binario = String(numero_teste)

function transformarBD() {

    // let binario = String(valordeEntrada.value)  
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
    // valordeSaida.value = numeroDecimal
    console.log(numeroDecimal,'decimal');
}

if (binario == '') {
    console.log("digite um numero válido");
} else{
    transformarBD()
}

//
//
//
// CONVERSOR D > H

let numberDecimal = numero_teste
let arrayHexadecimal = []

    // FUNÇÃO PARA NUMEROS MENORES QUE 16

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

    // CONVERSOR D > H

function transformarDH() {
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
  
    console.log(arrayHexadecimal.join(""),'hexadecimal')
}

    // CHAMADA DA FUNNCAO CONVERSORDH

if (numberDecimal == '') {
    console.log("digite um numero válido");
} else{
    transformarDH()
}

// 
// 
// 

let Hexadecimal = ['7b']
let numberHexadecimal = [] 
let numeroDecimal = ''
let resto
 
    // CONVERDOR H > D

function transformarHD() {

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

    console.log(numeroDecimal,'decimal');
}

    // CHAMADA DA FUNCAO 

    if (Hexadecimal == '') {
        console.log("digite um numero válido");
    } else{
        transformarHD()
    }

//      CONVERSOR OCTAL 

let octal = '12'

function transformarOD() {
    
    let arrayNumberOctal = Array.from(octal)
    arrayNumberOctal = arrayNumberOctal.reverse()

    // conversor //
    
    let cont = 0
    let numeroDecimal = ''
    
    arrayNumberOctal.forEach(element => {

        let result = element * 8 ** cont

        numeroDecimal = Number(numeroDecimal) + Number(result)       
        cont++
    });  
    // valordeSaida.value = numeroDecimal
    console.log(numeroDecimal,'decimal');
}

transformarOD()