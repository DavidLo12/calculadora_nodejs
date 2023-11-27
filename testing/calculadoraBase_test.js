const test = require('node:test');
const assert = require('node:assert');
const Operaciones = require('../operaciones.js');
const operaciones = new Operaciones();
const operacion_siguiente = require('../calculadoraBase.js');


test('sumar 4 + 2 es igual a 6', () => {
    const current = operaciones.sumar(4, 2);
    const expected = 6;
    assert.strictEqual(current, expected);
});

test('restar 4 - 2 es igual a 2', () => {
    const current = operaciones.restar(4, 2);
    const expected = 2;
    assert.strictEqual(current, expected);
});

test('multiplicar 4 x 2 es igual a 8', () => {
    const current = operaciones.multiplicar(4, 2);
    const expected = 8;
    assert.strictEqual(current, expected);
});

test('dividir 4 / 2 es igual a 2', () => {
    const current = operaciones.dividir(4, 2);
    const expected = 2;
    assert.strictEqual(current, expected);
});

test('dividir 2 / 0 es igual a undefined', () => {
    const current = operaciones.dividir(2, 0);
    const expected = undefined;
    assert.strictEqual(current, expected);
});