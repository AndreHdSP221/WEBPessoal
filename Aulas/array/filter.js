const alunos = [
    '{ "nome": "Ana", "idade": 16, "notaGeral": 8.5 }',
    '{ "nome": "Bruno", "idade": 17, "notaGeral": 7.2 }',
    '{ "nome": "Carla", "idade": 15, "notaGeral": 9.1 }',
    '{ "nome": "Diego", "idade": 18, "notaGeral": 6.8 }',
    '{ "nome": "Eduarda", "idade": 16, "notaGeral": 8.9 }',
    '{ "nome": "Felipe", "idade": 17, "notaGeral": 7.7 }',
    '{ "nome": "Gabriela", "idade": 16, "notaGeral": 9.3 }',
    '{ "nome": "Hugo", "idade": 15, "notaGeral": 6.5 }',
    '{ "nome": "Isabela", "idade": 17, "notaGeral": 8.1 }',
    '{ "nome": "João", "idade": 16, "notaGeral": 7.9 }',
    '{ "nome": "Karina", "idade": 18, "notaGeral": 9.6 }',
    '{ "nome": "Lucas", "idade": 17, "notaGeral": 8.7 }',
    '{ "nome": "Mariana", "idade": 16, "notaGeral": 6.4 }',
    '{ "nome": "Nathalia", "idade": 15, "notaGeral": 9.8 }',
    '{ "nome": "Otávio", "idade": 17, "notaGeral": 7.1 }',
    '{ "nome": "Patrícia", "idade": 16, "notaGeral": 8.3 }',
    '{ "nome": "Rafael", "idade": 18, "notaGeral": 9.0 }',
    '{ "nome": "Sofia", "idade": 15, "notaGeral": 6.9 }',
    '{ "nome": "Thiago", "idade": 16, "notaGeral": 8.6 }',
    '{ "nome": "Vanessa", "idade": 17, "notaGeral": 9.2 }'
]

// Transformar os JSON em Objetos
const alunosObj = alunos.map(function(json) {
    return JSON.parse(json)
});

// Função constante para pegar a nota geral do aluno
const notasGeral = aluno => aluno.notaGeral 

// Map para gerar um array de mesmo tamanho do alunos e o filter para filtrar as maiores notas
const notasMaiores7 = alunosObj.map(notasGeral).filter(function(nota) {
    return nota > 7.0
});

console.log(notasMaiores7)

// Map para gerar um array de mesmo tamanho do alunos e o filter para filtrar as menores notas
const notasMenores7 = alunosObj.map(notasGeral).filter(function(nota){
    return nota < 7
});

console.log(notasMenores7)
