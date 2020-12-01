const baseUrl = 'https://api.exchangeratesapi.io/';
const $container = document.getElementById('container');

currency1.addEventListener('change', writeExchangeRate);
currency2.addEventListener('change', writeExchangeRate);

function writeExchangeRate(rates) {
console.log(rates);

const selectedCurrency1 = currency1.options[currency1.selectedIndex].value;   
const getCurrencyValue1 = fetch(baseUrl + 'latest?base=' + selectedCurrency1 , {
  method: 'GET'
});

getCurrencyValue1.then(function(response) {
  if (!response.ok) {
    throw new Error('Fetch failed');
  }
  return response.json();
  }).then(function(jsonData) {
  console.log(jsonData);
  writeExchangeRate(jsonData);
  }).catch(function(error) {
  console.log(error);
  })

const selectedCurrency2 = currency2.options[currency2.selectedIndex].value;   
const getCurrencyValue2 = fetch(baseUrl + 'latest?base=' + selectedCurrency2 , {
  method: 'GET'
});

getCurrencyValue2.then(function(response) {
  if (!response.ok) {
    throw new Error('Fetch failed');
  }
  return response.json();
  }).then(function(jsonData) {
  console.log(jsonData);
  writeExchangeRate(jsonData);
  }).catch(function(error) {
  console.log(error);
  })
}