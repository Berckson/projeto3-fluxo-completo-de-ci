conversorTresPontos = (pontos) => {
    return pontos / 3
}

conversorDoisPontos = (pontos) => {
    return pontos / 2
}

const faltasRestantes = (faltasTomadas) => {
    return 5 - faltasTomadas
}

module.exports = {
    conversorDoisPontos,
    conversorTresPontos,
    faltasRestantes
}