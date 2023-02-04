// module.exports = function imc() {
//     const form = document.querySelector('#form')

//     form.addEventListener('submit', function (e) {
//         e.preventDefault()
//         //console.log('Não enviado')
//         //setResultado('Ola Juliano')
//         const inputPeso = e.target.querySelector('#peso')
//         const inputAltura = e.target.querySelector('#altura')
//         //acima pegando os eventos 
//         //abaixo capturando os valores
//         const peso = Number(inputPeso.value)
//         const altura = Number(inputAltura.value)
//         console.log(peso, altura)
//         if (!peso) {
//             setResultado('Peso inválido', false)
//             return
//         }

//         if (!altura) {
//             setResultado('Altura inválida', false)
//             return
//         }
//         const imc = calculoImc(peso, altura)
//         const nivelImc = getNivelImc(imc)
//         const msg = `Seu IMC é ${imc}, ${nivelImc}`
//         if (imc >= 29.9) {
//             setResultado(msg, false, false)
//         } else if (imc < 29.9 && imc > 24.9) {
//             setResultado(msg, false, true)
//         }
//         else {
//             setResultado(msg, true, false)
//         }


//     });
//     function calculoImc(peso, altura) {
//         const calculo = peso / altura ** 2
//         return calculo.toFixed(2)
//     }
//     function getNivelImc(imc) {
//         const niveis = ['baixo do peso', 'Peso nomal', 'Sobrepeso',
//             'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']

//         if (imc >= 39.9) return niveis[5]
//         if (imc >= 34.9) return niveis[4]
//         if (imc >= 29.9) return niveis[3]
//         if (imc >= 24.9) return niveis[2]
//         if (imc >= 18.5) return niveis[1]
//         if (imc < 18.5) return niveis[0]
//     }

//     function setResultado(msg, isValid, yellow) {
//         const resultado = document.querySelector('#resultado')
//         //resultado.innerHTML = `<p>${msg}</p>`
//         // criando novo elemento
//         resultado.innerHTML = ''
//         const p = document.createElement('p')// cria paragrafo
//         p.classList.add('novoParagrafo') // criando a classe de p

//         if (isValid) {
//             p.classList.add('novoParagrafo')

//         } else {
//             p.classList.add('bad')
//         }
//         if (yellow) {
//             p.classList.add('sinalAmarelo')
//         }
//         p.innerHTML = msg
//         resultado.appendChild(p)
//     }

// }


