Array.prototype.forEach2 = function(callback){ // Aqui eu seto uma função para ser usada como .forEach2
    for(let i = 0; i < this.length; i++){ // This aqui se refere ao array passado, exemplo array.forEach2, o this se refere ao array
        callback(this[i], i, this) // Retorna o valor do array, o indice e o array em si
    }
}

const array_aprovados = ['Maria','Jose','Andre','Eduardo','Claudio']

array_aprovados.forEach2(function(valor, indice){
    console.log(`${indice}: ${valor}`)
})