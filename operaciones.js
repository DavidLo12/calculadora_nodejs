class Operaciones {
    sumar(numero1, numero2) {
      return numero1 + numero2;
    }
  
    restar(numero1, numero2) {
      return numero1 - numero2;
    }

    multiplicar(numero1, numero2) {
      return numero1 * numero2;
    }
  
    dividir(numero1, numero2) {
      if (numero2 !== 0) {
        return numero1 / numero2;
      } else {
        console.log('\n' + 'Error: División por cero'.red);
      }
    }
}
  
module.exports = Operaciones;