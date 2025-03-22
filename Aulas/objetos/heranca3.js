// Object Creat. Isso cria um objeto filho que já vem com o prototipo apontado para o pai.
/*
Object.creat("Objeto Pai", Atributos adicionais)
Exemplos:
const Filho = Object.creat("Objeto Pai", { idade: 12) Isso faz com que todos os atributos do pai venha para o filho e ainda sim acrescentamos o atributo idade.

Exemplo 2:
const Filho2 = Object.creat("Objeto Pai", { idade: 12, nome { value: 'Bia', writable: false, enumerable: true} }) Podemos adicionar propriedades aos atributos, como se ele poderá ser alterado, se ele poderá ser listado quando chamarmos alguma função para ler os atributos e outros.

*/

const pai = {
    nome: 'Pedro',
    idade: 32,
    nacionalidade: 'Brasileira'
}

const filha_1 = Object.create(pai, {
    nome: {value: "Bianca", writable: false, enumerable: true},
    idade: {value: 13, writable: true, enumerable: true},
    cpf: {value: 12312312332, writable: false, enumerable: false}
})

console.log(Object.keys(filha_1)) // O enumerable ocultará o atributo CPF

// Podemos verificar qual atributo é herança
for(let key in filha_1){
    filha_1.hasOwnProperty(key) ? // condição ? expressão_se_verdadeira : expressão_se_falsa
        console.log(key) : console.log(`Por Herança: ${key}`)
}
