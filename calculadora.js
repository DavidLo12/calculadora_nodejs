const inquirer = require('inquirer');
const colors = require('colors');
const Operaciones = require('./operaciones.js');
const home = require('./home.js');
const calculadoraBase = require('./calculadoraBase.js');
const ingresar_numero = require('./ingresar_numero.js');
const salir_programa = require('./salir_programa.js');

let resultado_anterior;
let numero1;
let numero2;

function separador_miles(numero) {
  const decimales = configuracion.numeroDecimales;
  if(configuracion.formatoNumeros === 'en-US') {
    return parseFloat(numero.toFixed(decimales)).toLocaleString('en-US');
  }

  if(configuracion.formatoNumeros === 'es-ES') {
    return parseFloat(numero.toFixed(decimales)).toLocaleString('es-ES');
  }
}

async function menu_home() {
    try {
      let seleccion;
  
      const respuestas = await home();
      seleccion = respuestas.operacion;

      if(seleccion === 'Salir') {
        return salir_programa();
      }

      if(seleccion === 'Configuración') {
        return menu_configuracion();
      }
  
      if (seleccion !== 'Salir') {
        
        const n1 = await ingresar_numero('Ingrese el primer número:'.magenta);
        numero1 = n1;
  
        if (seleccion !== 'Salir') {
          const numero2 = await ingresar_numero('Ingrese el segundo número:'.magenta);
  
          if (!isNaN(numero1) && !isNaN(numero2)) {
            resultado_anterior = calculadoraBase({ numero1, numero2, operacion: seleccion });
            console.log('\n' + `El resultado de ${seleccion} es: ${separador_miles(resultado_anterior)}`.yellow + '\n');
            await menu_dos(seleccion);
          } else {
            salir_programa();
          }
        }
      }
    } catch (error) {
      console.error(error);
    }
}

let configuracion = {
  numeroDecimales: 2,
  formatoNumeros: 'es-ES',
};

async function menu_configuracion() {
  try {
    const configuracion_respuestas = await inquirer.prompt([
      {
        type: 'list',
        name: 'opcion',
        message: 'Configuración:',
        choices: [
          { name: `Decimales (${configuracion.numeroDecimales})`, value: 'modificar_decimales' },
          { name: `Formato de números (${configuracion.formatoNumeros})`, value: 'formato_numeros' },
          { name: 'Volver al menú principal', value: 'Volver' },
        ],
      },
    ]);

    if (configuracion_respuestas.opcion === 'modificar_decimales') {
      const nuevoDecimal = await inquirer.prompt([
        {
          type: 'list',
          name: 'numeroDecimales',
          message: 'Seleccione el número de decimales:',
          choices: ['2', '3'],
        },
      ]).then(respuesta => respuesta.numeroDecimales);

      configuracion.numeroDecimales = nuevoDecimal;
      console.log('\n' + (`Configuración de decimales actualizado a ${configuracion.numeroDecimales}.`).yellow + '\n');
    }
    
    if (configuracion_respuestas.opcion === 'formato_numeros') {
      const nuevoFormato = await inquirer.prompt([
        {
          type: 'list',
          name: 'formato',
          message: 'Seleccione el formato de números:',
          choices: ['es-ES', 'en-US'],
        },
      ]).then(respuesta => respuesta.formato);

      configuracion.formatoNumeros = nuevoFormato;
      console.log('\n' + (`Configuración de formato de números actualizado a ${configuracion.formatoNumeros}.`).yellow + '\n');
    }
    
    if (configuracion_respuestas.opcion === 'Volver') {
      await menu_home();
    }

    await menu_configuracion();

  } catch (error) {
    console.error(error);
  }
}

async function menu_dos(seleccion) {
    try {
      const respuesta_otra_operacion = await inquirer.prompt([
        {
          type: 'list',
          name: 'otra_operacion',
          message: 'Seleccione una opción:',
          choices: [
            { name: 'Otra operación con el resultado anterior', value: 'resultado_anterior' },
            { name: 'Nueva operación', value: 'nueva_operacion' },
            { name: 'Salir', value: 'Salir' },
          ],
        },
      ]);
  
      if (respuesta_otra_operacion.otra_operacion === 'resultado_anterior') {
        await operacion_siguiente(seleccion);
      } else if (respuesta_otra_operacion.otra_operacion === 'nueva_operacion') {
        await menu_home();
      } else if (respuesta_otra_operacion.otra_operacion === 'Salir') {
        await salir_programa();
      }
  
    } catch (error) {
      console.error(error);
    }
}

async function operacion_siguiente(seleccion) {
    try {
      let operacion_resultado_anterior;
  
      const respuesta_nueva_operacion = await inquirer.prompt([
        {
          type: 'list',
          name: 'operacion_resultado_anterior',
          message: 'Seleccione una operación para realizar con el resultado anterior:',
          choices: [
            { name: '+ Sumar', value: 'Sumar' },
            { name: '- Restar', value: 'Restar' },
            { name: 'x Multiplicar', value: 'Multiplicar' },
            { name: '/ Dividir', value: 'Dividir' },
          ],
        },
      ]);
  
      operacion_resultado_anterior = respuesta_nueva_operacion.operacion_resultado_anterior;
      const nuevo_numero = await ingresar_numero(`Ingrese el número para ${operacion_resultado_anterior}:`.magenta);
      const resultado_final = calculadoraBase({numero2: nuevo_numero, numero1: resultado_anterior, operacion: operacion_resultado_anterior});   
      
      console.log('\n' + `El resultado de ${operacion_resultado_anterior} es: ${separador_miles(resultado_final)}`.yellow + '\n');
      resultado_anterior = resultado_final;
      await menu_dos(operacion_resultado_anterior);
  
    } catch (error) {
      console.error(error);
    }
}

menu_home();

