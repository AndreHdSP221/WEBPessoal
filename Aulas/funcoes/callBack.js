const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice}. ${nome}`)
}

fabricantes.forEach(imprimir) // Retorna primeiro o valor do indice e depois o indice. Por isso nome vem primeiro do que o indice

fabricantes.forEach(function(a){
    console.log(a) // a é o elemento do array
})

fabricantes.forEach(a => console.log(a)) // Mesma coisa do de cima mas com o arrow function