/*

# Estou iniciando em JavaScript

## Descrição

Este código é uma implementação simples de tratamento de erros em JavaScript, projetada para funcionar de forma independente, sem depender de um contexto de código maior. O objetivo principal é realizar a soma dos elementos de um array e lidar com possíveis erros de forma elegante e informativa.

## Objetivo

- **Soma de Array**: A função `somarNumeros` visa somar todos os elementos de um array fornecido, desde que esses elementos sejam números válidos.

## Possíveis Erros

1. **Tipo de Argumento Incorreto**: Se o argumento passado para a função `somarNumeros` não for um array, a função irá logar um erro indicando que o valor passado deve ser um array.
   
2. **Elementos Não Numéricos**: Caso algum elemento do array não seja um número ou não possa ser interpretado como um (resultando em `NaN`), a função irá lançar um erro especificando qual elemento é inválido e a exigência de que todos os elementos devem ser números.

## Tratamento de Erros

- **Verificação de Array**: A função `somarNumeros` primeiramente verifica se o argumento `arr` é um array utilizando `Array.isArray(arr)`. Se não for, a função `tratamentoDeErros` é chamada com uma mensagem apropriada e a função retorna `null`.

- **Soma com Verificação**: Durante a operação de soma, cada elemento do array é verificado:
  - Se o tipo do elemento não for 'number' ou se for 'NaN', um erro é lançado com uma mensagem detalhada sobre o elemento inválido.
  - A operação de soma só prossegue se todos os elementos forem números válidos.

- **Captura de Erros**: Qualquer erro lançado durante a operação de soma é capturado pelo bloco `catch`. A função `tratamentoDeErros` é então chamada com a mensagem do erro capturado, e a função `somarNumeros` retorna `null`.

## Estrutura do Código

*/

function tratamentoDeErros(mensagem) {
    console.error(`Erro: ${mensagem}`);
}

function somarNumeros(arr) {
    if (!Array.isArray(arr)) {
        tratamentoDeErros("O valor passado deve ser um array.");
        return null;
    }
    let valorTotal = 0;
    try {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== 'number' || isNaN(arr[i])) {
                throw new Error(`Elemento inválido no array: ${arr[i]}. Todos os elementos devem ser números.`);
            }
            valorTotal += arr[i];
        }
        return valorTotal;
    } catch (e) {
        tratamentoDeErros(e.message);
        return null;
    }
}
let array_numeros = [15, 2, "Andre"];
let somaDeNumeros = somarNumeros(array_numeros);
console.log(somaDeNumeros);
