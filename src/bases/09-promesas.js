import { getHeroeById } from './bases/08-import-export';



// const promesa = new Promise( (resolve, reject) => {

//   setTimeout( () => {
//     const p1 = getHeroeById(2);
//     reject('No se pudo encontrar el héroe');
//   }, 2000 )

// });

// promesa.then( (heroe) => {
//   console.log('heroe', heroe)
// })

// .catch( error => console.warn( error ) );

const getHeroeByIdAsync = ( id  ) => {

  return promesa = new Promise( (resolve, reject) => {

    setTimeout( () => {
      const p1 = getHeroeById(id);
      if ( p1 ) {
        resolve( p1 );
      } else {
          reject( 'no se pudo encontrar el heroe' );
    }, 2000 )

  });

}

getHeroeByIdAsync(1)
  // .then( heroe => console.log('Heroe', heroe))
  // .catch( err => console.warn( err ))
  .then( console.log)
  .catch( console.warn)
