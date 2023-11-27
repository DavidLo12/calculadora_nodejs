const inquirer = require('inquirer');

async function home() {
    console.clear(); 
    console.log('==================='.red);
    console.log('----CALCULADORA----'.red);
    console.log('==================='.red);
  
    try {
      const respuestas = await inquirer.prompt([
        {
          type: 'list',
          name: 'operacion',
          message: 'Seleccione una operación:' + '\n',
          choices: [
            { name: '+ Sumar', value: 'Sumar' },
            { name: '- Restar', value: 'Restar' },
            { name: 'x Multiplicar', value: 'Multiplicar' },
            { name: '/ Dividir', value: 'Dividir' },
            { name: 'Configuración', value: 'Configuración' },
            { name: 'Salir', value: 'Salir' },
          ],
        },
      ]);
  
      return respuestas;
      
    } catch (error) {
      console.error(error);
    }
}

module.exports = home;