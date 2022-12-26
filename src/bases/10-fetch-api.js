const apikey = 't7pttJQt0J1k7hfocZbBB8vYRpqkNrig';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`);

// ProcessingInstruction.then( resp => {
//   resp.json().then( data => {
//     console.log(data)
//   })
// })

peticion
  .then( resp => resp.json())
  .then( ({data}) => {
    const { url } =data.images.original.url;

    const img = document.createElement ('img');
    img.src = url;

    document.body.append( img );

  })
.catch( console.warn );
