const produtos = [
    '{"nome": "Notebook", "preco": 2500, "fragil": true}',
    '{"nome": "Smartphone", "preco": 1500, "fragil": true}',
    '{"nome": "Vaso de Vidro", "preco": 45, "fragil": true}',
    '{"nome": "Cadeira de Plástico", "preco": 80, "fragil": false}',
    '{"nome": "Televisão 4K", "preco": 3200, "fragil": true}',
    '{"nome": "Caneca de Cerâmica", "preco": 20, "fragil": true}',
    '{"nome": "Mesa de Escritório", "preco": 450, "fragil": false}',
    '{"nome": "Fone de Ouvido Sem Fio", "preco": 180, "fragil": true}',
    '{"nome": "Espelho Decorativo", "preco": 120, "fragil": true}',
    '{"nome": "Garrafa de Água Inox", "preco": 35, "fragil": false}',
    '{"nome": "Tablet", "preco": 2000, "fragil": true}',
    '{"nome": "Câmera Digital", "preco": 2800, "fragil": true}',
    '{"nome": "Luminária de Mesa", "preco": 90, "fragil": true}',
    '{"nome": "Panela Elétrica", "preco": 220, "fragil": false}',
    '{"nome": "Bicicleta", "preco": 1500, "fragil": false}',
    '{"nome": "Impressora", "preco": 600, "fragil": true}',
    '{"nome": "Tapete", "preco": 70, "fragil": false}',
    '{"nome": "Ferro de Passar", "preco": 130, "fragil": false}',
    '{"nome": "Ventilador", "preco": 160, "fragil": false}',
    '{"nome": "Jogo de Panelas", "preco": 300, "fragil": false}',
    '{"nome": "Cadeira Gamer", "preco": 850, "fragil": false}',
    '{"nome": "Caixa de Som Bluetooth", "preco": 250, "fragil": true}',
    '{"nome": "Máquina de Café", "preco": 400, "fragil": true}',
    '{"nome": "Guarda-Chuva", "preco": 25, "fragil": false}',
    '{"nome": "Escada de Alumínio", "preco": 200, "fragil": false}',
    '{"nome": "Colchão", "preco": 1200, "fragil": false}',
    '{"nome": "Roteador Wi-Fi", "preco": 180, "fragil": true}',
    '{"nome": "Churrasqueira", "preco": 450, "fragil": false}',
    '{"nome": "Laptop Gamer", "preco": 5500, "fragil": true}',
    '{"nome": "Mochila", "preco": 150, "fragil": false}',
    '{"nome": "Forno Elétrico", "preco": 380, "fragil": false}',
    '{"nome": "Kit de Ferramentas", "preco": 210, "fragil": false}',
    '{"nome": "Batedeira", "preco": 190, "fragil": true}',
    '{"nome": "Estante de Livros", "preco": 300, "fragil": false}',
    '{"nome": "Barraca de Camping", "preco": 600, "fragil": false}',
    '{"nome": "Aspirador de Pó", "preco": 350, "fragil": true}',
    '{"nome": "Secador de Cabelo", "preco": 120, "fragil": true}',
    '{"nome": "Purificador de Água", "preco": 700, "fragil": true}',
    '{"nome": "Fogão a Gás", "preco": 900, "fragil": false}',
    '{"nome": "Micro-ondas", "preco": 1200, "fragil": true}'
]

const tranforma_obj = json => JSON.parse(json)
const verifica_preco = item => item.preco > 1600

const verifica_fragil = function (item) {
    return item.fragil
}

const produtos_caros_frageis = produtos.map(tranforma_obj).filter(verifica_preco).filter(verifica_fragil)

produtos_caros_frageis.forEach(item => console.log(`O produto  \x1b[1m${item.nome}\x1b[0m cujo o preço é: \x1b[1m${item.preco}\x1b[0m é \x1b[1mFrágil\x1b[0m, cuidado!`))
