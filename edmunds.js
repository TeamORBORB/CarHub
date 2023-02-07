const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://community-edmunds.p.rapidapi.com/api/vehiclereviews/v2/%7BmakeNiceName%7D/%7BmodelNiceName%7D/2013',
  params: {
    api_key: 'undefined',
    sortby: 'thumbsUp:ASC',
    pagenum: '1',
    pagesize: '10',
    fmt: 'json'
  },
  headers: {
    'X-RapidAPI-Key': 'b4fb6918dfmsh4040a7ea004e390p12c87ajsn6468fcf96ab9',
    'X-RapidAPI-Host': 'community-edmunds.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

/* This code is a JavaScript program that uses the Axios library to make an HTTP GET request to the 
Edmunds API. It retrieves vehicle reviews for a specific make and model (2013) and sorts the results by 
"thumbsUp" in ascending order. The API response is logged to the console, and in case of an error, the error is also logged to the console. */ 