function sum(a,b){

    console.log("The sum of",a, "and", b, "is", a + b );
}

// array parser
function printItems(arr){
    for(var i =0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

sum(11,2);
sum(4,6);

printItems(["orange","red","blue"]);


//letter finder
function letterFinder(word, match){
    for(var i = 0; i < word.length; i++){
        if(word[i]=== match){
            console.log('Found the', match, 'at', i);
        }
        else {
            console.log('---No match found at', i);
        }
    }
}

letterFinder('test','t');