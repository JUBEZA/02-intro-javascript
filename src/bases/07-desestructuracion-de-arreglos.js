
const personajes = ['goku','vegeta','trunks']
const [ , ,p3] = personajes

console.log( p3 )


const restornaArreglo = () =>{
  return ['ABC',123];
}

const [ letras, numeros ] = restornaArreglo();
console.log(letras, numeros);


// Tarea
// 1. el primer valor del arr se llamarĂ¡ nombre
// 2. se llamarĂ¡ setNombre
const useState = ( valor ) => {
  return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

const [ nombre, setNombre ] = useState( 'Goku' );

console.log( nombre );
setNombre();
