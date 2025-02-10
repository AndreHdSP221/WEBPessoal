/*Se a função criarProduto for chamada diretamente, como em criarProduto('Produto A', 100), o this dentro da função se referirá ao objeto global (window em um ambiente de navegador ou global em Node.js). Isso pode não ser o que você deseja/*

/*function criarProduto(nome, preco){
    return {
        nome: this.nome,
        preco: this.preco,
        desconto: 5
    }
}
*/

function criarProduto(nome, preco, desconto = 10){
    return {
        nomeProduto: nome,
        precoProduto: preco,
        desconto: desconto
    }
}
function calcularDesconto(valorProduto, descontoPercentual){
    let valorComDesconto = valorProduto - (valorProduto * descontoPercentual / 100)
    return parseFloat(valorComDesconto.toFixed(2)) // toFixed retorna String, parseFloat trasnforma em Float
}

let produto = criarProduto("Samsung A20", 1200)
console.log(`Preço original do produto: ${produto.precoProduto}\nProduto com desconto: ${calcularDesconto(produto.precoProduto, produto.desconto)}\n\n`)

let produto2 = criarProduto("Notebook", 3451.45, 25)
console.log(`Preço original do produto: ${produto2.precoProduto}\nProduto com desconto: ${calcularDesconto(produto2.precoProduto, produto2.desconto)}`)