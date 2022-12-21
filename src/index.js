
// Desestructuracion
// asignacion desestructurante
const persona = {
  nombre: 'tony',
  edad: 45,
  clave: 'ironman',
  rango: 'soldado',
};

// const { edad, clave, nombre, } = persona;

// console.log( nombre );
// console.log( edad );
// console.log( clave );

const useContext = ({ clave, nombre, edad, rango = '(pirata)'}) => {

  // console.log( nombre, edad, rango)

  return {
    nombreClave: clave,
    anios: edad
    latlng: {
      lat: 14.1234
      lng: -12.3424
    }
  }

};

const { nombreClave, anios, latlng:{ lat, lng} } = useContext( persona );

console.log( nombreClave, anios);
console.log( lat, lng );
