let requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: {"X-eBirdApiToken": "3ehbfu8dqaf"}
  };

  let regionCode = "US"
  
  fetch(`https://api.ebird.org/v2/product/spplist/${regionCode}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));