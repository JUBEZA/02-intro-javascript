

const persona = {
  nombre: 'juan',
  apellido: 'pulento',
  edad: 30,
  direccion: {
    ciudad: 'Fortaleza',
    zip: 55321321,
    lat: 14.3232,
    lng: 34.9233321
  }
};

const persona2 = {...persona}
persona2.nombre = 'Jose'
// console.table( {persona} )
console.log( {persona} );
console.log( {persona2} )
