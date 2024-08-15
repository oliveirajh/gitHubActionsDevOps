// Import the assert module
const assert = require('assert');

// Import the division function from the index.js file
const utils = require('./src/utils');

// Test cases for the division function
describe('verificaMaioridade', () => {
    it('deve retornar true se o usuário for maior de idade', () => {
        assert.strictEqual(utils.verificaMaioridade(19), true);
        assert.strictEqual(utils.verificaMaioridade(17), false);
        assert.strictEqual(utils.verificaMaioridade(18), true);
    });

    it('deve disparar um erro ao dividir se a idade for menor que zero', () => {
        assert.throws(() => verificaMaioridade(-1), Error);
    });
});