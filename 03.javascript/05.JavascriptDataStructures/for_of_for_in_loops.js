const petNames = ["Bello", "Marc", "Gino", "Rex"];
for(let petName of petNames){
    console.log(petName);
}

const car = {
    speed: 330,
    color: "space gray",
    brand: "BMW",
    fourWheelDrive: true
};

console.log("Car object dictionary keys", Object.keys(car));
console.log("Car object dictionary values", Object.values(car));
console.log("Car object keys and values", Object.entries(car));


for(const key of Object.keys(car)){
    console.log(key,":", car[key]);
}

const bmwX6 = Object.create(car);
bmwX6.manufacturingDate = 2020; //the only property of the object

console.log(bmwX6);

console.log("Iterating over object and its prototype. For-in is unrealiable.")
for(prop in bmwX6){
    console.log('🤢	' + prop + ":" + bmwX6[prop]);
}

console.log("Iterating over the object's own properties. For-of is reliable.")
for(prop of Object.keys(bmwX6)){
    console.log('🙂 ' + prop + ":" + bmwX6[prop]);
}