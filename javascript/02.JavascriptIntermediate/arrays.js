
var train = ["wheat", "barley", "potato", "salt", "rocks"];

console.log(train[0]);

function listItemsInArray(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(i+1,arr[i]);
    }
}

listItemsInArray(train);


var fruitBasket = [];
fruitBasket.push("apple");
fruitBasket.push("pear");

console.log(fruitBasket);
