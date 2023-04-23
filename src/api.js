// src/api.js
// require("dotenv").config()

// import {process} from "process";


// console.log(process.env.API_KEY);


// const apiKey = process.env.API_KEY;
const requestOptions = {
  method: 'GET',
  headers: new Headers({
    'Content-Type': 'application/json',
    'apikey': "2E6oGUMF6T7eFbXROJIB3El4d7Q6vDrb",
  })
};

async function convertCurrency(fromCurrency, toCurrency, amount) {

  const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`, requestOptions);
  if (response.status === 200) {
    return { currencyValue: JSON.parse(await response.text()).result, error: false };
  } else {
    const error = await response.text();
    return { currencyValue: Error(`Request failed with status ${response.status}: ${error}`), error: true };

  }





}

export { convertCurrency };
