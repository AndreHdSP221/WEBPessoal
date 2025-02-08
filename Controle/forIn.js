const objeto = {
    nome: "André Henrique",
    sobrenome: "Silva",
    idade: 20,
    cep: "86900-000"
}

for (let i in objeto){
    console.log(`${i}, ${objeto[i]}`)
}