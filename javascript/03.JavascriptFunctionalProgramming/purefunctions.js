//pure functions have no side effects, they have a clear input and output


function addNumbers(a,b){
    return a+b;
}

function concateneateStringsWithComma(arrayOfStrings){
    var counter = 0;
    var finalString = arrayOfStrings[counter++];

    while(counter < arrayOfStrings.length){
        finalString += "," + arrayOfStrings[counter++];
    }
    return finalString;
}

console.log(addNumbers(5,6));
console.log(concateneateStringsWithComma(["cherry","blossom","rose"]));