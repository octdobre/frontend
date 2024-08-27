var cars = ["BMW", "Volkswagen", "Land Rover", "Tesla"];

function appendIndex(car, index){
    console.log(`📮 ${index}. ${car}`);
}

cars.forEach(appendIndex);

cars.forEach( function appendIndex(car, index){
    console.log(`📆 ${index}. ${car}`);
});

var grades = [60,30,40,80,90,100,70];


console.log(
    grades.filter( function(num){
    return num > 60;
}));


console.log(
    grades.map(function(num){
        return num / 10;
    })
);


const car = {
    brand: "BMW",
    type: "i4",
    color: "Space Gray",
    isLongWheelBase: true,
    batteryCapacityWH : 450
}

let values = [];

let carKeys = Object.keys(car)
carKeys.forEach(
    function(key){
        values.push(key, car[key]);
    }
);
console.log(values);


var cities = new Map();
cities.set(1, "Innsbruck");
cities.set(2, "Salzburg");
cities.set(3, "Vienna");

console.log(cities);
console.log(cities.get(1));

var planets = ["Venus", "Earth", "Moon", "Earth", "Mars", "Venus"];
var uniquePlanets = new Set(planets);
console.log(uniquePlanets);