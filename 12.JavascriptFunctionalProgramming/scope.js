
var name = "John"; //global scope

function print(){
    var firstName = "Jane"; //local scope
    console.log("Local scope",firstName);
}

print();
console.log("Global scope",name);

try{
    console.log("Global scope",firstName); //error undefined
} catch(err){
    console.log("Tried to print a loca scope variable at global scope. ",err);
}


function print2(){
    var name = "Mike"; //local scope

    console.log("Local scope",name);
}

print2();

console.log("Global scope",name);