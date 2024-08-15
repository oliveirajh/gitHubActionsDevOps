// src/utils.js
function verificaMaioridade(idade) {
    if (idade < 0) {
        throw new Error('Idade não pode ser negativa');
    }
    return idade >= 18;
}

module.exports = {
    verificaMaioridade
};