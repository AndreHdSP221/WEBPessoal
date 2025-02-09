// Declaração literal de uma função
function funcaoDigaOi(nome){
    return `Oii, ${nome}!`
}

nomePessoa = "Andre"
console.log(funcaoDigaOi(nomePessoa))

// Armazenar dentro de uma variavel/constante

const funcaoDigaTchau = function (nome) { return `Tchau, ${nome}`}

console.log(funcaoDigaTchau(nomePessoa))

// Passando para array

const array = [function(nome) { return `Seja Bem-vindo(a), ${nome}` }, function(nome) {return `Até Mais, ${nome}`}]

console.log(array[0](nomePessoa))
console.log(array[1](nomePessoa))

const objeto = {

}

objeto.falaGritando = function(nome) { const apresentacao= "Oi! Seja bem-vindo"; return `${apresentacao.toUpperCase()}, ${nome.toUpperCase()}`}
console.log(objeto.falaGritando(nomePessoa))

// Função como parametro de outra função

function falaBaixo(funcao){
    return `Fala, Baixo: ${funcao.toLowerCase()}`
}

console.log(falaBaixo(objeto.falaGritando(nomePessoa)))

// Uma função pode retornar/conter outra função

function somaDoisNumeros (a, b){
    return function(c) {
        console.log(a + b + c)
    }
}

somaDoisNumeros(2, 3)(4)

// outro modo de chamar

const somaDois = somaDoisNumeros(2, 3)
somaDois(4)