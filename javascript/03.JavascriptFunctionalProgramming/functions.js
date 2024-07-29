var currencyEUR = 500;
var currencyCHF = 0;
var exchangeRateEURToCHFS = 0.9;

function convertCurrency(ammount, rate){
    return ammount * rate;
}

var currencyCHF = convertCurrency(currencyEUR, exchangeRateEURToCHFS);

console.log(currencyCHF);

console.log(console.log(currencyCHF)); // functions return undefined if a return value is not specified

function buildCar(color, value){
    return {
        color: color,
        value: value
    }
}

console.log(buildCar("red",  19000));