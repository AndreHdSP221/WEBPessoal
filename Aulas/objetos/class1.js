class lancamento {
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class cicloFinaceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamento = []
    }

    addLancamento(...lancamento){
        lancamento.forEach(l => this.lancamento.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lancamento.forEach(l=>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new lancamento('Salario', 45000)
const contaDeLuz = new lancamento('Conta De Luz', -1200)
const contaDeAgua = new lancamento('Conta de Agua', -900)

const contas = new cicloFinaceiro(6, 2025)
contas.addLancamento(salario, contaDeLuz,contaDeAgua)
console.log(contas.sumario())