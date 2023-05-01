const resultado = document.querySelector('#resultado')
const altura = document.querySelector('#altura')
const peso = document.querySelector('#peso')

function calcImc () {
      if (altura.value != '' && peso.value != '') { 
        const imc =(peso.value / (altura.value * altura.value)).toFixed(2)
        
        let classificacao = ''
        

        if (imc < 22){
            classificacao = 'Abaixo do peso'
        } else if (imc > 22 && imc < 26.9){
            classificacao = 'Peso normal'
        } else if ( imc > 27 && imc < 29.9){
            classificacao = 'excesso de peso'
        } else if ( imc > 30){
            classificacao = 'Obesidade'
        resultado.innerHTML = `IMC: ${imc} (${classificacao})`
    }   else{
        resultado.innerHTML = 'Preencha os campos'
    }
}