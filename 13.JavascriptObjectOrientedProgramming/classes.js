
class Car {
    constructor(color, price){
        this.color = color;
        this.price = price;
    }

    turnOn(){
        console.log("Engine has started...");
    }
}


let porche = new Car("white", 200000);

// oop principle incalsulation
porche.turnOn();

let genericCar = Object.create(Car);

console.log(genericCar);
console.log(Car);


//oop principle inheritance, abstraction

class BMW extends Car {
    turnOn(){
        console.log("Engine is roaring...");
    }
}

let m4 = new BMW("space gray", 95000);

// oop principle polymorphism
m4.turnOn();

console.log(m4.color);


var prototypeCar = {
    color: "maze color",
    price: 500000 
};

console.log(prototypeCar);