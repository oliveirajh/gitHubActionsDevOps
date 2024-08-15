import { verificaMaioridade } from './src/utils.js';

test('deve retornar true se o usuário for maior de idade', () => {
    expect(verificaMaioridade(19)).toBe(true);
    expect(verificaMaioridade(17)).toBe(false);
    expect(verificaMaioridade(18)).toBe(true);
});

test('deve disparar um erro se a idade for menor que zero', () => {
    expect(() => verificaMaioridade(-1)).toThrow(Error);
});