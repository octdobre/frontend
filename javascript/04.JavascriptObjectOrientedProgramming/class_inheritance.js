class Plane {
    constructor(brand, passangerCapacity, storageCapacity){
        this.brand = brand;
        this.passangerCapacity = passangerCapacity;
        this.storageCapacity = storageCapacity;
        this.flapsDeployed = false;
    }

    toggleFlaps() {
        this.flapsDeployed = !this.flapsDeployed;
    }

    flapsStatus() {
        console.log("Are flaps deployed:", this.flapsDeployed);
    }

    getSelf() {
        console.log(this);
    }

    getProto() {
        let proto = Object.getPrototypeOf(this);
        console.log(proto);

        return proto;
    }
}



let boeing747 = new Plane("Boeying", 200, 400);
boeing747.toggleFlaps();
boeing747.flapsStatus();
boeing747.getSelf();
let proto = boeing747.getProto();
console.log("Plane proto from outside", proto);

class Captain {
    constructor(name){
        this.name = name;
    }

    printName(){
        console.log("The captain's name is", this.name);
    }
}

class PassangerPlane extends Plane {
    constructor(brand, passangerCapacity, storageCapacity, isPrivate, captain) {
        // calling the constructor of the base class
        super(brand, passangerCapacity, storageCapacity);           
        this.passengers = passangerCapacity;
        this.isPrivate = isPrivate;
        // other objects as properties
        this.captain = captain;
    }

    canLandOnPrivateAirStrips() {
        if(this.isPrivate) {
            console.log("This plane can land on private airstrips.");
        } else {
            console.log("This plane cannot land on private airstrips.");
        }
    }

    toggleFlaps() {
        // super keyword can be used to access members of the base class
        super.toggleFlaps();
        super.flapsStatus();

        if(this.flapsDeployed) {
            console.log("The flaps are deployed. Slowing down.");
        } else {
            console.log("The flaps are retracted. Speeding up.");
        }
    }

    printNameOfCaptain(){
        this.captain.printName();
    }
}

var boeying747_8 = new PassangerPlane("Boeying", 20, 40, true, new Captain("Davy Jones"));
boeying747_8.toggleFlaps();
boeying747_8.getSelf();
boeying747_8.printNameOfCaptain();
let proto2 = boeying747_8.getProto();
console.log("Plane proto from outside", proto2);
