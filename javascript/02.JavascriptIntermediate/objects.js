var storeManager = {}; //create an object

storeManager.rangeTilesPerTurn = 4; //assign a property
storeManager.socialSkills = 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;
storeManager.specialAbility = "finding business opportunities";

console.log(storeManager);

var assistantManager = {
    rangeTilesPerTurn: 2,
    socialSkills: 25,
    streetSmarts: 45,
    health: 50,
    specialAbility: "Quick learner",
    greeting: "Let's improvise"
}

console.log(assistantManager.greeting);


//bracket notation
var house = {};
house["rooms"] = 4;
house["color"] = "white";
house["priceEUR"] =  195000;
console.log(house);

console.log("The price of the house is",house["priceEUR"]);


//object functions
console.log('----------------');
var car = {};
car.color = "red";
car.convertible = true;
car.turnKey = function(){
    console.log("engine running");
}

console.log(car);
car.turnKey();

car.lightsOn = function() {
    console.log("The lights are on.")
}

console.log(car);
car.lightsOn();