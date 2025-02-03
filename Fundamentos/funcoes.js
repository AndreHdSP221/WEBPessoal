// Armazenando uma função em uma variável
const imprimir_soma = function (a, b){
    console.log(a + b)
}
imprimir_soma(2, 6)

// Armazenando uma função arrow em uma variavel

const soma_teste = (a, b) => {
    return a + b
}
console.log(soma_teste(2, 5))

// retorno implicito
const subtracao = (a, b) => a + b
console.log(subtracao(10, 5))

// retorno implicito com a penas um parametro
const imprimir2 = a => console.log(a)
imprimir2(6)
