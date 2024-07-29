// if else statements


console.log("if else statement");
var result = 50;

if( result > 40 ){
    console.log("Congratulations you passed.")
} else {
    console.log("Unfortunatelly you did not pass.")
}

// if else if else statements
console.log(" ");
console.log("if else if else statement");

var food = "hot";
if (food  == "hot") {
    console.log('Too hot');
} else if (food == 'cold'){
    console.log('Too cold');
} else {
    console.log('Just right');
}

// switch statement
console.log(" ");
console.log("switch statement");

var place = 'fourth';

switch(place){
    case 'first':
        console.log("Gold");
        break;
    case 'second':
        console.log("Silver");
        break;
    case 'third':
        console.log("Bronze");
        break;
    default:
        console.log("No medal");
}
