const inquirer = require('inquirer');

async function ingresar_numero(mensaje) {
  try {
    const { numero } = await inquirer.prompt([
      {
        type: 'number',
        name: 'numero',
        message: mensaje,
        validate: valor => {
          const numero_correcto = /^-?\d*([.,]?\d+)?$/.test(valor)
          return numero_correcto || 'Por favor, introducir número entero o decimal con punto.'.red;
        }
      }
    ]);
    
    return numero;

  } catch (error) {
    console.error(error);
  }
}
     
module.exports = ingresar_numero;


