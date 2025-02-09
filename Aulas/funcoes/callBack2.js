let notas = [7.1, 2.4, 0.4, 8.5, 9.2, 5.7, 9.4]

const notasBaixas = notas.filter(a => a < 6)
console.log(notasBaixas)

// Antes do CallBack
let notasBaixas2 = []
for (i in notas){
    if (notas[i] < 6){
        notasBaixas2.push(notas[i]) // Push adicion os elementos especificados ao final de um array e retorna o novo comprimento do array
    }
}

console.log(notasBaixas2)