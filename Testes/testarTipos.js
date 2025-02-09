// Apenas para me familiarizar com os tipos -- Loop infinito proposital

const funcao = function(a){
    if (a == undefined || isNaN(a)){ // Nesse caso isNaN não precisa de uma verificação a == isNaN(a) já que isNaN retorna true ou false

        console.log("Erro")
        return 1
    } else {
        return 0
    }
    // console.log(typeof a)
}

let b = 1
while(b == 1){
     // b = funcao("Andre Henrique") // - Erro
     // b = funcao() // - Erro
     b = funcao(2) // - Correto
    console.log(b)
}
