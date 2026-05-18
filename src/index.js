const { conversorDoisPontos, conversorTresPontos, faltasRestantes } = require('./conversor')

const jogadorA = {
    pontos: 30,
    nome: 'Thierry',
    faltas: 2
}

const jogadorB = {
    pontos: 20,
    nome: 'Guga',
    faltas: 3
}

const cestasA = conversorTresPontos(jogadorA.pontos)
const cestasB = conversorDoisPontos(jogadorB.pontos)

const faltasRestantesA = faltasRestantes(jogadorA.faltas)
const faltasRestantesB = faltasRestantes(jogadorB.faltas)

console.log(`O jogador ${jogadorA.nome} fez ${cestasA} cestas de 3 terminou com ${jogadorA.pontos}, e faltaram ${faltasRestantesA} faltas para sair de quadra`)
console.log(`O jogador ${jogadorB.nome} fez ${cestasB} cestas de 2 terminou com ${jogadorB.pontos}, e faltaram ${faltasRestantesB} faltas para sair de quadra`)