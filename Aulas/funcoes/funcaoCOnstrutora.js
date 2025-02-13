function Carro(velocidadeMaxima = 200, delta = 5){
    // Método privado
    let velocidadeAtual = 0;

    // Método publico
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
            return 404
        }
    }
    
    // get (pegar) o método privado
    this.getVelocidade = function(){
        return velocidadeAtual;
    }
}

// Cada carro deve instanciar um novo objeto (new Carro)
const uno = new Carro;

console.log(uno.getVelocidade())
uno.acelerar();
console.log(uno.getVelocidade())

const ferrari = new Carro(350, 20)

let VelocidadeFerrari = 0
let velocidade = 0

do{
    console.log(`Velocidade atual: ${ferrari.getVelocidade()}\n`)
    velocidade = ferrari.acelerar()
}while(velocidade != 404)

console.log(`Velocidade Final: ${ferrari.getVelocidade()}\n`)

console.log(typeof Carro)
console.log(typeof ferrari)