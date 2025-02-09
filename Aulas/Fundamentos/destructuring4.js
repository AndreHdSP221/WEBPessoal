function rand({min = 0, max = 1000}){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {
    max: 50,
    min: 10
}
console.log(rand(obj))

// Com o array
function rand2([min = 0, max = 2000]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const arr = [700, 500]
console.log(rand2(arr))