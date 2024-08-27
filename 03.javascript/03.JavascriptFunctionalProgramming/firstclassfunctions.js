// functions passed as arguments to other functions

function addNumbers(a, b){
    console.log(a + b);
}

function randomNumber(){
    return Math.ceil((Math.random() * 100));
}


addNumbers(randomNumber(), randomNumber());