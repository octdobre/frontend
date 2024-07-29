var letters = "abc";

var found = letters.match(/d/);

console.log(found); //should be null

var name;

console.log(name);  //the type of the variable is undefined

name = "John Doe";

console.log(name);

var game = {
    score : 1000
}

console.log(game.Score); //undefined

var city = '';

console.log("The value of city is [",city,"]");