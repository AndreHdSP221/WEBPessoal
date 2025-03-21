const ferrari = {
    modelo: "F40",
    velMax:345
}

const volvo = {
    modelo: "V40",
    velMax: 250
}

console.log(ferrari.__proto__) //Mostra qual o pai desse objeto.
console.log(ferrari.__proto__ === Object.prototype) // O atributo que referencia o protótipo da ferrari representa o Object.prototype. Saída: true
console.log(volvo.__proto__ === Object.prototype) // Saída: true LEMBRANDO QUE ISSO NÃO IRÁ OCORRER QUANDO VOCÊ CONSTRUIR COM SUA FUNÇÃO CONSTRUTORA
console.log(Object.prototype.__proto__ === null) //O prototype do Object.prototype é nulo, ou seja, não existe, já que o Object.prototype é o prototype de maior nivel.

function MeuObjeto() {

}

console.log(typeof Object, typeof MeuObjeto) //Saída: function function
console.log(Object.prototype, MeuObjeto.prototype) // Saída: {} MeuObjeto {}
