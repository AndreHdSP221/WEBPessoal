const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log("Extensível: ", Object.isExtensible(produto))

produto.nome = "Borracha"
produto.preco = 3.22
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: "Juliana", idade: 21}
Object.seal(pessoa)
console.log("Selado: ", Object.isSealed(pessoa))

pessoa.sobrenome = "Silva" // Não irá adicionar o sobrenome do objeto
pessoa.idade = 32 // Ele irá atualizar o valor normalmente
delete pessoa.nome // Não irá deletar o nome

console.log(pessoa)

// Object.freeze
