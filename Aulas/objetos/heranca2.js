// Cadeia de protótipos (Prototype chain)

const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C', attr2: 10}

console.log(filho.attr1) // Pega o atributo do avo.
console.log(filho.attr0) // Undefined
console.log(filho.attr2) // Aqui acontece o sombreamento,ou shadowing


// Outro exemplo.
const carro = { // Objeto Pai
    velAtual: 0,
    velMaxima: 220,
    aceleraMais (delta) {
        if (this.velAtual + delta <= this.velMaxima){
            this.velAtual+=delta
        } else {
            this.velAtual = this.velMaxima
        }
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMaxima}Km/h` // this nesse caso referencia ao proprio objeto
    }
}

// Objeto Ferrari
const ferrari = {
    modelo: "Ferrari F40",
    velMaxima: 345,
}

const volvo = {
    modelo:"Volvo V40",
    status (){
        return `${this.modelo}: ${super.status}` // Super referencia a função status do prototipo do objeto Volvo, ou seja, o objeto carro.This referencia o modelo desse objeto.
    }
}

Object.setPrototypeOf(ferrari, carro) // Relação entre ferrari e carro. Ferrari tem o carro como prototipo.
Object.setPrototypeOf(volvo, carro)

console.log(ferrari) // Ao pegar o objeto ferrai somente, notaremos que o irá retornar somente os atributos daquele objeto.
console.log(volvo) // No caso volvo, ele também pega somente o que faz parte do objeto, mesmo tendo uma função que referencia o objeto prototipo do volvo

console.log(ferrari.modelo)
console.log(ferrari.velMaxima)

volvo.aceleraMais(100)
console.log(volvo.status)

ferrari.aceleraMais(123)
console.log(ferrari.status)