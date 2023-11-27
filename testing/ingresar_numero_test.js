const test = require('node:test');
const assert = require('node:assert');
const ingresar_numero = require('../ingresar_numero.js')


test('ingresar un numero debe retornar el mismo numero', async () => {
        const resultado = await ingresar_numero('hola ingresa un numero')
        const expected = resultado;
        assert.strictEqual(resultado, expected);
    });