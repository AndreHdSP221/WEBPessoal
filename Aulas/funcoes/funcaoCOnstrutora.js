function Carro(velocidadeMaxima = 200, delta = 5){
    // Método privado
    let velocidadeAtual = 0;

    // Método publico
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
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

do{

    console.log(`Velocidade atual: ${ferrari.getVelocidade()}\n`)
    ferrari.acelerar()
    VelocidadeFerrari = ferrari.getVelocidade()

}while(VelocidadeFerrari < 350)

console.log(typeof Carro)
console.log(typeof ferrari)