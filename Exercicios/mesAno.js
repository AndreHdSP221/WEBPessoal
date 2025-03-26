const meses = [
    '{"id": 1, "mes": "Janeiro"}',
    '{"id": 2, "mes": "Fevereiro"}',
    '{"id": 3, "mes": "Março"}',
    '{"id": 4, "mes": "Abril"}',
    '{"id": 5, "mes": "Maio"}',
    '{"id": 6, "mes": "Junho"}',
    '{"id": 7, "mes": "Julho"}',
    '{"id": 8, "mes": "Agosto"}',
    '{"id": 9, "mes": "Setembro"}',
    '{"id": 10, "mes": "Outubro"}',
    '{"id": 11, "mes": "Novembro"}',
    '{"id": 12, "mes": "Dezembro"}'
]

const mesesObj = meses.map(function (json){
    return JSON.parse(json)
});

const buscarMes = function (mesObj, idMes){
    for(let i = 0; i < mesObj.length; i++){
        if(mesObj[i].id == idMes){
            return `O mês ${idMes} é correspondente a: ${mesObj[i].mes}`
        }
    }
}

console.log(buscarMes(mesesObj, 10))