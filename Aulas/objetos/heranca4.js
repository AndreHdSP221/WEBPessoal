// Entendendo sobre função e o atributo prototype da função

function MeuObjeto(){}

console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__) // Isso irá verificar se o prototipo dos obj1 e 2 apontam para o mesmo prototipo.
console.log(MeuObjeto.prototype === obj1.__proto__) // Sim, ao criar um objeto apartir de uma função construtora, o objeto criado irá apontar para o mesmo prototipo que o seu pai.

MeuObjeto.prototype.nome = "Anonimo"

// Isso mostra que ambos apontam para o mesmo lugar
console.log(obj1.__proto__)
console.log(MeuObjeto.prototype)
