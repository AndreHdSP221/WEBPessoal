class Avo {
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor({sobrenome, profissao, idade}){
        super(sobrenome, profissao)
        this.idade = idade
    }
}

const filho_1 = new Filho({
    sobrenome: 'Silva',
    idade: 21
  });

console.log(filho_1)