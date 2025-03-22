// Toda função possui um objeto prototipo
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object) // Os 3 possuem um atributo .prototype, já que toda função possui um .prototype.

String.prototype.reverse = function() { // Você pode criar novas funções ou atributos dentro de um determinado prototipo.
    return this.split('').reverse().join('') // Nesse contexto, this referencia a string que iremos aplicar o reverse. Split gera um array, com isso o reverse inverte o array e o join gera uma nova String com o resultado do reverse
}

console.log('André Henrique da Silva Pereira'.reverse())

Array.prototype.positionNumber = function(numero) {
    return this[numero-1]
}

console.log([1, 2, 43, 4, 5].positionNumber(3))

// NÃO ALTERE FUNÇÕES QUE JÁ ESTÃO PRESENTES NO PROTOTIPO DE OUTROS ITENS