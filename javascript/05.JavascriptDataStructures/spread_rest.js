let top3Rome = [
    "The Vatican",
    "The Colloseum",
    "Fontana di Trevi"
];


function showItinerary(place1, place2, place3){
    console.log("First visit:", place1);
    console.log("Then visit:", place2);
    console.log("Finish with a visit at:", place3);
}

showItinerary(...top3Rome); // ... spread operator

let top7Rome = [...top3Rome,
    "Spanish Stairs",
    "St Angelo Castle",
    "Roman Forum",
    "Column of Traian"
];

console.log("Top 7 Rome:", top7Rome)

const [first, second, ...last] = top7Rome; //rest operator

console.log("First location:",first,
     "Second location:",second,
     "The rest of the locations", last);


function raiseToPower(power, ...numbers){  //function parameter
    return numbers.map(number => number ** power);
}

var numbersRaised = raiseToPower(2, 1,2,3,4,5,6,7);
console.log(numbersRaised);

const engine = {
    brand: "BWM",
    valves: 4
};

const transmission = {
    brand: "BMW",
    doubleClutch: true
};


var car = {...engine,...transmission};  //object construction
console.log(car);
