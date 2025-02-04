/*

Este código é para estudos. O curso no qual estou me baseando é o Domine Web, composto por 15 cursos. Até o momento, concluí o capítulo de fundamentos (Aula 75). Alguns métodos, como filter e reduce, não foram abordados até este ponto. No entanto, ao pesquisar formas possíveis de realizar uma filtragem mais performática, busquei por conta própria informações nos seguintes sites:

Método filter: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

Método reduce: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

E utilizei o MariTalk (Maritaca.ia - IA Brasileira) para corrigir este meu comentário.

*/

function tratamentoDeErros(mensagem) {
    console.error(`Erro: ${mensagem}`);
}

function validarArray(arr) {
    if (!Array.isArray(arr)) { // Se arr NÃO for um array, a condição será true, e o bloco de código será executado. Outras palavras, o arr não é um array.
        tratamentoDeErros("O valor passado deve ser um array válido.");
        return false; // Retorna false indicando que o array não é válido e interrompendo o fluxo da função.
    }

    // Filtra os elementos inválidos. filter
    let elementosInvalidos = arr.filter(item => typeof item !== 'number' || isNaN(item));

    if (elementosInvalidos.length > 0) {
        tratamentoDeErros(`O array contém valores inválidos: ${elementosInvalidos.join(", ")}. Apenas números são permitidos.`);
        return false;
    }

    return true;
}

function somarNumeros(arr) {
    if (!validarArray(arr)) {
        return null;
    }
    
    return arr.reduce((total, num) => total + num, 0); // 0 É o valor inicial fornecido para o acumulador total
}
/*
// Testes - Caso de erro
let array_numeros = [15, 2, "texto", NaN, 7, true];
let somaDeNumeros = somarNumeros(array_numeros);
console.log(somaDeNumeros); // null
*/

// Caso válido
array_numeros = [15, 2, 4, 5, 7]; 
somaDeNumeros = somarNumeros(array_numeros);
console.log(somaDeNumeros); // 33
