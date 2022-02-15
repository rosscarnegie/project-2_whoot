const latitude = 33.995670;
const longitude = -84.766370;

const requestOptions = {
    method: 'GET',
    headers: {"X-eBirdApiToken": "3ehbfu8dqaf"},
    redirect: 'follow'};

fetch(`https://api.ebird.org/v2/data/obs/geo/recent?lat=${latitude}&lng=${longitude}&sort=date&dist=50&back=30`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));