const { conversorDoisPontos, conversorTresPontos } = require('./conversor')

const jogadorA = {
    pontos: 30,
    nome: 'Thierry'
}

const jogadorB = {
    pontos: 20,
    nome: 'Guga'
}

const cestasA = conversorTresPontos(jogadorA.pontos)
const cestasB = conversorDoisPontos(jogadorB.pontos)

console.log(`O jogador ${jogadorA.nome} fez ${cestasA} cestas de 3 terminou com ${jogadorA.pontos}`)
console.log(`O jogador ${jogadorB.nome} fez ${cestasB} cestas de 2 terminou com ${jogadorB.pontos}`)