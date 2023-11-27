# Calculadora App

Aplicación para realizar operaciones matemáticas de calculadora.


## Instalación Calculadora App mediante npm:

  npm i dlo_calculadora_nodejs


## Dependencies:

"dependencies": 
    "colors": "^1.4.0",
    "inquirer": "^6.3.1"


## Empezando

Ejecutar la calculadora

  npm run start:calculadora

1. Selecciona una operación a realizar.

2. Introduce los números con los que quieras operar. Puedes calcular con números enteros o decimales.
    - número decimal se identifica con el punto "."

3. Selecciona: 
    - si quieres seguir operando con el resultado obtenido con un nuevo número a introducir para la siguiente operación.
    - si prefieres realizar una nueva operación.
    - si deseas salir del programa.

4. Configuración: 
    - puedes seleccionar el número de decimales (2 o 3 decimales) que quieres que te muestre en el resultado de tu operación. Por defecto, aparecerá que se muestre 2 decimales.
    - si tu operación es con números enteros, el resultado, no mostrará decimales con 0.
    - puedes elegir el formato de los numeros para el resultado de tus operaciones. Por defecto, aparecerá el formato es-ES.
          - es-ES = las cifras de millar estarán separadas por punto (".") y los decimales por coma (",").
          - en-US = las cifras de millar estarán separadas por coma (",") y los decimales por punto (".").
