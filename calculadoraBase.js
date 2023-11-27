const Operaciones = require('./operaciones.js');
const operaciones = new Operaciones();


function calculadoraBase({operacion, numero1, numero2}){
  let resultado;

  if (operacion === 'Sumar') {
    resultado = operaciones.sumar(numero1, numero2);
  } else if (operacion === 'Restar') {
    resultado = operaciones.restar(numero1, numero2);
  } else if (operacion === 'Multiplicar') {
    resultado = operaciones.multiplicar(numero1, numero2);
  } else if (operacion === 'Dividir') {
    resultado = operaciones.dividir(numero1, numero2);
  } else {
    console.error("error");
  }

  return resultado;
}

module.exports = calculadoraBase;