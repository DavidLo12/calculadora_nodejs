const test = require('node:test');
const inquirer = require('inquirer');
const assert = require('assert');
const home = require('../home.js');

test('seleccionar una operacion debe devolver esa operacion', async () => {
    const resultado = await home();
    const expected = resultado;
    assert.strictEqual(resultado, expected);
  });

  

