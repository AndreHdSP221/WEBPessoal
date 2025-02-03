const escola = "Cod3r";

console.log(escola.charAt(4)); // Retorna a letra 'r'
console.log(escola.charAt(5)); // Retorna vazio, mas não um erro
console.log(escola.charCodeAt(3)); // Pegar o valor do caracter da tabela unicode 
console.log(escola.indexOf('3')); // Index associado dentro da variavel escola

console.log(escola.substring(1)); // Vai do index 1 até o final da variavel
console.log(escola.substring(0, 3)); // Vai do index 0 até o index 3

console.log('Escola '.concat(escola).concat("!")); // Concatenar (juntar) strings
console.log(escola.replace(3, 'e')); // Subtituir o caracter no index 3 pela letra e

console.log('Ana,Maria,Lorenna,Lolo'.split(',')); // Podemos usar rejex

