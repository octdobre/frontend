// high order functions return other functions

function generateRandomFunction(seed){
    return function(){
        return Math.ceil((Math.random() * 100) + seed);
    }
}

function addNumbers(getNumber1, getNumber2){
    console.log(getNumber1() + getNumber2());
}

var randomVariation1 = generateRandomFunction(450);
var randomVariation2 = generateRandomFunction(363);

addNumbers(randomVariation1, randomVariation2);
