
const nombre = 'Juan';
const apellido = 'Bez';

const nombreCompleto = `${nombre} ${ apellido}`;

console.log( nombreCompleto );

function getSaludo(nombre) {
  return 'Hola' + nombre;
}

console.log (`Èste es un texto: ${ getSaludo (nombre)}`)
