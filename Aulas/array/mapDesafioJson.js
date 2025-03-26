const carrinhoDeCompras = [
    '{"nome": "Borracha", "preco": 7.42}',
    '{"nome": "Lapis", "preco": 1.45}',
    '{"nome": "Caderno 200 folhas", "preco": 25.90}',
    '{"nome": "Caneta esferográfica azul", "preco": 3.50}',
    '{"nome": "Mochila escolar", "preco": 120.00}',
    '{"nome": "Estojo completo", "preco": 15.30}',
    '{"nome": "Régua 30cm", "preco": 5.00}',
    '{"nome": "Apontador duplo", "preco": 2.10}',
    '{"nome": "Tesoura escolar", "preco": 8.75}',
    '{"nome": "Cola bastão", "preco": 4.20}',
    '{"nome": "Calculadora científica", "preco": 45.99}',
    '{"nome": "Fones de ouvido", "preco": 89.90}',
    '{"nome": "Carregador de celular", "preco": 25.50}',
    '{"nome": "Mouse sem fio", "preco": 39.99}',
    '{"nome": "Teclado mecânico", "preco": 150.00}',
    '{"nome": "Garrafa térmica", "preco": 60.00}',
    '{"nome": "Lanterna recarregável", "preco": 30.00}',
    '{"nome": "Livro de capa dura", "preco": 55.00}',
    '{"nome": "Quadro branco pequeno", "preco": 85.50}',
    '{"nome": "Kit de marcadores", "preco": 12.80}'
];
// Retonar um array apenas com os preços
/**
Encontrei um erro que impedia a exibição dos preços devido à omissão de ponto e vírgula (;) no final de uma declaração JavaScript. A documentação do Array.prototype.map() no MDN (developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map) me ajudou a identificar e corrigir o problema.
*/
let arrayDeObjtos = carrinhoDeCompras.map(function(json){
    return JSON.parse(json)
});

function retornaPrecos(arrayObj) {
    const arrayPrecos = []
    for(let indice = 0; indice < arrayObj.length; indice++){
        let obj = arrayObj[indice]
        let preco = obj.preco
        arrayPrecos.push(preco)
    }
    return arrayPrecos
}

const preco = retornaPrecos(arrayDeObjtos)
console.log(preco)
