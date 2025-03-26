const calcularSalario = function (horasTrabalhadas, valorHora){
    return `Salário igual a R$${horasTrabalhadas * valorHora}`
}

console.log(calcularSalario(150, 40.5))