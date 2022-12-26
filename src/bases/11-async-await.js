const getImagem = async() => {
  const apikey= 't7pttJQt0J1k7hfocZbBB8vYRpqkNrig'
  const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`);
  const { data } = await resp.json();

  const { url } = data.images.original;

  const img = document.createElement ('img');
  img.src = url;
  document.body.append( img );


}

getImagem();
