function aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new aula("Bem vindo", 123)
const aula2 = new aula("Até Breve", 321)

console.log(aula1)
console.log(aula2)
console.log('')

// Simula o comportamento do operador `new` em JavaScript
function novo(f, ...params) { 
    // 1. Recebe a função construtora (f) e parâmetros via operador rest (...)
    //    O operador rest (...) coleta todos os parâmetros em um array chamado params
    
    // 2. Cria um novo objeto vazio que herdará as propriedades do prototype
    const obj = {};
    
    // 3. Estabelece a cadeia de protótipos:
    //    Conecta o protótipo da função construtora ao novo objeto
    //    Isso permite que o objeto acesse métodos definidos no prototype de 'f'
    obj.__proto__ = f.prototype;
    
    // 4. Executa a função construtora com o contexto do novo objeto:
    //    - O primeiro parâmetro do apply define o valor de `this` dentro da função
    //    - O segundo parâmetro (params) é spreadado como argumentos individuais
    //    - Isso permite que a função construa propriedades no novo objeto (this)
    const result = f.apply(obj, params);
    
    // 5. Retorna o objeto criado:
    //    - Se a função não retornar um objeto explícito, retorna o obj criado
    //    - Caso a função retorne um objeto não-primitivo, retorna esse valor
    return typeof result === 'object' && result !== null ? result : obj;
}

const aula3 = novo(aula, "Bem-vindo", 123)
const aula4 = novo(aula, "Até Breve", 321)

console.log(aula3)
console.log(aula4)