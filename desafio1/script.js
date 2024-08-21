// Meu primeiro desafio com JavaScript
// Preciso fazer uma calculadora e que no final apresente ao usuário se o resultado é ímpar e se os números digiados pelo usuário são iguais ou diferentes

let n1 = Number(prompt('Digite o primeiro número: '))
let n2 = Number(prompt('Digite o segundo número: '))



let sum = n1 + n2
alert(`A soma dos dois números é ${sum}`)

let sub = n1 - n2
alert(`A subtração dos dois números é ${sub}`)

let mult = n1 * n2
alert(`A multiplicação dos números é ${mult}`)

let div = n1 / n2
alert(`A divisão dos dois números é ${div}`)

let rd = n1 % n2
alert(`O resto da divisão é ${rd}`)


if(sum % 2 == 0){
    alert(`o número ${sum} é par`)
}else{
    alert(`O número ${sum} é ímpar`)
}

if(n1 == n2){
    alert(`os números são iguais`)
}else{
    alert(`Os números são diferentes`)
}