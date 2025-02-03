const peso1 = 1.0;
const peso2 = Number('2.0'); // Converte uma string em numero.

console.log(peso1, peso2);
console.log(Number.isInteger(peso1));
console.log(Number.isInteger(peso2));

// Definição das notas das avaliações
const avaliacao1 = 9.815;
const avaliacao2 = 6.847;

const total = (avaliacao1 * peso1) + (avaliacao2 * peso2); // Cálculo do total ponderado das avaliações
const media = total / (peso1 + peso2); // Cálculo da média ponderada dividindo pelo total dos pesos

console.log(media);
console.log(media.toFixed(2)); // Fixed Decimal Place in two
console.log(media.toString()); // Trasnform String to Number
console.log(media.toString(2)); // Em binário
console.log(typeof media); // Number
console.log(typeof Number); // Function
