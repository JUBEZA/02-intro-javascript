const saludos = function ( nombre ) {
  return `hola, ${ nombre }`;
};

console.log ( saludos(`popo`));



const saludos2 = ( nombre ) => {
  return `hola, ${ nombre }`;
}

console.log ( saludos(`Goku`));



const saludos3 = ( nombre ) => `hola,${nombre}`;

console.log ( saludos(`Vegeta`));



const saludos4 = () => `hola mundo`;

console.log( saludos4 ())



const getUser = () => ({
  uid: 'abc123',
  username: 'El_Papi02'
});

console.log( getUser ())

// Tarea
// 1. Transformar a funcion de Flecha
// 2. Tiene que retornar un objeto implicito
// 3. probar

// function getUsuarioActivo( nombre ) {
//   return {
//     uid: 'ABC567',
//     username: nombre
//   }
// };

// const usuarioActivo = getUsuarioActivo('Fernando');
// console.log( usuarioActivo );

const  getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );
