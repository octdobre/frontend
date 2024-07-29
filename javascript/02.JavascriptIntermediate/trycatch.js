

try{
    console.log(c + d);
}
catch(err){

    console.log("Printing error:");

    console.log("Start of log-----\n",err, "\n ---End of log.");
}



try{
    throw new ReferenceError();
}
catch(err){

    console.log("Printing error:");

    console.log("Start of log-----\n",err, "\n ---End of log.");
}


var addTwoNums = function(a,b){
    try{
        if(typeof(a) != 'number'){
            throw ReferenceError('the first argument is not a number');
        } else if(typeof(b) != 'number'){
            throw ReferenceError('the second argument is not a number');
        }

        console.log(a+b);

    }catch(err){
        console.log("Error:",err);
    }

    console.log("It still works");
}

addTwoNums(5,"5");

