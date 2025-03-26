const aprovados = ['Agatha', 'José', 'Amelia', 'Mariana', 'Joarez', 'Amanda', 'Mathias']
console.log('Lista original: ', aprovados)


aprovados.sort().forEach(function(nome, indice){ // Existe um terceiro parametro, que é o array. Você é obrigado passar o primeiro parametro para no segundo conseguir o indice. você
    console.log(`${indice + 1}:${nome}`)
});

aprovados.forEach(nome => { // Com a Arrow Function só conseguimos extrair um unico elemento, que no caso é o valor.
    console.log(nome)
});

// Armazenar uma função em uma const

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados)