// src/ui.js
import './index.css';

import { convertCurrency } from './api.js';

const form = document.getElementById('currency-form');
const result = document.getElementById('resultDiv');


form.elements['to-currency'].addEventListener("invalid", () => {
  form.elements['to-currency'].setCustomValidity("Please select a valid currency. Only the following currencies are supported: [list of currencies].");
});

form.elements['to-currency'].addEventListener("input", () => {
  form.elements['to-currency'].setCustomValidity("");
});

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const fromCurrency = 'USD';
  const toCurrency = form.elements['to-currency'].value;
  const amount = form.elements['amount'].value;
  console.log(toCurrency);



  const convertedAmount = await convertCurrency(fromCurrency, toCurrency, amount);


  if (convertedAmount.error) {
    result.innerHTML = `<p id="error">${convertedAmount.currencyValue}</p>`;
    return;
  }


  result.innerHTML = `<p id="output">${amount} ${fromCurrency} = ${convertedAmount.currencyValue} ${toCurrency}</p>`;


});
